import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Ticket, MapPin, Route } from 'lucide-react'
import { allDestinations, ticketDestinationGroups, ticketOrigin, ticketSizeForDestination, ticketSizes } from '../data/seedData.js'

export default function GroupTicketService() {
  const [destinationId, setDestinationId] = useState(allDestinations[0].id)
  const destination = useMemo(
    () => allDestinations.find((d) => d.id === destinationId) || allDestinations[0],
    [destinationId],
  )
  const ticketSize = ticketSizeForDestination(destination)

  return (
    <section className="py-20 bg-white">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="section-heading-eyebrow mb-3">Our Services</p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-4">
              Ticket Size Follows Destination Distance
            </h2>
            <p className="text-charcoal/60 leading-relaxed mb-6">
              Ticket size is for Local and India destinations only, from 100 to 1,000 based on distance from {ticketOrigin}. International trips have no ticket size.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="inline-flex items-center gap-2 bg-offwhite rounded-full px-4 py-2 text-sm text-navy font-medium">
                <MapPin className="w-4 h-4 text-gold" /> From {ticketOrigin}
              </span>
              <span className="inline-flex items-center gap-2 bg-offwhite rounded-full px-4 py-2 text-sm text-navy font-medium">
                <Route className="w-4 h-4 text-gold" /> Local 100–1,000 by km
              </span>
            </div>
            <Link to={`/group-tickets?destination=${destination.id}`} className="btn-primary">
              Request {ticketSize.toLocaleString('en-IN')} tickets for {destination.name}
            </Link>
          </div>

          <div className="bg-offwhite rounded-3xl p-6 sm:p-8 shadow-soft">
            <label className="text-sm font-medium text-charcoal/70 mb-2 block">Destination</label>
            <select
              value={destinationId}
              onChange={(e) => setDestinationId(e.target.value)}
              className="w-full border border-gray-200 bg-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 mb-6"
            >
              {ticketDestinationGroups.map((group) => (
                <optgroup key={group.key} label={group.label}>
                  {group.items.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.name} — {d.distanceKm} km
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>

            <div className="flex items-center gap-3 mb-5">
              <span className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center">
                <Ticket className="w-6 h-6 text-gold" />
              </span>
              <div>
                <p className="text-sm text-charcoal/50">Ticket size for this distance</p>
                <p className="font-heading font-bold text-2xl text-navy">{ticketSize.toLocaleString('en-IN')} tickets</p>
              </div>
            </div>

            <p className="text-sm text-charcoal/60 mb-4">
              {destination.name} is about <strong>{destination.distanceKm.toLocaleString('en-IN')} km</strong> from {ticketOrigin}.
            </p>

            <input
              type="range"
              min={100}
              max={1000}
              step={100}
              value={ticketSize}
              readOnly
              className="w-full accent-gold mb-3 pointer-events-none"
              aria-label="Ticket size from distance"
            />
            <div className="flex justify-between text-xs text-charcoal/50 mb-4">
              <span>100 nearby local</span>
              <span>1,000 farthest</span>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {ticketSizes.map((size) => (
                <span
                  key={size}
                  className={`rounded-xl py-2 text-xs sm:text-sm font-semibold text-center ${
                    ticketSize === size ? 'bg-gold text-white shadow-soft' : 'bg-white text-charcoal/40'
                  }`}
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
