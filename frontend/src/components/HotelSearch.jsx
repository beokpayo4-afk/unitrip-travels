import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MapPin, Calendar, Users, Search, Hotel } from 'lucide-react'
import { searchHotels } from '../api/hotelsFlights.js'
import { allDestinations, searchHotelsLocal } from '../data/seedData.js'

function nightsBetween(checkIn, checkOut) {
  if (!checkIn || !checkOut) return 1
  const ms = new Date(checkOut) - new Date(checkIn)
  return Math.max(1, Math.round(ms / 86400000))
}

export default function HotelSearch({ onResults, onSearchingChange, onError, onQueryChange }) {
  const navigate = useNavigate()
  const [form, setForm] = useState({ destination: '', checkIn: '', checkOut: '', guests: 2 })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const deliver = (data) => {
    const payload = Array.isArray(data) ? data : []
    const query = { ...form, nights: nightsBetween(form.checkIn, form.checkOut) }
    onQueryChange?.(query)
    onResults?.(payload)
    if (!onResults) {
      navigate('/hotels', { state: { results: payload, query } })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form.checkOut <= form.checkIn) {
      const message = 'Check-out must be after check-in.'
      setError(message)
      onError?.(message)
      return
    }
    setLoading(true)
    setError('')
    onError?.('')
    onSearchingChange?.(true)
    onResults?.(null)
    try {
      const { data } = await searchHotels(form)
      if (Array.isArray(data) && data.length) {
        deliver(data)
        return
      }
      deliver(searchHotelsLocal(form))
    } catch {
      const local = searchHotelsLocal(form)
      if (local.length) {
        deliver(local)
        return
      }
      const message = 'No hotels found for this destination. Try another city.'
      setError(message)
      onError?.(message)
      deliver([])
    } finally {
      setLoading(false)
      onSearchingChange?.(false)
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
          <input
            value={form.destination}
            onChange={(e) => setForm({ ...form, destination: e.target.value })}
            placeholder="City or hotel name"
            list="hotel-destinations"
            required
            className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
          />
          <datalist id="hotel-destinations">
            {allDestinations.map((d) => (
              <option key={d.id} value={d.name} />
            ))}
          </datalist>
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
