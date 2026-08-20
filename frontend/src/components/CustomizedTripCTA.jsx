import { Link } from 'react-router-dom'
import { Sparkles } from 'lucide-react'

export default function CustomizedTripCTA() {
  return (
    <section className="py-16">
      <div className="container-x">
        <div className="bg-gradient-to-br from-navy to-navy-light rounded-3xl px-6 sm:px-14 py-14 text-center text-white relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gold/20 blur-3xl" />
          <Sparkles className="w-8 h-8 text-gold mx-auto mb-4" />
          <h2 className="font-heading font-bold text-2xl sm:text-3xl mb-3">Can't Find Your Perfect Trip?</h2>
          <p className="text-white/80 max-w-lg mx-auto mb-7">
            Tell us what you want, and we'll create a personalized travel experience for you.
          </p>
          <Link to="/customized-trip" className="btn-primary">Create My Trip</Link>
        </div>
      </div>
    </section>
  )
}
