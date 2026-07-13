/**
 * MnTravelNow — Central Affiliate Link Configuration
 * -----------------------------------------------------
 * Each category holds an array of Travelpayouts partner links. Every
 * "Book", "Search", "View Deal" CTA on the site reads from this file
 * via getAffiliateLink(), which rotates through the list so multiple
 * partners get exposure per category.
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

export interface AffiliatePartner {
  name: string;
  url: string;
}

export const AFFILIATE_PARTNERS: Record<AffiliateCategory, AffiliatePartner[]> = {
  flights: [
    { name: "Aviasales", url: "https://aviasales.tpk.mx/1ayK5N25" },
    { name: "AirHelp", url: "https://airhelp.tpk.mx/9AuGuKVc" },
  ],
  hotels: [
    { name: "Klook", url: "https://klook.tpk.mx/gs3HzwWO" },
  ],
  cars: [
    { name: "EconomyBookings", url: "https://economybookings.tpk.mx/IZgCp1Gf" },
    { name: "AutoEurope", url: "https://autoeurope.tpk.mx/mhVylD7a" },
    { name: "GetRentacar", url: "https://getrentacar.tpk.mx/MxNM3vO8" },
  ],
  transfers: [
    { name: "GetRentacar", url: "https://getrentacar.tpk.mx/MxNM3vO8" },
  ],
  tours: [
    { name: "KKday", url: "https://kkday.tpk.mx/zQXybZIa" },
    { name: "Klook", url: "https://klook.tpk.mx/gs3HzwWO" },
  ],
  insurance: [
    { name: "AirHelp", url: "https://airhelp.tpk.mx/9AuGuKVc" },
  ],
  packages: [
    { name: "Klook", url: "https://klook.tpk.mx/gs3HzwWO" },
    { name: "KKday", url: "https://kkday.tpk.mx/zQXybZIa" },
  ],
  esim: [
    { name: "Yesim", url: "https://yesim.tpk.mx/rZqEQ5Hg" },
  ],
  trains: [
    { name: "Aviasales", url: "https://aviasales.tpk.mx/1ayK5N25" },
  ],
};

/** Backward-compatible map — first partner per category. */
export const AFFILIATE_LINKS: Record<AffiliateCategory, string> = Object.fromEntries(
  (Object.keys(AFFILIATE_PARTNERS) as AffiliateCategory[]).map((k) => [
    k,
    AFFILIATE_PARTNERS[k][0]?.url ?? "#",
  ]),
) as Record<AffiliateCategory, string>;

/**
 * Returns a rotating affiliate URL for the category. Pass an `index`
 * (e.g. array index of the deal card) to deterministically spread
 * clicks across every partner in that category.
 */
export function getAffiliateLink(
  category: AffiliateCategory,
  paramsOrIndex?: number | Record<string, string | number | undefined>,
  maybeParams?: Record<string, string | number | undefined>,
): string {
  const partners = AFFILIATE_PARTNERS[category];
  if (!partners || partners.length === 0) return "#";

  let index = 0;
  let params: Record<string, string | number | undefined> | undefined;
  if (typeof paramsOrIndex === "number") {
    index = paramsOrIndex;
    params = maybeParams;
  } else {
    params = paramsOrIndex;
  }

  const base = partners[index % partners.length].url;
  if (!params) return base;

  try {
    const url = new URL(base);
    for (const [k, v] of Object.entries(params)) {
      if (v !== undefined && v !== "") url.searchParams.set(k, String(v));
    }
    return url.toString();
  } catch {
    return base;
  }
}

/** Returns every partner for a category — use to render multiple CTAs. */
export function getAffiliatePartners(category: AffiliateCategory): AffiliatePartner[] {
  return AFFILIATE_PARTNERS[category] ?? [];
}

/** Attributes to spread onto every affiliate link for SEO + easy auditing. */
export const AFFILIATE_LINK_ATTRS = {
  target: "_blank" as const,
  rel: "sponsored noopener noreferrer",
  "data-affiliate": "true",
};
