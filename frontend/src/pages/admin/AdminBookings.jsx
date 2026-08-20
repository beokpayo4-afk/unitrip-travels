import { useState } from 'react'

const demoBookings = [
  { id: 'b1', customer: 'Ananya Sharma', tour: 'Rajasthan Heritage Tour', date: '2026-09-12', travelers: 2, total: 37998, status: 'Confirmed' },
  { id: 'b2', customer: 'Rohan Mehta', tour: 'Kashmir Paradise Tour', date: '2026-10-05', travelers: 2, total: 55998, status: 'Pending' },
  { id: 'b3', customer: 'Priya Nair', tour: 'Kerala Backwaters Bliss', date: '2026-09-28', travelers: 4, total: 99996, status: 'Completed' },
  { id: 'b4', customer: 'Karan Verma', tour: 'Ladakh Himalayan Dream', date: '2026-11-15', travelers: 2, total: 65998, status: 'Pending' },
]

const statusColors = {
  Pending: 'bg-amber-100 text-amber-700',
  Confirmed: 'bg-green-100 text-green-700',
  Cancelled: 'bg-red-100 text-red-700',
  Completed: 'bg-blue-100 text-blue-700',
}

export default function AdminBookings() {
  const [bookings, setBookings] = useState(demoBookings)

  const updateStatus = (id, status) => {
    setBookings(bookings.map((b) => (b.id === id ? { ...b, status } : b)))
  }

  return (
    <div>
      <h1 className="font-heading font-bold text-2xl text-navy mb-1">Bookings</h1>
      <p className="text-charcoal/60 text-sm mb-6">Review and update booking statuses.</p>

      <div className="bg-white rounded-2xl shadow-soft overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-charcoal/50 border-b border-gray-100">
              <th className="p-4">Customer</th><th className="p-4">Tour</th><th className="p-4">Date</th><th className="p-4">Total</th><th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b.id} className="border-b border-gray-50 last:border-0">
                <td className="p-4 font-medium text-navy">{b.customer}</td>
                <td className="p-4">{b.tour}</td>
                <td className="p-4">{b.date}</td>
                <td className="p-4">₹{b.total.toLocaleString('en-IN')}</td>
                <td className="p-4">
                  <select
                    value={b.status}
                    onChange={(e) => updateStatus(b.id, e.target.value)}
                    className={`text-xs font-semibold px-2 py-1 rounded-full border-0 ${statusColors[b.status]}`}
                  >
                    {['Pending', 'Confirmed', 'Cancelled', 'Completed'].map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
