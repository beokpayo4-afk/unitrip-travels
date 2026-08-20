import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MapPin, Ticket } from 'lucide-react'
import { allDestinations, placesForDestination, ticketSizeForDestination } from '../data/seedData.js'
import TouristPlacesGrid from '../components/TouristPlacesGrid.jsx'
import EmptyState from '../components/EmptyState.jsx'

export default function DestinationDetails() {
  const { id } = useParams()
  const [lightbox, setLightbox] = useState(null)
  const destination = allDestinations.find((d) => d.id === id)
  const places = placesForDestination(id)

  if (!destination) {
    return <EmptyState title="Destination not found" description="This destination may have been removed or the link is incorrect." />
  }

  const ticketSize = ticketSizeForDestination(destination)

  return (
    <div>
      <div className="h-[45vh] min-h-[320px] relative">
        <img src={destination.image} alt={destination.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-navy/20" />
        <div className="relative container-x h-full flex flex-col justify-end pb-8 text-white">
          <div className="flex items-center gap-1.5 text-sm text-white/80 mb-2">
            <MapPin className="w-4 h-4 text-gold" /> {destination.region === 'local' ? 'Local' : destination.region === 'india' ? 'India' : 'International'}
          </div>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl mb-2">{destination.name}</h1>
          <p className="text-white/85">{destination.tagline}</p>
        </div>
      </div>

      <div className="container-x py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <h2 className="font-heading font-semibold text-2xl text-navy mb-2">Tourist places in {destination.name}</h2>
          <p className="text-charcoal/70 mb-2">
            Top sights to visit — temples, lakes, forts, beaches and city icons included in Unitrip trips to {destination.name}.
          </p>
          <TouristPlacesGrid places={places} onSelect={setLightbox} title="" />
        </div>

        <div>
          <div className="bg-white rounded-2xl shadow-card p-6 sticky top-24">
            <p className="text-xs text-charcoal/50 mb-1">Packages from</p>
            <p className="font-heading font-bold text-3xl text-navy mb-3">
              ₹{destination.startingPrice.toLocaleString('en-IN')}
              <span className="text-sm font-normal text-charcoal/50">/person</span>
            </p>
            {ticketSize != null && (
              <p className="text-xs text-charcoal/60 mb-4 flex items-center gap-1">
                <Ticket className="w-3.5 h-3.5 text-gold" />
                {destination.distanceKm.toLocaleString('en-IN')} km · Ticket size {ticketSize}
              </p>
            )}
            <Link to={`/tour-packages?destination=${encodeURIComponent(destination.name)}`} className="btn-primary w-full mb-3">
              View Tours
            </Link>
            <Link to={`/hotels`} className="btn-navy w-full">Find Hotels</Link>
          </div>
        </div>
      </div>

      {lightbox && (
        <button
          type="button"
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 bg-navy/85 flex items-center justify-center p-4"
        >
          <div className="max-w-4xl w-full">
            <img src={lightbox.image} alt={lightbox.name} className="max-h-[75vh] w-full object-contain rounded-2xl" />
            <p className="text-white text-center mt-3 font-heading font-semibold">{lightbox.name}</p>
            {lightbox.note && <p className="text-white/80 text-center text-sm mt-1">{lightbox.note}</p>}
          </div>
        </button>
      )}
    </div>
  )
}
