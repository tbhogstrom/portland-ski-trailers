import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-800 to-green-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Ski with Your Little One This Winter
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Rent premium Thule Chariot strollers with ski attachments for unforgettable 
              family cross-country skiing adventures at Mt. Hood.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <Link
                href="/book"
                className="inline-block bg-white text-green-800 font-semibold py-3 px-8 rounded-lg hover:bg-green-50 transition-colors"
              >
                Check Availability
              </Link>
              <Link
                href="/equipment"
                className="inline-block border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-green-800 transition-colors"
              >
                View Equipment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Why Choose Portland Ski Trailers?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Premium Equipment</h3>
                <p className="text-gray-600">
                  Brand new Thule Chariot strollers with professional ski attachments, 
                  weather shields, and safety features for your peace of mind.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Convenient Pickup</h3>
                <p className="text-gray-600">
                  Easy pickup and return at Mt Tabor in Portland. 
                  No need to drive to the mountain to get your equipment.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Flexible Pricing</h3>
                <p className="text-gray-600">
                  Daily, weekend, and weekly rentals available. 
                  Special pricing for full weekends and extended stays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Simple, Transparent Pricing</h2>
            
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Weekday</h3>
                <p className="text-3xl font-bold text-green-600 mb-2">$70</p>
                <p className="text-gray-600 text-sm">per day</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Weekend Day</h3>
                <p className="text-3xl font-bold text-green-600 mb-2">$125</p>
                <p className="text-gray-600 text-sm">Saturday or Sunday</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border-2 border-green-500">
                <div className="text-xs bg-green-500 text-white px-2 py-1 rounded-full mb-2 inline-block">BEST VALUE</div>
                <h3 className="font-semibold text-lg mb-2">Full Weekend</h3>
                <p className="text-3xl font-bold text-green-600 mb-2">$250</p>
                <p className="text-gray-600 text-sm">Friday - Sunday</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Full Week</h3>
                <p className="text-3xl font-bold text-green-600 mb-2">$300</p>
                <p className="text-gray-600 text-sm">7+ days</p>
              </div>
            </div>
            
            <Link
              href="/pricing"
              className="inline-block bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors"
            >
              View Full Pricing Details
            </Link>
          </div>
        </div>
      </section>

      {/* Season Info Section */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">2025-2026 Ski Season</h2>
            <p className="text-xl mb-8 text-green-100">
              Our rental season runs from December 2025 through March 2026. 
              Book early to secure your preferred dates during peak winter months.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="font-semibold text-lg mb-3">Popular Destinations:</h3>
                <ul className="space-y-2 text-green-100">
                  <li>• Teacup Lake Nordic Center</li>
                  <li>• Trillium Lake</li>
                  <li>• Cooper Spur</li>
                  <li>• Government Camp trails</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">What's Included:</h3>
                <ul className="space-y-2 text-green-100">
                  <li>• Thule Chariot stroller</li>
                  <li>• Ski attachment kit</li>
                  <li>• Weather protection shield</li>
                  <li>• Safety flag and reflectors</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Hit the Trails?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Create lasting winter memories with your family. Book your Thule Chariot ski rental today 
              and experience the magic of cross-country skiing together.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <Link
                href="/book"
                className="inline-block bg-green-600 text-white font-semibold py-4 px-8 rounded-lg hover:bg-green-700 transition-colors"
              >
                Book Your Adventure
              </Link>
              <Link
                href="/how-it-works"
                className="inline-block border-2 border-green-600 text-green-600 font-semibold py-4 px-8 rounded-lg hover:bg-green-600 hover:text-white transition-colors"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
