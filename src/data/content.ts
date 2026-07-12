const img = (seed: string, w = 800, h = 600) =>
  `https://picsum.photos/seed/mn-${seed}/${w}/${h}`;

export interface Deal {
  title: string;
  description: string;
  image: string;
  category: "flights" | "hotels" | "cars" | "tours" | "transfers" | "insurance" | "packages";
  price?: string;
}

export const FEATURED_DEALS: Deal[] = [
  { title: "Cheap Flights to Europe", description: "Fly to top European capitals from $199 round-trip.", image: img("deal-flights"), category: "flights", price: "from $199" },
  { title: "Luxury Hotels in Dubai", description: "5-star stays with breakfast and spa credits.", image: img("deal-dubai"), category: "hotels", price: "from $220/night" },
  { title: "Weekend Getaways", description: "Curated 3-day trips near you, under $400.", image: img("deal-weekend"), category: "packages", price: "from $349" },
  { title: "Family Holidays", description: "Kid-friendly resorts with kids-stay-free deals.", image: img("deal-family"), category: "packages", price: "from $899" },
  { title: "Beach Escapes", description: "Overwater villas, all-inclusives and boutique beach hotels.", image: img("deal-beach"), category: "hotels", price: "from $180/night" },
  { title: "Adventure Trips", description: "Safaris, treks and diving expeditions worldwide.", image: img("deal-adventure"), category: "tours", price: "from $549" },
  { title: "Business Travel", description: "Flexible fares, lounge access and central hotels.", image: img("deal-business"), category: "flights", price: "flexible fares" },
  { title: "Seasonal Deals", description: "Limited-time offers refreshed every week.", image: img("deal-season"), category: "packages", price: "up to 40% off" },
];

export const SAMPLE_FLIGHTS = [
  { airline: "SkyJet", from: "New York (JFK)", to: "London (LHR)", duration: "7h 15m", price: 389 },
  { airline: "AeroLink", from: "Los Angeles (LAX)", to: "Tokyo (HND)", duration: "11h 40m", price: 749 },
  { airline: "AtlasFly", from: "Dubai (DXB)", to: "Paris (CDG)", duration: "7h 05m", price: 429 },
  { airline: "NovaAir", from: "Singapore (SIN)", to: "Bali (DPS)", duration: "2h 40m", price: 129 },
  { airline: "CoastAir", from: "London (LHR)", to: "Rome (FCO)", duration: "2h 45m", price: 89 },
  { airline: "GlobeJet", from: "Cape Town (CPT)", to: "Istanbul (IST)", duration: "10h 20m", price: 519 },
];

export const SAMPLE_HOTELS = [
  { name: "Marina Bay Grand", location: "Singapore", rating: 4.8, price: 289, amenities: ["Pool", "Spa", "Free WiFi", "Breakfast"], image: img("hotel-sg") },
  { name: "Palm Beach Resort", location: "Dubai, UAE", rating: 4.9, price: 349, amenities: ["Private Beach", "Kids Club", "Airport Transfer"], image: img("hotel-du") },
  { name: "Le Petit Boutique", location: "Paris, France", rating: 4.7, price: 219, amenities: ["Concierge", "Rooftop Bar", "Free WiFi"], image: img("hotel-pa") },
  { name: "Sakura Skyline Hotel", location: "Tokyo, Japan", rating: 4.8, price: 259, amenities: ["City View", "Onsen", "Restaurant"], image: img("hotel-tk") },
  { name: "Colosseum View Suites", location: "Rome, Italy", rating: 4.6, price: 199, amenities: ["Historic Building", "Breakfast", "Free WiFi"], image: img("hotel-rm") },
  { name: "Manhattan Central", location: "New York, USA", rating: 4.5, price: 329, amenities: ["Gym", "Business Center", "Bar"], image: img("hotel-ny") },
];

