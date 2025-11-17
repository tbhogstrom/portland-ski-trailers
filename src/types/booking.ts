export interface Booking {
  id: string;
  unitNumber: 1 | 2;
  startDate: string; // ISO date string (YYYY-MM-DD)
  endDate: string;   // ISO date string (YYYY-MM-DD)
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  totalPrice: number;
  priceBreakdown: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string; // ISO datetime string
}

export interface BookingData {
  bookings: Booking[];
}

export interface AvailabilityResponse {
  available: number; // 0, 1, or 2 units available
  dates: {
    [date: string]: number; // date -> available units count
  };
}

export interface BookingFormData {
  startDate: Date;
  endDate: Date;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  unitNumber?: 1 | 2;
}

export interface PricingCalculation {
  totalPrice: number;
  priceBreakdown: string;
  isFullWeekend: boolean;
  isFullWeek: boolean;
  dailyBreakdown: {
    date: string;
    price: number;
    dayType: 'weekday' | 'weekend';
  }[];
}

export interface CalendarDay {
  date: Date;
  available: number;
  price: number;
  dayType: 'weekday' | 'weekend';
}