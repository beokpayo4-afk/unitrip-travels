import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-[88vh] min-h-[560px] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/20" />

      <div className="relative container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl text-white"
        >
          <p className="section-heading-eyebrow mb-4">Unitrip Travels</p>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
            Explore the World, One Journey at a Time
          </h1>
          <p className="text-white/85 text-base sm:text-lg mb-8 max-w-xl">
            Discover unforgettable destinations, carefully designed tour packages, comfortable stays, and seamless travel experiences with Unitrip Travels.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/destinations" className="btn-primary">Explore Destinations</Link>
            <Link to="/tour-packages" className="btn-outline">View Tour Packages</Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
