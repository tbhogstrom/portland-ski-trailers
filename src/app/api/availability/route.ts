import { NextRequest, NextResponse } from 'next/server';
import { checkAvailability } from '@/lib/bookings';
import { eachDayOfInterval, format } from 'date-fns';

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