export const SAMPLE_CARS = [
  { company: "DriveGo", model: "Economy — Toyota Yaris", transmission: "Automatic", passengers: 4, price: 29, image: img("car-1") },
  { company: "AutoRent", model: "SUV — Kia Sportage", transmission: "Automatic", passengers: 5, price: 59, image: img("car-2") },
  { company: "CityWheels", model: "Compact — VW Golf", transmission: "Manual", passengers: 5, price: 34, image: img("car-3") },
  { company: "LuxCars", model: "Premium — BMW 5 Series", transmission: "Automatic", passengers: 4, price: 129, image: img("car-4") },
  { company: "VanFleet", model: "Van — Mercedes Vito", transmission: "Automatic", passengers: 8, price: 89, image: img("car-5") },
  { company: "EcoRide", model: "Electric — Tesla Model 3", transmission: "Automatic", passengers: 4, price: 79, image: img("car-6") },
];

export const SAMPLE_TOURS = [
  { name: "African Safari Adventure", location: "Kenya", price: 899, image: img("tour-safari") },
  { name: "Louvre Skip-the-Line", location: "Paris", price: 65, image: img("tour-louvre") },
  { name: "Universal Studios Day Pass", location: "Orlando", price: 129, image: img("tour-universal") },
  { name: "Old Rome Walking Tour", location: "Rome", price: 39, image: img("tour-rome") },
  { name: "Bosphorus Sunset Cruise", location: "Istanbul", price: 45, image: img("tour-bosphorus") },
  { name: "Skydive Dubai", location: "Dubai", price: 599, image: img("tour-skydive") },
  { name: "Tokyo Street Food Tour", location: "Tokyo", price: 79, image: img("tour-tokyo") },
  { name: "Colosseum Underground Tour", location: "Rome", price: 89, image: img("tour-colosseum") },
];

export const SAMPLE_TRANSFERS = [
  { airport: "Dubai (DXB)", destination: "Downtown Dubai", vehicle: "Sedan", price: 45 },
  { airport: "London (LHR)", destination: "Central London", vehicle: "Executive", price: 79 },
  { airport: "Paris (CDG)", destination: "Champs-Élysées", vehicle: "Van (up to 6)", price: 95 },
  { airport: "Tokyo (HND)", destination: "Shinjuku", vehicle: "Sedan", price: 89 },
  { airport: "New York (JFK)", destination: "Manhattan", vehicle: "SUV", price: 110 },
  { airport: "Singapore (SIN)", destination: "Marina Bay", vehicle: "Sedan", price: 55 },
];

export const TESTIMONIALS = [
  { name: "Amelia R.", location: "Sydney, Australia", quote: "Booked our Bali trip in minutes — the deal was 30% cheaper than anywhere else.", rating: 5 },
  { name: "Marcus O.", location: "Toronto, Canada", quote: "The destination guides made planning Rome effortless. Highly recommend.", rating: 5 },
  { name: "Priya S.", location: "London, UK", quote: "Compared five hotels side-by-side and saved £180 on our Dubai stay.", rating: 5 },
  { name: "Diego F.", location: "São Paulo, Brazil", quote: "Loved the airport transfer options — clear pricing, no surprises.", rating: 4 },
];

