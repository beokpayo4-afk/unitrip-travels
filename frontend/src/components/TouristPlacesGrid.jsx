import { MapPin } from 'lucide-react'

export default function TouristPlacesGrid({ places, onSelect, title = 'Places to Visit' }) {
  if (!places?.length) return null

  return (
    <div className="mt-8">
      {title ? <h3 className="font-heading font-semibold text-xl text-navy mb-4">{title}</h3> : null}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {places.map((place) => (
          <button
            key={`${place.destinationId || ''}-${place.name}`}
            type="button"
            onClick={() => onSelect?.(place)}
            className="group text-left rounded-2xl overflow-hidden bg-white shadow-soft hover:shadow-card transition-shadow"
          >
            <div className="h-36 sm:h-40 overflow-hidden">
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-3">
              <p className="font-heading font-semibold text-sm text-navy flex items-start gap-1">
                <MapPin className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                {place.name}
              </p>
              {place.note && <p className="text-xs text-charcoal/60 mt-1 line-clamp-2">{place.note}</p>}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
