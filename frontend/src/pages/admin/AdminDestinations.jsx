import { useState } from 'react'
import { allDestinations } from '../../data/seedData.js'
import { Pencil, Trash2, Plus } from 'lucide-react'
import Modal from '../../components/Modal.jsx'

export default function AdminDestinations() {
  const [list, setList] = useState(allDestinations)
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ name: '', region: 'india', tagline: '', startingPrice: '' })

  const handleAdd = (e) => {
    e.preventDefault()
    setList([{ id: `d-${Date.now()}`, image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop', ...form, startingPrice: Number(form.startingPrice) }, ...list])
    setForm({ name: '', region: 'india', tagline: '', startingPrice: '' })
    setOpen(false)
  }

  const handleDelete = (id) => setList(list.filter((d) => d.id !== id))

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-heading font-bold text-2xl text-navy">Destinations</h1>
          <p className="text-charcoal/60 text-sm">Manage destination listings.</p>
        </div>
        <button onClick={() => setOpen(true)} className="btn-primary !py-2.5"><Plus className="w-4 h-4" /> Add Destination</button>
      </div>

      <div className="bg-white rounded-2xl shadow-soft overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-charcoal/50 border-b border-gray-100">
              <th className="p-4">Name</th><th className="p-4">Region</th><th className="p-4">Starting Price</th><th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {list.map((d) => (
              <tr key={d.id} className="border-b border-gray-50 last:border-0">
                <td className="p-4 font-medium text-navy">{d.name}</td>
                <td className="p-4 capitalize">{d.region}</td>
                <td className="p-4">₹{Number(d.startingPrice).toLocaleString('en-IN')}</td>
                <td className="p-4 text-right space-x-2">
                  <button className="text-navy/50 hover:text-navy inline-flex"><Pencil className="w-4 h-4" /></button>
                  <button onClick={() => handleDelete(d.id)} className="text-red-400 hover:text-red-600 inline-flex"><Trash2 className="w-4 h-4" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="Add Destination">
        <form onSubmit={handleAdd} className="space-y-4">
          <input required placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm" />
          <select value={form.region} onChange={(e) => setForm({ ...form, region: e.target.value })} className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm">
            <option value="india">India</option><option value="international">International</option>
          </select>
          <input placeholder="Tagline" value={form.tagline} onChange={(e) => setForm({ ...form, tagline: e.target.value })} className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm" />
          <input required type="number" placeholder="Starting Price" value={form.startingPrice} onChange={(e) => setForm({ ...form, startingPrice: e.target.value })} className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm" />
          <button type="submit" className="btn-primary w-full">Save Destination</button>
        </form>
      </Modal>
    </div>
  )
}
