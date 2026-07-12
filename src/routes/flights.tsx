import { createFileRoute } from "@tanstack/react-router";
import { AdSlot } from "@/components/AdSlot";
import { PageHeader } from "@/components/Section";
import { SearchTabs } from "@/components/SearchTabs";
import { SAMPLE_FLIGHTS } from "@/data/content";
import { AFFILIATE_LINK_ATTRS, getAffiliateLink } from "@/config/affiliates";
import { Plane } from "lucide-react";

export const Route = createFileRoute("/flights")({
  head: () => ({
    meta: [
      { title: "Cheap Flights — Compare & Book | MnTravelNow" },
      { name: "description", content: "Compare cheap flights from hundreds of airlines. Book domestic and international tickets in minutes." },
      { property: "og:title", content: "Cheap Flights — Compare & Book | MnTravelNow" },
      { property: "og:description", content: "Compare cheap flights from hundreds of airlines and save on your next trip." },
      { property: "og:url", content: "/flights" },
    ],
    links: [{ rel: "canonical", href: "/flights" }],
  }),
  component: FlightsPage,
});

function FlightsPage() {
  return (
    <>
      <PageHeader title="Cheap Flights, Compared" subtitle="Compare airlines, dates and cabins to book the best fare on any route." />
      <div className="container-page -mt-8 md:-mt-10 relative z-10"><SearchTabs /></div>

      <section className="container-page mt-14">
        <h2 className="text-2xl md:text-3xl font-bold">Popular flight deals this week</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {SAMPLE_FLIGHTS.map((f, i) => (
            <article key={i} className="rounded-2xl bg-card border border-border p-5 shadow-card flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary shrink-0">
                <Plane className="h-6 w-6" />
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-muted-foreground">{f.airline}</div>
                <div className="font-semibold text-foreground truncate">{f.from} → {f.to}</div>
                <div className="text-xs text-muted-foreground">{f.duration} · Direct</div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-xl font-bold text-primary">${f.price}</div>
                <a href={getAffiliateLink("flights")} {...AFFILIATE_LINK_ATTRS}
                  className="mt-1 inline-flex text-xs font-semibold text-accent hover:underline">Book Flight →</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="container-page mt-14"><AdSlot size="banner" /></div>

      <section className="container-page mt-14">
        <h2 className="text-2xl md:text-3xl font-bold">Tips for booking cheaper flights</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {[
            "Book Tuesday or Wednesday for the lowest fares.",
            "Fly into secondary airports and save 20–40%.",
            "Set price alerts and pounce on drops.",
            "Bundle flights + hotels for hidden discounts.",
            "Consider one-stop routes for long-haul savings.",
            "Fly shoulder-season to skip crowds and prices.",
          ].map((t) => (
            <li key={t} className="rounded-xl bg-surface p-4 text-sm">{t}</li>
          ))}
        </ul>
      </section>

      <div className="container-page mt-14"><AdSlot size="leaderboard" /></div>
    </>
  );
}
