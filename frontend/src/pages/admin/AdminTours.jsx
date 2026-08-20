import { useState } from 'react'
import { tourPackages } from '../../data/seedData.js'
import { Pencil, Trash2, Plus } from 'lucide-react'
import Modal from '../../components/Modal.jsx'

export default function AdminTours() {
  const [list, setList] = useState(tourPackages)
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ title: '', destination: '', duration: '', price: '', category: 'domestic' })

  const handleAdd = (e) => {
    e.preventDefault()
    setList([{ id: `tour-${Date.now()}`, rating: 4.5, image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200&auto=format&fit=crop', description: '', ...form, price: Number(form.price) }, ...list])
    setForm({ title: '', destination: '', duration: '', price: '', category: 'domestic' })
    setOpen(false)
  }

  const handleDelete = (id) => setList(list.filter((t) => t.id !== id))

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-heading font-bold text-2xl text-navy">Tour Packages</h1>
          <p className="text-charcoal/60 text-sm">Manage tour package listings.</p>
        </div>
        <button onClick={() => setOpen(true)} className="btn-primary !py-2.5"><Plus className="w-4 h-4" /> Add Package</button>
      </div>

      <div className="bg-white rounded-2xl shadow-soft overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-charcoal/50 border-b border-gray-100">
              <th className="p-4">Title</th><th className="p-4">Category</th><th className="p-4">Duration</th><th className="p-4">Price</th><th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {list.map((t) => (
              <tr key={t.id} className="border-b border-gray-50 last:border-0">
                <td className="p-4 font-medium text-navy">{t.title}</td>
                <td className="p-4 capitalize">{t.category}</td>
                <td className="p-4">{t.duration}</td>
                <td className="p-4">₹{Number(t.price).toLocaleString('en-IN')}</td>
                <td className="p-4 text-right space-x-2">
                  <button className="text-navy/50 hover:text-navy inline-flex"><Pencil className="w-4 h-4" /></button>
                  <button onClick={() => handleDelete(t.id)} className="text-red-400 hover:text-red-600 inline-flex"><Trash2 className="w-4 h-4" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="Add Tour Package">
        <form onSubmit={handleAdd} className="space-y-4">
          <input required placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm" />
          <input required placeholder="Destination" value={form.destination} onChange={(e) => setForm({ ...form, destination: e.target.value })} className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm" />
          <input required placeholder="Duration (e.g. 5 Days / 4 Nights)" value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm" />
          <input required type="number" placeholder="Price" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm" />
          <button type="submit" className="btn-primary w-full">Save Package</button>
        </form>
      </Modal>
    </div>
  )
}
