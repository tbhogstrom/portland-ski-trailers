import Link from "next/link";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            No hidden fees, no surprises. Just straightforward pricing for premium family ski adventures.
          </p>
        </div>
      </section>

      {/* Main Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Primary Pricing Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Weekday</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">$70</div>
                <div className="text-gray-600 mb-4">per day</div>
                <div className="text-sm text-gray-500">Monday - Friday</div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Weekend Day</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">$125</div>
                <div className="text-gray-600 mb-4">per day</div>
                <div className="text-sm text-gray-500">Saturday or Sunday</div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 text-center border-2 border-green-500 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">BEST VALUE</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Full Weekend</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">$250</div>
                <div className="text-gray-600 mb-4">3 days</div>
                <div className="text-sm text-gray-500">Friday - Sunday</div>
                <div className="text-xs text-green-600 mt-2 font-medium">Save $125!</div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Full Week</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">$300</div>
                <div className="text-gray-600 mb-4">7+ days</div>
                <div className="text-sm text-gray-500">Ultimate adventure</div>
                <div className="text-xs text-green-600 mt-2 font-medium">Save $390!</div>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">What's Included</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Premium Equipment</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• Thule Chariot Cross stroller</li>
                    <li>• Professional ski attachment</li>
                    <li>• Weather protection shield</li>
                    <li>• Safety flag & reflectors</li>
                    <li>• Storage compartment</li>
                  </ul>
                </div>

                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Safety & Support</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• Safety inspection before pickup</li>
                    <li>• Setup and usage instructions</li>
                    <li>• Emergency contact support</li>
                    <li>• Equipment maintenance</li>
                    <li>• Trail recommendations</li>
                  </ul>
                </div>

                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Flexible Service</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• Convenient Mt Tabor pickup</li>
                    <li>• Flexible rental periods</li>
                    <li>• Easy booking system</li>
                    <li>• Weather-dependent adjustments</li>
                    <li>• Simple return process</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pricing Comparison */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-6 text-blue-800 text-center">Compare Your Options</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-blue-200">
                      <th className="text-left py-3 px-4 font-semibold text-blue-800">Rental Period</th>
                      <th className="text-center py-3 px-4 font-semibold text-blue-800">Regular Price</th>
                      <th className="text-center py-3 px-4 font-semibold text-blue-800">Our Price</th>
                      <th className="text-center py-3 px-4 font-semibold text-blue-800">You Save</th>
                    </tr>
                  </thead>
                  <tbody className="text-blue-700">
                    <tr className="border-b border-blue-100">
                      <td className="py-3 px-4">Single Weekday</td>
                      <td className="text-center py-3 px-4">$70</td>
                      <td className="text-center py-3 px-4 font-semibold">$70</td>
                      <td className="text-center py-3 px-4">-</td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="py-3 px-4">Single Weekend Day</td>
                      <td className="text-center py-3 px-4">$125</td>
                      <td className="text-center py-3 px-4 font-semibold">$125</td>
                      <td className="text-center py-3 px-4">-</td>
                    </tr>
                    <tr className="border-b border-blue-100 bg-green-50">
                      <td className="py-3 px-4 font-semibold">Full Weekend (Fri-Sun)</td>
                      <td className="text-center py-3 px-4 line-through text-gray-500">$375</td>
                      <td className="text-center py-3 px-4 font-bold text-green-600">$250</td>
                      <td className="text-center py-3 px-4 font-bold text-green-600">$125</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="py-3 px-4 font-semibold">Full Week (7 days)</td>
                      <td className="text-center py-3 px-4 line-through text-gray-500">$690</td>
                      <td className="text-center py-3 px-4 font-bold text-green-600">$300</td>
                      <td className="text-center py-3 px-4 font-bold text-green-600">$390</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Policies Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Rental Policies</h3>
                <div className="space-y-4 text-gray-600">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Booking & Payment</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Payment via Venmo or Zelle after booking confirmation</li>
                      <li>• Booking confirmed upon payment receipt</li>
                      <li>• No payment processing fees</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Cancellation</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Free cancellation up to 48 hours before rental</li>
                      <li>• 50% refund for cancellations within 48 hours</li>
                      <li>• Weather-related cancellations receive full refund</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Equipment Care</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Normal wear and tear is expected</li>
                      <li>• Customer responsible for damage beyond normal use</li>
                      <li>• Lost or stolen equipment charged at replacement cost</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Frequently Asked</h3>
                <div className="space-y-4 text-gray-600">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Do you offer discounts?</h4>
                    <p className="text-sm">Our multi-day packages already offer significant savings. Full weekend and weekly rentals provide the best value.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">What if I need to extend my rental?</h4>
                    <p className="text-sm">Extensions are possible based on availability. Contact us as soon as you know you need extra time.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Is there a security deposit?</h4>
                    <p className="text-sm">No security deposit required. We trust our customers and keep the process simple.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">What about bad weather?</h4>
                    <p className="text-sm">Unsafe weather conditions qualify for full refund or rescheduling at no charge.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-green-800 text-white rounded-lg p-12">
              <h3 className="text-3xl font-bold mb-4">Ready to Book Your Adventure?</h3>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Choose your dates, see real-time availability, and secure your Thule Chariot ski rental today.
              </p>
              <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
                <Link
                  href="/book"
                  className="inline-block bg-white text-green-800 font-semibold py-4 px-8 rounded-lg hover:bg-green-50 transition-colors text-lg"
                >
                  Check Availability & Book
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-block border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-green-800 transition-colors text-lg"
                >
                  How It Works
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}