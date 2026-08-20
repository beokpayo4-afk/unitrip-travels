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
