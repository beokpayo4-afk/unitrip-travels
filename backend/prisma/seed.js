const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

const indiaDestinations = [
  { name: 'Rajasthan', tagline: 'Land of Kings & Forts', startingPrice: 14999, image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200' },
  { name: 'Goa', tagline: 'Sun, Sand & Beaches', startingPrice: 9999, image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200' },
  { name: 'Kerala', tagline: "God's Own Country", startingPrice: 12999, image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200' },
  { name: 'Manali', tagline: 'Himalayan Escape', startingPrice: 10999, image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200' },
  { name: 'Kashmir', tagline: 'Paradise on Earth', startingPrice: 15999, image: 'https://images.unsplash.com/photo-1566837497312-7be4bc0f0f04?q=80&w=1200' },
  { name: 'Delhi', tagline: 'Heart of India', startingPrice: 6999, image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200' },
  { name: 'Mumbai', tagline: 'The City of Dreams', startingPrice: 7999, image: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?q=80&w=1200' },
  { name: 'Agra', tagline: 'Home of the Taj Mahal', startingPrice: 5999, image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200' },
]

const internationalDestinations = [
  { name: 'Dubai', tagline: 'Luxury & Skyscrapers', startingPrice: 42999, image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200' },
  { name: 'Bali', tagline: 'Island of the Gods', startingPrice: 38999, image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200' },
  { name: 'Thailand', tagline: 'Tropical Paradise', startingPrice: 29999, image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1200' },
  { name: 'Singapore', tagline: 'Garden City', startingPrice: 45999, image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1200' },
  { name: 'Maldives', tagline: 'Overwater Bliss', startingPrice: 59999, image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200' },
  { name: 'Switzerland', tagline: 'Alpine Wonderland', startingPrice: 89999, image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1200' },
]

const tourPackages = [
  { title: 'Rajasthan Heritage Tour', category: 'DOMESTIC', destinationLabel: 'Jaipur • Jodhpur • Udaipur', duration: '5 Days / 4 Nights', price: 18999, image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200', description: 'Explore royal palaces, majestic forts and vibrant markets across the golden triangle of Rajasthan.', inclusions: ['Hotel accommodation', 'Daily breakfast', 'All transfers', 'Guide'], exclusions: ['Airfare', 'Personal expenses'] },
  { title: 'Goa Beach Getaway', category: 'WEEKEND', destinationLabel: 'North & South Goa', duration: '3 Days / 2 Nights', price: 9999, image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200', description: 'Sun-soaked beaches, water sports and vibrant nightlife on the Goan coastline.', inclusions: ['Hotel accommodation', 'Breakfast'], exclusions: ['Airfare', 'Water sports fees'] },
  { title: 'Kerala Backwaters Bliss', category: 'FAMILY', destinationLabel: 'Alleppey • Munnar • Kochi', duration: '6 Days / 5 Nights', price: 24999, image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200', description: 'Houseboat stays, tea gardens and serene backwaters — perfect for family time.', inclusions: ['Houseboat stay', 'All meals on houseboat', 'Transfers'], exclusions: ['Airfare', 'Personal expenses'] },
  { title: 'Kashmir Paradise Tour', category: 'HONEYMOON', destinationLabel: 'Srinagar • Gulmarg • Pahalgam', duration: '6 Days / 5 Nights', price: 27999, image: 'https://images.unsplash.com/photo-1566837497312-7be4bc0f0f04?q=80&w=1200', description: 'Snow-capped mountains, shikara rides and dreamy houseboats for couples.', inclusions: ['Houseboat stay', 'Breakfast & dinner', 'Transfers'], exclusions: ['Airfare', 'Gondola tickets'] },
  { title: 'Dubai Luxury Escape', category: 'LUXURY', destinationLabel: 'Dubai • Abu Dhabi', duration: '5 Days / 4 Nights', price: 54999, image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200', description: 'Desert safaris, skyline views and five-star luxury in the UAE.', inclusions: ['5-star hotel', 'Breakfast', 'Desert safari'], exclusions: ['Airfare', 'Visa fees'] },
  { title: 'Bali Honeymoon Special', category: 'HONEYMOON', destinationLabel: 'Ubud • Seminyak • Nusa Penida', duration: '6 Days / 5 Nights', price: 48999, image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200', description: 'Private villas, waterfalls and romantic sunsets across Bali\u2019s best spots.', inclusions: ['Private villa', 'Breakfast', 'Airport transfers'], exclusions: ['Airfare', 'Visa fees'] },
  { title: 'Thailand Adventure Trail', category: 'ADVENTURE', destinationLabel: 'Bangkok • Phuket • Krabi', duration: '7 Days / 6 Nights', price: 35999, image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1200', description: 'Island hopping, jungle trekking and vibrant street food adventures.', inclusions: ['Hotel stay', 'Breakfast', 'Island tour'], exclusions: ['Airfare', 'Visa fees'] },
  { title: 'Manali Group Adventure', category: 'GROUP', destinationLabel: 'Manali • Solang Valley • Kasol', duration: '5 Days / 4 Nights', price: 15999, image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200', description: 'Trekking, river rafting and bonfire nights with a group of fellow travelers.', inclusions: ['Hotel stay', 'Breakfast & dinner', 'Rafting'], exclusions: ['Airfare', 'Personal expenses'] },
  { title: 'Switzerland Alpine Dream', category: 'INTERNATIONAL', destinationLabel: 'Zurich • Interlaken • Lucerne', duration: '8 Days / 7 Nights', price: 129999, image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1200', description: 'Scenic train rides, snow-capped peaks and picture-perfect alpine villages.', inclusions: ['4-star hotel', 'Breakfast', 'Rail pass'], exclusions: ['Airfare', 'Visa fees'] },
  { title: 'Maldives Overwater Retreat', category: 'LUXURY', destinationLabel: 'Male • Private Island Resort', duration: '4 Days / 3 Nights', price: 89999, image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200', description: 'Overwater villas, coral reefs and unmatched island luxury.', inclusions: ['Overwater villa', 'All meals', 'Speedboat transfer'], exclusions: ['Airfare', 'Spa treatments'] },
]

async function main() {
  console.log('Seeding Unitrip Travels database...')

  await prisma.review.deleteMany()
  await prisma.bookingTraveler.deleteMany()
  await prisma.booking.deleteMany()
  await prisma.tourItinerary.deleteMany()
  await prisma.tourPackage.deleteMany()
  await prisma.destination.deleteMany()
  await prisma.hotelBooking.deleteMany()
  await prisma.hotel.deleteMany()
  await prisma.flightSearch.deleteMany()
  await prisma.customTripRequest.deleteMany()
  await prisma.contact.deleteMany()
  await prisma.user.deleteMany()

  const adminPassword = await bcrypt.hash('Admin@123', 10)
  const admin = await prisma.user.create({
    data: { name: 'Unitrip Admin', email: 'admin@unitriptravels.com', password: adminPassword, role: 'ADMIN' },
  })

  const demoPassword = await bcrypt.hash('Demo@123', 10)
  const demoUser = await prisma.user.create({
    data: { name: 'Demo Traveler', email: 'demo@unitriptravels.com', password: demoPassword, role: 'USER' },
  })

  for (const d of indiaDestinations) {
    await prisma.destination.create({ data: { ...d, region: 'INDIA', isPopular: ['Rajasthan', 'Goa', 'Kerala'].includes(d.name) } })
  }
  for (const d of internationalDestinations) {
    await prisma.destination.create({ data: { ...d, region: 'INTERNATIONAL', isPopular: ['Dubai', 'Bali', 'Maldives'].includes(d.name) } })
  }

  for (const t of tourPackages) {
    const slug = t.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    await prisma.tourPackage.create({ data: { ...t, slug } })
  }

  const rajTour = await prisma.tourPackage.findFirst({ where: { title: 'Rajasthan Heritage Tour' } })
  if (rajTour) {
    await prisma.tourItinerary.createMany({
      data: [
        { tourId: rajTour.id, day: 1, title: 'Arrival in Jaipur', description: 'Check in to hotel, evening visit to local bazaars.' },
        { tourId: rajTour.id, day: 2, title: 'Jaipur City Tour', description: 'Amber Fort, City Palace, Hawa Mahal.' },
        { tourId: rajTour.id, day: 3, title: 'Drive to Jodhpur', description: 'Mehrangarh Fort and Blue City walk.' },
        { tourId: rajTour.id, day: 4, title: 'Jodhpur to Udaipur', description: 'Scenic drive, evening boat ride on Lake Pichola.' },
        { tourId: rajTour.id, day: 5, title: 'Udaipur & Departure', description: 'City Palace visit, transfer to airport/station.' },
      ],
    })
  }

  await prisma.hotel.createMany({
    data: [
      { name: 'Radisson Blu Noida', city: 'Noida', address: 'Sector 18, Noida', pricePerNight: 6499, rating: 4.4, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200' },
      { name: 'The Leela Ambience Gurugram', city: 'Gurugram', address: 'Ambience Island, Gurugram', pricePerNight: 11999, rating: 4.7, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200' },
      { name: 'Brijwasi Lands Inn', city: 'Mathura', address: 'Near Prem Mandir, Vrindavan', pricePerNight: 4299, rating: 4.3, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200' },
      { name: 'Ganga Lahari by Leisure', city: 'Haridwar', address: 'Har Ki Pauri, Haridwar', pricePerNight: 5499, rating: 4.5, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200' },
      { name: 'Aloha On The Ganges', city: 'Rishikesh', address: 'Tapovan, Rishikesh', pricePerNight: 7999, rating: 4.6, image: 'https://images.unsplash.com/photo-1590490360182-c0bd6959d45d?q=80&w=1200' },
      { name: 'JW Marriott Chandigarh', city: 'Chandigarh', address: 'Sector 35, Chandigarh', pricePerNight: 10999, rating: 4.6, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200' },
      { name: 'Oberoi Wildflower Hall', city: 'Shimla', address: 'Mashobra, Shimla', pricePerNight: 18999, rating: 4.8, image: 'https://images.unsplash.com/photo-1590490360182-c0bd6959d45d?q=80&w=1200' },
      { name: 'Taj Swarna Amritsar', city: 'Amritsar', address: 'Near Golden Temple, Amritsar', pricePerNight: 9999, rating: 4.7, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200' },
      { name: 'The Leela Palace Jaipur', city: 'Jaipur', address: 'Delhi Road, Jaipur', pricePerNight: 8500, rating: 4.7, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200' },
      { name: 'Taj Lake Palace', city: 'Udaipur', address: 'Lake Pichola, Udaipur', pricePerNight: 24999, rating: 4.9, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200' },
      { name: 'Taj Exotica Goa', city: 'Goa', address: 'Benaulim, South Goa', pricePerNight: 12000, rating: 4.8, image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1200' },
      { name: 'Kumarakom Lake Resort', city: 'Kerala', address: 'Kumarakom, Kottayam', pricePerNight: 15999, rating: 4.8, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200' },
      { name: 'The Himalayan Manali', city: 'Manali', address: 'Hadimba Road, Manali', pricePerNight: 8999, rating: 4.5, image: 'https://images.unsplash.com/photo-1590490360182-c0bd6959d45d?q=80&w=1200' },
      { name: 'The Lalit Grand Palace', city: 'Srinagar', address: 'Gupkar Road, Srinagar', pricePerNight: 13999, rating: 4.6, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200' },
      { name: 'The Imperial New Delhi', city: 'Delhi', address: 'Janpath, New Delhi', pricePerNight: 16999, rating: 4.8, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200' },
      { name: 'Taj Mahal Palace Mumbai', city: 'Mumbai', address: 'Apollo Bunder, Mumbai', pricePerNight: 18999, rating: 4.9, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200' },
      { name: 'The Oberoi Amarvilas', city: 'Agra', address: 'Taj East Gate Road, Agra', pricePerNight: 22999, rating: 4.9, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200' },
      { name: 'Atlantis The Palm', city: 'Dubai', address: 'Crescent Road, Palm Jumeirah', pricePerNight: 28999, rating: 4.7, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200' },
      { name: 'Four Seasons Sayan', city: 'Bali', address: 'Sayan, Ubud', pricePerNight: 24999, rating: 4.8, image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1200' },
      { name: 'Mandarin Oriental Bangkok', city: 'Bangkok', address: 'Chao Phraya River, Bangkok', pricePerNight: 16999, rating: 4.7, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200' },
      { name: 'Marina Bay Sands', city: 'Singapore', address: 'Bayfront Avenue, Singapore', pricePerNight: 32999, rating: 4.8, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200' },
      { name: 'Soneva Jani', city: 'Maldives', address: 'Medhufaru, Noonu Atoll', pricePerNight: 79999, rating: 5.0, image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200' },
      { name: "Hôtel de Crillon", city: 'Paris', address: 'Place de la Concorde, Paris', pricePerNight: 45999, rating: 4.8, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200' },
      { name: "Badrutt's Palace", city: 'St. Moritz', address: 'Via Serlas, St. Moritz', pricePerNight: 38999, rating: 4.9, image: 'https://images.unsplash.com/photo-1590490360182-c0bd6959d45d?q=80&w=1200' },
      { name: 'The Savoy', city: 'London', address: 'Strand, London', pricePerNight: 34999, rating: 4.8, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200' },
    ],
  })

  console.log('Seed complete.')
  console.log('Admin login: admin@unitriptravels.com / Admin@123')
  console.log('Demo user login: demo@unitriptravels.com / Demo@123')
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(async () => { await prisma.$disconnect() })
