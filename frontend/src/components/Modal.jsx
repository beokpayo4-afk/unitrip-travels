import { X } from 'lucide-react'

export default function Modal({ open, onClose, title, children }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-navy/50" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-card max-w-lg w-full p-6 max-h-[85vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-heading font-semibold text-lg text-navy">{title}</h3>
          <button onClick={onClose}><X className="w-5 h-5 text-charcoal/60" /></button>
        </div>
        {children}
      </div>
    </div>
  )
}
