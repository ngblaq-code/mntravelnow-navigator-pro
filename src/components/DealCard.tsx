import { AFFILIATE_LINK_ATTRS, getAffiliateLink, type AffiliateCategory } from "@/config/affiliates";
import type { Deal } from "@/data/content";

export function DealCard({ deal }: { deal: Deal }) {
  return (
    <article className="rounded-2xl overflow-hidden bg-card shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col">
      <div className="aspect-[16/10] overflow-hidden bg-muted">
        <img src={deal.image} alt={deal.title} loading="lazy" width={800} height={500} className="h-full w-full object-cover" />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-semibold text-foreground">{deal.title}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground flex-1">{deal.description}</p>
        <div className="mt-4 flex items-center justify-between">
          {deal.price && <span className="text-accent font-bold">{deal.price}</span>}
          <a
            href={getAffiliateLink(deal.category as AffiliateCategory)}
            {...AFFILIATE_LINK_ATTRS}
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            Book Now →
          </a>
        </div>
      </div>
    </article>
  );
}
