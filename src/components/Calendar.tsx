'use client';

import { useState, useEffect } from 'react';
import { DayPicker, DateRange } from 'react-day-picker';
import { format, startOfMonth, endOfMonth, isWithinInterval } from 'date-fns';
import { getDayPrice, getDayType } from '@/lib/bookings';
import { AvailabilityResponse } from '@/types/booking';
import 'react-day-picker/style.css';

interface CalendarProps {
  onDateSelect: (dateRange: DateRange | undefined) => void;
  selectedRange?: DateRange;
}

export default function Calendar({ onDateSelect, selectedRange }: CalendarProps) {
  const [availability, setAvailability] = useState<{ [date: string]: number }>({});
  const [loading, setLoading] = useState(true);

  // Season dates: December 2025 - March 2026
  const seasonStart = new Date(2025, 11, 1); // December 1, 2025
  const seasonEnd = new Date(2026, 2, 31);   // March 31, 2026

  useEffect(() => {
    fetchAvailability();
  }, []);

  const fetchAvailability = async () => {
    try {
      const response = await fetch('/api/availability');
      if (response.ok) {
        const data: AvailabilityResponse = await response.json();
        setAvailability(data.dates);
      }
    } catch (error) {
      console.error('Error fetching availability:', error);
    } finally {
      setLoading(false);
    }
  };

  const modifiers = {
    booked: (date: Date) => {
      const dateStr = format(date, 'yyyy-MM-dd');
      return availability[dateStr] === 0;
    },
    limited: (date: Date) => {
      const dateStr = format(date, 'yyyy-MM-dd');
      return availability[dateStr] === 1;
    },
    available: (date: Date) => {
      const dateStr = format(date, 'yyyy-MM-dd');
      return availability[dateStr] === 2;
    },
    weekend: (date: Date) => getDayType(date) === 'weekend',
  };

  const modifiersStyles = {
    booked: {
      backgroundColor: '#ef4444',
      color: 'white',
    },
    limited: {
      backgroundColor: '#f59e0b',
      color: 'white',
    },
    available: {
      backgroundColor: '#10b981',
      color: 'white',
    },
    weekend: {
      fontWeight: 'bold',
    },
  };

  const formatCaption = (month: Date) => {
    return format(month, 'MMMM yyyy');
  };

  const formatDay = (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    const availableUnits = availability[dateStr] ?? 0;
    const price = getDayPrice(date);

    return (
      <div className="flex flex-col items-center justify-center w-full h-full min-h-[60px] p-1">
        <div className="font-medium">{date.getDate()}</div>
        <div className="text-xs text-gray-600">${price}</div>
        <div className="text-xs mt-1">
          {availableUnits === 0 && <span className="text-red-600 font-medium">Sold Out</span>}
          {availableUnits === 1 && <span className="text-orange-600 font-medium">1 Left</span>}
          {availableUnits === 2 && <span className="text-green-600 font-medium">Available</span>}
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg">Loading calendar...</div>
      </div>
    );
  }

  return (
    <div className="calendar-container">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Select Your Rental Dates</h2>
        <p className="text-gray-600 mb-4">
          Choose your start and end dates. Pricing updates automatically based on your selection.
        </p>
        
        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span>Available (2 units)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-orange-500 rounded"></div>
            <span>Limited (1 unit)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500 rounded"></div>
            <span>Sold Out</span>
          </div>
        </div>
      </div>

      <DayPicker
        mode="range"
        selected={selectedRange}
        onSelect={onDateSelect}
        fromDate={seasonStart}
        toDate={seasonEnd}
        numberOfMonths={2}
        modifiers={modifiers}
        modifiersStyles={modifiersStyles}
        disabled={(date) => {
          const dateStr = format(date, 'yyyy-MM-dd');
          return availability[dateStr] === 0;
        }}
        formatters={{
          formatCaption,
          formatDay,
        }}
        className="border rounded-lg p-4 bg-white"
        styles={{
          root: { fontSize: '14px' },
          month: { margin: '0 1rem' },
          day: { 
            padding: '0.25rem', 
            borderRadius: '0.25rem',
            minHeight: '60px',
          },
        }}
      />

      <div className="mt-6 text-sm text-gray-600">
        <p><strong>Weekday:</strong> ${WEEKDAY_PRICE}/day</p>
        <p><strong>Weekend:</strong> ${WEEKEND_PRICE}/day</p>
        <p><strong>Full Weekend (Fri-Sun):</strong> ${FULL_WEEKEND_PRICE}</p>
        <p><strong>Full Week (7+ days):</strong> ${FULL_WEEK_PRICE}/week</p>
      </div>
    </div>
  );
}

// Import pricing constants for display
const WEEKDAY_PRICE = 70;
const WEEKEND_PRICE = 125;
const FULL_WEEKEND_PRICE = 250;
const FULL_WEEK_PRICE = 300;