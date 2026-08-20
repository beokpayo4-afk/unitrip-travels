// Thin wrapper around the Amadeus Self-Service "Flight Offers Search" API.
// Docs: https://developers.amadeus.com/self-service/category/flights/api-doc/flight-offers-search
//
// Requires AMADEUS_API_KEY and AMADEUS_API_SECRET in .env (test/sandbox keys
// from https://developers.amadeus.com are free — see backend/.env.example).

const AMADEUS_BASE_URL = process.env.AMADEUS_BASE_URL || 'https://test.api.amadeus.com'

let cachedToken = null
let tokenExpiresAt = 0

async function getAccessToken() {
  const apiKey = process.env.AMADEUS_API_KEY
  const apiSecret = process.env.AMADEUS_API_SECRET

  if (!apiKey || !apiSecret) {
    const err = new Error('Amadeus API credentials are not configured (AMADEUS_API_KEY / AMADEUS_API_SECRET missing in .env)')
    err.statusCode = 503
    throw err
  }

  // Reuse the cached token until ~60s before it actually expires.
  if (cachedToken && Date.now() < tokenExpiresAt - 60_000) {
    return cachedToken
  }

  const res = await fetch(`${AMADEUS_BASE_URL}/v1/security/oauth2/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: apiKey,
      client_secret: apiSecret,
    }),
  })

  if (!res.ok) {
    const body = await res.text()
    const err = new Error(`Amadeus auth failed: ${res.status} ${body}`)
    err.statusCode = 502
    throw err
  }

  const data = await res.json()
  cachedToken = data.access_token
  tokenExpiresAt = Date.now() + data.expires_in * 1000
  return cachedToken
}

// Resolves a free-text city/airport name (e.g. "Delhi", "New York") to an
// IATA code (e.g. "DEL", "JFK") using Amadeus's Airport & City Search API.
// If the input already looks like a 3-letter IATA code, it's used as-is.
async function resolveLocationCode(query) {
  if (/^[A-Za-z]{3}$/.test(query.trim())) {
    return query.trim().toUpperCase()
  }

  const token = await getAccessToken()
  const url = new URL(`${AMADEUS_BASE_URL}/v1/reference-data/locations`)
  url.searchParams.set('subType', 'CITY,AIRPORT')
  url.searchParams.set('keyword', query)
  url.searchParams.set('page[limit]', '1')

  const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } })
  if (!res.ok) {
    const err = new Error(`Could not resolve location "${query}"`)
    err.statusCode = 502
    throw err
  }
  const data = await res.json()
  const match = data.data?.[0]
  if (!match) {
    const err = new Error(`No airport or city found matching "${query}"`)
    err.statusCode = 404
    throw err
  }
  return match.iataCode
}

async function searchFlightOffers({ from, to, departureDate, adults = 1, max = 10 }) {
  const token = await getAccessToken()
  const [originCode, destinationCode] = await Promise.all([
    resolveLocationCode(from),
    resolveLocationCode(to),
  ])

  const url = new URL(`${AMADEUS_BASE_URL}/v2/shopping/flight-offers`)
  url.searchParams.set('originLocationCode', originCode)
  url.searchParams.set('destinationLocationCode', destinationCode)
  url.searchParams.set('departureDate', departureDate)
  url.searchParams.set('adults', String(adults))
  url.searchParams.set('max', String(max))
  url.searchParams.set('currencyCode', 'INR')

  const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } })
  if (!res.ok) {
    const body = await res.text()
    const err = new Error(`Amadeus flight search failed: ${res.status} ${body}`)
    err.statusCode = 502
    throw err
  }
  const data = await res.json()

  // Normalize Amadeus's response into a simpler shape for the frontend.
  return (data.data || []).map((offer) => {
    const itinerary = offer.itineraries[0]
    const firstSegment = itinerary.segments[0]
    const lastSegment = itinerary.segments[itinerary.segments.length - 1]
    return {
      id: offer.id,
      price: offer.price.total,
      currency: offer.price.currency,
      airline: firstSegment.carrierCode,
      stops: itinerary.segments.length - 1,
      duration: itinerary.duration,
      departureAirport: firstSegment.departure.iataCode,
      departureTime: firstSegment.departure.at,
      arrivalAirport: lastSegment.arrival.iataCode,
      arrivalTime: lastSegment.arrival.at,
      seatsAvailable: offer.numberOfBookableSeats,
    }
  })
}

module.exports = { searchFlightOffers, resolveLocationCode, getAccessToken }
