import { useState, useMemo } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { tourPackages, tourCategories } from '../data/seedData.js'
import TourCard from '../components/TourCard.jsx'
import EmptyState from '../components/EmptyState.jsx'
import { SlidersHorizontal } from 'lucide-react'

export default function TourPackages() {
  const { category: routeCategory } = useParams()
  const [searchParams] = useSearchParams()
  const destinationFilter = searchParams.get('destination')
  const [category, setCategory] = useState(routeCategory || 'all')

  const list = useMemo(() => {
    let filtered = tourPackages
    if (category !== 'all') filtered = filtered.filter((t) => t.category === category)
    if (destinationFilter) filtered = filtered.filter((t) => t.destination.toLowerCase().includes(destinationFilter.toLowerCase()))
    return filtered
  }, [category, destinationFilter])

  return (
    <div className="py-16">
      <div className="container-x">
        <p className="section-heading-eyebrow mb-3">Tour Packages</p>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-3">All Tour Packages</h1>
        <p className="text-charcoal/60 mb-8 max-w-xl">Handpicked itineraries across India and the world, designed for every kind of traveler.</p>

        <div className="flex items-center gap-2 mb-10 overflow-x-auto no-scrollbar pb-1">
          <span className="flex items-center gap-1.5 text-xs font-semibold text-charcoal/50 shrink-0 mr-1"><SlidersHorizontal className="w-3.5 h-3.5" /> Filter</span>
          {['all', ...tourCategories].map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-2 rounded-full text-xs font-semibold capitalize whitespace-nowrap transition-colors shrink-0 ${category === c ? 'bg-gold text-white' : 'bg-white text-charcoal/70 hover:bg-navy/5'}`}
            >
              {c}
            </button>
          ))}
        </div>

        {list.length === 0 ? (
          <EmptyState title="No tours match this filter" description="Try a different category or clear filters." />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((t) => <TourCard key={t.id} tour={t} />)}
          </div>
        )}
      </div>
    </div>
  )
}
