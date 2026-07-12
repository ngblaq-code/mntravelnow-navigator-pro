import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import type { Destination } from "@/data/destinations";

export function DestinationCard({ d }: { d: Destination }) {
  return (
    <Link
      to="/destinations/$slug"
      params={{ slug: d.slug }}
      className="group block rounded-2xl overflow-hidden bg-card shadow-card hover:shadow-elevated transition-all duration-300"
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={d.image}
          alt={`${d.name}, ${d.country}`}
          loading="lazy"
          width={800}
          height={600}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-semibold text-foreground truncate">{d.name}</h3>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
              <MapPin className="h-3 w-3 shrink-0" /> {d.country}
            </p>
          </div>
          <div className="text-right shrink-0">
            <div className="text-xs text-muted-foreground">from</div>
            <div className="font-bold text-primary">${d.price}</div>
          </div>
        </div>
        <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{d.tagline}</p>
        <span className="mt-4 inline-flex text-sm font-semibold text-accent group-hover:underline">
          Explore →
        </span>
      </div>
    </Link>
  );
}
