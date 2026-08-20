import { CalendarCheck, Clock, CheckCircle2, Users, Package, MapPin } from 'lucide-react'
import { tourPackages, allDestinations } from '../../data/seedData.js'

const stats = [
  { icon: CalendarCheck, label: 'Total Bookings', value: 128 },
  { icon: Clock, label: 'Pending Bookings', value: 14 },
  { icon: CheckCircle2, label: 'Confirmed Bookings', value: 96 },
  { icon: Users, label: 'Total Customers', value: 342 },
  { icon: Package, label: 'Tour Packages', value: tourPackages.length },
  { icon: MapPin, label: 'Destinations', value: allDestinations.length },
]

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="font-heading font-bold text-2xl text-navy mb-1">Dashboard Overview</h1>
      <p className="text-charcoal/60 mb-8 text-sm">Demo metrics — connect the backend API to populate live data.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-2xl shadow-soft p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center shrink-0">
              <s.icon className="w-5 h-5 text-gold" />
            </div>
            <div>
              <p className="font-heading font-bold text-2xl text-navy">{s.value}</p>
              <p className="text-xs text-charcoal/60">{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
