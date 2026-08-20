import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MapPin, Calendar, Users, Search, PlaneTakeoff } from 'lucide-react'
import { searchFlights } from '../api/hotelsFlights.js'
import { flightCities, searchFlightsLocal } from '../data/seedData.js'

export default function FlightSearch({ onResults, onSearchingChange, onError, onQueryChange }) {
  const navigate = useNavigate()
  const [form, setForm] = useState({ from: '', to: '', departure: '', passengers: 1 })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const deliver = (data) => {
    const payload = Array.isArray(data) ? data : []
    onQueryChange?.(form)
    onResults?.(payload)
    if (!onResults) {
      navigate('/flights', { state: { results: payload, query: form } })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form.from.trim().toLowerCase() === form.to.trim().toLowerCase()) {
      const message = 'Origin and destination must be different.'
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
      const { data } = await searchFlights(form)
      if (Array.isArray(data) && data.length) {
        deliver(data)
        return
      }
      const local = searchFlightsLocal(form)
      if (!local.length) {
        const message = 'No flights found for this route. Try nearby cities or another date.'
        setError(message)
        onError?.(message)
      }
      deliver(local)
    } catch {
      const local = searchFlightsLocal(form)
      if (local.length) {
        deliver(local)
        return
      }
      const message = 'No flights found for this route. Try nearby cities or another date.'
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
        <PlaneTakeoff className="w-5 h-5 text-gold" />
        <h3 className="font-heading font-semibold text-xl text-navy">Find Your Flight</h3>
      </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-charcoal/60 mb-1.5 flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> From</label>
          <input
            value={form.from}
            onChange={(e) => setForm({ ...form, from: e.target.value })}
            placeholder="City or airport (e.g. Delhi)"
            list="flight-cities"
            required
            className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-charcoal/60 mb-1.5 flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> To</label>
          <input
            value={form.to}
            onChange={(e) => setForm({ ...form, to: e.target.value })}
            placeholder="City or airport (e.g. Goa)"
            list="flight-cities"
            required
            className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
          />
          <datalist id="flight-cities">
            {flightCities.map((city) => (
              <option key={city} value={city} />
            ))}
          </datalist>
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
        {error && <p className="sm:col-span-2 text-xs text-charcoal/50 text-center">{error}</p>}
      </form>
    </div>
  )
}
