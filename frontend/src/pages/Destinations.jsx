import { useState, useMemo } from 'react'
import { indiaDestinations, internationalDestinations, localDestinations, popularDestinations } from '../data/seedData.js'
import DestinationCard from '../components/DestinationCard.jsx'
import EmptyState from '../components/EmptyState.jsx'

const tabs = [
  { key: 'popular', label: 'Popular' },
  { key: 'local', label: 'Local' },
  { key: 'india', label: 'India' },
  { key: 'international', label: 'International' },
]

export default function Destinations({ region }) {
  const [tab, setTab] = useState(region || 'popular')

  const list = useMemo(() => {
    if (tab === 'local') return localDestinations
    if (tab === 'india') return indiaDestinations
    if (tab === 'international') return internationalDestinations
    return popularDestinations
  }, [tab])

  return (
    <div className="py-16">
      <div className="container-x">
        <p className="section-heading-eyebrow mb-3">Explore</p>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-3">Destinations</h1>
        <p className="text-charcoal/60 mb-8 max-w-xl">Discover some of the most beautiful destinations and create memories that last forever.</p>

        <div className="flex gap-2 mb-10 flex-wrap">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${tab === t.key ? 'bg-navy text-white' : 'bg-white text-charcoal/70 hover:bg-navy/5'}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {list.length === 0 ? (
          <EmptyState title="No destinations found" />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {list.map((d) => <DestinationCard key={d.id} destination={d} />)}
          </div>
        )}
      </div>
    </div>
  )
}
