import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import HotelSearch from '../components/HotelSearch.jsx'
import HotelResultCard from '../components/HotelResultCard.jsx'
import EmptyState from '../components/EmptyState.jsx'
import Loading from '../components/Loading.jsx'

export default function Hotels() {
  const location = useLocation()
  const [results, setResults] = useState(location.state?.results ?? null)
  const [query, setQuery] = useState(location.state?.query ?? null)
  const [searching, setSearching] = useState(false)
  const [searchError, setSearchError] = useState('')

  return (
    <div className="py-16">
      <div className="container-x max-w-2xl mx-auto text-center mb-10">
        <p className="section-heading-eyebrow mb-3">Stays</p>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-3">Find Your Perfect Stay</h1>
        <p className="text-charcoal/60">Search hotels across every Unitrip destination — from Noida to the Maldives.</p>
      </div>
      <div className="container-x max-w-2xl mx-auto">
        <HotelSearch
          onResults={setResults}
          onQueryChange={setQuery}
          onSearchingChange={setSearching}
          onError={setSearchError}
        />
      </div>

      <div className="container-x max-w-3xl mx-auto">
        {searching && <div className="mt-8"><Loading label="Searching hotels..." /></div>}

        {!searching && searchError && (
          <div className="mt-8">
            <EmptyState title="Couldn't find hotels" description={searchError} />
          </div>
        )}

        {!searching && !searchError && results !== null && (
          results.length === 0 ? (
            <div className="mt-8">
              <EmptyState title="No hotels found" description="Try another city, hotel name, or travel dates." />
            </div>
          ) : (
            <div className="mt-8 space-y-4">
              <p className="text-sm text-charcoal/60">
                {results.length} stay{results.length !== 1 ? 's' : ''} found
                {query?.destination ? ` in ${query.destination}` : ''}
              </p>
              {results.map((hotel) => (
                <HotelResultCard key={hotel.id || hotel.name} hotel={hotel} nights={query?.nights || 1} />
              ))}
            </div>
          )
        )}
      </div>
    </div>
  )
}
