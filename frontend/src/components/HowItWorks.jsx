import { motion } from 'framer-motion'
import { MapPin, SlidersHorizontal, CheckCircle2 } from 'lucide-react'

const steps = [
  { num: '01', icon: MapPin, title: 'Choose Your Destination', desc: 'Explore destinations and tour packages.' },
  { num: '02', icon: SlidersHorizontal, title: 'Customize Your Trip', desc: 'Select dates, travelers and preferences.' },
  { num: '03', icon: CheckCircle2, title: 'Confirm Your Booking', desc: 'Submit your booking request and receive confirmation.' },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-navy text-white">
      <div className="container-x">
        <div className="text-center mb-14 max-w-xl mx-auto">
          <p className="text-gold font-semibold tracking-wide uppercase text-sm mb-3">Simple Process</p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl">How It Works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          <div className="hidden md:block absolute top-8 left-[16.5%] right-[16.5%] h-px bg-white/15" />
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-5">
                <s.icon className="w-7 h-7 text-gold" />
              </div>
              <span className="text-gold/70 font-heading font-bold text-sm">{s.num}</span>
              <h3 className="font-heading font-semibold text-lg mt-1 mb-2">{s.title}</h3>
              <p className="text-white/70 text-sm max-w-xs mx-auto">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
