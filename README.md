# Unitrip Travels

A full-stack travel booking platform: React (Vite + Tailwind) frontend and a Node.js/Express + PostgreSQL/Prisma backend.

Original design inspired by the general premium travel-website experience of himaamit.com — no copied logos, text, images, or branding.

## Project Structure

```
unitrip-travels/
├── frontend/     React + Vite + Tailwind app
└── backend/      Express + Prisma REST API
```

## Quick Start — Frontend (browsable immediately, no backend required)

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173. The frontend ships with realistic seed data (`src/data/seedData.js`) so every page — home, destinations, tour packages, tour details, booking flow, login/register, and the admin dashboard at `/admin` — is fully browsable out of the box, even before the backend is running.

Login/register and booking forms first try the real API (`src/api/*.js`); if the backend isn't reachable they fall back to a local demo flow so you can still click through the whole experience.

To view the admin dashboard as an admin, register/login normally then manually set `role: "ADMIN"` on the cached user in devtools (`localStorage.unitrip_user`), or seed an admin user via the backend (see below) and log in with those real credentials once the backend is connected.

## Quick Start — Backend (real API + database)

Requires a running PostgreSQL instance.

```bash
cd backend
cp .env.example .env
# edit .env: set DATABASE_URL, JWT_SECRET, etc.

npm install
npx prisma migrate dev --name init
npm run prisma:seed     # creates demo destinations, tours, and users
npm run dev              # starts the API on http://localhost:5000
```

Seeded accounts:
- Admin: `admin@unitriptravels.com` / `Admin@123`
- Demo user: `demo@unitriptravels.com` / `Demo@123`

Then in `frontend/.env`:

```
VITE_API_URL=http://localhost:5000/api
```

Restart the frontend dev server and it will talk to the real API instead of falling back to demo data.

## What's Implemented

**Frontend**
- Full route map: home, about, destinations (india/international/popular), tour packages (with category filter), tour details (tabs: overview/itinerary/inclusions/exclusions/reviews/FAQ), hotels, flights, customized-trip request form, contact form, login/register, protected booking flow, protected "My Bookings", and a protected `/admin` dashboard with destinations/tours/bookings/custom-trips/contacts management.
- Sticky navbar with mobile drawer, announcement bar, footer, reusable component library (cards, search widgets, feature/testimonial sections, loading/error/empty states).
- Framer Motion entrance/scroll animations used sparingly.
- Fully responsive, mobile-first Tailwind layout.

**Backend**
- Express REST API matching the spec's endpoint list (`/api/auth`, `/api/destinations`, `/api/tours`, `/api/bookings`, `/api/hotels/search`, `/api/flights/search`, `/api/custom-trips`, `/api/contact`).
- Prisma schema covering User, Destination, TourPackage, TourItinerary, Booking, BookingTraveler, Hotel, HotelBooking, FlightSearch, CustomTripRequest, Review, Contact — with enums, indexes, and relations.
- JWT auth with bcrypt password hashing, `protect`/`adminOnly` middleware, centralized error handling and 404 handler.
- Seed script with realistic demo data for destinations, tour packages, an itinerary, hotels, and two user accounts (admin + demo).
- **Live flight search via Amadeus Self-Service API** — `GET /api/flights/search?from=&to=&departure=&passengers=` resolves city/airport names to IATA codes and returns real (sandbox) flight offers. See "Flight Search Setup" below.

## Flight Search Setup (Amadeus API)

The flight search feature (`/flights` page, and the homepage flight widget) is wired to the [Amadeus Self-Service Flight Offers Search API](https://developers.amadeus.com/self-service/category/flights/api-doc/flight-offers-search). Free test-environment keys are available with no credit card required.

1. Sign up at https://developers.amadeus.com
2. Go to **My Self-Service Workspace → Create New App**
3. Copy the **API Key** and **API Secret** shown on your app's page
4. In `backend/.env`, set:
   ```
   AMADEUS_API_KEY=your_key
   AMADEUS_API_SECRET=your_secret
   AMADEUS_BASE_URL=https://test.api.amadeus.com
   ```
5. Restart the backend (`npm run dev`). Test with a search like `Delhi → Mumbai` a few weeks out (the sandbox has limited historical/near-term data, so pick a realistic future date).

Notes:
- The backend resolves free-text city/airport names to IATA codes automatically via Amadeus's location-search endpoint (`backend/src/services/amadeus.service.js`). You can also type IATA codes directly (e.g. `DEL`, `BOM`).
- If the keys aren't set, the endpoint returns a `503` and the frontend shows a clear "not configured yet" message instead of failing silently.
- Test-environment data is sandbox/limited — for production-quality inventory and pricing, upgrade to Amadeus's paid production keys (same code, just swap `AMADEUS_BASE_URL` to `https://api.amadeus.com` and use production credentials).
- Requires **Node.js 18+** on the backend (uses the built-in global `fetch`).

## Not Included in This Environment

This was generated in a sandbox with no live PostgreSQL instance and no long-running server process, so:
- Database migrations and the seed script have not been executed against a real database — run them yourself locally (`npx prisma migrate dev`, `npm run prisma:seed`).
- The backend has not been run/tested live — review `backend/src` before deploying, and add `npm install` + basic smoke tests.
- Payment integration (Razorpay), Cloudinary image upload, and live hotel supplier APIs are stubbed/placeholder-ready but not wired to a real provider — see `backend/src/controllers/hotel.controller.js`. Flight search **is** wired to a real provider (Amadeus) — see "Flight Search Setup" above.
- No automated test suite is included.

## Next Steps

1. `npm install` in both `frontend/` and `backend/`.
2. Stand up a PostgreSQL database (local Docker container or a hosted instance).
3. Run migrations + seed as shown above.
4. Wire Cloudinary credentials in `backend/.env` if you want real image uploads via Multer.
5. Replace the placeholder hotel/flight search controllers with a real supplier integration when ready.
6. Add Razorpay keys and a payment controller when you're ready to accept real payments (the `Booking` model and status flow are already structured for this).
