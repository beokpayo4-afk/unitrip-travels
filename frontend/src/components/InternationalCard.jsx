import { Link } from 'react-router-dom'

export default function InternationalCard({ destination }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 h-72">
      <img
        src={destination.image}
        alt={`${destination.name} international destination`}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
        <h3 className="font-heading font-semibold text-xl mb-1">{destination.name}</h3>
        <p className="text-sm text-white/80 mb-3">{destination.tagline}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold">From ₹{destination.startingPrice.toLocaleString('en-IN')}</span>
          <Link to={`/tour-packages?destination=${destination.name}`} className="text-xs font-semibold bg-white/15 hover:bg-gold px-3 py-1.5 rounded-full transition-colors">
            Explore
          </Link>
        </div>
      </div>
    </div>
  )
}
