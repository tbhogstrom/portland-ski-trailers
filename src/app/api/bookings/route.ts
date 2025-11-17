import { NextRequest, NextResponse } from 'next/server';
import { addBooking, getBookings, checkAvailability } from '@/lib/bookings';
import { Booking } from '@/types/booking';

export async function GET(request: NextRequest) {
  try {
    const bookingData = await getBookings();
    return NextResponse.json(bookingData);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      startDate,
      endDate,
      customerName,
      customerEmail,
      customerPhone,
      totalPrice,
      priceBreakdown,
    } = body;

    // Validate required fields
    if (!startDate || !endDate || !customerName || !customerEmail || !customerPhone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Convert date strings to Date objects for availability check
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);

    // Check if dates are available
    const availability = await checkAvailability(startDateObj, endDateObj);
    if (availability.available < 1) {
      return NextResponse.json(
        { error: 'Selected dates are not available' },
        { status: 409 }
      );
    }

    // Determine which unit to assign
    // For simplicity, we'll assign unit 1 if available, otherwise unit 2
    const bookingData = await getBookings();
    const existingBookingsForDates = bookingData.bookings.filter(booking => {
      if (booking.status === 'cancelled') return false;
      
      const bookingStart = new Date(booking.startDate);
      const bookingEnd = new Date(booking.endDate);
      
      return (
        (startDateObj >= bookingStart && startDateObj <= bookingEnd) ||
        (endDateObj >= bookingStart && endDateObj <= bookingEnd) ||
        (startDateObj <= bookingStart && endDateObj >= bookingEnd)
      );
    });

    // Determine which units are already booked
    const bookedUnits = existingBookingsForDates.map(b => b.unitNumber);
    let assignedUnit: 1 | 2 = 1;
    
    if (bookedUnits.includes(1)) {
      if (bookedUnits.includes(2)) {
        return NextResponse.json(
          { error: 'No units available for selected dates' },
          { status: 409 }
        );
      }
      assignedUnit = 2;
    }

    // Create the booking
    const newBooking: Omit<Booking, 'id' | 'createdAt'> = {
      unitNumber: assignedUnit,
      startDate,
      endDate,
      customerName,
      customerEmail,
      customerPhone,
      totalPrice,
      priceBreakdown,
      status: 'pending',
    };

    const savedBooking = await addBooking(newBooking);

    // TODO: Send confirmation email (will be implemented in next task)
    
    return NextResponse.json({
      success: true,
      booking: savedBooking,
      message: 'Booking created successfully',
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating booking:', error);
    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    );
  }
}