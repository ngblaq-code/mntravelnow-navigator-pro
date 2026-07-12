# MnTravelNow — Build Plan (v1)

A production-ready, SEO-optimized travel affiliate site. No live booking APIs — every CTA routes through a central affiliate-link config you can edit later. AdSense-ready slots reserved everywhere, but no AdSense code inserted.

## Scope for v1 (this build)

**Global**
- Design system in `src/styles.css`: Deep Blue `#0057D9` primary, Sky Blue secondary, Orange accent, white/light-gray surfaces, modern sans-serif, rounded cards, soft shadows.
- Sticky responsive nav + footer with all required links.
- Logo (airplane + location pin) and matching favicon, generated as images.
- Central affiliate-link config (`src/config/affiliates.ts`) — every "Book/Search" button reads from it. One file to edit later.
- Reusable `<AdSlot />` placeholder component (reserved height, no CLS, lazy) used in all required locations.
- SEO: per-route `head()` with title/description/OG/Twitter, canonical, JSON-LD, sitemap.xml route, robots.txt.

**Routes**
- `/` Home — hero, tabbed search (Flights/Hotels/Cars/Transfers/Tours/Insurance) with realistic fields, popular destinations, featured deals, testimonials, newsletter, AdSlots.
- `/flights`, `/hotels`, `/car-rentals`, `/airport-transfers`, `/tours`, `/travel-insurance` — category pages with sample cards + affiliate CTAs.
- `/destinations` index + `/destinations/$slug` (Dubai, London, Paris, Rome, Tokyo, New York, Singapore, Cape Town, Maldives, Bali, Istanbul) with Overview / Best time / Things to do / Hotels / Flights / Tips / FAQs / Related.
- `/blog` index + `/blog/$slug` (6 seed posts) with TOC, related posts, in-content AdSlots, newsletter, sidebar AdSlot.
- `/about`, `/contact` (form UI only), `/privacy`, `/terms`, `/cookies`, `/affiliate-disclosure`, `/disclaimer`.

**Content**
- Seeded from typed TS data files (`src/data/*.ts`) — destinations, deals, flights, hotels, cars, tours, blog posts. Easy to edit; ready to swap for a CMS later.

**Images**
- Hero + destination cards: generated with imagegen (jpg, sized for web).

## Out of scope for v1 (architected for later, not built)
User accounts, wishlists, price alerts, currency/language switch, live APIs, chatbot, GA4/GSC wiring, real contact-form backend, real comments. Contact form and newsletter are UI-only.

## Technical notes
- TanStack Start file-based routing under `src/routes/`.
- No backend (Lovable Cloud not enabled) — pure static/SSR content site. Can add Cloud later for newsletter/contact/user accounts.
- `AdSlot` renders a reserved box with a comment marker; you paste AdSense `<ins>` code into one component and it appears in all placements of that size.
- All affiliate CTAs call `getAffiliateLink('flights'|'hotels'|...)` from the central config; default value is `#` placeholder with a data-attribute so they're easy to grep.

Approve and I'll build it.
