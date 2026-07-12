import { createFileRoute } from "@tanstack/react-router";
import { AdSlot } from "@/components/AdSlot";
import { PageHeader } from "@/components/Section";
import { SearchTabs } from "@/components/SearchTabs";
import { SAMPLE_HOTELS } from "@/data/content";
import { AFFILIATE_LINK_ATTRS, getAffiliateLink } from "@/config/affiliates";
import { MapPin, Star } from "lucide-react";

export const Route = createFileRoute("/hotels")({
  head: () => ({
    meta: [
      { title: "Hotel Deals — Compare & Book | MnTravelNow" },
      { name: "description", content: "Compare hotels worldwide with real guest ratings, transparent pricing and free cancellation options." },
      { property: "og:title", content: "Hotel Deals — Compare & Book | MnTravelNow" },
      { property: "og:description", content: "Compare hotels worldwide and save on your next stay." },
      { property: "og:url", content: "/hotels" },
    ],
    links: [{ rel: "canonical", href: "/hotels" }],
  }),
  component: HotelsPage,
});

function HotelsPage() {
  return (
    <>
      <PageHeader title="Find Your Perfect Hotel" subtitle="From boutique stays to 5-star resorts, compare thousands of hotels in one search." />
      <div className="container-page -mt-8 md:-mt-10 relative z-10"><SearchTabs /></div>

      <section className="container-page mt-14">
        <h2 className="text-2xl md:text-3xl font-bold">Top-rated hotels this week</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SAMPLE_HOTELS.map((h, i) => (
            <article key={i} className="rounded-2xl overflow-hidden bg-card shadow-card">
              <div className="aspect-[16/10] bg-muted">
                <img src={h.image} alt={h.name} loading="lazy" width={800} height={500} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="font-semibold truncate">{h.name}</h3>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5"><MapPin className="h-3 w-3" />{h.location}</p>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-primary/10 text-primary px-2 py-0.5 text-xs font-semibold shrink-0">
                    <Star className="h-3 w-3 fill-current" />{h.rating}
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {h.amenities.map((a) => <span key={a} className="text-[11px] bg-muted rounded-full px-2 py-0.5">{a}</span>)}
                </div>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground">from</div>
                    <div className="text-xl font-bold text-primary">${h.price}<span className="text-xs font-normal text-muted-foreground">/night</span></div>
                  </div>
                  <a href={getAffiliateLink("hotels")} {...AFFILIATE_LINK_ATTRS}
                    className="rounded-xl bg-accent text-accent-foreground px-4 py-2 text-sm font-semibold hover:brightness-110">View Deal</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="container-page mt-14"><AdSlot size="leaderboard" /></div>
    </>
  );
}
