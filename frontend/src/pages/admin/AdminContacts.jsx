const demoContacts = [
  { id: 'k1', name: 'Ritu Malhotra', email: 'ritu@example.com', subject: 'Package inquiry', date: '2026-08-15' },
  { id: 'k2', name: 'Amit Joshi', email: 'amit@example.com', subject: 'Cancellation query', date: '2026-08-16' },
]

export default function AdminContacts() {
  return (
    <div>
      <h1 className="font-heading font-bold text-2xl text-navy mb-1">Contact Inquiries</h1>
      <p className="text-charcoal/60 text-sm mb-6">Messages submitted through the contact form.</p>
      <div className="bg-white rounded-2xl shadow-soft overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-charcoal/50 border-b border-gray-100">
              <th className="p-4">Name</th><th className="p-4">Email</th><th className="p-4">Subject</th><th className="p-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {demoContacts.map((c) => (
              <tr key={c.id} className="border-b border-gray-50 last:border-0">
                <td className="p-4 font-medium text-navy">{c.name}</td>
                <td className="p-4">{c.email}</td>
                <td className="p-4">{c.subject}</td>
                <td className="p-4">{c.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
