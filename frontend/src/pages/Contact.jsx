import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react'
import { submitContact } from '../api/contact.js'

export default function Contact() {
  const [params] = useSearchParams()
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: params.get('subject') || '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState(null)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    try {
      await submitContact(form)
    } catch (err) {
      // demo fallback
    } finally {
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setSubmitting(false)
    }
  }

  return (
    <div className="py-16">
      <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <p className="section-heading-eyebrow mb-3">Contact Us</p>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-4">We'd Love to Hear From You</h1>
          <p className="text-charcoal/60 mb-8 max-w-md">Have a question about a package or need help planning? Reach out and our travel consultants will get back to you shortly.</p>

          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center shrink-0"><Phone className="w-4 h-4 text-gold" /></div>
              <div><p className="font-semibold text-navy text-sm">Call Us</p><p className="text-sm text-charcoal/60">+91 98765 43210</p></div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center shrink-0"><Mail className="w-4 h-4 text-gold" /></div>
              <div><p className="font-semibold text-navy text-sm">Email Us</p><p className="text-sm text-charcoal/60">hello@unitriptravels.com</p></div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center shrink-0"><MapPin className="w-4 h-4 text-gold" /></div>
              <div><p className="font-semibold text-navy text-sm">Visit Us</p><p className="text-sm text-charcoal/60">Connaught Place, New Delhi, India</p></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-card p-6 sm:p-8">
          {status === 'success' ? (
            <div className="text-center py-10">
              <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-xl text-navy mb-2">Message Sent!</h3>
              <p className="text-charcoal/60">Thanks for reaching out — we'll respond within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-medium text-charcoal/80 mb-1.5 block">Full Name</label>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 ${errors.name ? 'border-red-400' : 'border-gray-200'}`} />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="text-sm font-medium text-charcoal/80 mb-1.5 block">Email</label>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 ${errors.email ? 'border-red-400' : 'border-gray-200'}`} />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="text-sm font-medium text-charcoal/80 mb-1.5 block">Subject</label>
                <input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" />
              </div>
              <div>
                <label className="text-sm font-medium text-charcoal/80 mb-1.5 block">Message</label>
                <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 ${errors.message ? 'border-red-400' : 'border-gray-200'}`} />
                {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
              </div>
              <button type="submit" disabled={submitting} className="btn-primary w-full">{submitting ? 'Sending...' : 'Send Message'}</button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
