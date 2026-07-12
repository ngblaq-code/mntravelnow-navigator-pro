import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/Section";
import { SITE } from "@/config/site";
import { Target, Compass, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About ${SITE.name} — Our Story & Mission` },
      { name: "description", content: `Learn about ${SITE.name} — how we help millions of travelers compare and book the best travel deals worldwide.` },
      { property: "og:title", content: `About ${SITE.name}` },
      { property: "og:description", content: `Learn about ${SITE.name}.` },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader title={`About ${SITE.name}`} subtitle={SITE.tagline} />
      <section className="container-page mt-14 max-w-3xl">
        <p className="text-lg text-muted-foreground leading-relaxed">
          {SITE.name} is a modern travel discovery platform on a mission to make every trip
          simpler, smarter and more affordable. We compare thousands of trusted partners so
          you don't have to — and we do it all in one place.
        </p>
      </section>
      <section className="container-page mt-14 grid gap-6 md:grid-cols-3">
        {[
          { icon: Target, title: "Our Mission", body: "Empower travelers with the best deals, honest information and effortless comparison tools." },
          { icon: Compass, title: "Our Vision", body: "A world where planning a trip is as enjoyable as taking it." },
          { icon: Heart, title: "Our Values", body: "Transparency, curiosity, care for the planet, and love for the road." },
        ].map((v) => (
          <div key={v.title} className="rounded-2xl bg-card border border-border p-6">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary"><v.icon className="h-6 w-6" /></span>
            <h2 className="mt-4 font-semibold text-lg">{v.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
          </div>
        ))}
      </section>
      <section className="container-page mt-14">
        <h2 className="text-2xl md:text-3xl font-bold">Why choose {SITE.name}?</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {[
            "Compare hundreds of trusted travel providers in seconds.",
            "Transparent pricing — no hidden fees.",
            "Curated destination guides written by real travelers.",
            "Fast, mobile-first design that just works on the go.",
            "Free to use, always — we're paid by our partners, not you.",
            "Independent recommendations — we don't play favorites.",
          ].map((t) => (
            <li key={t} className="rounded-xl bg-surface p-4 text-sm">{t}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
