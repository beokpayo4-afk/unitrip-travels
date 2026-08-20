import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MapPin, Calendar, Users, Compass, Search } from 'lucide-react'

const travelTypes = ['Tour Packages', 'Hotels', 'Flights', 'India Destinations', 'International Trips', 'Customized Trips']

const typeToRoute = {
  'Tour Packages': '/tour-packages',
  'Hotels': '/hotels',
  'Flights': '/flights',
  'India Destinations': '/destinations/india',
  'International Trips': '/destinations/international',
  'Customized Trips': '/customized-trip',
}

export default function SearchPlanner() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ destination: '', date: '', travelers: 1, type: 'Tour Packages' })

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(typeToRoute[form.type] || '/tour-packages')
  }

  return (
    <section className="relative z-10 -mt-16 sm:-mt-20">
      <div className="container-x">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-card p-5 sm:p-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end"
        >
          <div className="lg:col-span-1">
            <label className="text-xs font-semibold text-charcoal/60 mb-1.5 flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Destination</label>
            <input
              value={form.destination}
              onChange={(e) => setForm({ ...form, destination: e.target.value })}
              placeholder="Where to?"
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-charcoal/60 mb-1.5 flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> Travel Date</label>
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-charcoal/60 mb-1.5 flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> Travelers</label>
            <input
              type="number"
              min={1}
              value={form.travelers}
              onChange={(e) => setForm({ ...form, travelers: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-charcoal/60 mb-1.5 flex items-center gap-1.5"><Compass className="w-3.5 h-3.5" /> Travel Type</label>
            <select
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
            >
              {travelTypes.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <button type="submit" className="btn-primary w-full">
            <Search className="w-4 h-4" /> Search Trips
          </button>
        </form>
      </div>
    </section>
  )
}
