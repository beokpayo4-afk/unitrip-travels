import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BadgeIndianRupee, SlidersHorizontal, ShieldCheck, Headset, Globe2, Ticket } from 'lucide-react'

import Hero from '../components/Hero.jsx'
import SearchPlanner from '../components/SearchPlanner.jsx'
import DestinationCard from '../components/DestinationCard.jsx'
import InternationalCard from '../components/InternationalCard.jsx'
import TourCard from '../components/TourCard.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import CustomizedTripCTA from '../components/CustomizedTripCTA.jsx'
import TestimonialCard from '../components/TestimonialCard.jsx'
import CTASection from '../components/CTASection.jsx'
import HotelSearch from '../components/HotelSearch.jsx'
import FlightSearch from '../components/FlightSearch.jsx'
import GroupTicketService from '../components/GroupTicketService.jsx'

import { indiaDestinations, internationalDestinations, localDestinations, tourPackages, testimonials } from '../data/seedData.js'

const features = [
  { icon: BadgeIndianRupee, title: 'Best Prices', description: 'Competitive prices and transparent packages.' },
  { icon: SlidersHorizontal, title: 'Customized Trips', description: 'Create a trip based on your budget and preferences.' },
  { icon: ShieldCheck, title: 'Trusted Service', description: 'Reliable travel partners and verified services.' },
  { icon: Headset, title: '24/7 Support', description: 'Help whenever you need it.' },
  { icon: Globe2, title: 'India & International', description: 'Local getaways, pan-India tours, and trips around the world.' },
  { icon: Ticket, title: 'Group Tickets', description: 'Ticket size from 100 to 1,000 based on distance from New Delhi.' },
]

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="max-w-xl mb-10">
      <p className="section-heading-eyebrow mb-3">{eyebrow}</p>
      <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-3">{title}</h2>
      {description && <p className="text-charcoal/60">{description}</p>}
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <Hero />
      <SearchPlanner />

      {/* Destinations */}
      <section className="py-20">
        <div className="container-x">
          <SectionHeader eyebrow="Explore" title="Popular Destinations" description="Discover some of the most beautiful destinations and create memories that last forever." />
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-heading font-semibold text-navy">Local</h3>
            <Link to="/destinations/local" className="text-sm font-semibold text-gold">View All →</Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mb-14">
            {localDestinations.map((d) => <DestinationCard key={d.id} destination={d} />)}
          </div>
          <h3 className="font-heading font-semibold text-navy mb-5">India</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mb-14">
            {indiaDestinations.slice(0, 8).map((d) => <DestinationCard key={d.id} destination={d} />)}
          </div>
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-heading font-semibold text-navy">International</h3>
            <Link to="/destinations/international" className="text-sm font-semibold text-gold">View All →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {internationalDestinations.slice(0, 6).map((d) => <InternationalCard key={d.id} destination={d} />)}
          </div>
        </div>
      </section>

      {/* Featured Tour Packages */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <SectionHeader eyebrow="Curated For You" title="Featured Tour Packages" description="Handpicked tours combining comfort, adventure and unforgettable experiences." />
            <Link to="/tour-packages" className="btn-navy shrink-0">View All Packages</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourPackages.slice(0, 6).map((t) => <TourCard key={t.id} tour={t} />)}
          </div>
        </div>
      </section>

      {/* International Trips */}
      <section className="py-20">
        <div className="container-x">
          <SectionHeader eyebrow="Go Further" title="Explore International" description="Discover incredible destinations beyond India." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {internationalDestinations.slice(0, 6).map((d) => <InternationalCard key={d.id} destination={d} />)}
          </div>
        </div>
      </section>

      {/* Hotels & Flights */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <SectionHeader eyebrow="Plan Every Detail" title="Hotels & Flights" description="Search stays across Unitrip destinations, plus live flights powered by Amadeus." />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <HotelSearch />
            <FlightSearch />
          </div>
        </div>
      </section>

      {/* Why Choose Unitrip */}
      <section className="py-20">
        <div className="container-x">
          <SectionHeader eyebrow="Why Unitrip" title="Why Choose Unitrip Travels" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => <FeatureCard key={f.title} {...f} />)}
          </div>
        </div>
      </section>

      <GroupTicketService />
      <HowItWorks />
      <CustomizedTripCTA />

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <SectionHeader eyebrow="Testimonials" title="What Our Travelers Say" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <motion.div key={t.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
                <TestimonialCard testimonial={t} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
