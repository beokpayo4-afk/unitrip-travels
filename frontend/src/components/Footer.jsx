import { Link } from 'react-router-dom'
import { Instagram, Facebook, Youtube, Linkedin, Plane, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="container-x py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
              <Plane className="w-5 h-5 text-gold" />
            </span>
            <span className="font-heading font-bold text-lg text-white">UNITRIP <span className="text-gold">TRAVELS</span></span>
          </div>
          <p className="text-sm leading-relaxed">
            Your trusted travel partner for curated tours, comfortable stays and seamless journeys across India and around the world.
          </p>
          <div className="flex gap-3 mt-5">
            {[Instagram, Facebook, Youtube, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-heading font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {[
              ['Home', '/'], ['About', '/about'], ['Destinations', '/destinations'],
              ['Tour Packages', '/tour-packages'], ['Hotels', '/hotels'], ['Flights', '/flights'],
              ['Group Tickets', '/group-tickets'], ['Contact', '/contact'],
            ].map(([label, to]) => (
              <li key={to}><Link to={to} className="hover:text-gold transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-heading font-semibold mb-4">Popular Destinations</h4>
          <ul className="space-y-2.5 text-sm">
            {['Rajasthan', 'Goa', 'Kerala', 'Kashmir', 'Dubai', 'Bali', 'Thailand', 'Maldives'].map((d) => (
              <li key={d}><Link to="/destinations/popular" className="hover:text-gold transition-colors">{d}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-heading font-semibold mb-4">Support</h4>
          <ul className="space-y-2.5 text-sm mb-5">
            {['Contact Us', 'FAQ', 'Booking Help', 'Cancellation Policy', 'Privacy Policy', 'Terms & Conditions'].map((s) => (
              <li key={s}><Link to="/contact" className="hover:text-gold transition-colors">{s}</Link></li>
            ))}
          </ul>
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gold" /> New Delhi, India</p>
            <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-gold" /> +91 98765 43210</p>
            <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-gold" /> hello@unitriptravels.com</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Unitrip Travels. All rights reserved.
      </div>
    </footer>
  )
}