export const FAQ_ITEMS = [
  { q: "Do you charge extra fees for bookings?", a: "No — MnTravelNow is a comparison and discovery platform. You'll be redirected to trusted partners to complete your booking at their listed price." },
  { q: "How are flight prices calculated?", a: "Prices are pulled from our partner network in real time and include applicable taxes and fees where indicated." },
  { q: "Can I cancel or modify my booking?", a: "Cancellation and modification policies are set by the individual provider you book with. Always check the terms before purchase." },
  { q: "Are hotel photos accurate?", a: "Yes — imagery and descriptions come directly from the hotel or partner. We regularly refresh listings." },
  { q: "How do payments work?", a: "You pay the booking provider directly using their secure checkout. MnTravelNow never stores your card details." },
  { q: "Do I need travel insurance?", a: "We highly recommend it. Compare policies covering medical, trip cancellation, and lost baggage." },
  { q: "How do visa requirements work?", a: "Requirements depend on your nationality and destination. Check with your local embassy or use our destination visa guides." },
  { q: "How do car rentals work?", a: "Reserve online, present your driver's license and credit card at pickup. Additional insurance is usually optional." },
  { q: "How does MnTravelNow make money?", a: "We earn a small commission from partners when you book — at no extra cost to you." },
];

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readingTime: string;
  category: string;
  image: string;
  content: { heading: string; body: string }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "10-tips-for-cheaper-flights",
    title: "10 Proven Tips for Finding Cheaper Flights in 2026",
    excerpt: "From incognito searches to shoulder-season timing, here's how frequent flyers slash airfare by 40% or more.",
    author: "Sarah Lin",
    date: "2026-06-14",
    readingTime: "8 min read",
    category: "Travel Tips",
    image: img("blog-flights", 1200, 700),
    content: [
      { heading: "1. Book on the right day", body: "Tuesdays and Wednesdays are historically the cheapest days to depart. Fares tend to be lowest 4–8 weeks before domestic travel and 3–5 months before international." },
      { heading: "2. Use flexible date searches", body: "A single day either way can change your fare by hundreds. Most search engines offer a matrix view — use it religiously." },
      { heading: "3. Fly into secondary airports", body: "Consider LGW instead of LHR, or BWI over DCA. Add a train ticket and you'll often still come out ahead." },
      { heading: "4. Clear cookies or go incognito", body: "Some sites raise prices for repeat searchers. Compare in a private window as a sanity check." },
      { heading: "5. Set price alerts", body: "Track your route weeks in advance and pounce when the drop happens." },
      { heading: "6. Bundle with hotels", body: "Package deals frequently discount the flight portion by 15–30%." },
      { heading: "7. Consider positioning flights", body: "A short cheap flight to a major hub can unlock much cheaper long-haul fares." },
      { heading: "8. Fly shoulder season", body: "Traveling one week before or after peak dates saves serious money and skips the crowds." },
      { heading: "9. Use points and miles", body: "Even a modest sign-up bonus can cover a domestic round-trip." },
      { heading: "10. Book connecting flights", body: "Non-stops are convenient but almost always more expensive. If time allows, add a stop." },
    ],
  },
  {
    slug: "ultimate-packing-list",
    title: "The Ultimate Carry-On Packing List (Any Trip, Any Season)",
    excerpt: "One bag, 10 days, zero panic. The exact packing formula our editors use.",
    author: "James Okafor",
    date: "2026-05-22",
    readingTime: "6 min read",
    category: "Packing Lists",
    image: img("blog-packing", 1200, 700),
    content: [
      { heading: "The 5-4-3-2-1 rule", body: "5 tops, 4 bottoms, 3 layers, 2 pairs of shoes, 1 dressy outfit. Works for almost any 10-day itinerary." },
      { heading: "Documents and money", body: "Passport, backup copies stored in email and cloud, one credit card and one debit card from different networks." },
      { heading: "Tech essentials", body: "Universal adapter, 20,000mAh power bank, USB-C cables, noise-cancelling earbuds." },
      { heading: "Toiletries", body: "Solid shampoo bars save space and pass TSA rules. A dry-bag doubles as laundry storage." },
      { heading: "Compression cubes", body: "The single upgrade that turns a carry-on into an overpacker's best friend." },
      { heading: "What to leave home", body: "Bulky towel (buy a microfiber), full-size books (eReader), 'just in case' outfits." },
    ],
  },
  {
    slug: "visa-guide-southeast-asia",
    title: "Visa Guide: Backpacking Southeast Asia in 2026",
    excerpt: "Country-by-country entry rules, e-visa fees and border-hop tips.",
    author: "Priya Menon",
    date: "2026-04-10",
    readingTime: "10 min read",
    category: "Visa Guides",
    image: img("blog-visa", 1200, 700),
    content: [
      { heading: "Thailand", body: "Many passports get 30 days visa-exempt on arrival. Extendable once at any immigration office." },
      { heading: "Vietnam", body: "e-Visa required for most nationalities. Apply online, receive in 3–5 business days." },
      { heading: "Indonesia (Bali)", body: "Visa on arrival for 30 days, extendable once. Bring cash USD or IDR." },
      { heading: "Malaysia", body: "90 days visa-free for most Western passports. Straightforward border crossing from Singapore." },
      { heading: "Cambodia", body: "e-Visa or visa on arrival available. Bring a passport photo and $30 USD in crisp bills." },
      { heading: "The Philippines", body: "30 days visa-free for most travelers, extendable in-country." },
    ],
  },
  {
    slug: "budget-travel-europe",
    title: "How to Travel Europe on $50 a Day",
    excerpt: "Yes, it's still possible in 2026 — here's the playbook.",
    author: "Marco Rossi",
    date: "2026-03-18",
    readingTime: "7 min read",
    category: "Budget Travel",
    image: img("blog-europe", 1200, 700),
    content: [
      { heading: "Skip the West, embrace the East", body: "Portugal, Poland, Czechia, Hungary, Romania, and the Balkans all offer world-class travel at half the price." },
      { heading: "Hostels & guesthouses", body: "Family-run pensions are often cheaper than dorms and far more charming." },
      { heading: "Overnight buses & trains", body: "Move at night, save a hotel night. FlixBus and regional railways are your friends." },
      { heading: "Cook one meal a day", body: "Local markets are an experience in themselves — and slash food costs by 60%." },
      { heading: "Free walking tours", body: "Nearly every city has them. Tip what you can." },
      { heading: "City tourism cards", body: "In museum-heavy cities like Vienna or Prague, they often pay for themselves in a day." },
    ],
  },
  {
    slug: "family-travel-tips",
    title: "Family Travel: 12 Sanity-Saving Tips With Kids",
    excerpt: "From flight snacks to jet-lag hacks, real parent-tested advice.",
    author: "Lena Fischer",
    date: "2026-02-08",
    readingTime: "9 min read",
    category: "Family Travel",
    image: img("blog-family", 1200, 700),
    content: [
      { heading: "Book direct flights when you can", body: "The premium is worth every penny with toddlers." },
      { heading: "Pack a 'surprise bag'", body: "New tiny toys unveiled hourly on long flights buy priceless quiet time." },
      { heading: "Split the day in two", body: "Morning activity, afternoon downtime. Everyone stays sane." },
      { heading: "Book apartments over hotels", body: "A kitchen and separate bedroom transforms family trips." },
      { heading: "Adjust to local time on day one", body: "Get sunlight and move — kids adapt faster than adults." },
      { heading: "Don't over-plan", body: "One 'anchor' activity per day is plenty." },
    ],
  },
  {
    slug: "luxury-travel-2026",
    title: "The New Luxury: 6 Travel Trends Redefining 2026",
    excerpt: "From private train suites to regenerative safaris, this is where high-end travel is heading.",
    author: "Elena Torres",
    date: "2026-01-19",
    readingTime: "8 min read",
    category: "Luxury Travel",
    image: img("blog-luxury", 1200, 700),
    content: [
      { heading: "Slow travel by rail", body: "Private-cabin trains across Europe and Asia are the fastest-growing luxury category." },
      { heading: "Regenerative safaris", body: "Camps that reinvest in wildlife corridors and local communities are the new gold standard." },
      { heading: "Set-jetting", body: "Travelers are booking trips around beloved shows and films — with themed itineraries to match." },
      { heading: "Wellness retreats 2.0", body: "Longevity clinics, sleep labs and DNA-driven programming are replacing pure spa breaks." },
      { heading: "Private island buyouts", body: "Small resorts increasingly rent as a whole — multigenerational trips are booming." },
      { heading: "AI-planned but human-hosted", body: "Digital tools handle logistics; on-the-ground concierges make the magic happen." },
    ],
  },
];

export function getPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
