import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { ticketSizeForDestination } from '../data/seedData.js'

export default function DestinationCard({ destination }) {
  return (
    <Link
      to={`/destinations/${destination.id}`}
      className="group relative rounded-2xl overflow-hidden bg-white shadow-soft hover:shadow-card transition-all duration-300 block"
    >
      <div className="h-56 overflow-hidden">
        <img
          src={destination.image}
          alt={`${destination.name} travel destination`}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-heading font-semibold text-lg text-navy">{destination.name}</h3>
          <ArrowUpRight className="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <p className="text-sm text-charcoal/60 mb-2">{destination.tagline}</p>
        {destination.startingPrice && (
          <p className="text-sm font-semibold text-navy">From ₹{destination.startingPrice.toLocaleString('en-IN')}</p>
        )}
        {destination.distanceKm != null && destination.region !== 'international' && (
          <p className="text-xs text-charcoal/50 mt-1">
            {destination.distanceKm.toLocaleString('en-IN')} km · Ticket size {ticketSizeForDestination(destination)}
          </p>
        )}
      </div>
    </Link>
  )
}
