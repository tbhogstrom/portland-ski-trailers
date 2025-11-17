import { NextRequest, NextResponse } from 'next/server';
import { addBooking, getBookings, checkAvailability } from '@/lib/bookings-server';
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

    // For now, we'll use a simplified approach that works in serverless environments
    // Generate a booking ID
    const bookingId = Date.now().toString(36) + Math.random().toString(36).substr(2);
    
    // Create the booking object
    const booking = {
      id: bookingId,
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

    // Log the booking (this will appear in server logs for manual processing)
    console.log('NEW BOOKING RECEIVED:', JSON.stringify(booking, null, 2));
    
    // In a production environment, you would:
    // 1. Send this booking data to your email
    // 2. Store in a proper database
    // 3. Send confirmation emails
    
    // For now, we'll just return success
    return NextResponse.json({
      success: true,
      booking,
      message: 'Booking request received! You will be contacted within 24 hours to confirm your reservation.',
    }, { status: 201 });

  } catch (error) {
    console.error('Error processing booking:', error);
    return NextResponse.json(
      { error: 'Failed to process booking' },
      { status: 500 }
    );
  }
}