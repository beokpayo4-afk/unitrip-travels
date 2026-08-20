import { NavLink, Outlet } from 'react-router-dom'
import { LayoutDashboard, MapPin, Package, CalendarCheck, Sparkles, Mail, Plane } from 'lucide-react'

const links = [
  { to: '/admin', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/admin/destinations', label: 'Destinations', icon: MapPin },
  { to: '/admin/tours', label: 'Tour Packages', icon: Package },
  { to: '/admin/bookings', label: 'Bookings', icon: CalendarCheck },
  { to: '/admin/custom-trips', label: 'Custom Trips', icon: Sparkles },
  { to: '/admin/contacts', label: 'Contacts', icon: Mail },
]

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex bg-offwhite">
      <aside className="w-64 bg-navy text-white hidden md:flex flex-col shrink-0">
        <div className="flex items-center gap-2 px-6 py-6">
          <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><Plane className="w-4 h-4 text-gold" /></span>
          <span className="font-heading font-bold">UNITRIP <span className="text-gold">ADMIN</span></span>
        </div>
        <nav className="flex-1 px-3 space-y-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${isActive ? 'bg-white/10 text-gold' : 'text-white/70 hover:bg-white/5'}`}
            >
              <l.icon className="w-4 h-4" /> {l.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <div className="flex-1 min-w-0">
        <div className="p-5 sm:p-8">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
