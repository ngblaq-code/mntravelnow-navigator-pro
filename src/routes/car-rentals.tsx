import { createFileRoute } from "@tanstack/react-router";
import { AdSlot } from "@/components/AdSlot";
import { PageHeader } from "@/components/Section";
import { SearchTabs } from "@/components/SearchTabs";
import { SAMPLE_CARS } from "@/data/content";
import { AFFILIATE_LINK_ATTRS, getAffiliateLink } from "@/config/affiliates";
import { Users, Cog } from "lucide-react";

export const Route = createFileRoute("/car-rentals")({
  head: () => ({
    meta: [
      { title: "Car Rentals Worldwide — Compare Prices | MnTravelNow" },
      { name: "description", content: "Compare car rental deals from top providers in 30,000+ locations worldwide." },
      { property: "og:title", content: "Car Rentals Worldwide — Compare Prices | MnTravelNow" },
      { property: "og:description", content: "Compare car rental deals from top providers worldwide." },
      { property: "og:url", content: "/car-rentals" },
    ],
    links: [{ rel: "canonical", href: "/car-rentals" }],
  }),
  component: CarsPage,
});

function CarsPage() {
  return (
    <>
      <PageHeader title="Rent a Car, Anywhere" subtitle="Compare economy, SUV, luxury and electric vehicles from trusted rental companies." />
      <div className="container-page -mt-8 md:-mt-10 relative z-10"><SearchTabs /></div>

      <section className="container-page mt-14">
        <h2 className="text-2xl md:text-3xl font-bold">Popular vehicles</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SAMPLE_CARS.map((c, i) => (
            <article key={i} className="rounded-2xl overflow-hidden bg-card shadow-card">
              <div className="aspect-[16/10] bg-muted"><img src={c.image} alt={c.model} loading="lazy" width={800} height={500} className="h-full w-full object-cover" /></div>
              <div className="p-5">
                <div className="text-xs text-muted-foreground">{c.company}</div>
                <h3 className="font-semibold">{c.model}</h3>
                <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Cog className="h-3.5 w-3.5" />{c.transmission}</span>
                  <span className="inline-flex items-center gap-1"><Users className="h-3.5 w-3.5" />{c.passengers} passengers</span>
                </div>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground">daily from</div>
                    <div className="text-xl font-bold text-primary">${c.price}</div>
                  </div>
                  <a href={getAffiliateLink("cars")} {...AFFILIATE_LINK_ATTRS}
                    className="rounded-xl bg-accent text-accent-foreground px-4 py-2 text-sm font-semibold hover:brightness-110">Book Car</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="container-page mt-14"><AdSlot size="banner" /></div>
    </>
  );
}
