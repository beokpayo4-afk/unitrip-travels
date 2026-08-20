import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CheckCircle2, Ticket } from 'lucide-react'
import { ticketSizes } from '../data/seedData.js'

const tripTypes = ['Flights', 'Tour Packages', 'Hotels', 'Transfers', 'Mixed / Custom']

const initial = {
  fullName: '', email: '', phone: '', destination: '', travelDate: '',
  serviceType: 'Flights', requirements: '',
}

export default function GroupTickets() {
  const [params] = useSearchParams()
  const preset = Number(params.get('size'))
  const startingSize = ticketSizes.includes(preset) ? preset : 100

  const [ticketSize, setTicketSize] = useState(startingSize)
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState(null)

  const sizeLabel = useMemo(() => ticketSize.toLocaleString('en-IN'), [ticketSize])

  const validate = () => {
    const e = {}
    if (!form.fullName.trim()) e.fullName = 'Full name is required'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!/^[0-9+\-\s]{7,15}$/.test(form.phone)) e.phone = 'Enter a valid phone number'
    if (!form.destination.trim()) e.destination = 'Destination is required'
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
            Book 100 to 1,000 Tickets
          </h1>
          <p className="text-charcoal/60 max-w-xl mx-auto">
            Choose your ticket size and tell us the trip details. Our team will quote bulk flights, tours, or stays for your group.
          </p>
        </div>

        {status === 'success' ? (
          <div className="bg-white rounded-2xl shadow-card p-10 text-center">
            <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-heading font-semibold text-xl text-navy mb-2">Request Submitted!</h3>
            <p className="text-charcoal/60">
              We received your request for <strong>{sizeLabel} tickets</strong>. A consultant will contact you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-card p-6 sm:p-8 space-y-6">
            <div className="rounded-2xl bg-offwhite p-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center">
                  <Ticket className="w-5 h-5 text-gold" />
                </span>
                <div>
                  <p className="text-sm text-charcoal/50">Ticket size</p>
                  <p className="font-heading font-bold text-xl text-navy">{sizeLabel} tickets</p>
                </div>
              </div>
              <input
                type="range"
                min={100}
                max={1000}
                step={100}
                value={ticketSize}
                onChange={(e) => setTicketSize(Number(e.target.value))}
                className="w-full accent-gold mb-4"
                aria-label="Ticket size from 100 to 1000"
              />
              <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                {ticketSizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setTicketSize(size)}
                    className={`rounded-lg py-1.5 text-xs font-semibold transition-all ${
                      ticketSize === size ? 'bg-gold text-white' : 'bg-white text-navy hover:bg-navy hover:text-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {field('fullName', 'Full Name')}
              {field('email', 'Email', 'email')}
              {field('phone', 'Phone')}
              {field('destination', 'Destination / Route')}
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
              {submitting ? 'Submitting...' : `Request ${sizeLabel} Tickets`}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
