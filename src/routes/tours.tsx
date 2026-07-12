import { createFileRoute } from "@tanstack/react-router";
import { AdSlot } from "@/components/AdSlot";
import { PageHeader } from "@/components/Section";
import { SearchTabs } from "@/components/SearchTabs";
import { SAMPLE_TOURS } from "@/data/content";
import { AFFILIATE_LINK_ATTRS, getAffiliateLink } from "@/config/affiliates";

export const Route = createFileRoute("/tours")({
  head: () => ({
    meta: [
      { title: "Tours & Activities Worldwide | MnTravelNow" },
      { name: "description", content: "Book unforgettable tours, day trips, cruises, safaris, food tours and adventure experiences worldwide." },
      { property: "og:title", content: "Tours & Activities Worldwide | MnTravelNow" },
      { property: "og:description", content: "Book unforgettable experiences worldwide." },
      { property: "og:url", content: "/tours" },
    ],
    links: [{ rel: "canonical", href: "/tours" }],
  }),
  component: ToursPage,
});

function ToursPage() {
  return (
    <>
      <PageHeader title="Tours & Activities" subtitle="Skip-the-line tickets, guided tours and once-in-a-lifetime experiences." />
      <div className="container-page -mt-8 md:-mt-10 relative z-10"><SearchTabs /></div>

      <section className="container-page mt-14">
        <div className="grid gap-3 md:grid-cols-4 mb-8">
          {["Safari","Museums","Theme Parks","City Tours","Boat Cruises","Adventure","Food Tours","Historical"].map((c) => (
            <div key={c} className="rounded-xl bg-surface p-3 text-sm text-center font-medium">{c}</div>
          ))}
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SAMPLE_TOURS.map((t, i) => (
            <article key={i} className="rounded-2xl overflow-hidden bg-card shadow-card">
              <div className="aspect-[4/3] bg-muted">
                <img src={t.image} alt={t.name} loading="lazy" width={800} height={600} className="h-full w-full object-cover" />
              </div>
              <div className="p-4">
                <div className="text-xs text-muted-foreground">{t.location}</div>
                <h3 className="font-semibold text-sm mt-0.5 line-clamp-2">{t.name}</h3>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-bold text-primary">${t.price}</span>
                  <a href={getAffiliateLink("tours")} {...AFFILIATE_LINK_ATTRS}
                    className="text-xs font-semibold text-accent hover:underline">Book Now →</a>
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
