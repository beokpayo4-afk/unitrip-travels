import { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import FlightSearch from '../components/FlightSearch.jsx'
import FlightResultCard from '../components/FlightResultCard.jsx'
import EmptyState from '../components/EmptyState.jsx'
import Loading from '../components/Loading.jsx'

const sortOptions = [
  { id: 'price', label: 'Cheapest' },
  { id: 'duration', label: 'Fastest' },
  { id: 'stops', label: 'Fewest stops' },
]

function durationMinutes(iso) {
  const match = String(iso || '').match(/PT(?:(\d+)H)?(?:(\d+)M)?/)
  return Number(match?.[1] || 0) * 60 + Number(match?.[2] || 0)
}

function sortFlights(flights, sort) {
  const copy = [...flights]
  if (sort === 'duration') copy.sort((a, b) => durationMinutes(a.duration) - durationMinutes(b.duration))
  else if (sort === 'stops') copy.sort((a, b) => (a.stops || 0) - (b.stops || 0) || Number(a.price) - Number(b.price))
  else copy.sort((a, b) => Number(a.price) - Number(b.price))
  return copy
}

export default function Flights() {
  const location = useLocation()
  const [results, setResults] = useState(location.state?.results ?? null)
  const [query, setQuery] = useState(location.state?.query ?? null)
  const [searching, setSearching] = useState(false)
  const [searchError, setSearchError] = useState('')
  const [sort, setSort] = useState('price')

  const sortedResults = useMemo(
    () => (results ? sortFlights(results, sort) : []),
    [results, sort],
  )

  return (
    <div className="py-16">
      <div className="container-x max-w-2xl mx-auto text-center mb-10">
        <p className="section-heading-eyebrow mb-3">Flights</p>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-3">Find Your Flight</h1>
        <p className="text-charcoal/60">Search live flights across India and Unitrip international destinations.</p>
      </div>

      <div className="container-x max-w-2xl mx-auto">
        <FlightSearch
          onResults={setResults}
          onQueryChange={setQuery}
          onSearchingChange={setSearching}
          onError={setSearchError}
        />
      </div>

      <div className="container-x max-w-3xl mx-auto">
        {searching && <div className="mt-8"><Loading label="Searching flights..." /></div>}

        {!searching && searchError && (
          <div className="mt-8">
            <EmptyState title="No flights found" description={searchError} />
          </div>
        )}

        {!searching && !searchError && results !== null && (
          results.length === 0 ? (
            <div className="mt-8">
              <EmptyState title="No flights found" description="Try different dates, cities, or passenger count." />
            </div>
          ) : (
            <div className="mt-8 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <p className="text-sm text-charcoal/60">
                  {sortedResults.length} flight{sortedResults.length !== 1 ? 's' : ''} found
                  {query?.from && query?.to ? ` · ${query.from} to ${query.to}` : ''}
                </p>
                <label className="text-xs text-charcoal/60 flex items-center gap-2">
                  Sort
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="border border-gray-200 rounded-lg px-2 py-1.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold/50"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>{option.label}</option>
                    ))}
                  </select>
                </label>
              </div>
              {sortedResults.map((flight) => (
                <FlightResultCard key={flight.id} flight={flight} />
              ))}
            </div>
          )
        )}
      </div>
    </div>
  )
}
