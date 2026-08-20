import { useState } from 'react'
import HotelSearch from '../components/HotelSearch.jsx'
import EmptyState from '../components/EmptyState.jsx'

export default function Hotels() {
  const [results, setResults] = useState(null)

  return (
    <div className="py-16">
      <div className="container-x max-w-2xl mx-auto text-center mb-10">
        <p className="section-heading-eyebrow mb-3">Stays</p>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-3">Find Your Perfect Stay</h1>
        <p className="text-charcoal/60">Search hotels across every Unitrip destination. This interface is built API-ready for live inventory integration.</p>
      </div>
      <div className="container-x max-w-2xl mx-auto">
        <HotelSearch onResults={setResults} />
        {results !== null && (
          results.length === 0
            ? <div className="mt-8"><EmptyState title="No live hotel inventory connected yet" description="Once a hotel supplier API is configured on the backend, results will appear here." /></div>
            : <div className="mt-8 grid gap-4">{/* results would render here */}</div>
        )}
      </div>
    </div>
  )
}
