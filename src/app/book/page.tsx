import BookingForm from '@/components/BookingForm';

export default function Book() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Book Your Ski Adventure</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reserve your Thule Chariot with ski attachment for an unforgettable family 
            cross-country skiing experience at Mt. Hood.
          </p>
        </div>
        
        <BookingForm />
      </div>
    </div>
  );
}