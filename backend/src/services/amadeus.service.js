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

async function searchHotelOffers({ destination, checkIn, checkOut, adults = 2 }) {
  const token = await getAccessToken()
  const cityCode = await resolveLocationCode(destination)

  const listUrl = new URL(`${AMADEUS_BASE_URL}/v1/reference-data/locations/hotels/by-city`)
  listUrl.searchParams.set('cityCode', cityCode)

  const listRes = await fetch(listUrl, { headers: { Authorization: `Bearer ${token}` } })
  if (!listRes.ok) {
    const body = await listRes.text()
    const err = new Error(`Amadeus hotel list failed: ${listRes.status} ${body}`)
    err.statusCode = 502
    throw err
  }

  const listData = await listRes.json()
  const hotelIds = (listData.data || []).slice(0, 15).map((h) => h.hotelId).filter(Boolean)
  if (!hotelIds.length) return []

  const offersUrl = new URL(`${AMADEUS_BASE_URL}/v3/shopping/hotel-offers`)
  offersUrl.searchParams.set('hotelIds', hotelIds.join(','))
  offersUrl.searchParams.set('adults', String(adults))
  offersUrl.searchParams.set('currencyCode', 'INR')
  offersUrl.searchParams.set('bestRateOnly', 'true')
  if (checkIn) offersUrl.searchParams.set('checkInDate', checkIn)
  if (checkOut) offersUrl.searchParams.set('checkOutDate', checkOut)

  const offersRes = await fetch(offersUrl, { headers: { Authorization: `Bearer ${token}` } })
  if (!offersRes.ok) {
    const body = await offersRes.text()
    const err = new Error(`Amadeus hotel search failed: ${offersRes.status} ${body}`)
    err.statusCode = 502
    throw err
  }

  const offersData = await offersRes.json()
  const nights = checkIn && checkOut
    ? Math.max(1, Math.round((new Date(checkOut) - new Date(checkIn)) / 86400000))
    : 1

  return (offersData.data || []).map((item) => {
    const offer = item.offers?.[0]
    const stayTotal = offer?.price?.total ? Number(offer.price.total) : null
    return {
      id: item.hotel?.hotelId || offer?.id,
      name: item.hotel?.name,
      city: item.hotel?.address?.cityName || destination,
      address: [item.hotel?.address?.lines?.[0], item.hotel?.address?.cityName].filter(Boolean).join(', '),
      image: item.hotel?.media?.[0]?.uri || null,
      pricePerNight: stayTotal != null ? Math.round(stayTotal / nights) : null,
      rating: item.hotel?.rating ? Number(item.hotel.rating) : null,
      currency: offer?.price?.currency || 'INR',
    }
  }).filter((h) => h.name)
}

module.exports = { searchFlightOffers, searchHotelOffers, resolveLocationCode, getAccessToken }
