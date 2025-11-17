import { NextRequest, NextResponse } from 'next/server';
import { put, list } from '@vercel/blob';
import { Booking, BookingData } from '@/types/booking';

// Helper functions for blob storage
async function getBookingsFromBlob(): Promise<BookingData> {
  try {
    const { blobs } = await list({ prefix: 'bookings.json' });
    if (blobs.length === 0) {
      return { bookings: [] };
    }
    
    const response = await fetch(blobs[0].url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching bookings from blob:', error);
    return { bookings: [] };
  }
}

async function saveBookingsToBlob(bookingData: BookingData): Promise<void> {
  await put('bookings.json', JSON.stringify(bookingData, null, 2), {
    access: 'public',
  });
}

export async function GET(request: NextRequest) {
  try {
    const bookingData = await getBookingsFromBlob();
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

    // Get current bookings to check availability
    const bookingData = await getBookingsFromBlob();
    
    // Check for conflicts with existing bookings
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

    // Check if we have availability (max 2 units)
    if (existingBookingsForDates.length >= 2) {
      return NextResponse.json(
        { error: 'Selected dates are not available' },
        { status: 409 }
      );
    }

    // Determine which unit to assign
    const bookedUnits = existingBookingsForDates.map(b => b.unitNumber);
    let assignedUnit: 1 | 2 = 1;
    
    if (bookedUnits.includes(1)) {
      assignedUnit = 2;
    }

    // Generate a booking ID
    const bookingId = Date.now().toString(36) + Math.random().toString(36).substr(2);
    
    // Create the booking object
    const newBooking: Booking = {
      id: bookingId,
      unitNumber: assignedUnit,
      startDate,
      endDate,
      customerName,
      customerEmail,
      customerPhone,
      totalPrice,
      priceBreakdown,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    // Add the new booking to the data
    bookingData.bookings.push(newBooking);
    
    // Save to blob storage
    await saveBookingsToBlob(bookingData);

    // Log the booking for additional tracking
    console.log('NEW BOOKING SAVED:', JSON.stringify(newBooking, null, 2));
    
    return NextResponse.json({
      success: true,
      booking: newBooking,
      message: 'Booking created successfully! You will receive confirmation details shortly.',
    }, { status: 201 });

  } catch (error) {
    console.error('Error processing booking:', error);
    return NextResponse.json(
      { error: 'Failed to process booking' },
      { status: 500 }
    );
  }
}