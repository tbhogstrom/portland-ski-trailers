import Link from "next/link";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Renting your Thule Chariot ski equipment is simple and straightforward. 
            From booking to pickup to return, we've made the process as easy as possible.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Step-by-step process */}
            <div className="space-y-12">
              
              {/* Step 1: Book Online */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-green-800">1</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-gray-800">Book Online</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Use our interactive calendar to select your rental dates and see real-time pricing. 
                    Our booking system automatically calculates the best rates, including special discounts 
                    for full weekends and weekly rentals.
                  </p>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>View availability for December 2025 - March 2026</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Automatic price calculation with discounts</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Instant booking confirmation</span>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">What You'll Need:</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Your contact information
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V6a2 2 0 012-2h4a2 2 0 012 2v1m-6 0h8m-9 0a1 1 0 000 2v3a1 1 0 001 1h8a1 1 0 001-1V9a1 1 0 000-2m-9 0V7a2 2 0 012-2h4a2 2 0 012 2v2" />
                        </svg>
                        Preferred rental dates
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Phone number for coordination
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 2: Payment & Confirmation */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                <div className="lg:w-1/2">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-blue-800">2</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-gray-800">Payment & Confirmation</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    After you submit your booking request, we'll send you a payment request via Venmo or Zelle. 
                    No credit card fees, no complicated payment processing - just simple, direct payment.
                  </p>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>Receive payment request within 2 hours</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                      <span>Pay via Venmo or Zelle (no fees)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Booking confirmed upon payment</span>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Payment Options:</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">V</span>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">Venmo</div>
                          <div className="text-sm text-gray-600">Quick & easy mobile payment</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">Z</span>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">Zelle</div>
                          <div className="text-sm text-gray-600">Bank-to-bank transfer</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Pickup */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-purple-800">3</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-gray-800">Pickup Your Equipment</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Pick up your Thule Chariot at Mt Tabor in Southeast Portland. We'll have everything 
                    ready to go, including a quick safety orientation and setup demonstration.
                  </p>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Convenient Mt Tabor location</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Flexible pickup times</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span>Safety demonstration included</span>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Pickup Location:</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div>
                          <div className="font-medium text-gray-800">Mt Tabor</div>
                          <div className="text-sm text-gray-600">Southeast Portland, OR</div>
                          <div className="text-xs text-gray-500 mt-1">Exact address provided after booking</div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                        <strong>What to bring:</strong> Photo ID and comfortable clothing for a quick equipment demonstration.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4: Enjoy & Return */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                <div className="lg:w-1/2">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-orange-800">4</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-gray-800">Enjoy & Return</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Head out for your ski adventure! When you're done, simply return the equipment 
                    to the same Mt Tabor location. We'll handle the cleaning and maintenance.
                  </p>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span>Create amazing family memories</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                      <span>Don't worry about the weather - we've got you covered</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
                      </svg>
                      <span>Simple return process</span>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Popular Destinations:</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                        <div>
                          <div className="font-medium text-gray-800">Teacup Lake Nordic Center</div>
                          <div className="text-sm text-gray-600">Groomed trails, facilities</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                        <div>
                          <div className="font-medium text-gray-800">Trillium Lake</div>
                          <div className="text-sm text-gray-600">Scenic mountain views</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                        <svg className="w-6 h-6 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                        <div>
                          <div className="font-medium text-gray-800">Government Camp Trails</div>
                          <div className="text-sm text-gray-600">Multiple trail options</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Support Section */}
            <div className="bg-gray-100 rounded-lg p-8 mt-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">We're Here to Help</h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Questions about the process? Need help choosing dates? Want trail recommendations? 
                  We're here to ensure your family has the best possible ski experience.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Phone Support</h4>
                  <p className="text-sm text-gray-600">Available during business hours for questions and support</p>
                </div>
                
                <div>
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Email Response</h4>
                  <p className="text-sm text-gray-600">Fast email responses within 2-4 hours during rental season</p>
                </div>
                
                <div>
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Trail Advice</h4>
                  <p className="text-sm text-gray-600">Local recommendations for the best family-friendly ski trails</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-green-800 text-white rounded-lg p-12 mt-12">
              <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                The process is simple, the equipment is premium, and the memories will last forever. 
                Book your Thule Chariot ski adventure today.
              </p>
              <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
                <Link
                  href="/book"
                  className="inline-block bg-white text-green-800 font-semibold py-4 px-8 rounded-lg hover:bg-green-50 transition-colors text-lg"
                >
                  Start Your Booking
                </Link>
                <Link
                  href="/faq"
                  className="inline-block border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-green-800 transition-colors text-lg"
                >
                  View FAQ
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}