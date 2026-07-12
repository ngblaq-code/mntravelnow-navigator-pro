import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Globe2, ShieldCheck, Sparkles, Star } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { AdSlot } from "@/components/AdSlot";
import { DealCard } from "@/components/DealCard";
import { DestinationCard } from "@/components/DestinationCard";
import { Newsletter } from "@/components/Newsletter";
import { SearchTabs } from "@/components/SearchTabs";
import { SectionHeader } from "@/components/Section";
import { DESTINATIONS } from "@/data/destinations";
import { FEATURED_DEALS, TESTIMONIALS } from "@/data/content";
import { SITE } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.name} — ${SITE.tagline}` },
      { name: "description", content: SITE.description },
      { property: "og:title", content: `${SITE.name} — ${SITE.tagline}` },
      { property: "og:description", content: SITE.description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="" fetchPriority="high" width={1920} height={1080} className="h-full w-full object-cover" />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="container-page pt-16 pb-24 md:pt-24 md:pb-32 text-white">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1.5 text-xs font-medium">
              <Sparkles className="h-3.5 w-3.5" /> Compare 500+ trusted travel partners
            </div>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Discover Amazing <span className="text-accent">Travel Deals</span> Worldwide
            </h1>
            <p className="mt-5 text-lg md:text-xl opacity-95">
              Compare flights, hotels, rental cars and unforgettable experiences in one place.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#search" className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-accent-foreground font-semibold shadow-elevated hover:brightness-110">
                Search Now <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/destinations" className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur px-6 py-3 font-semibold">
                Explore Destinations
              </Link>
            </div>
          </div>

          <div id="search" className="mt-10 md:mt-14">
            <SearchTabs />
          </div>
        </div>
      </section>

      {/* Ad below hero */}
      <div className="container-page mt-10">
        <AdSlot size="leaderboard" label="Sponsored" />
      </div>

      {/* Trust bar */}
      <section className="container-page mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: Globe2, title: "200+ Countries", sub: "Global coverage" },
          { icon: ShieldCheck, title: "Trusted Partners", sub: "Verified providers" },
          { icon: Award, title: "Best Price Promise", sub: "We compare, you save" },
          { icon: Star, title: "10k+ Reviews", sub: "Loved by travelers" },
        ].map((f, i) => (
          <div key={i} className="rounded-2xl bg-surface p-5 flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <f.icon className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <div className="font-semibold text-sm">{f.title}</div>
              <div className="text-xs text-muted-foreground">{f.sub}</div>
            </div>
          </div>
        ))}
      </section>

      {/* Popular destinations */}
      <section className="container-page mt-20">
        <SectionHeader
          eyebrow="Popular Destinations"
          title="Explore the world's most-loved cities"
          subtitle="Handpicked destinations with the best deals on flights, hotels and tours."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {DESTINATIONS.slice(0, 8).map((d) => <DestinationCard key={d.slug} d={d} />)}
        </div>
        <div className="text-center mt-8">
          <Link to="/destinations" className="inline-flex items-center gap-1 text-primary font-semibold hover:underline">
            View all destinations <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Ad between sections */}
      <div className="container-page mt-16">
        <AdSlot size="banner" />
      </div>

      {/* Featured deals */}
      <section className="container-page mt-16">
        <SectionHeader
          eyebrow="Featured Deals"
          title="This week's hottest travel offers"
          subtitle="Deals refreshed every week — book before they're gone."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_DEALS.map((d) => <DealCard key={d.title} deal={d} />)}
        </div>
      </section>

      {/* Ad */}
      <div className="container-page mt-16">
        <AdSlot size="banner" />
      </div>

      {/* Testimonials */}
      <section className="bg-surface mt-20 py-20">
        <div className="container-page">
          <SectionHeader
            center
            eyebrow="Testimonials"
            title="Travelers ❤️ MnTravelNow"
            subtitle="Real stories from real trips around the world."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {TESTIMONIALS.map((t, i) => (
              <blockquote key={i} className="rounded-2xl bg-card p-6 shadow-card">
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: t.rating }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-3 text-sm text-foreground/90">"{t.quote}"</p>
                <footer className="mt-4 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">{t.name}</span> · {t.location}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container-page mt-20">
        <Newsletter />
      </section>

      {/* Bottom ad */}
      <div className="container-page mt-16">
        <AdSlot size="leaderboard" />
      </div>
    </>
  );
}
