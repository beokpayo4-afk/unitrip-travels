// Demo data used to render the UI instantly without a live backend.
// Mirrors the shape returned by the real REST API (see backend/prisma/seed.js).

export const indiaDestinations = [
  { id: 'raj', name: 'Rajasthan', region: 'india', tagline: 'Land of Kings & Forts', image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200&auto=format&fit=crop', startingPrice: 14999 },
  { id: 'goa', name: 'Goa', region: 'india', tagline: 'Sun, Sand & Beaches', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop', startingPrice: 9999 },
  { id: 'kerala', name: 'Kerala', region: 'india', tagline: "God's Own Country", image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop', startingPrice: 12999 },
  { id: 'manali', name: 'Manali', region: 'india', tagline: 'Himalayan Escape', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop', startingPrice: 10999 },
  { id: 'kashmir', name: 'Kashmir', region: 'india', tagline: 'Paradise on Earth', image: 'https://images.unsplash.com/photo-1566837497312-7be4bc0f0f04?q=80&w=1200&auto=format&fit=crop', startingPrice: 15999 },
  { id: 'delhi', name: 'Delhi', region: 'india', tagline: 'Heart of India', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop', startingPrice: 6999 },
  { id: 'mumbai', name: 'Mumbai', region: 'india', tagline: 'The City of Dreams', image: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?q=80&w=1200&auto=format&fit=crop', startingPrice: 7999 },
  { id: 'agra', name: 'Agra', region: 'india', tagline: 'Home of the Taj Mahal', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200&auto=format&fit=crop', startingPrice: 5999 },
]

export const internationalDestinations = [
  { id: 'dubai', name: 'Dubai', region: 'international', tagline: 'Luxury & Skyscrapers', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop', startingPrice: 42999 },
  { id: 'bali', name: 'Bali', region: 'international', tagline: 'Island of the Gods', image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200&auto=format&fit=crop', startingPrice: 38999 },
  { id: 'thailand', name: 'Thailand', region: 'international', tagline: 'Tropical Paradise', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1200&auto=format&fit=crop', startingPrice: 29999 },
  { id: 'singapore', name: 'Singapore', region: 'international', tagline: 'Garden City', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1200&auto=format&fit=crop', startingPrice: 45999 },
  { id: 'maldives', name: 'Maldives', region: 'international', tagline: 'Overwater Bliss', image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200&auto=format&fit=crop', startingPrice: 59999 },
  { id: 'paris', name: 'Paris', region: 'international', tagline: 'The City of Light', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop', startingPrice: 79999 },
  { id: 'switzerland', name: 'Switzerland', region: 'international', tagline: 'Alpine Wonderland', image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1200&auto=format&fit=crop', startingPrice: 89999 },
  { id: 'london', name: 'London', region: 'international', tagline: 'Royal & Iconic', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop', startingPrice: 84999 },
]

export const popularDestinationIds = ['raj', 'goa', 'dubai', 'bali', 'maldives', 'kerala']
export const popularDestinations = [...indiaDestinations, ...internationalDestinations].filter(d => popularDestinationIds.includes(d.id))

export const allDestinations = [...indiaDestinations, ...internationalDestinations]

export const tourPackages = [
  { id: 't1', title: 'Rajasthan Heritage Tour', category: 'domestic', destination: 'Jaipur • Jodhpur • Udaipur', duration: '5 Days / 4 Nights', rating: 4.8, price: 18999, image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200&auto=format&fit=crop', description: 'Explore royal palaces, majestic forts and vibrant markets across the golden triangle of Rajasthan.' },
  { id: 't2', title: 'Goa Beach Getaway', category: 'weekend', destination: 'North & South Goa', duration: '3 Days / 2 Nights', rating: 4.6, price: 9999, image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop', description: 'Sun-soaked beaches, water sports and vibrant nightlife on the Goan coastline.' },
  { id: 't3', title: 'Kerala Backwaters Bliss', category: 'family', destination: 'Alleppey • Munnar • Kochi', duration: '6 Days / 5 Nights', rating: 4.9, price: 24999, image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop', description: 'Houseboat stays, tea gardens and serene backwaters — perfect for family time.' },
  { id: 't4', title: 'Kashmir Paradise Tour', category: 'honeymoon', destination: 'Srinagar • Gulmarg • Pahalgam', duration: '6 Days / 5 Nights', rating: 4.9, price: 27999, image: 'https://images.unsplash.com/photo-1566837497312-7be4bc0f0f04?q=80&w=1200&auto=format&fit=crop', description: 'Snow-capped mountains, shikara rides and dreamy houseboats for couples.' },
  { id: 't5', title: 'Dubai Luxury Escape', category: 'luxury', destination: 'Dubai • Abu Dhabi', duration: '5 Days / 4 Nights', rating: 4.7, price: 54999, image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop', description: 'Desert safaris, skyline views and five-star luxury in the UAE.' },
  { id: 't6', title: 'Bali Honeymoon Special', category: 'honeymoon', destination: 'Ubud • Seminyak • Nusa Penida', duration: '6 Days / 5 Nights', rating: 4.8, price: 48999, image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200&auto=format&fit=crop', description: 'Private villas, waterfalls and romantic sunsets across Bali\u2019s best spots.' },
  { id: 't7', title: 'Thailand Adventure Trail', category: 'adventure', destination: 'Bangkok • Phuket • Krabi', duration: '7 Days / 6 Nights', rating: 4.6, price: 35999, image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1200&auto=format&fit=crop', description: 'Island hopping, jungle trekking and vibrant street food adventures.' },
  { id: 't8', title: 'Manali Group Adventure', category: 'group', destination: 'Manali • Solang Valley • Kasol', duration: '5 Days / 4 Nights', rating: 4.5, price: 15999, image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop', description: 'Trekking, river rafting and bonfire nights with a group of fellow travelers.' },
  { id: 't9', title: 'Switzerland Alpine Dream', category: 'international', destination: 'Zurich • Interlaken • Lucerne', duration: '8 Days / 7 Nights', rating: 4.9, price: 129999, image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1200&auto=format&fit=crop', description: 'Scenic train rides, snow-capped peaks and picture-perfect alpine villages.' },
  { id: 't10', title: 'Maldives Overwater Retreat', category: 'luxury', destination: 'Male • Private Island Resort', duration: '4 Days / 3 Nights', rating: 5.0, price: 89999, image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200&auto=format&fit=crop', description: 'Overwater villas, coral reefs and unmatched island luxury.' },
  { id: 't11', title: 'Agra Golden Triangle', category: 'weekend', destination: 'Delhi • Agra • Jaipur', duration: '4 Days / 3 Nights', rating: 4.5, price: 12999, image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200&auto=format&fit=crop', description: 'Witness the Taj Mahal and explore India\u2019s most iconic heritage circuit.' },
  { id: 't12', title: 'Singapore Family Fun', category: 'family', destination: 'Sentosa • Gardens by the Bay', duration: '5 Days / 4 Nights', rating: 4.7, price: 62999, image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1200&auto=format&fit=crop', description: 'Theme parks, futuristic gardens and family-friendly attractions.' },
]

export const tourCategories = ['domestic', 'international', 'honeymoon', 'family', 'adventure', 'luxury', 'weekend', 'group']

export const ticketSizes = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]

export const tourItinerary = {
  t1: [
    { day: 1, title: 'Arrival in Jaipur', desc: 'Check in to hotel, evening visit to local bazaars.' },
    { day: 2, title: 'Jaipur City Tour', desc: 'Amber Fort, City Palace, Hawa Mahal.' },
    { day: 3, title: 'Drive to Jodhpur', desc: 'Mehrangarh Fort and Blue City walk.' },
    { day: 4, title: 'Jodhpur to Udaipur', desc: 'Scenic drive, evening boat ride on Lake Pichola.' },
    { day: 5, title: 'Udaipur & Departure', desc: 'City Palace visit, transfer to airport/station.' },
  ],
}

export const testimonials = [
  { id: 1, name: 'Ananya Sharma', location: 'Mumbai, India', rating: 5, avatar: '/testimonials/ananya-sharma.jpg', review: 'Our Kerala trip was flawlessly organized. Every houseboat stay and transfer was on time. Highly recommend Unitrip Travels for family vacations.' },
  { id: 2, name: 'Rohan Mehta', location: 'Delhi, India', rating: 5, avatar: '/testimonials/rohan-mehta.jpg', review: 'The Bali honeymoon package exceeded expectations. The villa, the itinerary, everything felt personally curated for us.' },
  { id: 3, name: 'Priya Nair', location: 'Bengaluru, India', rating: 4, avatar: '/testimonials/priya-nair.jpg', review: 'Smooth booking process and great customer support throughout our Rajasthan heritage tour. Will book again.' },
  { id: 4, name: 'Karan Verma', location: 'Pune, India', rating: 5, avatar: '/testimonials/karan-verma.jpg', review: 'Customized our Switzerland trip exactly around our budget and dates. Truly a hassle-free experience end to end.' },
]

export const faqs = [
  { q: 'How do I book a tour package?', a: 'Browse tour packages, select your preferred trip, choose your travel date and number of travelers, then submit your booking request. Our team confirms availability within 24 hours.' },
  { q: 'Can I customize an existing package?', a: 'Yes, every tour detail page has a "Customize" option, or you can submit a fully custom trip request from the Customized Trip page.' },
  { q: 'What is the cancellation policy?', a: 'Cancellation terms vary by package and are shown at checkout. Please refer to our Cancellation Policy page for full details.' },
  { q: 'Do you arrange visas?', a: 'For select international packages we provide visa assistance. Our travel consultant will confirm this during booking.' },
]
