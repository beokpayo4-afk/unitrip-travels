import { Link } from 'react-router-dom'
import { Compass } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="py-24 text-center container-x">
      <Compass className="w-14 h-14 text-gold mx-auto mb-5" />
      <h1 className="font-heading font-bold text-4xl text-navy mb-3">404 — Page Not Found</h1>
      <p className="text-charcoal/60 mb-8">Looks like this trail doesn't lead anywhere. Let's get you back on track.</p>
      <Link to="/" className="btn-primary">Back to Home</Link>
    </div>
  )
}
