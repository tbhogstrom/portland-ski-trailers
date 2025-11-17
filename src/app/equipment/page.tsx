import Link from "next/link";

export default function Equipment() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Premium Equipment</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            We provide top-of-the-line Thule Chariot strollers with professional ski attachments, 
            ensuring safety and comfort for your family's winter adventures.
          </p>
        </div>
      </section>

      {/* Main Equipment Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Thule Chariot Overview */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Thule Chariot Cross</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    The Thule Chariot Cross is the premium multi-sport trailer designed for active families. 
                    With its versatile design, it seamlessly converts from a bike trailer to a jogging stroller 
                    to a ski stroller with our professional ski attachment kit.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Industry-leading safety standards with 5-point harness</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">All-weather protection with enclosed cabin</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Comfortable seating for children 10 months to 6 years</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Lightweight aluminum frame for easy maneuverability</span>
                    </div>
                  </div>
                </div>
                
                {/* Placeholder for equipment image */}
                <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm">Thule Chariot Cross Image</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ski Kit Details */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Professional Ski Kit</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-800">Cross-Country Skis</h4>
                      <p className="text-gray-600 text-sm">Professional-grade skis designed for the Thule Chariot Cross, providing excellent glide and control on groomed trails.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-800">Secure Attachment System</h4>
                      <p className="text-gray-600 text-sm">Tool-free attachment that securely connects to the Chariot frame, tested for safety and stability.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-800">Safety Features</h4>
                      <p className="text-gray-600 text-sm">Enhanced stability with low center of gravity and emergency brake system for safe stops.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Included Accessories</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-800">Weather Shield</h4>
                      <p className="text-gray-600 text-sm">Full coverage weather protection with clear windows for visibility and ventilation panels.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-800">Safety Flag & Reflectors</h4>
                      <p className="text-gray-600 text-sm">High-visibility safety flag and reflective strips for increased visibility on trails.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-800">Storage Compartment</h4>
                      <p className="text-gray-600 text-sm">Rear storage area for snacks, extra clothing, and personal items during your ski adventure.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Technical Specifications</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-gray-800">Dimensions & Weight</h4>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex justify-between">
                      <span>Maximum child weight:</span>
                      <span className="font-medium">100 lbs (45 kg)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Chariot weight:</span>
                      <span className="font-medium">32 lbs (14.5 kg)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Folded dimensions:</span>
                      <span className="font-medium">32.5" × 30" × 13"</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Wheel diameter:</span>
                      <span className="font-medium">20 inches</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-gray-800">Safety & Comfort</h4>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex justify-between">
                      <span>Harness system:</span>
                      <span className="font-medium">5-point padded</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Age range:</span>
                      <span className="font-medium">10 months - 6 years</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Seating capacity:</span>
                      <span className="font-medium">2 children</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Suspension:</span>
                      <span className="font-medium">Adjustable</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Care Instructions */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-6 text-blue-800">Equipment Care & Maintenance</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-800">Before Your Trip</h4>
                  <ul className="space-y-2 text-blue-700">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Check all straps and buckles for proper function</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Ensure ski attachment is securely fastened</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Verify weather shield is properly attached</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-blue-800">After Your Adventure</h4>
                  <ul className="space-y-2 text-blue-700">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Remove snow and ice from frame and skis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Wipe down interior with provided cleaning cloth</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Report any damage immediately</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-green-800 text-white rounded-lg p-12">
              <h3 className="text-3xl font-bold mb-4">Ready to Experience Premium Equipment?</h3>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Book your Thule Chariot ski adventure today and give your family the best winter experience possible.
              </p>
              <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
                <Link
                  href="/book"
                  className="inline-block bg-white text-green-800 font-semibold py-3 px-8 rounded-lg hover:bg-green-50 transition-colors"
                >
                  Check Availability
                </Link>
                <Link
                  href="/pricing"
                  className="inline-block border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-green-800 transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}