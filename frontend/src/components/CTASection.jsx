import { Link } from 'react-router-dom'

export default function CTASection() {
  return (
    <section className="relative py-28 my-4">
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2000&auto=format&fit=crop')" }}
      />
      <div className="absolute inset-0 bg-navy/70" />
      <div className="relative container-x text-center text-white max-w-2xl mx-auto">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">Your Next Adventure Starts Here</h2>
        <p className="text-white/85 mb-8">Pack your bags. Choose your destination. Let Unitrip take care of the journey.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/tour-packages" className="btn-primary">Explore Trips</Link>
          <Link to="/contact" className="btn-outline">Contact Us</Link>
        </div>
      </div>
    </section>
  )
}
