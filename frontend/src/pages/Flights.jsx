import { useState } from 'react'
import FlightSearch from '../components/FlightSearch.jsx'
import FlightResultCard from '../components/FlightResultCard.jsx'
import EmptyState from '../components/EmptyState.jsx'
import Loading from '../components/Loading.jsx'

export default function Flights() {
  const [results, setResults] = useState(null)
  const [searching, setSearching] = useState(false)
  const [searchError, setSearchError] = useState('')

  return (
    <div className="py-16">
      <div className="container-x max-w-2xl mx-auto text-center mb-10">
        <p className="section-heading-eyebrow mb-3">Flights</p>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-3">Find Your Flight</h1>
        <p className="text-charcoal/60">Search live flights powered by the Amadeus flight-offers API.</p>
      </div>

      <div className="container-x max-w-2xl mx-auto">
        <FlightSearch onResults={setResults} onSearchingChange={setSearching} onError={setSearchError} />
      </div>

      <div className="container-x max-w-3xl mx-auto">
        {searching && <div className="mt-8"><Loading label="Searching flights..." /></div>}

        {!searching && searchError && (
          <div className="mt-8">
            <EmptyState title="Couldn't fetch live flights" description={searchError} />
          </div>
        )}

        {!searching && !searchError && results !== null && (
          results.length === 0 ? (
            <div className="mt-8">
              <EmptyState title="No flights found" description="Try different dates, cities, or passenger count." />
            </div>
          ) : (
            <div className="mt-8 space-y-4">
              <p className="text-sm text-charcoal/60">{results.length} flight{results.length !== 1 ? 's' : ''} found</p>
              {results.map((f) => <FlightResultCard key={f.id} flight={f} />)}
            </div>
          )
        )}
      </div>
    </div>
  )
}
