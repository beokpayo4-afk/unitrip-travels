import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const res = await register(form)
    setLoading(false)
    if (res.success) navigate('/')
    else setError(res.error)
  }

  return (
    <div className="py-20">
      <div className="container-x max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-card p-8">
          <h1 className="font-heading font-bold text-2xl text-navy mb-1 text-center">Create Account</h1>
          <p className="text-sm text-charcoal/60 text-center mb-7">Join Unitrip Travels to book and manage trips</p>
          {error && <p className="text-sm text-red-500 mb-4 text-center">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
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
            <div>
              <label className="text-sm font-medium text-charcoal/80 mb-1.5 block">Phone</label>
              <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" />
            </div>
            <div>
              <label className="text-sm font-medium text-charcoal/80 mb-1.5 block">Password</label>
              <input type="password" required minLength={6} value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" />
            </div>
            <button type="submit" disabled={loading} className="btn-primary w-full">{loading ? 'Creating account...' : 'Register'}</button>
          </form>
          <p className="text-sm text-charcoal/60 text-center mt-6">
            Already have an account? <Link to="/login" className="text-gold font-semibold">Login</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
