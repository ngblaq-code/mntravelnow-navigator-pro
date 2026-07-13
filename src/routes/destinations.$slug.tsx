import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { AdSlot } from "@/components/AdSlot";
import { AFFILIATE_LINK_ATTRS, getAffiliateLink } from "@/config/affiliates";
import { getDestinationBySlug, getRelatedDestinations } from "@/lib/cms/destinations";
import { CalendarDays, CloudSun, MapPin, Wallet, Bus, Star } from "lucide-react";

export const Route = createFileRoute("/destinations/$slug")({
  loader: ({ params }) => {
    const d = getDestinationBySlug(params.slug);
    if (!d) throw notFound();
    return d;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Destination — MnTravelNow" }, { name: "robots", content: "noindex" }] };
    const d = loaderData;
    const title = `${d.name} Travel Guide — Things to Do, Hotels & Flights | MnTravelNow`;
    const desc = `Plan your trip to ${d.name}: best time to visit, top attractions, hotels, flights and local tips.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:image", content: d.image },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/destinations/${params.slug}` },
        { name: "twitter:image", content: d.image },
      ],
      links: [{ rel: "canonical", href: `/destinations/${params.slug}` }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          name: d.name,
          description: d.overview,
          image: d.image,
        }),
      }],
    };
  },
  component: DestinationPage,
  notFoundComponent: NotFound,
  errorComponent: ({ error }) => <div className="container-page py-20">{error.message}</div>,
});

function NotFound() {
  return (
    <div className="container-page py-20 text-center">
      <h1 className="text-3xl font-bold">Destination not found</h1>
      <Link to="/destinations" className="mt-4 inline-flex text-primary font-semibold hover:underline">
        Browse all destinations →
      </Link>
    </div>
  );
}

function DestinationPage() {
  const d = Route.useLoaderData();
  const related = getRelatedDestinations(d.slug, 4);

  return (
    <>
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <img src={d.image} alt="" fetchPriority="high" width={1600} height={900} className="h-full w-full object-cover" />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="container-page py-16 md:py-24 text-white">
          <nav className="text-xs opacity-80 mb-3" aria-label="Breadcrumb">
            <Link to="/">Home</Link> <span className="mx-1">/</span>
            <Link to="/destinations">Destinations</Link> <span className="mx-1">/</span>
            <span>{d.name}</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{d.name}</h1>
          <p className="mt-2 text-lg opacity-90 flex items-center gap-1"><MapPin className="h-4 w-4" /> {d.country}</p>
          <p className="mt-4 max-w-2xl text-lg opacity-95">{d.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={getAffiliateLink("flights")} {...AFFILIATE_LINK_ATTRS}
              className="rounded-xl bg-accent text-accent-foreground px-5 py-2.5 font-semibold hover:brightness-110">Find Flights</a>
            <a href={getAffiliateLink("hotels")} {...AFFILIATE_LINK_ATTRS}
              className="rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur px-5 py-2.5 font-semibold">Browse Hotels</a>
          </div>
        </div>
      </section>

      <div className="container-page grid gap-10 lg:grid-cols-[1fr_320px] mt-12">
        <div className="min-w-0 space-y-10">
          <section>
            <h2 className="text-2xl font-bold">Overview</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{d.overview}</p>
          </section>

          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: CalendarDays, label: "Best time", value: d.bestTime },
              { icon: CloudSun, label: "Weather", value: d.weather },
              { icon: Wallet, label: "Budget", value: d.budget },
              { icon: Bus, label: "Transport", value: d.transport },
            ].map((f) => (
              <div key={f.label} className="rounded-2xl bg-surface p-4">
                <f.icon className="h-5 w-5 text-primary" />
                <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{f.label}</div>
                <p className="mt-1 text-sm">{f.value}</p>
              </div>
            ))}
          </section>

          <section>
            <h2 className="text-2xl font-bold">Top Attractions</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {d.attractions.map((a: {name:string;description:string}) => (
                <div key={a.name} className="rounded-2xl bg-card border border-border p-5">
                  <div className="flex items-center gap-2 text-accent"><Star className="h-4 w-4 fill-current" /><h3 className="font-semibold text-foreground">{a.name}</h3></div>
                  <p className="mt-2 text-sm text-muted-foreground">{a.description}</p>
                </div>
              ))}
            </div>
          </section>

          <AdSlot size="banner" />

          <section>
            <h2 className="text-2xl font-bold">Things to Do</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {d.things.map((t: string) => <li key={t} className="rounded-lg bg-surface px-4 py-3 text-sm">✨ {t}</li>)}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Travel Tips</h2>
            <ul className="mt-4 space-y-2">
              {d.tips.map((t: string) => <li key={t} className="rounded-lg bg-surface px-4 py-3 text-sm">• {t}</li>)}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            <div className="mt-4 space-y-3">
              {d.faqs.map((f: {q:string;a:string}) => (
                <details key={f.q} className="rounded-xl bg-card border border-border p-4">
                  <summary className="font-semibold cursor-pointer">{f.q}</summary>
                  <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-gradient-to-br from-primary to-[oklch(0.35_0.18_260)] text-primary-foreground p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold">Ready to explore {d.name}?</h2>
            <p className="mt-2 opacity-90">Compare flights, hotels and tours in one click.</p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <a href={getAffiliateLink("flights")} {...AFFILIATE_LINK_ATTRS} className="rounded-xl bg-accent text-accent-foreground px-5 py-2.5 font-semibold">Flights</a>
              <a href={getAffiliateLink("hotels")} {...AFFILIATE_LINK_ATTRS} className="rounded-xl bg-white/10 hover:bg-white/20 px-5 py-2.5 font-semibold">Hotels</a>
              <a href={getAffiliateLink("cars")} {...AFFILIATE_LINK_ATTRS} className="rounded-xl bg-white/10 hover:bg-white/20 px-5 py-2.5 font-semibold">Car Rentals</a>
              <a href={getAffiliateLink("tours")} {...AFFILIATE_LINK_ATTRS} className="rounded-xl bg-white/10 hover:bg-white/20 px-5 py-2.5 font-semibold">Tours</a>
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <AdSlot size="sidebar" />
          <div className="rounded-2xl bg-surface p-5">
            <h3 className="font-semibold">Related Destinations</h3>
            <ul className="mt-3 space-y-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link to="/destinations/$slug" params={{ slug: r.slug }} className="flex gap-3 hover:opacity-80">
                    <img src={r.image} alt="" loading="lazy" width={80} height={80} className="h-16 w-16 rounded-lg object-cover shrink-0" />
                    <div className="min-w-0">
                      <div className="font-semibold text-sm truncate">{r.name}</div>
                      <div className="text-xs text-muted-foreground truncate">{r.country}</div>
                      <div className="text-xs text-primary font-semibold">from ${r.price}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <div className="container-page mt-14"><AdSlot size="leaderboard" /></div>
    </>
  );
}
