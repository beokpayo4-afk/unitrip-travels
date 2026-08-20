import { AlertTriangle, RefreshCw } from 'lucide-react'

export default function ErrorState({ message = 'Something went wrong.', onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center px-4">
      <AlertTriangle className="w-10 h-10 text-gold mb-3" />
      <p className="text-charcoal/70 mb-4">{message}</p>
      {onRetry && (
        <button onClick={onRetry} className="btn-navy">
          <RefreshCw className="w-4 h-4" /> Try Again
        </button>
      )}
    </div>
  )
}
