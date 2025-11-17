import { 
  isWeekend, 
  eachDayOfInterval, 
  isFriday,
  isSunday,
  format,
} from 'date-fns';
import { 
  PricingCalculation, 
} from '@/types/booking';

// Pricing constants
const WEEKDAY_PRICE = 70;
const WEEKEND_PRICE = 125;
const FULL_WEEKEND_PRICE = 250; // Fri-Sun
const FULL_WEEK_PRICE = 300; // 7+ days

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


export function getDayPrice(date: Date): number {
  return isWeekend(date) ? WEEKEND_PRICE : WEEKDAY_PRICE;
}

export function getDayType(date: Date): 'weekday' | 'weekend' {
  return isWeekend(date) ? 'weekend' : 'weekday';
}