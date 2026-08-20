import { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import HotelSearch from '../components/HotelSearch.jsx'
import HotelResultCard from '../components/HotelResultCard.jsx'
import EmptyState from '../components/EmptyState.jsx'
import Loading from '../components/Loading.jsx'

const sortOptions = [
  { id: 'rating', label: 'Top rated' },
  { id: 'price-asc', label: 'Price: low to high' },
  { id: 'price-desc', label: 'Price: high to low' },
]

function sortHotels(hotels, sort) {
  const copy = [...hotels]
  if (sort === 'price-asc') copy.sort((a, b) => (a.pricePerNight || 0) - (b.pricePerNight || 0))
  else if (sort === 'price-desc') copy.sort((a, b) => (b.pricePerNight || 0) - (a.pricePerNight || 0))
  else copy.sort((a, b) => (b.rating || 0) - (a.rating || 0))
  return copy
}

export default function Hotels() {
  const location = useLocation()
  const [results, setResults] = useState(location.state?.results ?? null)
  const [query, setQuery] = useState(location.state?.query ?? null)
  const [searching, setSearching] = useState(false)
  const [searchError, setSearchError] = useState('')
  const [sort, setSort] = useState('rating')

  const sortedResults = useMemo(
    () => (results ? sortHotels(results, sort) : []),
    [results, sort],
  )

  return (
    <div className="py-16">
      <div className="container-x max-w-2xl mx-auto text-center mb-10">
        <p className="section-heading-eyebrow mb-3">Stays</p>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-3">Find Your Perfect Stay</h1>
        <p className="text-charcoal/60">Compare multiple hotels in every Unitrip destination — from value stays to luxury resorts.</p>
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
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <p className="text-sm text-charcoal/60">
                  {sortedResults.length} hotel{sortedResults.length !== 1 ? 's' : ''} found
                  {query?.destination ? ` in ${query.destination}` : ''}
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
              {sortedResults.map((hotel) => (
                <HotelResultCard key={hotel.id || hotel.name} hotel={hotel} nights={query?.nights || 1} />
              ))}
            </div>
          )
        )}
      </div>
    </div>
  )
}
