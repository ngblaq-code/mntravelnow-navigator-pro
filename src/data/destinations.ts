export interface Destination {
  slug: string;
  name: string;
  country: string;
  tagline: string;
  price: number; // avg from
  image: string;
  overview: string;
  bestTime: string;
  weather: string;
  budget: string;
  transport: string;
  attractions: { name: string; description: string }[];
  things: string[];
  tips: string[];
  faqs: { q: string; a: string }[];
}

// Stable, high-quality travel photos via Picsum (seeded for stability).
const img = (seed: string, w = 1200, h = 800) =>
  `https://picsum.photos/seed/mn-${seed}/${w}/${h}`;

export const DESTINATIONS: Destination[] = [
  {
    slug: "dubai",
    name: "Dubai",
    country: "United Arab Emirates",
    tagline: "Futuristic skyline meets desert luxury",
    price: 649,
    image: img("dubai"),
    overview:
      "Dubai fuses ultra-modern architecture with rich Arabian heritage. From the Burj Khalifa to golden desert dunes, it's a year-round playground for luxury seekers, families, and adventurers.",
    bestTime: "November to March, when temperatures are pleasant (20–30°C).",
    weather: "Hot desert climate. Summers exceed 40°C; winters are mild and dry.",
    budget: "Mid-range: $150–$300 per day. Luxury: $500+ per day.",
    transport: "Efficient metro, taxis, and ride-hailing apps like Careem.",
    attractions: [
      { name: "Burj Khalifa", description: "The world's tallest building with unmatched city views." },
      { name: "Palm Jumeirah", description: "Iconic man-made island lined with resorts and beaches." },
      { name: "Dubai Mall", description: "One of the world's largest shopping and entertainment complexes." },
      { name: "Desert Safari", description: "Dune bashing, camel rides, and Bedouin-style dinners." },
    ],
    things: ["Skydive over the Palm", "Dine at At.mosphere", "Explore Old Dubai souks", "Visit the Museum of the Future"],
    tips: ["Dress modestly in public areas", "Fridays and Saturdays are the weekend", "Tipping 10–15% is customary"],
    faqs: [
      { q: "Do I need a visa for Dubai?", a: "Many nationalities receive a visa on arrival. Check with your local UAE embassy before travel." },
      { q: "Is Dubai safe for tourists?", a: "Yes, Dubai has one of the lowest crime rates globally and is very tourist-friendly." },
    ],
  },
  {
    slug: "london",
    name: "London",
    country: "United Kingdom",
    tagline: "Timeless capital of culture and history",
    price: 429,
    image: img("london"),
    overview:
      "From royal palaces to buzzing markets, London blends centuries of history with a world-class food, arts, and nightlife scene.",
    bestTime: "May to September for the warmest weather and long daylight hours.",
    weather: "Temperate maritime — mild summers, cool wet winters. Pack layers.",
    budget: "Mid-range: £120–£220 per day.",
    transport: "The Underground (Tube), buses, and iconic black cabs.",
    attractions: [
      { name: "Tower of London", description: "Historic castle housing the Crown Jewels." },
      { name: "British Museum", description: "Vast free collection spanning human history." },
      { name: "Buckingham Palace", description: "Home of the British monarchy." },
      { name: "London Eye", description: "Giant observation wheel on the Thames." },
    ],
    things: ["Ride a red double-decker", "Explore Camden Market", "Catch a West End show", "Picnic in Hyde Park"],
    tips: ["Get an Oyster or contactless card for transit", "Tipping 10–12% at restaurants", "Weather changes fast — pack a compact umbrella"],
    faqs: [
      { q: "Is London expensive?", a: "It can be, but many top museums are free and buses are affordable." },
      { q: "How many days do I need?", a: "3–5 days for the highlights, a week for a deeper dive." },
    ],
  },
  {
    slug: "paris",
    name: "Paris",
    country: "France",
    tagline: "The city of light, love, and haute cuisine",
    price: 479,
    image: img("paris"),
    overview:
      "Paris enchants with grand boulevards, world-class art, storied cafés, and an unmistakable romance in every arrondissement.",
    bestTime: "April to June and September to October for mild weather and fewer crowds.",
    weather: "Mild continental climate with cool winters and warm summers.",
    budget: "Mid-range: €130–€250 per day.",
    transport: "Metro, RER trains, buses, and Velib bike-share.",
    attractions: [
      { name: "Eiffel Tower", description: "Global icon offering panoramic city views." },
      { name: "Louvre Museum", description: "Home to the Mona Lisa and countless masterpieces." },
      { name: "Notre-Dame", description: "Gothic cathedral on the Île de la Cité." },
      { name: "Montmartre", description: "Bohemian hilltop district with Sacré-Cœur." },
    ],
    things: ["Cruise the Seine", "Taste macarons at Ladurée", "Wander the Marais", "Day-trip to Versailles"],
    tips: ["Say 'Bonjour' before every interaction", "Museums close on Mondays or Tuesdays", "Beware pickpockets in tourist zones"],
    faqs: [
      { q: "Do I need to speak French?", a: "Not required, but a few basic phrases go a long way." },
      { q: "Is the Paris Pass worth it?", a: "For 3+ day trips visiting many museums, usually yes." },
    ],
  },
  {
    slug: "rome",
    name: "Rome",
    country: "Italy",
    tagline: "Where ancient wonders meet la dolce vita",
    price: 399,
    image: img("rome"),
    overview:
      "Rome is a living museum — 2,000-year-old ruins share the streets with world-class trattorias, fashion, and Vatican art.",
    bestTime: "April to June and September to October.",
    weather: "Mediterranean — hot summers, mild winters.",
    budget: "Mid-range: €120–€220 per day.",
    transport: "Metro, buses, trams, and walking (best in the centro storico).",
    attractions: [
      { name: "Colosseum", description: "Iconic Roman amphitheatre." },
      { name: "Vatican Museums", description: "Sistine Chapel and priceless art." },
      { name: "Trevi Fountain", description: "Baroque masterpiece — toss a coin." },
      { name: "Pantheon", description: "Best-preserved ancient Roman temple." },
    ],
    things: ["Eat pasta cacio e pepe", "Sunset at Pincian Hill", "Explore Trastevere", "Gelato tour of the centro"],
    tips: ["Book Colosseum + Vatican tickets in advance", "Cover shoulders and knees in churches", "Water fountains (nasoni) are safe to drink"],
    faqs: [
      { q: "How long to spend in Rome?", a: "3–4 days for the highlights." },
      { q: "Is Rome walkable?", a: "Yes — most sites in the historic center are within 30 minutes on foot." },
    ],
  },
  {
    slug: "tokyo",
    name: "Tokyo",
    country: "Japan",
    tagline: "Neon-lit metropolis of tradition and tomorrow",
    price: 899,
    image: img("tokyo"),
    overview:
      "Tokyo is an electric blend of ancient shrines, quiet gardens, cutting-edge fashion, and the world's best dining scene.",
    bestTime: "March–May (cherry blossoms) and October–November (autumn foliage).",
    weather: "Humid summers, mild dry winters. Rainy season in June.",
    budget: "Mid-range: ¥15,000–¥30,000 per day.",
    transport: "Unrivalled train and metro network; get a Suica or Pasmo card.",
    attractions: [
      { name: "Shibuya Crossing", description: "The world's busiest pedestrian scramble." },
      { name: "Senso-ji", description: "Tokyo's oldest temple in Asakusa." },
      { name: "Meiji Shrine", description: "Serene forest shrine near Harajuku." },
      { name: "TeamLab Planets", description: "Immersive digital art experience." },
    ],
    things: ["Sushi breakfast at Toyosu", "Karaoke in Shinjuku", "Day trip to Mt. Fuji", "Explore Akihabara"],
    tips: ["Cash is still king in many places", "No tipping", "Bow slightly when greeting"],
    faqs: [
      { q: "Do I need Japanese to travel Tokyo?", a: "No — signage and apps make it manageable in English." },
      { q: "Is the JR Pass worth it?", a: "Only if you plan multiple long-distance train trips." },
    ],
  },
  {
    slug: "new-york",
    name: "New York",
    country: "United States",
    tagline: "The city that never sleeps",
    price: 349,
    image: img("newyork"),
    overview:
      "Five boroughs of iconic skyline, Broadway lights, world-class museums, and every cuisine imaginable.",
    bestTime: "April–June and September–early November.",
    weather: "Four true seasons — hot humid summers, snowy winters.",
    budget: "Mid-range: $200–$350 per day.",
    transport: "24/7 subway, buses, and yellow cabs. Walk when you can.",
    attractions: [
      { name: "Statue of Liberty", description: "Symbol of freedom in New York Harbor." },
      { name: "Central Park", description: "843-acre urban oasis." },
      { name: "Times Square", description: "Neon heart of Broadway." },
      { name: "Empire State Building", description: "Art-deco icon with city views." },
    ],
    things: ["Broadway show", "Slice pizza tour", "MoMA and the Met", "Brooklyn Bridge walk"],
    tips: ["Tip 18–20% at restaurants", "Metro cards accept contactless", "Walk fast, order faster"],
    faqs: [
      { q: "Is NYC safe?", a: "Yes in tourist areas. Standard big-city awareness applies." },
      { q: "Best base neighborhood?", a: "Midtown for first-timers; Lower East Side or Williamsburg for a local feel." },
    ],
  },
  {
    slug: "singapore",
    name: "Singapore",
    country: "Singapore",
    tagline: "The garden city of Asia",
    price: 719,
    image: img("singapore"),
    overview:
      "A gleaming city-state where hawker centers, orchid gardens, and futuristic architecture converge in one green, walkable playground.",
    bestTime: "February to April — driest months.",
    weather: "Hot and humid year-round with frequent short showers.",
    budget: "Mid-range: S$180–S$320 per day.",
    transport: "Fast, clean MRT and buses; taxis and Grab are affordable.",
    attractions: [
      { name: "Gardens by the Bay", description: "Supertree groves and futuristic domes." },
      { name: "Marina Bay Sands", description: "Iconic hotel with rooftop infinity pool." },
      { name: "Sentosa Island", description: "Beaches, theme parks, and resorts." },
      { name: "Chinatown & Little India", description: "Vibrant heritage districts." },
    ],
    things: ["Hawker chicken rice", "Night Safari", "Rooftop cocktails", "Botanic Gardens sunrise"],
    tips: ["Fines are strict — no gum, no jaywalking", "Tap water is safe", "Carry an umbrella"],
    faqs: [
      { q: "How many days?", a: "3 days is ideal for the highlights." },
      { q: "Is Singapore expensive?", a: "Accommodation is pricey; hawker food is a bargain." },
    ],
  },
  {
    slug: "cape-town",
    name: "Cape Town",
    country: "South Africa",
    tagline: "Where mountains meet two oceans",
    price: 559,
    image: img("capetown"),
    overview:
      "Cape Town dazzles with Table Mountain, cinematic coastlines, and world-class food, wine, and safaris on the doorstep.",
    bestTime: "November to March (Southern Hemisphere summer).",
    weather: "Mediterranean — warm dry summers, mild rainy winters.",
    budget: "Mid-range: R2,000–R4,500 per day.",
    transport: "Uber is best; MyCiTi bus for city routes.",
    attractions: [
      { name: "Table Mountain", description: "Cableway or hike to a flat-topped icon." },
      { name: "Cape Point", description: "Dramatic cliffs at the peninsula's tip." },
      { name: "V&A Waterfront", description: "Harbor-side dining and shopping." },
      { name: "Robben Island", description: "Mandela's former prison — a moving tour." },
    ],
    things: ["Wine tour in Stellenbosch", "Boulders Beach penguins", "Chapman's Peak Drive", "Shark cage diving"],
    tips: ["Rent a car for the peninsula", "Check daily wind for Table Mountain", "Tip 10–15%"],
    faqs: [
      { q: "Is Cape Town safe?", a: "Stick to well-known tourist areas and avoid walking after dark." },
      { q: "Do I need a visa?", a: "Many nationalities get 90 days visa-free — check your embassy." },
    ],
  },
  {
    slug: "maldives",
    name: "Maldives",
    country: "Maldives",
    tagline: "Overwater villas and glass-clear lagoons",
    price: 1499,
    image: img("maldives"),
    overview:
      "1,000+ coral islands, powder beaches, and pristine reefs make the Maldives the ultimate barefoot luxury escape.",
    bestTime: "November to April — dry season.",
    weather: "Tropical, 27–31°C year-round.",
    budget: "Luxury resorts: $600–$3,000+ per night. Local islands: $80–$150 per night.",
    transport: "Seaplane or speedboat transfers from Malé.",
    attractions: [
      { name: "Overwater Villas", description: "Iconic thatched bungalows on stilts." },
      { name: "Coral Reefs", description: "World-class snorkeling and scuba." },
      { name: "Sandbank Picnics", description: "Private uninhabited islands." },
      { name: "Bioluminescent Beach", description: "Glowing plankton at Vaadhoo." },
    ],
    things: ["Sunset dolphin cruise", "Underwater dinner", "Whale shark snorkel", "Private spa"],
    tips: ["Alcohol only sold at resorts", "Check monsoon dates", "Reef-safe sunscreen required"],
    faqs: [
      { q: "Local island vs resort?", a: "Local islands are budget-friendly; resorts are private paradises." },
      { q: "How to get around?", a: "Domestic flights and speedboats — book with your resort." },
    ],
  },
  {
    slug: "bali",
    name: "Bali",
    country: "Indonesia",
    tagline: "Island of temples, rice fields and surf",
    price: 599,
    image: img("bali"),
    overview:
      "Bali offers spiritual escapes, world-class surfing, and lush jungles alongside beach clubs and boutique resorts.",
    bestTime: "May to September — dry season.",
    weather: "Tropical, 26–32°C. Wet season Oct–Apr.",
    budget: "Backpacker: $30/day. Mid-range: $80–$150/day.",
    transport: "Scooter rental, private drivers, or Gojek.",
    attractions: [
      { name: "Ubud Rice Terraces", description: "Emerald tiered fields at Tegallalang." },
      { name: "Uluwatu Temple", description: "Cliffside temple with Kecak fire dance." },
      { name: "Mount Batur", description: "Sunrise volcano hike." },
      { name: "Nusa Penida", description: "Jaw-dropping cliffs and beaches." },
    ],
    things: ["Learn to surf in Canggu", "Yoga retreat in Ubud", "Balinese cooking class", "Island-hop to Gili"],
    tips: ["Bring a scarf for temples", "Bali belly is real — filtered water", "Bargain politely in markets"],
    faqs: [
      { q: "Best area to stay?", a: "Ubud for culture, Seminyak for beach clubs, Canggu for surf, Uluwatu for cliffs." },
      { q: "Visa on arrival?", a: "Yes for most nationalities, 30-day visa on arrival." },
    ],
  },
  {
    slug: "istanbul",
    name: "Istanbul",
    country: "Türkiye",
    tagline: "Where East and West have met for centuries",
    price: 379,
    image: img("istanbul"),
    overview:
      "Istanbul straddles two continents with Ottoman palaces, Byzantine mosques, spice bazaars, and Bosphorus views.",
    bestTime: "April to May and September to October.",
    weather: "Mild springs and autumns; hot summers, cool winters.",
    budget: "Mid-range: $70–$130 per day.",
    transport: "Trams, ferries, and the Marmaray metro; get an Istanbulkart.",
    attractions: [
      { name: "Hagia Sophia", description: "1,500-year-old architectural marvel." },
      { name: "Blue Mosque", description: "Six-minaret Ottoman masterpiece." },
      { name: "Grand Bazaar", description: "One of the world's oldest covered markets." },
      { name: "Bosphorus Cruise", description: "See two continents from the water." },
    ],
    things: ["Turkish bath (hammam)", "Rooftop dinner in Galata", "Baklava tasting", "Day trip to Princes' Islands"],
    tips: ["Dress modestly in mosques", "Tap water — bottled recommended", "Cash and cards both widely accepted"],
    faqs: [
      { q: "Is Istanbul safe?", a: "Yes for tourists — apply standard urban precautions." },
      { q: "Do I need a visa?", a: "e-Visa online for many nationalities." },
    ],
  },
];

export function getDestination(slug: string) {
  return DESTINATIONS.find((d) => d.slug === slug);
}
