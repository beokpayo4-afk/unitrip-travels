import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { tourPackages } from '../data/seedData.js'
import { createBooking } from '../api/bookings.js'
import { useAuth } from '../context/AuthContext.jsx'
import EmptyState from '../components/EmptyState.jsx'
import { CheckCircle2 } from 'lucide-react'

export default function BookTour() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const tour = tourPackages.find((t) => t.id === id)

  const [form, setForm] = useState({
    travelDate: '', travelers: 1, name: user?.name || '', email: user?.email || '', phone: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState(null)

  if (!tour) return <EmptyState title="Tour not found" />

  const total = tour.price * Number(form.travelers || 1)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      await createBooking({ tourId: tour.id, ...form, total })
    } catch (err) {
      // demo fallback: store locally so My Bookings can display it
      const existing = JSON.parse(localStorage.getItem('unitrip_demo_bookings') || '[]')
      existing.push({
        id: `demo-${Date.now()}`, tourTitle: tour.title, tourImage: tour.image,
        travelDate: form.travelDate, travelers: form.travelers, total, status: 'Pending',
        createdAt: new Date().toISOString(),
      })
      localStorage.setItem('unitrip_demo_bookings', JSON.stringify(existing))
    } finally {
      setStatus('success')
      setSubmitting(false)
    }
  }

  if (status === 'success') {
    return (
      <div className="py-20 container-x max-w-lg mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-card p-10">
          <CheckCircle2 className="w-14 h-14 text-green-600 mx-auto mb-4" />
          <h1 className="font-heading font-bold text-2xl text-navy mb-2">Booking Request Submitted!</h1>
          <p className="text-charcoal/60 mb-6">Your booking for <strong>{tour.title}</strong> is pending confirmation. Our team will contact you shortly.</p>
          <button onClick={() => navigate('/my-bookings')} className="btn-primary">View My Bookings</button>
        </div>
      </div>
    )
  }

  return (
    <div className="py-16">
      <div className="container-x grid grid-cols-1 lg:grid-cols-3 gap-10">
        <form onSubmit={handleSubmit} className="lg:col-span-2 bg-white rounded-2xl shadow-card p-6 sm:p-8 space-y-5">
          <h1 className="font-heading font-bold text-2xl text-navy mb-1">Complete Your Booking</h1>
          <p className="text-sm text-charcoal/60 mb-4">{tour.title} • {tour.duration}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-charcoal/80 mb-1.5 block">Travel Date</label>
              <input type="date" required value={form.travelDate} onChange={(e) => setForm({ ...form, travelDate: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" />
            </div>
            <div>
              <label className="text-sm font-medium text-charcoal/80 mb-1.5 block">Number of Travelers</label>
              <input type="number" min={1} required value={form.travelers} onChange={(e) => setForm({ ...form, travelers: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" />
            </div>
            <div>
              <label className="text-sm font-medium text-charcoal/80 mb-1.5 block">Full Name</label>
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" />
            </div>
            <div>
              <label className="text-sm font-medium text-charcoal/80 mb-1.5 block">Email</label>
              <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-medium text-charcoal/80 mb-1.5 block">Phone</label>
              <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" />
            </div>
          </div>
          <button type="submit" disabled={submitting} className="btn-primary w-full">{submitting ? 'Submitting...' : 'Confirm Booking Request'}</button>
        </form>

        <div>
          <div className="bg-white rounded-2xl shadow-card p-6 sticky top-24">
            <img src={tour.image} alt={tour.title} className="rounded-xl h-36 w-full object-cover mb-4" />
            <h3 className="font-heading font-semibold text-navy mb-1">{tour.title}</h3>
            <p className="text-xs text-charcoal/60 mb-4">{tour.destination}</p>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-charcoal/60">Price / person</span>
              <span className="font-semibold text-navy">₹{tour.price.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between text-sm mb-4">
              <span className="text-charcoal/60">Travelers</span>
              <span className="font-semibold text-navy">{form.travelers}</span>
            </div>
            <div className="border-t border-gray-100 pt-4 flex justify-between">
              <span className="font-semibold text-navy">Total</span>
              <span className="font-heading font-bold text-xl text-navy">₹{total.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
