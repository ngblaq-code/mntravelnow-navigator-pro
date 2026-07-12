import { createFileRoute } from "@tanstack/react-router";
import { AdSlot } from "@/components/AdSlot";
import { PageHeader } from "@/components/Section";
import { AFFILIATE_LINK_ATTRS, getAffiliateLink } from "@/config/affiliates";
import { ShieldCheck, Heart, Luggage, Plane, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/travel-insurance")({
  head: () => ({
    meta: [
      { title: "Travel Insurance — Compare Plans | MnTravelNow" },
      { name: "description", content: "Compare travel insurance plans covering medical emergencies, trip cancellation, lost baggage and more." },
      { property: "og:title", content: "Travel Insurance — Compare Plans | MnTravelNow" },
      { property: "og:description", content: "Compare comprehensive travel insurance plans." },
      { property: "og:url", content: "/travel-insurance" },
    ],
    links: [{ rel: "canonical", href: "/travel-insurance" }],
  }),
  component: InsurancePage,
});

const BENEFITS = [
  { icon: Heart, title: "Medical Emergencies", desc: "Coverage for hospital, evacuation and prescription costs abroad." },
  { icon: Plane, title: "Trip Cancellation", desc: "Get reimbursed if you have to cancel for a covered reason." },
  { icon: Luggage, title: "Lost or Delayed Baggage", desc: "Compensation for lost, damaged or delayed luggage." },
  { icon: ShieldCheck, title: "24/7 Assistance", desc: "Global support hotlines in your language, day or night." },
];

function InsurancePage() {
  return (
    <>
      <PageHeader title="Travel Insurance You Can Trust" subtitle="Peace of mind for every kind of trip — compare plans in under a minute." />

      <section className="container-page mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {BENEFITS.map((b) => (
          <div key={b.title} className="rounded-2xl bg-card p-6 shadow-card">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
              <b.icon className="h-6 w-6" />
            </span>
            <h3 className="mt-4 font-semibold">{b.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
          </div>
        ))}
      </section>

      <section className="container-page mt-14">
        <div className="rounded-3xl bg-gradient-to-br from-primary to-[oklch(0.35_0.18_260)] text-primary-foreground p-8 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to travel with confidence?</h2>
          <p className="mt-3 opacity-90 max-w-2xl mx-auto">Compare plans from top insurers side-by-side. Get covered in minutes.</p>
          <a href={getAffiliateLink("insurance")} {...AFFILIATE_LINK_ATTRS}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent text-accent-foreground px-6 py-3 font-semibold hover:brightness-110">
            Compare Insurance <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <div className="container-page mt-14"><AdSlot size="leaderboard" /></div>
    </>
  );
}
