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
  differenceInDays 
} from 'date-fns';
import { 
  Booking, 
  BookingData, 
  PricingCalculation, 
  AvailabilityResponse 
} from '@/types/booking';

const BOOKINGS_FILE = path.join(process.cwd(), 'data', 'bookings.json');

// Pricing constants
const WEEKDAY_PRICE = 70;
const WEEKEND_PRICE = 125;
const FULL_WEEKEND_PRICE = 250; // Fri-Sun
const FULL_WEEK_PRICE = 300; // 7+ days

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

export function calculatePricing(startDate: Date, endDate: Date): PricingCalculation {
  const days = eachDayOfInterval({ start: startDate, end: endDate });
  const dayCount = days.length;
  
  // Check if it's a full weekend (Fri-Sun)
  const isFullWeekend = dayCount === 3 && 
    isFriday(startDate) && 
    isSunday(endDate);
  
  // Check if it's a full week (7+ days)
  const isFullWeek = dayCount >= 7;
  
  let totalPrice = 0;
  let priceBreakdown = '';
  
  const dailyBreakdown = days.map(day => {
    const dateStr = format(day, 'yyyy-MM-dd');
    const dayType = isWeekend(day) ? 'weekend' : 'weekday';
    const price = isWeekend(day) ? WEEKEND_PRICE : WEEKDAY_PRICE;
    
    return {
      date: dateStr,
      price,
      dayType: dayType as 'weekday' | 'weekend',
    };
  });
  
  if (isFullWeek) {
    const weekCount = Math.floor(dayCount / 7);
    const remainingDays = dayCount % 7;
    
    totalPrice = weekCount * FULL_WEEK_PRICE;
    priceBreakdown = `${weekCount} week${weekCount > 1 ? 's' : ''} ($${FULL_WEEK_PRICE}/week)`;
    
    if (remainingDays > 0) {
      const remainingPrice = dailyBreakdown.slice(-remainingDays).reduce((sum, day) => sum + day.price, 0);
      totalPrice += remainingPrice;
      priceBreakdown += ` + ${remainingDays} extra day${remainingDays > 1 ? 's' : ''}`;
    }
  } else if (isFullWeekend) {
    totalPrice = FULL_WEEKEND_PRICE;
    priceBreakdown = 'Full weekend (Fri-Sun)';
  } else {
    totalPrice = dailyBreakdown.reduce((sum, day) => sum + day.price, 0);
    const weekendDays = dailyBreakdown.filter(d => d.dayType === 'weekend').length;
    const weekdayDays = dailyBreakdown.filter(d => d.dayType === 'weekday').length;
    
    const parts = [];
    if (weekdayDays > 0) parts.push(`${weekdayDays} weekday${weekdayDays > 1 ? 's' : ''}`);
    if (weekendDays > 0) parts.push(`${weekendDays} weekend day${weekendDays > 1 ? 's' : ''}`);
    
    priceBreakdown = parts.join(' + ');
  }
  
  return {
    totalPrice,
    priceBreakdown,
    isFullWeekend,
    isFullWeek,
    dailyBreakdown,
  };
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

export function getDayPrice(date: Date): number {
  return isWeekend(date) ? WEEKEND_PRICE : WEEKDAY_PRICE;
}

export function getDayType(date: Date): 'weekday' | 'weekend' {
  return isWeekend(date) ? 'weekend' : 'weekday';
}