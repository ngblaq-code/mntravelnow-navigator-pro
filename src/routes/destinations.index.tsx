import { createFileRoute } from "@tanstack/react-router";
import { AdSlot } from "@/components/AdSlot";
import { DestinationCard } from "@/components/DestinationCard";
import { PageHeader } from "@/components/Section";
import { DESTINATIONS } from "@/data/destinations";

export const Route = createFileRoute("/destinations/")({
  head: () => ({
    meta: [
      { title: "Popular Destinations Worldwide | MnTravelNow" },
      { name: "description", content: "Explore curated travel guides for the world's most-loved cities and beach escapes." },
      { property: "og:title", content: "Popular Destinations Worldwide | MnTravelNow" },
      { property: "og:description", content: "Curated travel guides for the world's most-loved destinations." },
      { property: "og:url", content: "/destinations" },
    ],
    links: [{ rel: "canonical", href: "/destinations" }],
  }),
  component: DestinationsIndex,
});

function DestinationsIndex() {
  return (
    <>
      <PageHeader title="Destinations" subtitle="Handpicked guides to the world's most inspiring places to visit." />
      <section className="container-page mt-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {DESTINATIONS.map((d) => <DestinationCard key={d.slug} d={d} />)}
        </div>
      </section>
      <div className="container-page mt-14"><AdSlot size="leaderboard" /></div>
    </>
  );
}
