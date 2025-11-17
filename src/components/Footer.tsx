export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Portland Ski Trailers</h3>
            <p className="text-gray-300">
              Premium Thule Chariot ski rentals for families.
              Make memories on Mt. Hood this winter.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/equipment" className="block text-gray-300 hover:text-white">Equipment</a>
              <a href="/pricing" className="block text-gray-300 hover:text-white">Pricing</a>
              <a href="/how-it-works" className="block text-gray-300 hover:text-white">How It Works</a>
              <a href="/faq" className="block text-gray-300 hover:text-white">FAQ</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>Pickup: Mt Tabor, Portland, OR</p>
              <p>Season: December - March</p>
              <p className="text-sm">Operating as SE Portland Contracting LLC (CCB #244912)</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Portland Ski Trailers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}