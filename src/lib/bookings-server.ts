import { promises as fs } from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { 
  isWeekend, 
  eachDayOfInterval, 
  format, 
  parseISO, 
  isFriday,
  isSunday,
} from 'date-fns';
import { 
  Booking, 
  BookingData, 
  PricingCalculation, 
  AvailabilityResponse 
} from '@/types/booking';

const BOOKINGS_FILE = path.join(process.cwd(), 'data', 'bookings.json');

export async function getBookings(): Promise<BookingData> {
  try {
    const data = await fs.readFile(BOOKINGS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    // If file doesn't exist, return empty bookings
    return { bookings: [] };
  }
}

export async function saveBookings(bookingData: BookingData): Promise<void> {
  await fs.writeFile(BOOKINGS_FILE, JSON.stringify(bookingData, null, 2));
}

export async function addBooking(booking: Omit<Booking, 'id' | 'createdAt'>): Promise<Booking> {
  const bookingData = await getBookings();
  
  const newBooking: Booking = {
    ...booking,
    id: uuidv4(),
    createdAt: new Date().toISOString(),
  };
  
  bookingData.bookings.push(newBooking);
  await saveBookings(bookingData);
  
  return newBooking;
}

export async function checkAvailability(
  startDate: Date, 
  endDate: Date
): Promise<AvailabilityResponse> {
  const bookingData = await getBookings();
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