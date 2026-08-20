import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CheckCircle2, Ticket } from 'lucide-react'
import { allDestinations, ticketDestinationGroups, ticketOrigin, ticketSizeForDestination, ticketSizes } from '../data/seedData.js'

const tripTypes = ['Flights', 'Tour Packages', 'Hotels', 'Transfers', 'Mixed / Custom']

const initial = {
  fullName: '', email: '', phone: '', travelDate: '',
  serviceType: 'Flights', requirements: '',
}

export default function GroupTickets() {
  const [params] = useSearchParams()
  const presetId = params.get('destination')
  const startingDest = allDestinations.find((d) => d.id === presetId && d.region !== 'international') || allDestinations[0]

  const [destinationId, setDestinationId] = useState(startingDest.id)
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState(null)

  const destination = useMemo(
    () => allDestinations.find((d) => d.id === destinationId) || allDestinations[0],
    [destinationId],
  )
  const ticketSize = ticketSizeForDestination(destination)
  const sizeLabel = ticketSize.toLocaleString('en-IN')

  const validate = () => {
    const e = {}
    if (!form.fullName.trim()) e.fullName = 'Full name is required'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!/^[0-9+\-\s]{7,15}$/.test(form.phone)) e.phone = 'Enter a valid phone number'
    if (!form.travelDate) e.travelDate = 'Travel date is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    try {
      const existing = JSON.parse(localStorage.getItem('unitrip_group_ticket_requests') || '[]')
      existing.push({
        id: `gt-${Date.now()}`,
        ...form,
        destination: destination.name,
        destinationId: destination.id,
        distanceKm: destination.distanceKm,
        ticketSize,
        createdAt: new Date().toISOString(),
      })
      localStorage.setItem('unitrip_group_ticket_requests', JSON.stringify(existing))
      setStatus('success')
      setForm(initial)
    } finally {
      setSubmitting(false)
    }
  }

  const field = (name, label, type = 'text', props = {}) => (
    <div>
      <label className="text-sm font-medium text-charcoal/80 mb-1.5 block">{label}</label>
      <input
        type={type}
        value={form[name]}
        onChange={(e) => setForm({ ...form, [name]: e.target.value })}
        className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 ${errors[name] ? 'border-red-400' : 'border-gray-200'}`}
        {...props}
      />
      {errors[name] && <p className="text-xs text-red-500 mt-1">{errors[name]}</p>}
    </div>
  )

  return (
    <div className="py-16">
      <div className="container-x max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="section-heading-eyebrow mb-3">Group Ticket Service</p>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-3">
            Ticket Size by Destination Distance
          </h1>
          <p className="text-charcoal/60 max-w-xl mx-auto">
            Ticket size applies to Local and India destinations only, from 100 to 1,000 based on distance from {ticketOrigin}. International destinations are not included.
          </p>
        </div>

        {status === 'success' ? (
          <div className="bg-white rounded-2xl shadow-card p-10 text-center">
            <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-heading font-semibold text-xl text-navy mb-2">Request Submitted!</h3>
            <p className="text-charcoal/60">
              We received your request for <strong>{sizeLabel} tickets</strong> to <strong>{destination.name}</strong> ({destination.distanceKm.toLocaleString('en-IN')} km from {ticketOrigin}).
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-card p-6 sm:p-8 space-y-6">
            <div className="rounded-2xl bg-offwhite p-5">
              <label className="text-sm font-medium text-charcoal/80 mb-1.5 block">Destination</label>
              <select
                value={destinationId}
                onChange={(e) => setDestinationId(e.target.value)}
                className="w-full border border-gray-200 bg-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 mb-5"
              >
                {ticketDestinationGroups.map((group) => (
                  <optgroup key={group.key} label={group.label}>
                    {group.items.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.name} — {d.distanceKm.toLocaleString('en-IN')} km from {ticketOrigin}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>

              <div className="flex items-center gap-3 mb-4">
                <span className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center">
                  <Ticket className="w-5 h-5 text-gold" />
                </span>
                <div>
                  <p className="text-sm text-charcoal/50">Ticket size for this distance</p>
                  <p className="font-heading font-bold text-xl text-navy">{sizeLabel} tickets</p>
                </div>
              </div>
              <p className="text-sm text-charcoal/60 mb-3">
                {destination.region === 'local' ? 'Local trip' : 'India trip'}: {destination.name} is about <strong>{destination.distanceKm.toLocaleString('en-IN')} km</strong> from {ticketOrigin}, so the ticket size is set automatically.
              </p>
              <input
                type="range"
                min={100}
                max={1000}
                step={100}
                value={ticketSize}
                readOnly
                className="w-full accent-gold mb-3 pointer-events-none"
                aria-label="Ticket size from destination distance"
              />
              <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                {ticketSizes.map((size) => (
                  <span
                    key={size}
                    className={`rounded-lg py-1.5 text-xs font-semibold text-center ${
                      ticketSize === size ? 'bg-gold text-white' : 'bg-white text-charcoal/35'
                    }`}
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {field('fullName', 'Full Name')}
              {field('email', 'Email', 'email')}
              {field('phone', 'Phone')}
              {field('travelDate', 'Travel Date', 'date')}
              <div>
                <label className="text-sm font-medium text-charcoal/80 mb-1.5 block">Service Type</label>
                <select
                  value={form.serviceType}
                  onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                >
                  {tripTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-charcoal/80 mb-1.5 block">Special Requirements</label>
                <textarea
                  rows={4}
                  value={form.requirements}
                  onChange={(e) => setForm({ ...form, requirements: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                  placeholder="Airline preference, seating, hotel category, pickup city, etc."
                />
              </div>
            </div>

            <button type="submit" disabled={submitting} className="btn-primary w-full">
              {submitting ? 'Submitting...' : `Request ${sizeLabel} Tickets to ${destination.name}`}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
