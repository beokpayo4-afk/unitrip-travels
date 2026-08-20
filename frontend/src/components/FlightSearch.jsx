import { useState } from 'react'
import { MapPin, Calendar, Users, Search, PlaneTakeoff } from 'lucide-react'
import { searchFlights } from '../api/hotelsFlights.js'

export default function FlightSearch({ onResults, onSearchingChange, onError }) {
  const [form, setForm] = useState({ from: '', to: '', departure: '', passengers: 1 })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    onSearchingChange?.(true)
    onError?.('')
    onResults?.(null)
    try {
      const { data } = await searchFlights(form)
      onResults?.(data)
    } catch (err) {
      const message =
        err?.response?.status === 503
          ? 'Flight search isn\u2019t configured yet \u2014 add AMADEUS_API_KEY and AMADEUS_API_SECRET to the backend .env file.'
          : err?.response?.data?.message || 'Flight search failed. Please try again in a moment.'
      onError?.(message)
      onResults?.([])
    } finally {
      setLoading(false)
      onSearchingChange?.(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-card p-6 sm:p-8">
      <div className="flex items-center gap-2 mb-5">
        <PlaneTakeoff className="w-5 h-5 text-gold" />
        <h3 className="font-heading font-semibold text-xl text-navy">Find Your Flight</h3>
      </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-charcoal/60 mb-1.5 flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> From</label>
          <input value={form.from} onChange={(e) => setForm({ ...form, from: e.target.value })} placeholder="City or airport (e.g. Delhi, DEL)" required
            className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" />
        </div>
        <div>
          <label className="text-xs font-semibold text-charcoal/60 mb-1.5 flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> To</label>
          <input value={form.to} onChange={(e) => setForm({ ...form, to: e.target.value })} placeholder="City or airport (e.g. Mumbai, BOM)" required
            className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" />
        </div>
        <div>
          <label className="text-xs font-semibold text-charcoal/60 mb-1.5 flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> Departure</label>
          <input type="date" value={form.departure} onChange={(e) => setForm({ ...form, departure: e.target.value })} required
            className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" />
        </div>
        <div>
          <label className="text-xs font-semibold text-charcoal/60 mb-1.5 flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> Passengers</label>
          <input type="number" min={1} value={form.passengers} onChange={(e) => setForm({ ...form, passengers: e.target.value })}
            className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" />
        </div>
        <button type="submit" disabled={loading} className="btn-primary sm:col-span-2 w-full">
          <Search className="w-4 h-4" /> {loading ? 'Searching...' : 'Search Flights'}
        </button>
      </form>
    </div>
  )
}
