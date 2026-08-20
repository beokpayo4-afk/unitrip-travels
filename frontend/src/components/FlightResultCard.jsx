import { PlaneTakeoff, PlaneLanding, Clock, Users } from 'lucide-react'

function formatTime(iso) {
  if (!iso) return '—'
  return new Date(iso).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
}

function formatDuration(iso) {
  // Amadeus returns ISO 8601 durations like "PT2H15M"
  if (!iso) return ''
  const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?/)
  if (!match) return iso
  const [, h, m] = match
  return `${h ? `${h}h ` : ''}${m ? `${m}m` : ''}`.trim()
}

export default function FlightResultCard({ flight }) {
  return (
    <div className="bg-white rounded-2xl shadow-soft hover:shadow-card transition-shadow p-5 flex flex-col sm:flex-row sm:items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center shrink-0">
        <PlaneTakeoff className="w-5 h-5 text-gold" />
      </div>

      <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-4 items-center">
        <div>
          <p className="text-[11px] text-charcoal/50 mb-0.5">Departure</p>
          <p className="font-heading font-semibold text-navy">{formatTime(flight.departureTime)}</p>
          <p className="text-xs text-charcoal/60">{flight.departureAirport}</p>
        </div>
        <div>
          <p className="text-[11px] text-charcoal/50 mb-0.5 flex items-center gap-1"><Clock className="w-3 h-3" /> Duration</p>
          <p className="font-heading font-semibold text-navy">{formatDuration(flight.duration)}</p>
          <p className="text-xs text-charcoal/60">{flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop(s)`}</p>
        </div>
        <div>
          <p className="text-[11px] text-charcoal/50 mb-0.5 flex items-center gap-1"><PlaneLanding className="w-3 h-3" /> Arrival</p>
          <p className="font-heading font-semibold text-navy">{formatTime(flight.arrivalTime)}</p>
          <p className="text-xs text-charcoal/60">{flight.arrivalAirport}</p>
        </div>
        <div>
          <p className="text-[11px] text-charcoal/50 mb-0.5 flex items-center gap-1"><Users className="w-3 h-3" /> Seats left</p>
          <p className="font-heading font-semibold text-navy">{flight.seatsAvailable ?? '—'}</p>
          <p className="text-xs text-charcoal/60">Airline {flight.airline}</p>
        </div>
      </div>

      <div className="text-right shrink-0">
        <p className="text-[11px] text-charcoal/50">Price</p>
        <p className="font-heading font-bold text-xl text-navy">
          {flight.currency === 'INR' ? '₹' : `${flight.currency} `}{Number(flight.price).toLocaleString('en-IN')}
        </p>
        <button className="mt-1 text-xs font-semibold bg-gold hover:bg-gold-dark text-white px-4 py-2 rounded-full transition-colors">
          Select
        </button>
      </div>
    </div>
  )
}
