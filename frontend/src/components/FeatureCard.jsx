export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1">
      <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-gold" />
      </div>
      <h3 className="font-heading font-semibold text-navy mb-2">{title}</h3>
      <p className="text-sm text-charcoal/60 leading-relaxed">{description}</p>
    </div>
  )
}
