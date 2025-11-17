'use client';

import { useState } from 'react';
import Link from "next/link";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: 'booking' | 'equipment' | 'logistics' | 'policies';
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What age children can use the Thule Chariot with ski attachment?",
    answer: "The Thule Chariot Cross is designed for children from 10 months to 6 years old, with a maximum weight of 100 lbs (45 kg) total. For skiing, we recommend children be at least 1 year old and able to sit upright comfortably. The 5-point harness system ensures safety for younger passengers.",
    category: 'equipment'
  },
  {
    id: 2,
    question: "Do I need to bring my own skis, boots, and poles?",
    answer: "Yes, you'll need to bring your own cross-country skis, boots, and poles. Our rental includes only the Thule Chariot stroller and ski attachment system. This allows you to use equipment that fits properly and that you're comfortable with.",
    category: 'equipment'
  },
  {
    id: 3,
    question: "How do I pay for my rental?",
    answer: "After you submit your booking request, we'll send you a payment request via Venmo or Zelle within 2 hours. Once payment is received, your booking is confirmed. We use these payment methods to avoid credit card processing fees and keep costs low.",
    category: 'booking'
  },
  {
    id: 4,
    question: "Where do I pick up and return the equipment?",
    answer: "Both pickup and return are at Mt Tabor in Southeast Portland. The exact address and meeting details will be provided after your booking is confirmed. We offer flexible pickup times to work with your schedule.",
    category: 'logistics'
  },
  {
    id: 5,
    question: "What's your cancellation policy?",
    answer: "Free cancellation up to 48 hours before your rental start date. Cancellations within 48 hours receive a 50% refund. Weather-related cancellations (unsafe skiing conditions) receive a full refund regardless of timing.",
    category: 'policies'
  },
  {
    id: 6,
    question: "What if it's too warm/cold or the weather is bad?",
    answer: "If weather conditions are unsafe for skiing (such as rain, ice storms, or extremely cold temperatures), you're eligible for a full refund or free rescheduling. We'll work with you to find alternative dates that work for both parties.",
    category: 'policies'
  },
  {
    id: 7,
    question: "Can I book the same day or last minute?",
    answer: "Same-day bookings are possible based on availability, but we recommend booking at least 24-48 hours in advance to ensure availability and proper preparation time. You can check real-time availability on our booking calendar.",
    category: 'booking'
  },
  {
    id: 8,
    question: "Is there a security deposit required?",
    answer: "No security deposit is required. We trust our customers and keep the process simple. However, you are responsible for any damage beyond normal wear and tear, and lost or stolen equipment will be charged at replacement cost.",
    category: 'policies'
  },
  {
    id: 9,
    question: "What's included with the Thule Chariot rental?",
    answer: "Your rental includes the Thule Chariot Cross stroller, ski attachment kit, weather protection shield, safety flag and reflectors, storage compartment, and a safety demonstration at pickup. We also provide trail recommendations and emergency contact support during your rental.",
    category: 'equipment'
  },
  {
    id: 10,
    question: "How many children can fit in the Chariot?",
    answer: "The Thule Chariot Cross seats up to 2 children comfortably, with a combined maximum weight of 100 lbs (45 kg). Each child gets their own 5-point safety harness. For the best skiing experience, we recommend a maximum of 2 children ages 1-6.",
    category: 'equipment'
  },
  {
    id: 11,
    question: "What if I need to extend my rental period?",
    answer: "Extensions are possible based on availability. Contact us as soon as you know you need extra time, and we'll check availability and arrange pricing. Extensions follow the same daily rates as shown on our pricing page.",
    category: 'booking'
  },
  {
    id: 12,
    question: "Do you deliver or is pickup required?",
    answer: "Currently, all pickups and returns must be done at our Mt Tabor location. This allows us to provide proper safety demonstrations and keep costs low. The location is convenient to most Portland areas and easily accessible.",
    category: 'logistics'
  },
  {
    id: 13,
    question: "What ski trails do you recommend for families?",
    answer: "We recommend Teacup Lake Nordic Center for beginners (groomed trails, facilities), Trillium Lake for scenic views, and Government Camp area trails for various skill levels. We'll provide specific recommendations based on your family's experience level and current trail conditions.",
    category: 'logistics'
  },
  {
    id: 14,
    question: "What happens if the equipment breaks during my rental?",
    answer: "Contact us immediately if equipment malfunctions. Normal wear and tear is expected and covered. If the issue is due to a manufacturing defect or normal use, we'll arrange a replacement or refund. Damage from misuse or accidents may result in repair charges.",
    category: 'policies'
  },
  {
    id: 15,
    question: "Can I modify my reservation dates?",
    answer: "Yes, you can modify your reservation based on availability. Changes made more than 48 hours in advance are free. Changes within 48 hours may be subject to availability and potential pricing differences.",
    category: 'booking'
  },
  {
    id: 16,
    question: "Do you provide helmets or other safety gear?",
    answer: "We provide safety flags and reflectors with the Chariot, but we don't provide helmets or other personal safety equipment. We recommend bringing helmets for both yourself and your children, especially if you're new to cross-country skiing.",
    category: 'equipment'
  }
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Questions', icon: '📋' },
    { id: 'booking', label: 'Booking & Payment', icon: '💳' },
    { id: 'equipment', label: 'Equipment & Safety', icon: '🎿' },
    { id: 'logistics', label: 'Pickup & Locations', icon: '📍' },
    { id: 'policies', label: 'Policies & Support', icon: '📜' }
  ];

  const filteredFAQs = activeCategory === 'all' 
    ? faqData 
    : faqData.filter(faq => faq.category === activeCategory);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Find answers to common questions about our Thule Chariot ski rentals, 
            booking process, and policies. Can't find what you're looking for? Just ask!
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Category Filter */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Browse by Category</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`p-4 rounded-lg text-center transition-colors ${
                      activeCategory === category.id
                        ? 'bg-green-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-200'
                    }`}
                  >
                    <div className="text-2xl mb-2">{category.icon}</div>
                    <div className="text-sm font-medium">{category.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <div key={faq.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-800 pr-4">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        openFAQ === faq.id ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFAQ === faq.id && (
                    <div className="px-6 pb-4">
                      <div className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-500 text-lg">No questions found in this category.</div>
              </div>
            )}

            {/* Contact Section */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mt-16">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Still Have Questions?</h3>
                <p className="text-blue-700 mb-6 max-w-2xl mx-auto">
                  Can't find the answer you're looking for? We're here to help make your family's 
                  ski adventure as smooth and enjoyable as possible.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  <div className="bg-white rounded-lg p-6 text-center">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Email Us</h4>
                    <p className="text-sm text-gray-600 mb-3">Get detailed answers to your specific questions</p>
                    <p className="text-green-600 font-medium">Response within 2-4 hours</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 text-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Call Us</h4>
                    <p className="text-sm text-gray-600 mb-3">Speak directly with our team</p>
                    <p className="text-blue-600 font-medium">Business hours support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V6a2 2 0 012-2h4a2 2 0 012 2v1m-6 0h8m-9 0a1 1 0 000 2v3a1 1 0 001 1h8a1 1 0 001-1V9a1 1 0 000-2m-9 0V7a2 2 0 012-2h4a2 2 0 012 2v2" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Ready to Book?</h3>
                <p className="text-gray-600 mb-4 text-sm">Check availability and reserve your dates</p>
                <Link
                  href="/book"
                  className="inline-block bg-green-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
                >
                  View Calendar
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">View Pricing</h3>
                <p className="text-gray-600 mb-4 text-sm">See rates and what's included</p>
                <Link
                  href="/pricing"
                  className="inline-block bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  See Rates
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">How It Works</h3>
                <p className="text-gray-600 mb-4 text-sm">Learn about the rental process</p>
                <Link
                  href="/how-it-works"
                  className="inline-block bg-purple-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}