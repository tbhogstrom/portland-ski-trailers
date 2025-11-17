# Portland Ski Trailers

A Next.js booking website for renting Thule Chariot strollers with ski attachments for family cross-country skiing adventures at Mt. Hood.

## Features

- **Interactive Calendar**: Visual booking calendar showing availability and pricing for December 2025 - March 2026
- **Smart Pricing**: Automatic calculation for weekdays ($70), weekends ($125), full weekends ($250), and weekly rentals ($300)
- **Booking System**: Complete reservation system with customer contact collection
- **Availability Tracking**: Real-time availability checking for 2 rental units
- **Responsive Design**: Mobile-first design optimized for all devices
- **Data Storage**: JSON-based booking storage (easily migrated to database later)

## Business Model

- **Equipment**: 2 Thule Chariot strollers with ski attachment kits
- **Season**: December 2025 - March 2026
- **Pickup Location**: Mt Tabor, Portland, OR
- **Payment**: Manual (Venmo/Zelle) after booking confirmation

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Calendar**: react-day-picker
- **Dates**: date-fns
- **Deployment**: Vercel

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── api/            # API routes
│   │   ├── availability/
│   │   └── bookings/
│   ├── book/           # Booking page
│   ├── equipment/      # Equipment page
│   ├── pricing/        # Pricing page
│   ├── how-it-works/   # Process page
│   └── faq/            # FAQ page
├── components/         # React components
│   ├── Calendar.tsx    # Interactive booking calendar
│   ├── BookingForm.tsx # Reservation form
│   ├── Navigation.tsx  # Site navigation
│   └── Footer.tsx      # Site footer
├── lib/               # Utility functions
│   └── bookings.ts    # Booking logic and data handling
└── types/             # TypeScript type definitions
    └── booking.ts     # Booking-related types
data/
└── bookings.json      # Booking data storage
```

## Deployment

This project is designed for easy deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Set up environment variables (for email notifications when added)
3. Deploy automatically on push to main branch

## Future Enhancements

- Email notifications with Resend
- Stripe payment integration
- Admin panel for booking management
- Database migration (PostgreSQL/Supabase)
- SMS notifications
- Calendar sync (Google Calendar, iCal)

## Operating Business

Portland Ski Trailers operates as SE Portland Contracting LLC (CCB #244912)
