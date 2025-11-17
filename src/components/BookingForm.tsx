'use client';

import { useState, useEffect } from 'react';
import { DateRange } from 'react-day-picker';
import { differenceInDays, format } from 'date-fns';
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
  const [showPopup, setShowPopup] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  useEffect(() => {
    if (startDate && endDate) {
      const calculation = calculatePricing(startDate, endDate);
      setPricing(calculation);
    } else {
      setPricing(null);
    }
  }, [startDate, endDate]);

  const handleDateClick = (date: Date) => {
    setStartDate(date);
    setEndDate(null);
    setShowPopup(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!startDate || !endDate || !pricing) {
      alert('Please select both start and end dates');
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
        startDate: startDate.toISOString().split('T')[0],
        endDate: endDate.toISOString().split('T')[0],
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
        setStartDate(null);
        setEndDate(null);
        setPricing(null);
        setFormData({
          customerName: '',
          customerEmail: '',
          customerPhone: '',
        });
        setShowPopup(false);
      } else {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
        console.error('Booking submission failed:', response.status, errorData);
        throw new Error(errorData.error || 'Booking submission failed');
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const dayCount = startDate && endDate 
    ? differenceInDays(endDate, startDate) + 1 
    : 0;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid-cols-1">
        {/* Calendar Section */}
        <div>
          <Calendar onDateClick={handleDateClick} />
        </div>

        {/* Popup Form */}
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Book Your Rental</h2>
                <button
                  onClick={() => setShowPopup(false)}
                  className="text-gray-500 hover:text-gray-700 text-xl"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Date Selection */}
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Start Date *
                    </label>
                    <input
                      type="date"
                      value={startDate ? format(startDate, 'yyyy-MM-dd') : ''}
                      onChange={(e) => setStartDate(e.target.value ? new Date(e.target.value) : null)}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      End Date *
                    </label>
                    <input
                      type="date"
                      value={endDate ? format(endDate, 'yyyy-MM-dd') : ''}
                      onChange={(e) => setEndDate(e.target.value ? new Date(e.target.value) : null)}
                      required
                      min={startDate ? format(startDate, 'yyyy-MM-dd') : undefined}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-3">
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

                {/* Pricing Summary */}
                {startDate && endDate && pricing && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="font-bold mb-2 text-green-800">Booking Summary</h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span className="font-medium">{dayCount} day{dayCount > 1 ? 's' : ''}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Pricing:</span>
                        <span className="font-medium">{pricing.priceBreakdown}</span>
                      </div>
                      <div className="flex justify-between font-bold text-green-800 border-t border-green-200 pt-1">
                        <span>Total:</span>
                        <span>${pricing.totalPrice}</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowPopup(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={!startDate || !endDate || isSubmitting}
                    className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md font-medium hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Book Now'}
                  </button>
                </div>

                <p className="text-xs text-gray-500 text-center">
                  After booking, you'll receive confirmation and payment instructions via Venmo/Zelle.
                </p>

                {submitStatus === 'success' && (
                  <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded text-sm">
                    Booking request received! You will be contacted within 24 hours to confirm your reservation.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm">
                    Error submitting booking. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}