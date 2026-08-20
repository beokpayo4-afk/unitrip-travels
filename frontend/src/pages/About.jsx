import { motion } from 'framer-motion'
import { Users, Globe2, Award, HeartHandshake } from 'lucide-react'

const stats = [
  { icon: Users, label: 'Happy Travelers', value: '25,000+' },
  { icon: Globe2, label: 'Destinations', value: '80+' },
  { icon: Award, label: 'Years of Trust', value: '10+' },
  { icon: HeartHandshake, label: 'Travel Partners', value: '200+' },
]

export default function About() {
  return (
    <div>
      <section className="relative h-[45vh] min-h-[320px] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2000&auto=format&fit=crop')" }} />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative container-x text-white">
          <p className="section-heading-eyebrow mb-3">About Us</p>
          <h1 className="font-heading font-bold text-3xl sm:text-5xl">Building Journeys, Not Just Bookings</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="section-heading-eyebrow mb-3">Our Story</p>
            <h2 className="font-heading font-bold text-3xl text-navy mb-5">Your Trusted Travel Partner Since Day One</h2>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              Unitrip Travels was founded with a simple belief: travel should be effortless, personal and memorable. From weekend getaways across India to bucket-list international escapes, we design every itinerary with care and attention to detail.
            </p>
            <p className="text-charcoal/70 leading-relaxed">
              Our team of travel consultants works closely with verified hotels, local guides and transport partners to ensure every Unitrip journey is safe, comfortable and unforgettable.
            </p>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop"
            alt="Team planning a travel itinerary"
            className="rounded-2xl shadow-card w-full h-80 object-cover"
          />
        </div>
      </section>

      <section className="py-16 bg-navy text-white">
        <div className="container-x grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <s.icon className="w-7 h-7 text-gold mx-auto mb-3" />
              <p className="font-heading font-bold text-2xl sm:text-3xl">{s.value}</p>
              <p className="text-white/70 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
