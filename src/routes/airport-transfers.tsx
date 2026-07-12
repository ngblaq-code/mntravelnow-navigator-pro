import { createFileRoute } from "@tanstack/react-router";
import { AdSlot } from "@/components/AdSlot";
import { PageHeader } from "@/components/Section";
import { SearchTabs } from "@/components/SearchTabs";
import { SAMPLE_TRANSFERS } from "@/data/content";
import { AFFILIATE_LINK_ATTRS, getAffiliateLink } from "@/config/affiliates";

export const Route = createFileRoute("/airport-transfers")({
  head: () => ({
    meta: [
      { title: "Airport Transfers — Book Private Rides | MnTravelNow" },
      { name: "description", content: "Book reliable airport transfers worldwide. Fixed prices, English-speaking drivers, meet & greet included." },
      { property: "og:title", content: "Airport Transfers — Book Private Rides | MnTravelNow" },
      { property: "og:description", content: "Reliable, fixed-price airport transfers worldwide." },
      { property: "og:url", content: "/airport-transfers" },
    ],
    links: [{ rel: "canonical", href: "/airport-transfers" }],
  }),
  component: TransfersPage,
});

function TransfersPage() {
  return (
    <>
      <PageHeader title="Airport Transfers Made Easy" subtitle="Skip taxi queues and surge pricing — book a private ride in advance." />
      <div className="container-page -mt-8 md:-mt-10 relative z-10"><SearchTabs /></div>

      <section className="container-page mt-14">
        <h2 className="text-2xl md:text-3xl font-bold">Popular transfer routes</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SAMPLE_TRANSFERS.map((t, i) => (
            <article key={i} className="rounded-2xl bg-card border border-border p-5 shadow-card">
              <div className="text-xs text-muted-foreground">{t.airport}</div>
              <h3 className="font-semibold mt-0.5">→ {t.destination}</h3>
              <div className="mt-2 text-sm text-muted-foreground">{t.vehicle}</div>
              <div className="mt-4 flex items-end justify-between">
                <div className="text-xl font-bold text-primary">${t.price}</div>
                <a href={getAffiliateLink("transfers")} {...AFFILIATE_LINK_ATTRS}
                  className="rounded-xl bg-accent text-accent-foreground px-4 py-2 text-sm font-semibold hover:brightness-110">Book Transfer</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="container-page mt-14"><AdSlot size="banner" /></div>
    </>
  );
}
