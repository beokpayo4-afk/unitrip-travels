const demoRequests = [
  { id: 'c1', name: 'Sanjay Gupta', destination: 'Kashmir', tripType: 'Family', budget: 60000, date: '2026-09-20' },
  { id: 'c2', name: 'Neha Kapoor', destination: 'Maldives', tripType: 'Honeymoon', budget: 200000, date: '2026-10-10' },
]

export default function AdminCustomTrips() {
  return (
    <div>
      <h1 className="font-heading font-bold text-2xl text-navy mb-1">Custom Trip Requests</h1>
      <p className="text-charcoal/60 text-sm mb-6">Personalized trip requests submitted by customers.</p>
      <div className="bg-white rounded-2xl shadow-soft overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-charcoal/50 border-b border-gray-100">
              <th className="p-4">Name</th><th className="p-4">Destination</th><th className="p-4">Trip Type</th><th className="p-4">Budget</th><th className="p-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {demoRequests.map((r) => (
              <tr key={r.id} className="border-b border-gray-50 last:border-0">
                <td className="p-4 font-medium text-navy">{r.name}</td>
                <td className="p-4">{r.destination}</td>
                <td className="p-4">{r.tripType}</td>
                <td className="p-4">₹{r.budget.toLocaleString('en-IN')}</td>
                <td className="p-4">{r.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
