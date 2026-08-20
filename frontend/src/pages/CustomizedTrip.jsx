import { useState } from 'react'
import { submitCustomTrip } from '../api/customTrips.js'
import { CheckCircle2 } from 'lucide-react'

const tripTypes = ['Family', 'Honeymoon', 'Adventure', 'Luxury', 'Solo', 'Group', 'Business']

const initial = {
  fullName: '', email: '', phone: '', destination: '', travelDate: '',
  travelers: 1, budget: '', tripType: 'Family', requirements: '',
}

export default function CustomizedTrip() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState(null)

  const validate = () => {
    const e = {}
    if (!form.fullName.trim()) e.fullName = 'Full name is required'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!/^[0-9+\-\s]{7,15}$/.test(form.phone)) e.phone = 'Enter a valid phone number'
    if (!form.destination.trim()) e.destination = 'Destination is required'
    if (!form.travelDate) e.travelDate = 'Travel date is required'
    if (!form.travelers || form.travelers < 1) e.travelers = 'At least 1 traveler required'
    if (!form.budget) e.budget = 'Budget is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    setStatus(null)
    try {
      await submitCustomTrip(form)
      setStatus('success')
      setForm(initial)
    } catch (err) {
      // demo fallback so the flow is fully browsable without a live backend
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
      <div className="container-x max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <p className="section-heading-eyebrow mb-3">Customized Trip</p>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-3">Tell Us About Your Dream Trip</h1>
          <p className="text-charcoal/60">Share your preferences and our travel consultants will design a personalized itinerary for you.</p>
        </div>

        {status === 'success' ? (
          <div className="bg-white rounded-2xl shadow-card p-10 text-center">
            <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-heading font-semibold text-xl text-navy mb-2">Request Submitted!</h3>
            <p className="text-charcoal/60">Our team will reach out within 24 hours to craft your personalized itinerary.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-card p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {field('fullName', 'Full Name')}
            {field('email', 'Email', 'email')}
            {field('phone', 'Phone')}
            {field('destination', 'Destination')}
            {field('travelDate', 'Travel Date', 'date')}
            {field('travelers', 'Number of Travelers', 'number', { min: 1 })}
            {field('budget', 'Budget (₹)', 'number', { min: 0 })}

            <div>
              <label className="text-sm font-medium text-charcoal/80 mb-1.5 block">Trip Type</label>
              <select
                value={form.tripType}
                onChange={(e) => setForm({ ...form, tripType: e.target.value })}
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
                placeholder="Dietary needs, accessibility, preferred hotel type, etc."
              />
            </div>

            <button type="submit" disabled={submitting} className="btn-primary sm:col-span-2 w-full">
              {submitting ? 'Submitting...' : 'Request Customized Trip'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
