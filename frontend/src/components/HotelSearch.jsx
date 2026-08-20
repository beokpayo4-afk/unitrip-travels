import { useState } from 'react'
import { MapPin, Calendar, Users, Search, Hotel } from 'lucide-react'
import { searchHotels } from '../api/hotelsFlights.js'

export default function HotelSearch({ onResults }) {
  const [form, setForm] = useState({ destination: '', checkIn: '', checkOut: '', guests: 2 })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const { data } = await searchHotels(form)
      onResults?.(data)
    } catch (err) {
      setError('Hotel search API is not connected yet. This interface is ready for a live inventory integration.')
      onResults?.([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-card p-6 sm:p-8">
      <div className="flex items-center gap-2 mb-5">
        <Hotel className="w-5 h-5 text-gold" />
        <h3 className="font-heading font-semibold text-xl text-navy">Find Your Perfect Stay</h3>
      </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <label className="text-xs font-semibold text-charcoal/60 mb-1.5 flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Destination</label>
          <input value={form.destination} onChange={(e) => setForm({ ...form, destination: e.target.value })} placeholder="City or hotel name" required
            className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" />
        </div>
        <div>
          <label className="text-xs font-semibold text-charcoal/60 mb-1.5 flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> Check-in</label>
          <input type="date" value={form.checkIn} onChange={(e) => setForm({ ...form, checkIn: e.target.value })} required
            className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" />
        </div>
        <div>
          <label className="text-xs font-semibold text-charcoal/60 mb-1.5 flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> Check-out</label>
          <input type="date" value={form.checkOut} onChange={(e) => setForm({ ...form, checkOut: e.target.value })} required
            className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" />
        </div>
        <div className="sm:col-span-2">
          <label className="text-xs font-semibold text-charcoal/60 mb-1.5 flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> Guests</label>
          <input type="number" min={1} value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })}
            className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" />
        </div>
        <button type="submit" disabled={loading} className="btn-primary sm:col-span-2 w-full">
          <Search className="w-4 h-4" /> {loading ? 'Searching...' : 'Search Hotels'}
        </button>
        {error && <p className="sm:col-span-2 text-xs text-charcoal/50 text-center">{error}</p>}
      </form>
    </div>
  )
}
