import { Link } from 'react-router-dom'
import { Star, Clock, MapPin } from 'lucide-react'

export default function TourCard({ tour }) {
  return (
    <div className="group rounded-2xl overflow-hidden bg-white shadow-soft hover:shadow-card transition-all duration-300 flex flex-col">
      <Link to={`/tour/${tour.id}`} className="h-52 overflow-hidden block">
        <img
          src={tour.image}
          alt={tour.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </Link>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-1 text-xs text-charcoal/60 mb-2">
          <MapPin className="w-3.5 h-3.5 text-gold" /> {tour.destination}
        </div>
        <Link to={`/tour/${tour.id}`}>
          <h3 className="font-heading font-semibold text-lg text-navy mb-2 hover:text-gold transition-colors">{tour.title}</h3>
        </Link>
        <div className="flex items-center gap-4 text-xs text-charcoal/60 mb-3">
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {tour.duration}</span>
          <span className="flex items-center gap-1 text-gold font-medium"><Star className="w-3.5 h-3.5 fill-gold" /> {tour.rating}</span>
        </div>
        <p className="text-sm text-charcoal/60 mb-4 line-clamp-2">{tour.description}</p>
        <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-100">
          <div>
            <p className="text-[11px] text-charcoal/50 leading-none mb-1">Starting from</p>
            <p className="font-heading font-bold text-navy">₹{tour.price.toLocaleString('en-IN')}<span className="text-xs font-normal text-charcoal/50">/person</span></p>
          </div>
          <div className="flex gap-2">
            <Link to={`/tour/${tour.id}`} className="text-xs font-semibold text-navy border border-navy/20 hover:border-navy px-3 py-2 rounded-full transition-colors">
              View
            </Link>
            <Link to={`/book/${tour.id}`} className="text-xs font-semibold bg-gold hover:bg-gold-dark text-white px-3 py-2 rounded-full transition-colors">
              Book
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
