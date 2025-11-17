'use client';

import { useState, useEffect, useMemo } from 'react';
import { DayPicker, DateRange } from 'react-day-picker';
import { format, isToday, isPast } from 'date-fns';
import { getDayPrice, getDayType } from '@/lib/bookings';
import { AvailabilityResponse } from '@/types/booking';

interface CalendarProps {
  onDateSelect: (dateRange: DateRange | undefined) => void;
  selectedRange?: DateRange;
}

export default function Calendar({ onDateSelect, selectedRange }: CalendarProps) {
  const [availability, setAvailability] = useState<{ [date: string]: number }>({});
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Season dates: December 2025 - March 2026
  const seasonStart = new Date(2025, 11, 1); // December 1, 2025
  const seasonEnd = new Date(2026, 2, 31);   // March 31, 2026

  useEffect(() => {
    fetchAvailability();
    
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
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

  // Memoized day status calculation for better performance
  const getDayStatus = useMemo(() => {
    return (date: Date) => {
      const dateStr = format(date, 'yyyy-MM-dd');
      const availableUnits = availability[dateStr] ?? 0;
      const price = getDayPrice(date);
      const dayType = getDayType(date);
      const isWeekend = dayType === 'weekend';
      const isPastDate = isPast(date) && !isToday(date);
      
      return {
        availableUnits,
        price,
        isWeekend,
        isPastDate,
        isAvailable: availableUnits > 0 && !isPastDate,
        statusLabel: availableUnits === 0 ? 'Sold Out' : 
                    availableUnits === 1 ? '1 Left' : 'Available'
      };
    };
  }, [availability]);

  const modifiers = {
    booked: (date: Date) => getDayStatus(date).availableUnits === 0,
    limited: (date: Date) => getDayStatus(date).availableUnits === 1,
    available: (date: Date) => getDayStatus(date).availableUnits === 2,
    past: (date: Date) => getDayStatus(date).isPastDate,
    weekend: (date: Date) => getDayStatus(date).isWeekend,
    today: isToday,
  };

  const CustomDay = ({ date }: { date: Date }) => {
    const status = getDayStatus(date);
    
    if (status.isPastDate) {
      return (
        <div className="flex flex-col items-center justify-center w-full h-full min-h-[44px] p-1 text-gray-300 cursor-not-allowed">
          <div className="text-sm">{date.getDate()}</div>
        </div>
      );
    }

    const getAvailabilityColor = () => {
      if (status.availableUnits === 0) return 'text-red-600 bg-red-50';
      if (status.availableUnits === 1) return 'text-orange-600 bg-orange-50';
      return 'text-green-600 bg-green-50';
    };

    const getBorderColor = () => {
      if (isToday(date)) return 'ring-2 ring-blue-500';
      if (status.isWeekend) return 'ring-1 ring-blue-200';
      return '';
    };

    return (
      <div className={`
        flex flex-col items-center justify-center w-full h-full min-h-[44px] p-1 
        rounded-lg transition-all duration-200 hover:shadow-md
        ${getAvailabilityColor()} ${getBorderColor()}
        ${status.isAvailable ? 'hover:scale-105 cursor-pointer' : 'cursor-not-allowed opacity-60'}
      `}>
        <div className={`font-medium ${isToday(date) ? 'text-blue-700 font-bold' : ''}`}>
          {date.getDate()}
        </div>
        
        <div className="text-xs font-medium mt-1">
          ${status.price}
        </div>
        
        <div className="text-xs mt-1 font-medium">
          {status.statusLabel}
        </div>
        
        {status.isWeekend && (
          <div className="text-xs text-blue-600 font-medium">
            Weekend
          </div>
        )}
      </div>
    );
  };

  const classNames = {
    root: "rdp-root",
    months: "rdp-months flex flex-col md:flex-row gap-4",
    month: "rdp-month flex-1",
    month_caption: "rdp-month_caption flex items-center justify-between mb-4 px-2",
    caption_label: "rdp-caption_label text-lg font-semibold text-gray-800",
    nav: "rdp-nav flex gap-2",
    button_previous: "rdp-button_previous p-2 rounded-lg hover:bg-gray-100 transition-colors",
    button_next: "rdp-button_next p-2 rounded-lg hover:bg-gray-100 transition-colors",
    month_grid: "rdp-month_grid w-full",
    weekdays: "rdp-weekdays",
    weekday: "rdp-weekday text-center text-sm font-medium text-gray-600 py-2",
    weeks: "rdp-weeks",
    week: "rdp-week grid grid-cols-7 gap-1",
    day: "rdp-day p-1",
    day_button: `rdp-day_button w-full min-h-[44px] text-center rounded-lg border-2 border-transparent 
                 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`,
    selected: "rdp-selected ring-2 ring-blue-500 bg-blue-500 text-white",
    range_start: "rdp-range_start bg-blue-500 text-white rounded-l-lg",
    range_middle: "rdp-range_middle bg-blue-100",
    range_end: "rdp-range_end bg-blue-500 text-white rounded-r-lg",
    disabled: "rdp-disabled cursor-not-allowed opacity-30",
    hidden: "rdp-hidden invisible",
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 bg-white rounded-lg border">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-4"></div>
        <div className="text-gray-600">Loading calendar...</div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">
          Select Your Rental Dates
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Choose your start and end dates. Pricing updates automatically based on your selection.
        </p>
      </div>
      
      {/* Legend - Mobile optimized */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Availability Legend</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs md:text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span className="text-gray-700">Available (2 units)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-orange-500 rounded"></div>
            <span className="text-gray-700">Limited (1 unit)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500 rounded"></div>
            <span className="text-gray-700">Sold Out</span>
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="bg-white rounded-lg border shadow-sm p-4 md:p-6">
        <style jsx>{`
          .rdp-root {
            --rdp-accent-color: #2563eb;
            --rdp-background-color: #ffffff;
            --rdp-outline: 2px solid var(--rdp-accent-color);
            font-family: inherit;
          }
          
          .rdp-day_button:hover:not(.rdp-disabled) {
            background-color: #f3f4f6;
          }
        `}</style>
        
        <DayPicker
          mode="range"
          selected={selectedRange}
          onSelect={onDateSelect}
          fromDate={seasonStart}
          toDate={seasonEnd}
          numberOfMonths={isMobile ? 1 : 2}
          classNames={classNames}
          showOutsideDays={true}
          fixedWeeks={true}
          disabled={(date) => getDayStatus(date).isPastDate || !getDayStatus(date).isAvailable}
          components={{
            Day: (props) => <CustomDay date={props.day.date} />,
          }}
          formatters={{
            formatCaption: (date) => format(date, 'MMMM yyyy'),
          }}
        />
      </div>

      {/* Pricing Summary */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs md:text-sm">
        <div className="bg-blue-50 p-3 rounded-lg text-center">
          <div className="font-semibold text-blue-800">Weekday</div>
          <div className="text-blue-600">$70/day</div>
        </div>
        <div className="bg-purple-50 p-3 rounded-lg text-center">
          <div className="font-semibold text-purple-800">Weekend</div>
          <div className="text-purple-600">$125/day</div>
        </div>
        <div className="bg-green-50 p-3 rounded-lg text-center">
          <div className="font-semibold text-green-800">Full Weekend</div>
          <div className="text-green-600">$250 (Save $125)</div>
        </div>
        <div className="bg-orange-50 p-3 rounded-lg text-center">
          <div className="font-semibold text-orange-800">Full Week</div>
          <div className="text-orange-600">$300 (Save $390)</div>
        </div>
      </div>

      {/* Accessibility notice */}
      <div className="mt-4 text-xs text-gray-500 text-center">
        Use arrow keys to navigate dates, Enter to select, and Escape to close
      </div>
    </div>
  );
}