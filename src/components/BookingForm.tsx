'use client';

import { useState, useEffect } from 'react';
import { DateRange } from 'react-day-picker';
import { differenceInDays } from 'date-fns';
import Calendar from './Calendar';
import { calculatePricing } from '@/lib/bookings';
import { PricingCalculation, BookingFormData } from '@/types/booking';

export default function BookingForm() {
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>();
  const [pricing, setPricing] = useState<PricingCalculation | null>(null);
  const [formData, setFormData] = useState<Partial<BookingFormData>>({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (selectedRange?.from && selectedRange?.to) {
      const calculation = calculatePricing(selectedRange.from, selectedRange.to);
      setPricing(calculation);
    } else {
      setPricing(null);
    }
  }, [selectedRange]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedRange?.from || !selectedRange?.to || !pricing) {
      alert('Please select dates first');
      return;
    }

    if (!formData.customerName || !formData.customerEmail || !formData.customerPhone) {
      alert('Please fill in all contact information');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const bookingData = {
        startDate: selectedRange.from.toISOString().split('T')[0],
        endDate: selectedRange.to.toISOString().split('T')[0],
        customerName: formData.customerName,
        customerEmail: formData.customerEmail,
        customerPhone: formData.customerPhone,
        totalPrice: pricing.totalPrice,
        priceBreakdown: pricing.priceBreakdown,
      };

      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setSelectedRange(undefined);
        setPricing(null);
        setFormData({
          customerName: '',
          customerEmail: '',
          customerPhone: '',
        });
      } else {
        throw new Error('Booking submission failed');
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const dayCount = selectedRange?.from && selectedRange?.to 
    ? differenceInDays(selectedRange.to, selectedRange.from) + 1 
    : 0;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Calendar Section */}
        <div>
          <Calendar 
            onDateSelect={setSelectedRange}
            selectedRange={selectedRange}
          />
        </div>

        {/* Booking Details Section */}
        <div className="space-y-6">
          {/* Price Summary */}
          {selectedRange?.from && selectedRange?.to && pricing && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-green-800">Booking Summary</h3>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Rental Period:</span>
                  <span className="font-medium">
                    {selectedRange.from.toLocaleDateString()} - {selectedRange.to.toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-medium">{dayCount} day{dayCount > 1 ? 's' : ''}</span>
                </div>
                <div className="flex justify-between">
                  <span>Pricing:</span>
                  <span className="font-medium">{pricing.priceBreakdown}</span>
                </div>
              </div>

              {pricing.dailyBreakdown.length > 0 && (
                <div className="mt-4 pt-4 border-t border-green-200">
                  <h4 className="font-medium mb-2">Daily Breakdown:</h4>
                  <div className="space-y-1 text-xs">
                    {pricing.dailyBreakdown.map((day, index) => (
                      <div key={index} className="flex justify-between">
                        <span>{new Date(day.date).toLocaleDateString()} ({day.dayType})</span>
                        <span>${day.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-4 pt-4 border-t border-green-200">
                <div className="flex justify-between text-lg font-bold text-green-800">
                  <span>Total:</span>
                  <span>${pricing.totalPrice}</span>
                </div>
              </div>
            </div>
          )}

          {/* Customer Information Form */}
          <form onSubmit={handleSubmit} className="bg-white border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="customerName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="customerName"
                  name="customerName"
                  value={formData.customerName || ''}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="customerEmail" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="customerEmail"
                  name="customerEmail"
                  value={formData.customerEmail || ''}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="customerPhone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="customerPhone"
                  name="customerPhone"
                  value={formData.customerPhone || ''}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                disabled={!selectedRange?.from || !selectedRange?.to || isSubmitting}
                className="w-full bg-green-600 text-white py-3 px-4 rounded-md font-medium hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Book Now'}
              </button>
              
              <p className="text-xs text-gray-500 mt-2">
                After booking, you'll receive a confirmation email and payment instructions via Venmo/Zelle.
              </p>
            </div>

            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                Booking submitted successfully! Check your email for confirmation details.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                There was an error submitting your booking. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}