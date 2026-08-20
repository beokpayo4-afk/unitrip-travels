// Demo data used to render the UI instantly without a live backend.
// Mirrors the shape returned by the real REST API (see backend/prisma/seed.js).

export const localDestinations = [
  { id: 'noida', name: 'Noida', region: 'local', tagline: 'NCR Day Out', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop', startingPrice: 1999, distanceKm: 25 },
  { id: 'gurugram', name: 'Gurugram', region: 'local', tagline: 'City & Cyber Hub', image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=1200&auto=format&fit=crop', startingPrice: 2499, distanceKm: 32 },
  { id: 'mathura', name: 'Mathura', region: 'local', tagline: "Krishna's City", image: '/destinations/mathura.jpg', startingPrice: 3499, distanceKm: 150 },
  { id: 'haridwar', name: 'Haridwar', region: 'local', tagline: 'Ganga Aarti', image: '/destinations/haridwar.jpg', startingPrice: 4499, distanceKm: 220 },
  { id: 'rishikesh', name: 'Rishikesh', region: 'local', tagline: 'Yoga & Rapids', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop', startingPrice: 4999, distanceKm: 240 },
  { id: 'chandigarh', name: 'Chandigarh', region: 'local', tagline: 'The Planned City', image: '/destinations/chandigarh.jpg', startingPrice: 5499, distanceKm: 250 },
  { id: 'shimla', name: 'Shimla', region: 'local', tagline: 'Queen of Hills', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop', startingPrice: 6999, distanceKm: 350 },
  { id: 'amritsar', name: 'Amritsar', region: 'local', tagline: 'Golden Temple', image: '/destinations/amritsar.jpg', startingPrice: 7999, distanceKm: 450 },
]

export const indiaDestinations = [
  { id: 'raj', name: 'Rajasthan', region: 'india', tagline: 'Land of Kings & Forts', image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200&auto=format&fit=crop', startingPrice: 14999, distanceKm: 280 },
  { id: 'goa', name: 'Goa', region: 'india', tagline: 'Sun, Sand & Beaches', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop', startingPrice: 9999, distanceKm: 1900 },
  { id: 'kerala', name: 'Kerala', region: 'india', tagline: "God's Own Country", image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop', startingPrice: 12999, distanceKm: 2400 },
  { id: 'manali', name: 'Manali', region: 'india', tagline: 'Himalayan Escape', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop', startingPrice: 10999, distanceKm: 540 },
  { id: 'kashmir', name: 'Kashmir', region: 'india', tagline: 'Paradise on Earth', image: '/destinations/kashmir.jpg', startingPrice: 15999, distanceKm: 820 },
  { id: 'delhi', name: 'Delhi', region: 'india', tagline: 'Heart of India', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop', startingPrice: 6999, distanceKm: 20 },
  { id: 'mumbai', name: 'Mumbai', region: 'india', tagline: 'The City of Dreams', image: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?q=80&w=1200&auto=format&fit=crop', startingPrice: 7999, distanceKm: 1400 },
  { id: 'agra', name: 'Agra', region: 'india', tagline: 'Home of the Taj Mahal', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200&auto=format&fit=crop', startingPrice: 5999, distanceKm: 230 },
]

export const internationalDestinations = [
  { id: 'dubai', name: 'Dubai', region: 'international', tagline: 'Luxury & Skyscrapers', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop', startingPrice: 42999, distanceKm: 2200 },
  { id: 'bali', name: 'Bali', region: 'international', tagline: 'Island of the Gods', image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200&auto=format&fit=crop', startingPrice: 38999, distanceKm: 5800 },
  { id: 'thailand', name: 'Thailand', region: 'international', tagline: 'Tropical Paradise', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1200&auto=format&fit=crop', startingPrice: 29999, distanceKm: 3000 },
  { id: 'singapore', name: 'Singapore', region: 'international', tagline: 'Garden City', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1200&auto=format&fit=crop', startingPrice: 45999, distanceKm: 4150 },
  { id: 'maldives', name: 'Maldives', region: 'international', tagline: 'Overwater Bliss', image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200&auto=format&fit=crop', startingPrice: 59999, distanceKm: 2700 },
  { id: 'paris', name: 'Paris', region: 'international', tagline: 'The City of Light', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop', startingPrice: 79999, distanceKm: 6600 },
  { id: 'switzerland', name: 'Switzerland', region: 'international', tagline: 'Alpine Wonderland', image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1200&auto=format&fit=crop', startingPrice: 89999, distanceKm: 6150 },
  { id: 'london', name: 'London', region: 'international', tagline: 'Royal & Iconic', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop', startingPrice: 84999, distanceKm: 6700 },
]

export const popularDestinationIds = ['noida', 'haridwar', 'raj', 'goa', 'dubai', 'bali']
export const popularDestinations = [...localDestinations, ...indiaDestinations, ...internationalDestinations].filter(d => popularDestinationIds.includes(d.id))

export const allDestinations = [...localDestinations, ...indiaDestinations, ...internationalDestinations]

const hotelImg = {
  palace: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
  resort: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1200&auto=format&fit=crop',
  pool: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop',
  luxury: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
  mountain: 'https://images.unsplash.com/photo-1590490360182-c0bd6959d45d?q=80&w=1200&auto=format&fit=crop',
  city: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop',
  boutique: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1200&auto=format&fit=crop',
  overwater: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200&auto=format&fit=crop',
}

const hotelGroups = [
  { id: 'noida', city: 'Noida', keywords: 'noida ncr delhi', stays: [
    { name: 'Radisson Blu Noida', address: 'Sector 18, Noida', pricePerNight: 6499, rating: 4.4, type: 'Business', image: hotelImg.city },
    { name: 'Crowne Plaza Greater Noida', address: 'Knowledge Park, Greater Noida', pricePerNight: 5299, rating: 4.3, type: 'Mid-range', image: hotelImg.boutique },
    { name: 'Savoy Suites Noida', address: 'Sector 16, Noida', pricePerNight: 3899, rating: 4.1, type: 'Value', image: hotelImg.pool },
  ]},
  { id: 'gurugram', city: 'Gurugram', keywords: 'gurugram gurgaon ncr delhi', stays: [
    { name: 'The Leela Ambience Gurugram', address: 'Ambience Island, Gurugram', pricePerNight: 11999, rating: 4.7, type: 'Luxury', image: hotelImg.luxury },
    { name: 'Trident Gurugram', address: 'Cyber City, Gurugram', pricePerNight: 8999, rating: 4.5, type: 'Business', image: hotelImg.city },
    { name: 'Lemon Tree Premier Gurugram', address: 'Sector 29, Gurugram', pricePerNight: 5499, rating: 4.2, type: 'Mid-range', image: hotelImg.boutique },
  ]},
  { id: 'mathura', city: 'Mathura', keywords: 'mathura vrindavan krishna', stays: [
    { name: 'Brijwasi Lands Inn', address: 'Near Prem Mandir, Vrindavan', pricePerNight: 4299, rating: 4.3, type: 'Heritage', image: hotelImg.palace },
    { name: 'Nidhivan Sarovar Portico', address: 'Banke Bihari Road, Vrindavan', pricePerNight: 5999, rating: 4.4, type: 'Mid-range', image: hotelImg.pool },
    { name: 'Hotel Brijwasi Royal', address: 'Bhuteshwar Road, Mathura', pricePerNight: 2799, rating: 4.0, type: 'Value', image: hotelImg.boutique },
  ]},
  { id: 'haridwar', city: 'Haridwar', keywords: 'haridwar ganga aarti ghat', stays: [
    { name: 'Ganga Lahari by Leisure', address: 'Har Ki Pauri, Haridwar', pricePerNight: 5499, rating: 4.5, type: 'Riverside', image: hotelImg.pool },
    { name: 'Radisson Blu Haridwar', address: 'Industrial Area, Haridwar', pricePerNight: 6999, rating: 4.4, type: 'Business', image: hotelImg.city },
    { name: 'Godwin Hotel Haridwar', address: 'Railway Road, Haridwar', pricePerNight: 3299, rating: 4.1, type: 'Value', image: hotelImg.boutique },
  ]},
  { id: 'rishikesh', city: 'Rishikesh', keywords: 'rishikesh yoga ganges', stays: [
    { name: 'Aloha On The Ganges', address: 'Tapovan, Rishikesh', pricePerNight: 7999, rating: 4.6, type: 'Riverside', image: hotelImg.mountain },
    { name: 'Ananda in the Himalayas', address: 'Narendranagar, Rishikesh', pricePerNight: 28999, rating: 4.9, type: 'Luxury', image: hotelImg.luxury },
    { name: 'The Hosteller Rishikesh', address: 'Laxman Jhula, Rishikesh', pricePerNight: 2499, rating: 4.2, type: 'Value', image: hotelImg.boutique },
  ]},
  { id: 'chandigarh', city: 'Chandigarh', keywords: 'chandigarh', stays: [
    { name: 'JW Marriott Chandigarh', address: 'Sector 35, Chandigarh', pricePerNight: 10999, rating: 4.6, type: 'Luxury', image: hotelImg.luxury },
    { name: 'Hyatt Regency Chandigarh', address: 'Industrial Area, Chandigarh', pricePerNight: 8499, rating: 4.5, type: 'Business', image: hotelImg.city },
    { name: 'Hotel Shivalikview', address: 'Sector 17, Chandigarh', pricePerNight: 4599, rating: 4.1, type: 'Mid-range', image: hotelImg.boutique },
  ]},
  { id: 'shimla', city: 'Shimla', keywords: 'shimla himachal hills', stays: [
    { name: 'Oberoi Wildflower Hall', address: 'Mashobra, Shimla', pricePerNight: 18999, rating: 4.8, type: 'Luxury', image: hotelImg.mountain },
    { name: 'The Oberoi Cecil', address: 'Chaura Maidan, Shimla', pricePerNight: 12999, rating: 4.6, type: 'Heritage', image: hotelImg.palace },
    { name: 'Clarkes Hotel Shimla', address: 'The Mall, Shimla', pricePerNight: 6999, rating: 4.3, type: 'Mid-range', image: hotelImg.boutique },
  ]},
  { id: 'amritsar', city: 'Amritsar', keywords: 'amritsar golden temple punjab', stays: [
    { name: 'Taj Swarna Amritsar', address: 'Near Golden Temple, Amritsar', pricePerNight: 9999, rating: 4.7, type: 'Luxury', image: hotelImg.palace },
    { name: 'Hyatt Amritsar', address: 'Mall Road, Amritsar', pricePerNight: 7499, rating: 4.5, type: 'Business', image: hotelImg.city },
    { name: 'Ramada Amritsar', address: 'Ranjit Avenue, Amritsar', pricePerNight: 4999, rating: 4.2, type: 'Mid-range', image: hotelImg.pool },
  ]},
  { id: 'jaipur', city: 'Jaipur', keywords: 'jaipur rajasthan', stays: [
    { name: 'The Leela Palace Jaipur', address: 'Delhi Road, Jaipur', pricePerNight: 8500, rating: 4.7, type: 'Luxury', image: hotelImg.palace },
    { name: 'Rambagh Palace', address: 'Bhawani Singh Road, Jaipur', pricePerNight: 22999, rating: 4.9, type: 'Heritage', image: hotelImg.luxury },
    { name: 'ITC Rajputana Jaipur', address: 'Palace Road, Jaipur', pricePerNight: 7999, rating: 4.4, type: 'Mid-range', image: hotelImg.city },
  ]},
  { id: 'udaipur', city: 'Udaipur', keywords: 'udaipur rajasthan lake', stays: [
    { name: 'Taj Lake Palace', address: 'Lake Pichola, Udaipur', pricePerNight: 24999, rating: 4.9, type: 'Luxury', image: hotelImg.luxury },
    { name: 'The Oberoi Udaivilas', address: 'Haridasji Ki Magri, Udaipur', pricePerNight: 31999, rating: 4.9, type: 'Luxury', image: hotelImg.palace },
    { name: 'Trident Udaipur', address: 'Mewar Palace, Udaipur', pricePerNight: 8999, rating: 4.5, type: 'Mid-range', image: hotelImg.pool },
  ]},
  { id: 'goa', city: 'Goa', keywords: 'goa beach', stays: [
    { name: 'Taj Exotica Goa', address: 'Benaulim, South Goa', pricePerNight: 12000, rating: 4.8, type: 'Luxury', image: hotelImg.resort },
    { name: 'W Goa', address: 'Vagator, North Goa', pricePerNight: 15999, rating: 4.6, type: 'Resort', image: hotelImg.pool },
    { name: 'Alila Diwa Goa', address: 'Majorda, South Goa', pricePerNight: 9999, rating: 4.5, type: 'Boutique', image: hotelImg.boutique },
  ]},
  { id: 'kerala', city: 'Kerala', keywords: 'kerala alleppey kochi munnar backwaters', stays: [
    { name: 'Kumarakom Lake Resort', address: 'Kumarakom, Kottayam', pricePerNight: 15999, rating: 4.8, type: 'Luxury', image: hotelImg.pool },
    { name: 'Taj Malabar Resort & Spa', address: 'Willingdon Island, Kochi', pricePerNight: 11999, rating: 4.6, type: 'Heritage', image: hotelImg.luxury },
    { name: 'Spice Tree Munnar', address: 'Chithirapuram, Munnar', pricePerNight: 8499, rating: 4.4, type: 'Boutique', image: hotelImg.mountain },
  ]},
  { id: 'manali', city: 'Manali', keywords: 'manali himachal solang', stays: [
    { name: 'The Himalayan Manali', address: 'Hadimba Road, Manali', pricePerNight: 8999, rating: 4.5, type: 'Boutique', image: hotelImg.mountain },
    { name: 'Span Resort & Spa', address: 'Kullu Road, Manali', pricePerNight: 12999, rating: 4.6, type: 'Luxury', image: hotelImg.luxury },
    { name: 'Johnson Lodge Manali', address: 'Circuit House Road, Manali', pricePerNight: 4599, rating: 4.2, type: 'Value', image: hotelImg.boutique },
  ]},
  { id: 'kashmir', city: 'Srinagar', keywords: 'kashmir srinagar gulmarg', stays: [
    { name: 'The Lalit Grand Palace', address: 'Gupkar Road, Srinagar', pricePerNight: 13999, rating: 4.6, type: 'Heritage', image: '/destinations/kashmir.jpg' },
    { name: 'Vivanta Dal View', address: 'Kralsangri, Srinagar', pricePerNight: 11999, rating: 4.5, type: 'Luxury', image: hotelImg.luxury },
    { name: 'Khyber Himalayan Resort', address: 'Gulmarg', pricePerNight: 16999, rating: 4.7, type: 'Resort', image: hotelImg.mountain },
  ]},
  { id: 'delhi', city: 'Delhi', keywords: 'delhi new delhi ncr', stays: [
    { name: 'The Imperial New Delhi', address: 'Janpath, New Delhi', pricePerNight: 16999, rating: 4.8, type: 'Luxury', image: hotelImg.city },
    { name: 'The Lodhi New Delhi', address: 'Lodhi Road, New Delhi', pricePerNight: 21999, rating: 4.7, type: 'Luxury', image: hotelImg.luxury },
    { name: 'Bloomrooms @ New Delhi', address: 'Paharganj, New Delhi', pricePerNight: 3299, rating: 4.1, type: 'Value', image: hotelImg.boutique },
  ]},
  { id: 'mumbai', city: 'Mumbai', keywords: 'mumbai bombay', stays: [
    { name: 'Taj Mahal Palace Mumbai', address: 'Apollo Bunder, Mumbai', pricePerNight: 18999, rating: 4.9, type: 'Luxury', image: hotelImg.luxury },
    { name: 'The St. Regis Mumbai', address: 'Lower Parel, Mumbai', pricePerNight: 16999, rating: 4.7, type: 'Luxury', image: hotelImg.city },
    { name: 'Trident Nariman Point', address: 'Nariman Point, Mumbai', pricePerNight: 11999, rating: 4.5, type: 'Business', image: hotelImg.pool },
  ]},
  { id: 'agra', city: 'Agra', keywords: 'agra taj mahal', stays: [
    { name: 'The Oberoi Amarvilas', address: 'Taj East Gate Road, Agra', pricePerNight: 22999, rating: 4.9, type: 'Luxury', image: hotelImg.palace },
    { name: 'ITC Mughal Agra', address: 'Taj Ganj, Agra', pricePerNight: 9999, rating: 4.6, type: 'Heritage', image: hotelImg.luxury },
    { name: 'Trident Agra', address: 'Fatehabad Road, Agra', pricePerNight: 7499, rating: 4.4, type: 'Mid-range', image: hotelImg.pool },
  ]},
  { id: 'dubai', city: 'Dubai', keywords: 'dubai uae', stays: [
    { name: 'Atlantis The Palm', address: 'Crescent Road, Palm Jumeirah', pricePerNight: 28999, rating: 4.7, type: 'Luxury', image: hotelImg.luxury },
    { name: 'Burj Al Arab Jumeirah', address: 'Jumeirah Beach, Dubai', pricePerNight: 89999, rating: 4.9, type: 'Luxury', image: hotelImg.city },
    { name: 'Rove Downtown Dubai', address: 'Downtown Dubai', pricePerNight: 9999, rating: 4.3, type: 'Mid-range', image: hotelImg.boutique },
  ]},
  { id: 'bali', city: 'Bali', keywords: 'bali ubud indonesia', stays: [
    { name: 'Four Seasons Sayan', address: 'Sayan, Ubud', pricePerNight: 24999, rating: 4.8, type: 'Luxury', image: hotelImg.resort },
    { name: 'COMO Uma Ubud', address: 'Banjar Payogan, Ubud', pricePerNight: 18999, rating: 4.7, type: 'Boutique', image: hotelImg.pool },
    { name: 'Potato Head Studios', address: 'Seminyak, Bali', pricePerNight: 12999, rating: 4.5, type: 'Resort', image: hotelImg.boutique },
  ]},
  { id: 'thailand', city: 'Bangkok', keywords: 'thailand bangkok phuket', stays: [
    { name: 'Mandarin Oriental Bangkok', address: 'Chao Phraya River, Bangkok', pricePerNight: 16999, rating: 4.7, type: 'Luxury', image: hotelImg.pool },
    { name: 'The Siam Bangkok', address: 'Dusit, Bangkok', pricePerNight: 21999, rating: 4.8, type: 'Boutique', image: hotelImg.luxury },
    { name: 'Amari Phuket', address: 'Patong Beach, Phuket', pricePerNight: 8999, rating: 4.4, type: 'Resort', image: hotelImg.resort },
  ]},
  { id: 'singapore', city: 'Singapore', keywords: 'singapore sentosa', stays: [
    { name: 'Marina Bay Sands', address: 'Bayfront Avenue, Singapore', pricePerNight: 32999, rating: 4.8, type: 'Luxury', image: hotelImg.city },
    { name: 'Raffles Singapore', address: 'Beach Road, Singapore', pricePerNight: 38999, rating: 4.9, type: 'Heritage', image: hotelImg.luxury },
    { name: 'Parkroyal Collection Pickering', address: 'Upper Pickering Street', pricePerNight: 18999, rating: 4.6, type: 'Boutique', image: hotelImg.pool },
  ]},
  { id: 'maldives', city: 'Maldives', keywords: 'maldives male overwater', stays: [
    { name: 'Soneva Jani', address: 'Medhufaru, Noonu Atoll', pricePerNight: 79999, rating: 5.0, type: 'Luxury', image: hotelImg.overwater },
    { name: 'Conrad Maldives Rangali', address: 'Rangali Island', pricePerNight: 54999, rating: 4.8, type: 'Resort', image: hotelImg.resort },
    { name: 'Kurumba Maldives', address: 'Vihamanaafushi', pricePerNight: 28999, rating: 4.5, type: 'Mid-range', image: hotelImg.pool },
  ]},
  { id: 'paris', city: 'Paris', keywords: 'paris france', stays: [
    { name: 'Hôtel de Crillon', address: 'Place de la Concorde, Paris', pricePerNight: 45999, rating: 4.8, type: 'Luxury', image: hotelImg.luxury },
    { name: 'Le Bristol Paris', address: 'Rue du Faubourg Saint-Honoré', pricePerNight: 52999, rating: 4.9, type: 'Luxury', image: hotelImg.palace },
    { name: 'Hôtel Malte Opera', address: 'Rue de Richelieu, Paris', pricePerNight: 18999, rating: 4.3, type: 'Boutique', image: hotelImg.boutique },
  ]},
  { id: 'switzerland', city: 'Switzerland', keywords: 'switzerland zurich interlaken lucerne st moritz', stays: [
    { name: "Badrutt's Palace", address: 'Via Serlas, St. Moritz', pricePerNight: 38999, rating: 4.9, type: 'Luxury', image: hotelImg.mountain },
    { name: 'The Dolder Grand', address: 'Zurich', pricePerNight: 42999, rating: 4.8, type: 'Luxury', image: hotelImg.luxury },
    { name: 'Victoria-Jungfrau Interlaken', address: 'Höheweg, Interlaken', pricePerNight: 27999, rating: 4.6, type: 'Heritage', image: hotelImg.palace },
  ]},
  { id: 'london', city: 'London', keywords: 'london uk britain', stays: [
    { name: 'The Savoy', address: 'Strand, London', pricePerNight: 34999, rating: 4.8, type: 'Luxury', image: hotelImg.city },
    { name: 'The Ritz London', address: 'Piccadilly, London', pricePerNight: 49999, rating: 4.9, type: 'Luxury', image: hotelImg.palace },
    { name: 'The Hoxton Shoreditch', address: 'Shoreditch, London', pricePerNight: 18999, rating: 4.4, type: 'Boutique', image: hotelImg.boutique },
  ]},
]

export const hotels = hotelGroups.flatMap((group) =>
  group.stays.map((stay, index) => ({
    id: `h-${group.id}-${index + 1}`,
    city: group.city,
    keywords: group.keywords,
    currency: 'INR',
    ...stay,
  })),
)

export function searchHotelsLocal({ destination } = {}) {
  const q = String(destination || '').trim().toLowerCase()
  if (!q) return hotels
  return hotels.filter((h) => `${h.name} ${h.city} ${h.address || ''} ${h.keywords || ''}`.toLowerCase().includes(q))
}

export function mergeHotelResults(primary = [], fallback = []) {
  const seen = new Set()
  const merged = []
  for (const hotel of [...primary, ...fallback]) {
    const key = `${String(hotel.name || '').toLowerCase()}|${String(hotel.city || '').toLowerCase()}`
    if (!hotel.name || seen.has(key)) continue
    seen.add(key)
    merged.push(hotel)
  }
  return merged
}

export const flightCities = [
  'Delhi', 'Mumbai', 'Goa', 'Jaipur', 'Agra', 'Kochi', 'Srinagar', 'Chandigarh', 'Amritsar',
  'Dehradun', 'Manali', 'Bengaluru', 'Dubai', 'Bali', 'Bangkok', 'Singapore', 'Maldives', 'Paris', 'Zurich', 'London',
]

const airportCodes = {
  delhi: 'DEL', 'new delhi': 'DEL', del: 'DEL', ncr: 'DEL', noida: 'DEL', gurugram: 'DEL', gurgaon: 'DEL',
  mumbai: 'BOM', bombay: 'BOM', bom: 'BOM',
  goa: 'GOI', goi: 'GOI',
  jaipur: 'JAI', rajasthan: 'JAI', jai: 'JAI',
  agra: 'AGR', agr: 'AGR',
  kochi: 'COK', kerala: 'COK', cochin: 'COK', alleppey: 'COK', cok: 'COK',
  srinagar: 'SXR', kashmir: 'SXR', sxr: 'SXR',
  chandigarh: 'IXC', ixc: 'IXC',
  amritsar: 'ATQ', atq: 'ATQ',
  dehradun: 'DED', haridwar: 'DED', rishikesh: 'DED', ded: 'DED',
  manali: 'KUU', kullu: 'KUU', kuu: 'KUU',
  bengaluru: 'BLR', bangalore: 'BLR', blr: 'BLR',
  dubai: 'DXB', dxb: 'DXB', uae: 'DXB',
  bali: 'DPS', dps: 'DPS', ubud: 'DPS',
  bangkok: 'BKK', thailand: 'BKK', bkk: 'BKK', phuket: 'HKT',
  singapore: 'SIN', sin: 'SIN',
  maldives: 'MLE', male: 'MLE', mle: 'MLE',
  paris: 'CDG', france: 'CDG', cdg: 'CDG',
  zurich: 'ZRH', switzerland: 'ZRH', interlaken: 'ZRH', zrh: 'ZRH',
  london: 'LHR', uk: 'LHR', britain: 'LHR', lhr: 'LHR',
}

const airlineNames = {
  '6E': 'IndiGo', AI: 'Air India', UK: 'Vistara', SG: 'SpiceJet',
  EK: 'Emirates', SQ: 'Singapore Airlines', TG: 'Thai Airways',
  BA: 'British Airways', AF: 'Air France', LX: 'SWISS', GA: 'Garuda Indonesia',
}

function resolveAirport(query) {
  const q = String(query || '').trim().toLowerCase()
  if (!q) return ''
  if (/^[a-z]{3}$/.test(q)) return q.toUpperCase()
  return airportCodes[q] || ''
}

function flightDateTime(date, time) {
  return `${date}T${time}:00`
}

function addFlightDuration(date, time, duration) {
  const start = new Date(`${date}T${time}:00`)
  const match = String(duration).match(/PT(?:(\d+)H)?(?:(\d+)M)?/)
  const hours = Number(match?.[1] || 0)
  const minutes = Number(match?.[2] || 0)
  start.setMinutes(start.getMinutes() + hours * 60 + minutes)
  const pad = (n) => String(n).padStart(2, '0')
  return `${start.getFullYear()}-${pad(start.getMonth() + 1)}-${pad(start.getDate())}T${pad(start.getHours())}:${pad(start.getMinutes())}:00`
}

const flightRouteCatalog = [
  { from: 'DEL', to: 'BOM', duration: 'PT2H15M', options: [
    { airline: '6E', dep: '06:15', price: 4599, seats: 7 },
    { airline: 'AI', dep: '09:40', price: 6120, seats: 4 },
    { airline: 'UK', dep: '14:10', price: 6899, seats: 9 },
    { airline: 'SG', dep: '19:25', price: 3999, seats: 3 },
  ]},
  { from: 'DEL', to: 'GOI', duration: 'PT2H40M', options: [
    { airline: '6E', dep: '07:00', price: 5299, seats: 8 },
    { airline: 'AI', dep: '11:20', price: 7480, seats: 5 },
    { airline: 'SG', dep: '16:45', price: 4899, seats: 6 },
  ]},
  { from: 'DEL', to: 'JAI', duration: 'PT1H10M', options: [
    { airline: '6E', dep: '08:05', price: 2899, seats: 12 },
    { airline: 'AI', dep: '13:30', price: 3499, seats: 6 },
    { airline: 'UK', dep: '18:15', price: 4199, seats: 4 },
  ]},
  { from: 'DEL', to: 'COK', duration: 'PT3H05M', options: [
    { airline: '6E', dep: '05:50', price: 6899, seats: 5 },
    { airline: 'AI', dep: '10:15', price: 8420, seats: 3 },
    { airline: 'UK', dep: '15:40', price: 7999, seats: 8 },
  ]},
  { from: 'DEL', to: 'SXR', duration: 'PT1H30M', options: [
    { airline: '6E', dep: '06:40', price: 5499, seats: 6 },
    { airline: 'AI', dep: '12:05', price: 6299, seats: 4 },
    { airline: 'SG', dep: '17:20', price: 4999, seats: 7 },
  ]},
  { from: 'DEL', to: 'IXC', duration: 'PT1H05M', options: [
    { airline: '6E', dep: '07:25', price: 2599, seats: 11 },
    { airline: 'AI', dep: '14:50', price: 3199, seats: 5 },
    { airline: 'UK', dep: '20:10', price: 3699, seats: 2 },
  ]},
  { from: 'DEL', to: 'ATQ', duration: 'PT1H15M', options: [
    { airline: '6E', dep: '08:20', price: 2799, seats: 9 },
    { airline: 'AI', dep: '15:35', price: 3399, seats: 4 },
    { airline: 'SG', dep: '21:00', price: 2499, seats: 6 },
  ]},
  { from: 'DEL', to: 'DED', duration: 'PT1H00M', options: [
    { airline: '6E', dep: '09:10', price: 2399, seats: 10 },
    { airline: 'AI', dep: '16:25', price: 2899, seats: 5 },
  ]},
  { from: 'DEL', to: 'KUU', duration: 'PT1H25M', options: [
    { airline: '6E', dep: '10:00', price: 4599, seats: 4 },
    { airline: 'AI', dep: '13:45', price: 5299, seats: 3 },
  ]},
  { from: 'BOM', to: 'GOI', duration: 'PT1H15M', options: [
    { airline: '6E', dep: '06:50', price: 3199, seats: 8 },
    { airline: 'UK', dep: '12:30', price: 4299, seats: 5 },
    { airline: 'SG', dep: '18:40', price: 2899, seats: 7 },
  ]},
  { from: 'DEL', to: 'DXB', duration: 'PT3H50M', options: [
    { airline: 'AI', dep: '04:30', price: 18999, seats: 6 },
    { airline: 'EK', dep: '10:15', price: 24999, seats: 9 },
    { airline: '6E', dep: '16:40', price: 16999, seats: 4 },
  ]},
  { from: 'DEL', to: 'DPS', duration: 'PT8H20M', options: [
    { airline: 'AI', dep: '00:40', price: 28999, seats: 5, stops: 1 },
    { airline: 'GA', dep: '09:10', price: 32999, seats: 3, stops: 1 },
    { airline: 'SQ', dep: '22:15', price: 35999, seats: 6, stops: 1 },
  ]},
  { from: 'DEL', to: 'BKK', duration: 'PT4H10M', options: [
    { airline: 'AI', dep: '01:20', price: 14999, seats: 7 },
    { airline: 'TG', dep: '11:45', price: 18999, seats: 8 },
    { airline: '6E', dep: '23:05', price: 12999, seats: 4 },
  ]},
  { from: 'DEL', to: 'SIN', duration: 'PT5H35M', options: [
    { airline: 'AI', dep: '09:00', price: 22999, seats: 5 },
    { airline: 'SQ', dep: '12:30', price: 28999, seats: 7 },
    { airline: '6E', dep: '23:40', price: 19999, seats: 3 },
  ]},
  { from: 'DEL', to: 'MLE', duration: 'PT4H00M', options: [
    { airline: 'AI', dep: '08:50', price: 24999, seats: 4 },
    { airline: 'UK', dep: '13:15', price: 26999, seats: 6 },
  ]},
  { from: 'DEL', to: 'CDG', duration: 'PT9H15M', options: [
    { airline: 'AI', dep: '02:10', price: 42999, seats: 5 },
    { airline: 'AF', dep: '13:25', price: 48999, seats: 8 },
  ]},
  { from: 'DEL', to: 'ZRH', duration: 'PT8H40M', options: [
    { airline: 'AI', dep: '01:55', price: 45999, seats: 4, stops: 1 },
    { airline: 'LX', dep: '12:40', price: 52999, seats: 6 },
  ]},
  { from: 'DEL', to: 'LHR', duration: 'PT9H25M', options: [
    { airline: 'AI', dep: '02:30', price: 41999, seats: 6 },
    { airline: 'BA', dep: '10:05', price: 49999, seats: 7 },
    { airline: 'UK', dep: '14:20', price: 43999, seats: 3 },
  ]},
  { from: 'BOM', to: 'DXB', duration: 'PT3H20M', options: [
    { airline: 'AI', dep: '05:45', price: 16499, seats: 5 },
    { airline: 'EK', dep: '11:00', price: 21999, seats: 8 },
    { airline: '6E', dep: '18:30', price: 14999, seats: 4 },
  ]},
]

export function searchFlightsLocal({ from, to, departure, passengers } = {}) {
  const origin = resolveAirport(from)
  const dest = resolveAirport(to)
  if (!origin || !dest || origin === dest || !departure) return []

  const route = flightRouteCatalog.find((r) => r.from === origin && r.to === dest)
    || flightRouteCatalog.find((r) => r.from === dest && r.to === origin)
  const reversed = route && !(route.from === origin && route.to === dest)
  if (!route) return []

  const pax = Math.max(1, Number(passengers) || 1)
  const fromCode = reversed ? route.to : route.from
  const toCode = reversed ? route.from : route.to

  return route.options.map((option, index) => ({
    id: `${fromCode}-${toCode}-${option.airline}-${index + 1}`,
    price: option.price * pax,
    currency: 'INR',
    airline: option.airline,
    airlineName: airlineNames[option.airline] || option.airline,
    stops: option.stops || 0,
    duration: route.duration,
    departureAirport: fromCode,
    departureTime: flightDateTime(departure, option.dep),
    arrivalAirport: toCode,
    arrivalTime: addFlightDuration(departure, option.dep, route.duration),
    seatsAvailable: option.seats,
  }))
}

export const destinationGroups = [
  { key: 'local', label: 'Local', items: localDestinations },
  { key: 'india', label: 'India', items: indiaDestinations },
  { key: 'international', label: 'International', items: internationalDestinations },
]
export const ticketDestinationGroups = destinationGroups.filter((g) => g.key !== 'international')

export const tourPackages = [
  { id: 't1', title: 'Rajasthan Heritage Tour', category: 'domestic', destination: 'Jaipur • Jodhpur • Udaipur', duration: '5 Days / 4 Nights', rating: 4.8, price: 18999, image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200&auto=format&fit=crop', description: 'Explore royal palaces, majestic forts and vibrant markets across the golden triangle of Rajasthan.' },
  { id: 't2', title: 'Goa Beach Getaway', category: 'weekend', destination: 'North & South Goa', duration: '3 Days / 2 Nights', rating: 4.6, price: 9999, image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop', description: 'Sun-soaked beaches, water sports and vibrant nightlife on the Goan coastline.' },
  { id: 't3', title: 'Kerala Backwaters Bliss', category: 'family', destination: 'Alleppey • Munnar • Kochi', duration: '6 Days / 5 Nights', rating: 4.9, price: 24999, image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop', description: 'Houseboat stays, tea gardens and serene backwaters — perfect for family time.' },
  { id: 't4', title: 'Kashmir Paradise Tour', category: 'honeymoon', destination: 'Srinagar • Gulmarg • Pahalgam', duration: '6 Days / 5 Nights', rating: 4.9, price: 27999, image: '/destinations/kashmir.jpg', description: 'Snow-capped mountains, shikara rides and dreamy houseboats for couples.' },
  { id: 't5', title: 'Udaipur Palace Luxury', category: 'luxury', destination: 'Udaipur • Lake Pichola', duration: '5 Days / 4 Nights', rating: 4.7, price: 34999, image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200&auto=format&fit=crop', description: 'Lake palaces, royal dinners and five-star heritage stays in the City of Lakes.' },
  { id: 't6', title: 'Andaman Honeymoon Special', category: 'honeymoon', destination: 'Port Blair • Havelock • Neil Island', duration: '6 Days / 5 Nights', rating: 4.8, price: 38999, image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop', description: 'White-sand beaches, scuba diving and private island sunsets in the Andamans.' },
  { id: 't7', title: 'Meghalaya Adventure Trail', category: 'adventure', destination: 'Shillong • Cherrapunji • Dawki', duration: '6 Days / 5 Nights', rating: 4.6, price: 22999, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop', description: 'Living root bridges, waterfalls and monsoon landscapes across Meghalaya.' },
  { id: 't8', title: 'Manali Group Adventure', category: 'group', destination: 'Manali • Solang Valley • Kasol', duration: '5 Days / 4 Nights', rating: 4.5, price: 15999, image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop', description: 'Trekking, river rafting and bonfire nights with a group of fellow travelers.' },
  { id: 't9', title: 'Ladakh Himalayan Dream', category: 'adventure', destination: 'Leh • Nubra • Pangong', duration: '7 Days / 6 Nights', rating: 4.9, price: 32999, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop', description: 'High-altitude lakes, monasteries and dramatic mountain passes of Ladakh.' },
  { id: 't10', title: 'Goa Luxury Beach Retreat', category: 'luxury', destination: 'South Goa Beach Resort', duration: '4 Days / 3 Nights', rating: 5.0, price: 24999, image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop', description: 'Private beach villas, spa days and sunset dinners on the Goan coast.' },
  { id: 't11', title: 'Agra Golden Triangle', category: 'weekend', destination: 'Delhi • Agra • Jaipur', duration: '4 Days / 3 Nights', rating: 4.5, price: 12999, image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200&auto=format&fit=crop', description: 'Witness the Taj Mahal and explore India\u2019s most iconic heritage circuit.' },
  { id: 't12', title: 'Jaipur Family Fun', category: 'family', destination: 'Jaipur • Amber Fort • City Palace', duration: '4 Days / 3 Nights', rating: 4.7, price: 15999, image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200&auto=format&fit=crop', description: 'Forts, bazaars and family-friendly heritage walks in the Pink City.' },
  { id: 't13', title: 'Dubai Luxury Escape', category: 'international', destination: 'Dubai • Abu Dhabi', duration: '5 Days / 4 Nights', rating: 4.7, price: 54999, image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop', description: 'Desert safaris, skyline views and five-star luxury in the UAE.' },
  { id: 't14', title: 'Bali Honeymoon Special', category: 'international', destination: 'Ubud • Seminyak • Nusa Penida', duration: '6 Days / 5 Nights', rating: 4.8, price: 48999, image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200&auto=format&fit=crop', description: 'Private villas, waterfalls and romantic sunsets across Bali’s best spots.' },
  { id: 't15', title: 'Thailand Adventure Trail', category: 'international', destination: 'Bangkok • Phuket • Krabi', duration: '7 Days / 6 Nights', rating: 4.6, price: 35999, image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1200&auto=format&fit=crop', description: 'Island hopping, jungle trekking and vibrant street food adventures.' },
  { id: 't16', title: 'Switzerland Alpine Dream', category: 'international', destination: 'Zurich • Interlaken • Lucerne', duration: '8 Days / 7 Nights', rating: 4.9, price: 129999, image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1200&auto=format&fit=crop', description: 'Scenic train rides, snow-capped peaks and picture-perfect alpine villages.' },
  { id: 't17', title: 'Maldives Overwater Retreat', category: 'international', destination: 'Male • Private Island Resort', duration: '4 Days / 3 Nights', rating: 5.0, price: 89999, image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200&auto=format&fit=crop', description: 'Overwater villas, coral reefs and unmatched island luxury.' },
  { id: 't18', title: 'Singapore Family Fun', category: 'international', destination: 'Sentosa • Gardens by the Bay', duration: '5 Days / 4 Nights', rating: 4.7, price: 62999, image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1200&auto=format&fit=crop', description: 'Theme parks, futuristic gardens and family-friendly attractions.' },
]

export const tourCategories = ['domestic', 'international', 'honeymoon', 'family', 'adventure', 'luxury', 'weekend', 'group']

const unsplash = (id) => `https://images.unsplash.com/${id}?q=80&w=1200&auto=format&fit=crop`

export const tourGalleries = {
  t1: [
    { src: unsplash('photo-1477587458883-47145ed94245'), caption: 'Jaipur palaces' },
    { src: unsplash('photo-1599661046289-e31897846e41'), caption: 'Mehrangarh Fort, Jodhpur' },
    { src: unsplash('photo-1617516202907-ff75846e6667'), caption: 'Udaipur City Palace' },
    { src: unsplash('photo-1524492412937-b28074a5d7da'), caption: 'Rajasthan markets' },
  ],
  t2: [
    { src: unsplash('photo-1512343879784-a960bf40e7f2'), caption: 'Goa beach' },
    { src: unsplash('photo-1454391304352-2bf4678b1a7a'), caption: 'Arabian Sea' },
    { src: unsplash('photo-1507525428034-b723cf961d3e'), caption: 'Sunset coastline' },
    { src: unsplash('photo-1544551763-46a013bb70d5'), caption: 'Water sports' },
  ],
  t3: [
    { src: unsplash('photo-1602216056096-3b40cc0c9944'), caption: 'Kerala backwaters' },
    { src: unsplash('photo-1593693397690-362cb9666fc2'), caption: 'Houseboat stay' },
    { src: unsplash('photo-1544735716-392fe2489ffa'), caption: 'Tea gardens' },
    { src: '/destinations/fort-kochi.jpg', caption: 'Fort Kochi sunset' },
  ],
  t4: [
    { src: '/destinations/kashmir.jpg', caption: 'Dal Lake houseboats' },
    { src: unsplash('photo-1506905925346-21bda4d32df4'), caption: 'Himalayan peaks' },
    { src: unsplash('photo-1626621341517-bbf3d9990a23'), caption: 'Gulmarg meadows' },
    { src: unsplash('photo-1590490360182-c0bd6959d45d'), caption: 'Mountain stay' },
  ],
  t5: [
    { src: unsplash('photo-1617516202907-ff75846e6667'), caption: 'Udaipur City Palace' },
    { src: unsplash('photo-1477587458883-47145ed94245'), caption: 'Lake Pichola' },
    { src: unsplash('photo-1582719478250-c89cae4dc85b'), caption: 'Heritage luxury stay' },
    { src: unsplash('photo-1566073771259-6a8506099945'), caption: 'Palace interiors' },
  ],
  t6: [
    { src: unsplash('photo-1544551763-46a013bb70d5'), caption: 'Andaman islands' },
    { src: unsplash('photo-1507525428034-b723cf961d3e'), caption: 'White-sand beach' },
    { src: unsplash('photo-1559827260-dc66d52bef19'), caption: 'Coral waters' },
    { src: unsplash('photo-1573843981267-be1999ff37cd'), caption: 'Island sunset' },
  ],
  t7: [
    { src: unsplash('photo-1506905925346-21bda4d32df4'), caption: 'Meghalaya hills' },
    { src: unsplash('photo-1432405972618-c60b0225b8f9'), caption: 'Waterfalls' },
    { src: unsplash('photo-1441974231531-c6227db76b6e'), caption: 'Living root forest' },
    { src: unsplash('photo-1470071459604-3b5ec3a7fe05'), caption: 'Monsoon landscapes' },
  ],
  t8: [
    { src: unsplash('photo-1626621341517-bbf3d9990a23'), caption: 'Manali mountains' },
    { src: unsplash('photo-1506905925346-21bda4d32df4'), caption: 'Solang Valley' },
    { src: unsplash('photo-1464822759023-fed622ff2c3b'), caption: 'Himalayan trail' },
    { src: unsplash('photo-1590490360182-c0bd6959d45d'), caption: 'Hill stay' },
  ],
  t9: [
    { src: unsplash('photo-1506905925346-21bda4d32df4'), caption: 'Ladakh peaks' },
    { src: unsplash('photo-1470071459604-3b5ec3a7fe05'), caption: 'Pangong Lake' },
    { src: unsplash('photo-1464822759023-fed622ff2c3b'), caption: 'Mountain pass' },
    { src: unsplash('photo-1483728642387-6c3bdd6c93e5'), caption: 'High-altitude landscape' },
  ],
  t10: [
    { src: unsplash('photo-1512343879784-a960bf40e7f2'), caption: 'South Goa beach' },
    { src: unsplash('photo-1571003123894-1f0594d2b5d9'), caption: 'Beach resort' },
    { src: unsplash('photo-1520250497591-112f2f40a3f4'), caption: 'Pool villa' },
    { src: unsplash('photo-1542314831-068cd1dbfeeb'), caption: 'Sunset dinner' },
  ],
  t11: [
    { src: unsplash('photo-1564507592333-c60657eea523'), caption: 'Taj Mahal, Agra' },
    { src: unsplash('photo-1587474260584-136574528ed5'), caption: 'Delhi' },
    { src: unsplash('photo-1477587458883-47145ed94245'), caption: 'Jaipur' },
    { src: unsplash('photo-1524492412937-b28074a5d7da'), caption: 'Golden Triangle' },
  ],
  t12: [
    { src: unsplash('photo-1477587458883-47145ed94245'), caption: 'Pink City, Jaipur' },
    { src: unsplash('photo-1599661046289-e31897846e41'), caption: 'Amber Fort' },
    { src: unsplash('photo-1524492412937-b28074a5d7da'), caption: 'City Palace' },
    { src: unsplash('photo-1566073771259-6a8506099945'), caption: 'Heritage stay' },
  ],
  t13: [
    { src: unsplash('photo-1512453979798-5ea266f8880c'), caption: 'Dubai skyline' },
    { src: unsplash('photo-1547234935-80c7145ec969'), caption: 'Desert safari' },
    { src: unsplash('photo-1518684079-3c830dcef090'), caption: 'Marina nights' },
    { src: unsplash('photo-1512632578888-169bbbc64f33'), caption: 'Abu Dhabi' },
    { src: unsplash('photo-1582719478250-c89cae4dc85b'), caption: 'Five-star stay' },
    { src: unsplash('photo-1528702748617-c76dfcc6199f'), caption: 'Downtown Dubai' },
  ],
  t14: [
    { src: unsplash('photo-1518548419970-58e3b4079ab2'), caption: 'Bali temples' },
    { src: unsplash('photo-1537996194471-e657df975ab4'), caption: 'Rice terraces' },
    { src: unsplash('photo-1552733407-5d5c46c3bb3b'), caption: 'Nusa Penida' },
    { src: unsplash('photo-1571003123894-1f0594d2b5d9'), caption: 'Private villa' },
  ],
  t15: [
    { src: unsplash('photo-1552465011-b4e21bf6e79a'), caption: 'Thailand islands' },
    { src: unsplash('photo-1528183429752-a97d0bf99b5a'), caption: 'Bangkok' },
    { src: unsplash('photo-1506665531195-3566af2b4dfa'), caption: 'Phuket beach' },
    { src: unsplash('photo-1559592413-7cec4d0cae2b'), caption: 'Krabi cliffs' },
  ],
  t16: [
    { src: unsplash('photo-1530122037265-a5f1f91d3b99'), caption: 'Swiss Alps' },
    { src: unsplash('photo-1527668759903-ce2bd4d98d8c'), caption: 'Interlaken' },
    { src: unsplash('photo-1506905925346-21bda4d32df4'), caption: 'Alpine village' },
    { src: unsplash('photo-1464822759023-fed622ff2c3b'), caption: 'Mountain railway' },
  ],
  t17: [
    { src: unsplash('photo-1573843981267-be1999ff37cd'), caption: 'Overwater villa' },
    { src: unsplash('photo-1514282401047-d79a3154dda0'), caption: 'Maldives lagoon' },
    { src: unsplash('photo-1439066615861-d1af74d74000'), caption: 'Coral reef' },
    { src: unsplash('photo-1507525428034-b723cf961d3e'), caption: 'Island sunset' },
  ],
  t18: [
    { src: unsplash('photo-1525625293386-3f8f99389edd'), caption: 'Singapore skyline' },
    { src: unsplash('photo-1496939376851-89342e90adcd'), caption: 'Gardens by the Bay' },
    { src: unsplash('photo-1565967511849-76a60a516170'), caption: 'Marina Bay' },
    { src: unsplash('photo-1525625293386-3f8f99389edd'), caption: 'Sentosa' },
  ],
}

export function photosForTour(tour) {
  const gallery = tourGalleries[tour?.id]
  if (gallery?.length) return gallery
  return tour?.image ? [{ src: tour.image, caption: tour.title }] : []
}

export const destinationPlaces = {
  noida: [
    { name: 'DLF Mall of India', note: 'One of Asia’s largest malls for shopping and dining.', image: unsplash('photo-1486406146926-c627a92ad1ab') },
    { name: 'Okhla Bird Sanctuary', note: 'Wetlands and migratory birds on the Yamuna.', image: unsplash('photo-1441974231531-c6227db76b6e') },
    { name: 'Worlds of Wonder', note: 'Theme park, water rides and evening shows.', image: unsplash('photo-1513889961551-628c1e5e2ee9') },
    { name: 'Sector 18 Market', note: 'Street food, shops and NCR nightlife.', image: unsplash('photo-1555396273-367ea4eb4db5') },
  ],
  gurugram: [
    { name: 'Cyber Hub', note: 'Restaurants, live music and the city’s social square.', image: unsplash('photo-1542314831-068cd1dbfeeb') },
    { name: 'Kingdom of Dreams', note: 'Bollywood-style theatre and culture show.', image: unsplash('photo-1514525253161-7a46d19cd819') },
    { name: 'Leisure Valley', note: 'Gardens and walking trails through the city.', image: unsplash('photo-1441974231531-c6227db76b6e') },
    { name: 'Ambience Mall', note: 'Shopping, cinema and family entertainment.', image: unsplash('photo-1519567241046-7f570eee3ce6') },
  ],
  mathura: [
    { name: 'Prem Mandir', note: 'Marble temple complex lit beautifully at dusk.', image: '/destinations/mathura.jpg' },
    { name: 'Krishna Janmabhoomi', note: 'Sacred birthplace of Lord Krishna.', image: unsplash('photo-1524492412937-b28074a5d7da') },
    { name: 'Vishram Ghat', note: 'Yamuna aarti and evening boat rides.', image: unsplash('photo-1544735716-392fe2489ffa') },
    { name: 'Govardhan Hill', note: 'Parikrama walks and temple stops around the hill.', image: unsplash('photo-1506905925346-21bda4d32df4') },
  ],
  haridwar: [
    { name: 'Har Ki Pauri', note: 'The main ghat for the evening Ganga Aarti.', image: '/destinations/haridwar.jpg' },
    { name: 'Mansa Devi Temple', note: 'Hilltop temple reached by cable car.', image: unsplash('photo-1544735716-392fe2489ffa') },
    { name: 'Chandi Devi Temple', note: 'Shakti temple overlooking the Ganga.', image: unsplash('photo-1524492412937-b28074a5d7da') },
    { name: 'Ganga Aarti', note: 'Lamps, chants and a riverfront ritual at sunset.', image: unsplash('photo-1477587458883-47145ed94245') },
  ],
  rishikesh: [
    { name: 'Laxman Jhula', note: 'Iconic suspension bridge over the Ganga.', image: unsplash('photo-1544735716-392fe2489ffa') },
    { name: 'Beatles Ashram', note: 'Murals and quiet ruins in the forest.', image: unsplash('photo-1506905925346-21bda4d32df4') },
    { name: 'Triveni Ghat', note: 'Evening aarti on the river steps.', image: unsplash('photo-1432405972618-c60b0225b8f9') },
    { name: 'River Rafting', note: 'Rapids on the Ganga for adventure seekers.', image: unsplash('photo-1530866495561-507c9faab2ed') },
  ],
  chandigarh: [
    { name: 'Rock Garden', note: 'Nek Chand’s folk-art city of recycled sculptures.', image: '/destinations/chandigarh.jpg' },
    { name: 'Sukhna Lake', note: 'Boating and sunset walks by the hills.', image: unsplash('photo-1439066615861-d1af74d74000') },
    { name: 'Rose Garden', note: 'Asia’s largest rose garden in bloom.', image: unsplash('photo-1490750967868-88aa4486c946') },
    { name: 'Capitol Complex', note: 'Le Corbusier’s modernist landmarks.', image: unsplash('photo-1486406146926-c627a92ad1ab') },
  ],
  shimla: [
    { name: 'Mall Road', note: 'Colonial shops, cafes and ridge views.', image: unsplash('photo-1506905925346-21bda4d32df4') },
    { name: 'The Ridge', note: 'Open square with Christ Church and Himalayan air.', image: unsplash('photo-1464822759023-fed622ff2c3b') },
    { name: 'Jakhu Temple', note: 'Hilltop Hanuman temple above the town.', image: unsplash('photo-1544735716-392fe2489ffa') },
    { name: 'Kufri', note: 'Snow views, ponies and short treks.', image: unsplash('photo-1483728642387-6c3bdd6c93e5') },
  ],
  amritsar: [
    { name: 'Golden Temple', note: 'Harmandir Sahib glowing over the sacred pool.', image: '/destinations/amritsar.jpg' },
    { name: 'Jallianwala Bagh', note: 'Memorial garden of India’s freedom struggle.', image: unsplash('photo-1524492412937-b28074a5d7da') },
    { name: 'Wagah Border', note: 'Evening flag-lowering ceremony with Pakistan.', image: unsplash('photo-1587474260584-136574528ed5') },
    { name: 'Partition Museum', note: 'Stories of 1947 in the Town Hall.', image: unsplash('photo-1477587458883-47145ed94245') },
  ],
  raj: [
    { name: 'Amber Fort, Jaipur', note: 'Hill fort, elephant rides and mirrored halls.', image: unsplash('photo-1477587458883-47145ed94245') },
    { name: 'Hawa Mahal', note: 'Palace of winds in the Pink City.', image: unsplash('photo-1599661046289-e31897846e41') },
    { name: 'Mehrangarh Fort, Jodhpur', note: 'Clifftop fort above the Blue City.', image: unsplash('photo-1599661046289-e31897846e41') },
    { name: 'Lake Pichola, Udaipur', note: 'Boat rides past palaces on the lake.', image: unsplash('photo-1617516202907-ff75846e6667') },
  ],
  goa: [
    { name: 'Baga Beach', note: 'Shacks, water sports and nightlife.', image: unsplash('photo-1512343879784-a960bf40e7f2') },
    { name: 'Calangute Beach', note: 'The classic North Goa stretch of sand.', image: unsplash('photo-1507525428034-b723cf961d3e') },
    { name: 'Basilica of Bom Jesus', note: 'UNESCO church in Old Goa.', image: unsplash('photo-1524492412937-b28074a5d7da') },
    { name: 'Dudhsagar Falls', note: 'Four-tier waterfall on the Goa–Karnataka border.', image: unsplash('photo-1432405972618-c60b0225b8f9') },
  ],
  kerala: [
    { name: 'Alleppey Backwaters', note: 'Houseboats through palm-lined canals.', image: unsplash('photo-1602216056096-3b40cc0c9944') },
    { name: 'Munnar Tea Gardens', note: 'Rolling hills of tea and mist.', image: unsplash('photo-1544735716-392fe2489ffa') },
    { name: 'Fort Kochi', note: 'Sunset on the pier, Chinese fishing nets and colonial streets.', image: '/destinations/fort-kochi.jpg' },
    { name: 'Periyar Wildlife', note: 'Boat safari in Thekkady’s tiger reserve.', image: unsplash('photo-1441974231531-c6227db76b6e') },
  ],
  manali: [
    { name: 'Hadimba Temple', note: 'Cedar-wood temple in the pine forest.', image: unsplash('photo-1626621341517-bbf3d9990a23') },
    { name: 'Solang Valley', note: 'Paragliding, snow and mountain views.', image: unsplash('photo-1464822759023-fed622ff2c3b') },
    { name: 'Rohtang Pass', note: 'High-altitude snow pass when open.', image: unsplash('photo-1483728642387-6c3bdd6c93e5') },
    { name: 'Old Manali', note: 'Cafes, river walks and hippie lanes.', image: unsplash('photo-1506905925346-21bda4d32df4') },
  ],
  kashmir: [
    { name: 'Dal Lake', note: 'Shikara rides and houseboats in Srinagar.', image: '/destinations/kashmir.jpg' },
    { name: 'Gulmarg', note: 'Meadows, gondola and snow slopes.', image: unsplash('photo-1506905925346-21bda4d32df4') },
    { name: 'Pahalgam', note: 'Lidder river, Betaab Valley and pine trails.', image: unsplash('photo-1464822759023-fed622ff2c3b') },
    { name: 'Shankaracharya Temple', note: 'Hilltop shrine with lake views.', image: unsplash('photo-1544735716-392fe2489ffa') },
  ],
  delhi: [
    { name: 'India Gate', note: 'War memorial and evening lawns.', image: unsplash('photo-1587474260584-136574528ed5') },
    { name: 'Red Fort', note: 'Mughal sandstone citadel in Old Delhi.', image: unsplash('photo-1524492412937-b28074a5d7da') },
    { name: 'Qutub Minar', note: 'Soaring minaret in the Mehrauli complex.', image: unsplash('photo-1477587458883-47145ed94245') },
    { name: 'Lotus Temple', note: 'Baháʼí house of worship in bloom form.', image: unsplash('photo-1582510003544-4d00b7f74250') },
  ],
  mumbai: [
    { name: 'Gateway of India', note: 'Harbour arch and the city’s welcome icon.', image: unsplash('photo-1529253355930-ddbe423a2ac7') },
    { name: 'Marine Drive', note: 'Queen’s Necklace along the Arabian Sea.', image: unsplash('photo-1566552881560-0be862a7c445') },
    { name: 'Elephanta Caves', note: 'Island rock-cut temples by ferry.', image: unsplash('photo-1524492412937-b28074a5d7da') },
    { name: 'Juhu Beach', note: 'Sunset, street food and sea breeze.', image: unsplash('photo-1507525428034-b723cf961d3e') },
  ],
  agra: [
    { name: 'Taj Mahal', note: 'Marble mausoleum and sunrise views.', image: unsplash('photo-1564507592333-c60657eea523') },
    { name: 'Agra Fort', note: 'Red sandstone palace-fort on the Yamuna.', image: unsplash('photo-1524492412937-b28074a5d7da') },
    { name: 'Fatehpur Sikri', note: 'Akbar’s abandoned capital nearby.', image: unsplash('photo-1477587458883-47145ed94245') },
    { name: 'Mehtab Bagh', note: 'Moonlight garden facing the Taj.', image: unsplash('photo-1441974231531-c6227db76b6e') },
  ],
  dubai: [
    { name: 'Burj Khalifa', note: 'World’s tallest tower and downtown views.', image: unsplash('photo-1512453979798-5ea266f8880c') },
    { name: 'Desert Safari', note: 'Dune bashing, camel rides and BBQ camps.', image: unsplash('photo-1547234935-80c7145ec969') },
    { name: 'Palm Jumeirah', note: 'Palm-shaped island and luxury resorts.', image: unsplash('photo-1518684079-3c830dcef090') },
    { name: 'Sheikh Zayed Mosque', note: 'Abu Dhabi’s white marble grand mosque.', image: unsplash('photo-1512632578888-169bbbc64f33') },
  ],
  bali: [
    { name: 'Tanah Lot', note: 'Sea temple on a rock at sunset.', image: unsplash('photo-1518548419970-58e3b4079ab2') },
    { name: 'Tegalalang Rice Terraces', note: 'Green steps of Ubud countryside.', image: unsplash('photo-1537996194471-e657df975ab4') },
    { name: 'Uluwatu Temple', note: 'Cliff temple and Kecak fire dance.', image: unsplash('photo-1552733407-5d5c46c3bb3b') },
    { name: 'Nusa Penida', note: 'Kelingking Beach and turquoise coves.', image: unsplash('photo-1573790387438-4da905039392') },
  ],
  thailand: [
    { name: 'Grand Palace, Bangkok', note: 'Royal complex and Temple of the Emerald Buddha.', image: unsplash('photo-1528183429752-a97d0bf99b5a') },
    { name: 'Phi Phi Islands', note: 'Limestone cliffs and island hopping.', image: unsplash('photo-1552465011-b4e21bf6e79a') },
    { name: 'Phuket Beaches', note: 'Patong, Kata and Andaman sunsets.', image: unsplash('photo-1506665531195-3566af2b4dfa') },
    { name: 'Krabi Cliffs', note: 'Railay Beach and limestone karsts.', image: unsplash('photo-1559592413-7cec4d0cae2b') },
  ],
  singapore: [
    { name: 'Gardens by the Bay', note: 'Supertrees and Cloud Forest dome.', image: unsplash('photo-1496939376851-89342e90adcd') },
    { name: 'Marina Bay Sands', note: 'SkyPark, light-and-water show.', image: unsplash('photo-1525625293386-3f8f99389edd') },
    { name: 'Sentosa Island', note: 'Beaches, Universal Studios and cable car.', image: unsplash('photo-1565967511849-76a60a516170') },
    { name: 'Merlion Park', note: 'The city’s iconic lion-fish statue.', image: unsplash('photo-1508964942454-34034b1d3d3a') },
  ],
  maldives: [
    { name: 'Malé City', note: 'Friday Mosque and harbour life.', image: unsplash('photo-1514282401047-d79a3154dda0') },
    { name: 'Overwater Villas', note: 'Private decks above the lagoon.', image: unsplash('photo-1573843981267-be1999ff37cd') },
    { name: 'Coral Reefs', note: 'Snorkelling with reef fish and turtles.', image: unsplash('photo-1439066615861-d1af74d74000') },
    { name: 'Sandbank Picnic', note: 'White sand in the middle of the ocean.', image: unsplash('photo-1507525428034-b723cf961d3e') },
  ],
  paris: [
    { name: 'Eiffel Tower', note: 'Iron lattice tower and Champ de Mars.', image: unsplash('photo-1502602898657-3e91760cbb34') },
    { name: 'Louvre Museum', note: 'Mona Lisa and the glass pyramid.', image: unsplash('photo-1499856871958-5b9627545d1a') },
    { name: 'Notre-Dame', note: 'Gothic cathedral on the Île de la Cité.', image: unsplash('photo-1478391679764-b211d31e39cd') },
    { name: 'Seine River Cruise', note: 'Evening lights along the Left Bank.', image: unsplash('photo-1502602898657-3e91760cbb34') },
  ],
  switzerland: [
    { name: 'Interlaken', note: 'Lakes, paragliding and Jungfrau views.', image: unsplash('photo-1530122037265-a5f1f91d3b99') },
    { name: 'Jungfraujoch', note: 'Top of Europe by scenic train.', image: unsplash('photo-1527668759903-ce2bd4d98d8c') },
    { name: 'Chapel Bridge, Lucerne', note: 'Covered wooden bridge on the lake.', image: unsplash('photo-1527668759903-ce2bd4d98d8c') },
    { name: 'Lake Zurich', note: 'Promenade, boats and alpine backdrop.', image: unsplash('photo-1506905925346-21bda4d32df4') },
  ],
  london: [
    { name: 'Big Ben & Westminster', note: 'Parliament and the famous clock tower.', image: unsplash('photo-1513635269975-59663e0ac1ad') },
    { name: 'Tower Bridge', note: 'Victorian drawbridge on the Thames.', image: unsplash('photo-1486299267070-83823f5448dd') },
    { name: 'Buckingham Palace', note: 'Changing of the Guard and royal gardens.', image: unsplash('photo-1529655683826-aba9b3e77383') },
    { name: 'London Eye', note: 'River views from the giant observation wheel.', image: unsplash('photo-1513635269975-59663e0ac1ad') },
  ],
  andaman: [
    { name: 'Havelock Island', note: 'Radhanagar Beach and clear Andaman water.', image: unsplash('photo-1544551763-46a013bb70d5') },
    { name: 'Cellular Jail', note: 'National memorial in Port Blair.', image: unsplash('photo-1524492412937-b28074a5d7da') },
    { name: 'Neil Island', note: 'Natural Bridge and quiet coves.', image: unsplash('photo-1507525428034-b723cf961d3e') },
    { name: 'Scuba & Coral', note: 'Reef dives around Havelock.', image: unsplash('photo-1559827260-dc66d52bef19') },
  ],
  meghalaya: [
    { name: 'Living Root Bridges', note: 'Jingkieng Jri bridges in the Khasi hills.', image: unsplash('photo-1441974231531-c6227db76b6e') },
    { name: 'Cherrapunji Falls', note: 'Nohkalikai and monsoon cliffs.', image: unsplash('photo-1432405972618-c60b0225b8f9') },
    { name: 'Dawki River', note: 'Crystal-clear Umngot for boat rides.', image: unsplash('photo-1506905925346-21bda4d32df4') },
    { name: 'Shillong', note: 'Police Bazaar and Umiam Lake.', image: unsplash('photo-1470071459604-3b5ec3a7fe05') },
  ],
  ladakh: [
    { name: 'Pangong Lake', note: 'High-altitude blue lake on the Tibetan plateau.', image: unsplash('photo-1506905925346-21bda4d32df4') },
    { name: 'Nubra Valley', note: 'Sand dunes, camels and Diskit monastery.', image: unsplash('photo-1464822759023-fed622ff2c3b') },
    { name: 'Leh Palace', note: 'Nine-storey royal palace above Leh.', image: unsplash('photo-1524492412937-b28074a5d7da') },
    { name: 'Khardung La', note: 'One of the world’s highest motorable passes.', image: unsplash('photo-1483728642387-6c3bdd6c93e5') },
  ],
}

const placeAliases = {
  jaipur: 'raj', jodhpur: 'raj', udaipur: 'raj', rajasthan: 'raj',
  srinagar: 'kashmir', gulmarg: 'kashmir', pahalgam: 'kashmir',
  'abu dhabi': 'dubai',
  ubud: 'bali', seminyak: 'bali', 'nusa penida': 'bali',
  bangkok: 'thailand', phuket: 'thailand', krabi: 'thailand',
  zurich: 'switzerland', interlaken: 'switzerland', lucerne: 'switzerland',
  male: 'maldives',
  alleppey: 'kerala', munnar: 'kerala', kochi: 'kerala',
  'north goa': 'goa', 'south goa': 'goa', 'north & south goa': 'goa',
  'south goa beach resort': 'goa',
  'port blair': 'andaman', havelock: 'andaman', 'neil island': 'andaman', andaman: 'andaman',
  shillong: 'meghalaya', cherrapunji: 'meghalaya', dawki: 'meghalaya', meghalaya: 'meghalaya',
  leh: 'ladakh', nubra: 'ladakh', pangong: 'ladakh', ladakh: 'ladakh',
}

export function placesForDestination(destinationOrId) {
  const id = typeof destinationOrId === 'string' ? destinationOrId : destinationOrId?.id
  return destinationPlaces[id] || []
}

export function placesForTour(tour) {
  const tokens = String(tour?.destination || '')
    .split(/[•,]/)
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean)
  const ids = new Set()
  for (const token of tokens) {
    if (placeAliases[token]) ids.add(placeAliases[token])
    const match = allDestinations.find((d) => d.name.toLowerCase() === token || d.id === token)
    if (match) ids.add(match.id)
  }
  return [...ids].flatMap((id) => (destinationPlaces[id] || []).map((place) => ({ ...place, destinationId: id })))
}

export const ticketSizes = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]
export const ticketOrigin = 'New Delhi'
const MAX_LOCAL_DISTANCE_KM = 900
const MAX_INDIA_DISTANCE_KM = 2500

/** Map India/local distance from New Delhi to a ticket size between 100 and 1000. International has no ticket size. */
export function ticketSizeFromDistance(distanceKm, region = 'india') {
  if (region === 'international') return null
  const km = Math.max(0, Number(distanceKm) || 0)
  const maxKm = region === 'local' ? MAX_LOCAL_DISTANCE_KM : MAX_INDIA_DISTANCE_KM
  const ratio = Math.min(1, km / maxKm)
  const size = 100 + ratio * 900
  return Math.min(1000, Math.max(100, Math.round(size / 100) * 100))
}

export function ticketSizeForDestination(destination) {
  if (destination?.region === 'international') return null
  return ticketSizeFromDistance(destination?.distanceKm, destination?.region)
}

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
  { id: 2, name: 'Rohan Mehta', location: 'Delhi, India', rating: 5, avatar: '/testimonials/rohan-mehta.jpg', review: 'The Kashmir honeymoon package exceeded expectations. The houseboat, the itinerary, everything felt personally curated for us.' },
  { id: 3, name: 'Priya Nair', location: 'Bengaluru, India', rating: 4, avatar: '/testimonials/priya-nair.jpg', review: 'Smooth booking process and great customer support throughout our Rajasthan heritage tour. Will book again.' },
  { id: 4, name: 'Karan Verma', location: 'Pune, India', rating: 5, avatar: '/testimonials/karan-verma.jpg', review: 'Customized our Ladakh trip exactly around our budget and dates. Truly a hassle-free experience end to end.' },
]

export const faqs = [
  { q: 'How do I book a tour package?', a: 'Browse tour packages, select your preferred trip, choose your travel date and number of travelers, then submit your booking request. Our team confirms availability within 24 hours.' },
  { q: 'Can I customize an existing package?', a: 'Yes, every tour detail page has a "Customize" option, or you can submit a fully custom trip request from the Customized Trip page.' },
  { q: 'What is the cancellation policy?', a: 'Cancellation terms vary by package and are shown at checkout. Please refer to our Cancellation Policy page for full details.' },
  { q: 'Do you arrange transport?', a: 'Yes. Local transfers, trains and domestic flights can be included in your package. Our consultant will confirm options during booking.' },
]
