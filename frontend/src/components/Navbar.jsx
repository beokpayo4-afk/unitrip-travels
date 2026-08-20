import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, User, Plane } from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Tour Packages', to: '/tour-packages' },
  { label: 'Hotels', to: '/hotels' },
  { label: 'Flights', to: '/flights' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { user, logout } = useAuth()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur transition-all duration-300 ${scrolled ? 'shadow-soft py-2' : 'py-4'}`}>
      <div className="container-x flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="w-9 h-9 rounded-full bg-navy flex items-center justify-center">
            <Plane className="w-5 h-5 text-gold" />
          </span>
          <span className="font-heading font-bold text-lg sm:text-xl text-navy tracking-tight">
            UNITRIP <span className="text-gold">TRAVELS</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-gold' : 'text-charcoal/80 hover:text-navy'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          {user ? (
            <>
              <Link to="/my-bookings" className="flex items-center gap-1.5 text-sm font-medium text-charcoal/80 hover:text-navy">
                <User className="w-4 h-4" /> {user.name || 'Account'}
              </Link>
              <button onClick={logout} className="text-sm font-medium text-charcoal/60 hover:text-navy">Logout</button>
            </>
          ) : (
            <Link to="/login" className="text-sm font-medium text-charcoal/80 hover:text-navy">Login</Link>
          )}
          <Link to="/tour-packages" className="btn-primary !py-2.5 !px-5 text-sm">Book Now</Link>
        </div>

        <button className="lg:hidden p-2 text-navy" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${open ? 'visible' : 'invisible'}`}>
        <div
          className={`absolute inset-0 bg-navy/40 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setOpen(false)}
        />
        <div className={`absolute top-0 right-0 h-full w-[78%] max-w-xs bg-white shadow-2xl p-6 transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between mb-8">
            <span className="font-heading font-bold text-navy">UNITRIP <span className="text-gold">TRAVELS</span></span>
            <button onClick={() => setOpen(false)} aria-label="Close menu"><X className="w-6 h-6 text-navy" /></button>
          </div>
          <nav className="flex flex-col gap-5">
            {navLinks.map((l) => (
              <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-charcoal font-medium text-base">
                {l.label}
              </NavLink>
            ))}
            <hr />
            {user ? (
              <>
                <Link to="/my-bookings" onClick={() => setOpen(false)} className="text-charcoal font-medium">My Bookings</Link>
                <button onClick={() => { logout(); setOpen(false) }} className="text-left text-charcoal/60 font-medium">Logout</button>
              </>
            ) : (
              <Link to="/login" onClick={() => setOpen(false)} className="text-charcoal font-medium">Login</Link>
            )}
            <Link to="/tour-packages" onClick={() => setOpen(false)} className="btn-primary justify-center">Book Now</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
