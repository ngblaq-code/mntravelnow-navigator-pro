/**
 * MnTravelNow — Central Affiliate Link Configuration
 * -----------------------------------------------------
 * Replace the placeholder URLs below with your Travelpayouts (or other
 * partner) affiliate links. Every "Book", "Search", "View Deal", and CTA
 * on the site reads from this single file.
 *
 * Tip: You can also point a category to a search-results URL with your
 * partner marker appended, e.g.
 *   flights: "https://tp.media/r?marker=YOUR_ID&trs=..."
 */

export type AffiliateCategory =
  | "flights"
  | "hotels"
  | "cars"
  | "transfers"
  | "tours"
  | "insurance"
  | "packages"
  | "esim"
  | "trains";

export const AFFILIATE_LINKS: Record<AffiliateCategory, string> = {
  flights: "#affiliate-flights",
  hotels: "#affiliate-hotels",
  cars: "#affiliate-cars",
  transfers: "#affiliate-transfers",
  tours: "#affiliate-tours",
  insurance: "#affiliate-insurance",
  packages: "#affiliate-packages",
  esim: "#affiliate-esim",
  trains: "#affiliate-trains",
};

export function getAffiliateLink(
  category: AffiliateCategory,
  params?: Record<string, string | number | undefined>,
): string {
  const base = AFFILIATE_LINKS[category];
  if (!params || base.startsWith("#")) return base;
  const url = new URL(base);
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== "") url.searchParams.set(k, String(v));
  }
  return url.toString();
}

/** Attributes to spread onto every affiliate link for SEO + easy auditing. */
export const AFFILIATE_LINK_ATTRS = {
  target: "_blank" as const,
  rel: "sponsored noopener noreferrer",
  "data-affiliate": "true",
};
