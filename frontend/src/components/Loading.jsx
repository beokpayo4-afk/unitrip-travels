export function SkeletonCard() {
  return (
    <div className="rounded-2xl overflow-hidden bg-white shadow-soft animate-pulse">
      <div className="h-48 bg-gray-200" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-3 bg-gray-200 rounded w-1/2" />
        <div className="h-3 bg-gray-200 rounded w-1/3" />
      </div>
    </div>
  )
}

export default function Loading({ label = 'Loading...' }) {
  return (
    <div className="flex items-center justify-center py-16 text-charcoal/60">
      <div className="w-5 h-5 border-2 border-navy border-t-transparent rounded-full animate-spin mr-3" />
      {label}
    </div>
  )
}
