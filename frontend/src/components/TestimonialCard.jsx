import { Star, Quote } from 'lucide-react'

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-soft h-full flex flex-col">
      <Quote className="w-8 h-8 text-gold/30 mb-3" />
      <p className="text-sm text-charcoal/70 leading-relaxed mb-5 flex-1">"{testimonial.review}"</p>
      <div className="flex items-center gap-3">
        <img src={testimonial.avatar} alt={testimonial.name} className="w-11 h-11 rounded-full object-cover" />
        <div>
          <p className="font-heading font-semibold text-navy text-sm">{testimonial.name}</p>
          <p className="text-xs text-charcoal/50">{testimonial.location}</p>
        </div>
        <div className="ml-auto flex">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
          ))}
        </div>
      </div>
    </div>
  )
}
