import { Inbox } from 'lucide-react'

export default function EmptyState({ title = 'Nothing here yet', description = '' }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center px-4">
      <Inbox className="w-10 h-10 text-navy/30 mb-3" />
      <h3 className="font-heading font-semibold text-lg text-charcoal">{title}</h3>
      {description && <p className="text-charcoal/60 mt-1 max-w-md">{description}</p>}
    </div>
  )
}
