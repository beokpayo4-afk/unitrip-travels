import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getMyBookings } from '../api/bookings.js'
import Loading from '../components/Loading.jsx'
import EmptyState from '../components/EmptyState.jsx'
import { Calendar, Users, IndianRupee } from 'lucide-react'

const statusColors = {
  Pending: 'bg-amber-100 text-amber-700',
  Confirmed: 'bg-green-100 text-green-700',
  Cancelled: 'bg-red-100 text-red-700',
  Completed: 'bg-blue-100 text-blue-700',
}

export default function MyBookings() {
  const [bookings, setBookings] = useState(null)
  const [error, setError] = useState(false)

  const load = async () => {
    setError(false)
    try {
      const { data } = await getMyBookings()
      setBookings(data)
    } catch (err) {
      // demo fallback: use locally stored bookings so the flow is browsable
      const demo = JSON.parse(localStorage.getItem('unitrip_demo_bookings') || '[]')
      setBookings(demo)
    }
  }

  useEffect(() => { load() }, [])

  if (bookings === null) return <Loading label="Loading your bookings..." />

  return (
    <div className="py-16">
      <div className="container-x max-w-3xl mx-auto">
        <h1 className="font-heading font-bold text-3xl text-navy mb-2">My Bookings</h1>
        <p className="text-charcoal/60 mb-8">Track the status of your booking requests.</p>

        {bookings.length === 0 ? (
          <EmptyState title="No bookings yet" description="Once you book a tour, it will appear here.">
          </EmptyState>
        ) : (
          <div className="space-y-4">
            {bookings.map((b) => (
              <div key={b.id} className="bg-white rounded-2xl shadow-soft p-5 flex flex-col sm:flex-row gap-4">
                <img src={b.tourImage} alt={b.tourTitle} className="w-full sm:w-32 h-32 object-cover rounded-xl" />
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-heading font-semibold text-navy">{b.tourTitle}</h3>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColors[b.status] || 'bg-gray-100 text-gray-700'}`}>{b.status}</span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs text-charcoal/60">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {b.travelDate}</span>
                    <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {b.travelers} traveler(s)</span>
                    <span className="flex items-center gap-1"><IndianRupee className="w-3.5 h-3.5" /> {Number(b.total).toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {bookings.length === 0 && (
          <div className="text-center mt-6">
            <Link to="/tour-packages" className="btn-primary">Browse Tour Packages</Link>
          </div>
        )}
      </div>
    </div>
  )
}
