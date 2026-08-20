import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Clock, MapPin, CheckCircle2, XCircle } from 'lucide-react'
import { tourPackages, tourItinerary, faqs } from '../data/seedData.js'
import EmptyState from '../components/EmptyState.jsx'

const tabs = ['Overview', 'Itinerary', 'Inclusions', 'Exclusions', 'Reviews', 'FAQ']

const inclusions = ['Hotel accommodation as per itinerary', 'Daily breakfast', 'All sightseeing transfers', 'Professional tour guide', 'All applicable taxes']
const exclusions = ['Airfare / train fare', 'Personal expenses', 'Travel insurance', 'Meals not mentioned in itinerary', 'Optional activities']

export default function TourDetails() {
  const { id } = useParams()
  const [tab, setTab] = useState('Overview')
  const tour = tourPackages.find((t) => t.id === id)

  if (!tour) return <EmptyState title="Tour not found" description="This tour package may have been removed or the link is incorrect." />

  const itinerary = tourItinerary[id] || tourItinerary.t1

  return (
    <div>
      <div className="h-[45vh] min-h-[320px] relative">
        <img src={tour.image} alt={tour.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-navy/20" />
        <div className="relative container-x h-full flex flex-col justify-end pb-8 text-white">
          <div className="flex items-center gap-1.5 text-sm text-white/80 mb-2"><MapPin className="w-4 h-4 text-gold" /> {tour.destination}</div>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl mb-2">{tour.title}</h1>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {tour.duration}</span>
            <span className="flex items-center gap-1 text-gold"><Star className="w-4 h-4 fill-gold" /> {tour.rating} Rating</span>
          </div>
        </div>
      </div>

      <div className="container-x py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <div className="flex gap-2 overflow-x-auto no-scrollbar border-b border-gray-200 mb-8">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-4 py-3 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors shrink-0 ${tab === t ? 'border-gold text-navy' : 'border-transparent text-charcoal/50 hover:text-navy'}`}
              >
                {t}
              </button>
            ))}
          </div>

          {tab === 'Overview' && (
            <div>
              <h3 className="font-heading font-semibold text-xl text-navy mb-3">Trip Overview</h3>
              <p className="text-charcoal/70 leading-relaxed">{tour.description} This carefully curated {tour.duration.toLowerCase()} package covers {tour.destination}, blending comfortable stays, guided sightseeing and authentic local experiences for a well-rounded trip.</p>
            </div>
          )}

          {tab === 'Itinerary' && (
            <div className="space-y-6">
              {itinerary.map((day) => (
                <div key={day.day} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-heading font-bold text-sm shrink-0">D{day.day}</div>
                  <div>
                    <h4 className="font-heading font-semibold text-navy">{day.title}</h4>
                    <p className="text-sm text-charcoal/60 mt-1">{day.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === 'Inclusions' && (
            <ul className="space-y-3">
              {inclusions.map((i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-charcoal/70">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /> {i}
                </li>
              ))}
            </ul>
          )}

          {tab === 'Exclusions' && (
            <ul className="space-y-3">
              {exclusions.map((i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-charcoal/70">
                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" /> {i}
                </li>
              ))}
            </ul>
          )}

          {tab === 'Reviews' && (
            <div className="text-center py-10 text-charcoal/50 text-sm">
              Reviews for this tour will appear here once travelers share their experience.
            </div>
          )}

          {tab === 'FAQ' && (
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="border border-gray-200 rounded-xl p-4">
                  <p className="font-semibold text-navy text-sm mb-1">{f.q}</p>
                  <p className="text-sm text-charcoal/60">{f.a}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <div className="bg-white rounded-2xl shadow-card p-6 sticky top-24">
            <p className="text-xs text-charcoal/50 mb-1">Starting from</p>
            <p className="font-heading font-bold text-3xl text-navy mb-5">₹{tour.price.toLocaleString('en-IN')}<span className="text-sm font-normal text-charcoal/50">/person</span></p>
            <Link to={`/book/${tour.id}`} className="btn-primary w-full mb-3">Book Now</Link>
            <Link to="/customized-trip" className="btn-navy w-full">Customize</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
