import { Link } from 'react-router-dom'
import { MapPin, Star } from 'lucide-react'

export default function HotelResultCard({ hotel, nights = 1 }) {
  const perNight = Number(hotel.pricePerNight) || 0
  const total = perNight * Math.max(1, nights)
  const currency = hotel.currency && hotel.currency !== 'INR' ? `${hotel.currency} ` : '₹'

  return (
    <article className="bg-white rounded-2xl shadow-soft hover:shadow-card transition-shadow overflow-hidden flex flex-col sm:flex-row">
      <div className="sm:w-56 h-44 sm:h-auto shrink-0 overflow-hidden bg-navy/5">
        {hotel.image ? (
          <img src={hotel.image} alt={hotel.name} loading="lazy" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full min-h-[11rem] bg-navy/10" />
        )}
      </div>
      <div className="p-5 flex flex-col flex-1 gap-3">
        <div>
          <h3 className="font-heading font-semibold text-lg text-navy">{hotel.name}</h3>
          <p className="text-xs text-charcoal/60 mt-1 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-gold" />
            {[hotel.address, hotel.city].filter(Boolean).join(' · ')}
          </p>
        </div>
        {hotel.rating != null && (
          <p className="text-xs text-gold font-medium flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-gold" /> {Number(hotel.rating).toFixed(1)}
          </p>
        )}
        <div className="mt-auto flex items-end justify-between gap-3 pt-2 border-t border-gray-100">
          <div>
            {perNight > 0 ? (
              <>
                <p className="text-[11px] text-charcoal/50 leading-none mb-1">From</p>
                <p className="font-heading font-bold text-navy">
                  {currency}{perNight.toLocaleString('en-IN')}
                  <span className="text-xs font-normal text-charcoal/50">/night</span>
                </p>
                {nights > 1 && (
                  <p className="text-[11px] text-charcoal/50 mt-0.5">
                    {currency}{total.toLocaleString('en-IN')} for {nights} nights
                  </p>
                )}
              </>
            ) : (
              <p className="font-heading font-semibold text-navy">Price on request</p>
            )}
          </div>
          <Link
            to={`/contact?subject=${encodeURIComponent(`Hotel enquiry: ${hotel.name}, ${hotel.city}`)}`}
            className="text-xs font-semibold bg-gold hover:bg-gold-dark text-white px-4 py-2 rounded-full transition-colors"
          >
            Enquire
          </Link>
        </div>
      </div>
    </article>
  )
}
