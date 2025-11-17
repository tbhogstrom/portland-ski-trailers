import { NextRequest, NextResponse } from 'next/server';
import { list } from '@vercel/blob';
import { eachDayOfInterval, format, parseISO } from 'date-fns';
import { BookingData, AvailabilityResponse } from '@/types/booking';

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

async function checkAvailability(
  startDate: Date, 
  endDate: Date
): Promise<AvailabilityResponse> {
  const bookingData = await getBookingsFromBlob();
  const requestedDays = eachDayOfInterval({ start: startDate, end: endDate });
  
  const availability: { [date: string]: number } = {};
  
  for (const day of requestedDays) {
    const dateStr = format(day, 'yyyy-MM-dd');
    
    // Count confirmed bookings for this date
    const bookedUnits = bookingData.bookings.filter(booking => {
      if (booking.status === 'cancelled') return false;
      
      const bookingStart = parseISO(booking.startDate);
      const bookingEnd = parseISO(booking.endDate);
      
      return day >= bookingStart && day <= bookingEnd;
    }).length;
    
    availability[dateStr] = Math.max(0, 2 - bookedUnits);
  }
  
  // Return the minimum availability across all requested days
  const minAvailable = Math.min(...Object.values(availability));
  
  return {
    available: minAvailable,
    dates: availability,
  };
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const startDateParam = searchParams.get('startDate');
    const endDateParam = searchParams.get('endDate');

    // Default to the entire ski season if no dates provided
    const seasonStart = new Date(2025, 11, 1); // December 1, 2025
    const seasonEnd = new Date(2026, 2, 31);   // March 31, 2026

    const startDate = startDateParam ? new Date(startDateParam) : seasonStart;
    const endDate = endDateParam ? new Date(endDateParam) : seasonEnd;

    // Get availability for the requested date range
    const availability = await checkAvailability(startDate, endDate);

    return NextResponse.json(availability);
  } catch (error) {
    console.error('Error checking availability:', error);
    return NextResponse.json(
      { error: 'Failed to check availability' },
      { status: 500 }
    );
  }
}