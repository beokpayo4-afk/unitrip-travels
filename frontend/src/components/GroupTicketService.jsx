import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Ticket, Users, Building2, CalendarDays } from 'lucide-react'
import { ticketSizes } from '../data/seedData.js'

const highlights = [
  { icon: Users, label: 'Corporate groups' },
  { icon: Building2, label: 'Events & MICE' },
  { icon: CalendarDays, label: 'Bulk travel dates' },
]

export default function GroupTicketService() {
  const [ticketSize, setTicketSize] = useState(100)

  return (
    <section className="py-20 bg-white">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="section-heading-eyebrow mb-3">Our Services</p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-4">
              Group Ticket Sizes from 100 to 1,000
            </h2>
            <p className="text-charcoal/60 leading-relaxed mb-6">
              Need tickets for a large team, wedding, school, or event? Choose a ticket size starting at 100 and going up to 1,000. We handle bulk flights, tours, and group transfers in one request.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {highlights.map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-2 bg-offwhite rounded-full px-4 py-2 text-sm text-navy font-medium">
                  <Icon className="w-4 h-4 text-gold" />
                  {label}
                </span>
              ))}
            </div>
            <Link to={`/group-tickets?size=${ticketSize}`} className="btn-primary">
              Request {ticketSize.toLocaleString('en-IN')} Tickets
            </Link>
          </div>

          <div className="bg-offwhite rounded-3xl p-6 sm:p-8 shadow-soft">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center">
                <Ticket className="w-6 h-6 text-gold" />
              </span>
              <div>
                <p className="text-sm text-charcoal/50">Selected ticket size</p>
                <p className="font-heading font-bold text-2xl text-navy">{ticketSize.toLocaleString('en-IN')} tickets</p>
              </div>
            </div>

            <input
              type="range"
              min={100}
              max={1000}
              step={100}
              value={ticketSize}
              onChange={(e) => setTicketSize(Number(e.target.value))}
              className="w-full accent-gold mb-5"
              aria-label="Ticket size from 100 to 1000"
            />

            <div className="flex justify-between text-xs text-charcoal/50 mb-5">
              <span>100</span>
              <span>1,000</span>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {ticketSizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setTicketSize(size)}
                  className={`rounded-xl py-2 text-xs sm:text-sm font-semibold transition-all ${
                    ticketSize === size
                      ? 'bg-gold text-white shadow-soft'
                      : 'bg-white text-navy hover:bg-navy hover:text-white'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
