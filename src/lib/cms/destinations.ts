/**
 * Destinations adapter — Sanity when flag on, local TS otherwise.
 * Always returns the same `Destination` shape.
 */
import { DESTINATIONS, getDestination, type Destination } from "@/data/destinations";
import { CMS_ENABLED, sanityClient } from "@/integrations/sanity/client";

export type { Destination };

const DEST_PROJECTION = `{
  "slug": slug.current,
  name,
  country,
  tagline,
  price,
  image,
  overview,
  bestTime,
  weather,
  budget,
  transport,
  "attractions": attractions[]{ name, description },
  things,
  tips,
  "faqs": faqs[]{ q, a }
}`;

function normalize(raw: unknown): Destination | undefined {
  if (!raw || typeof raw !== "object") return undefined;
  const r = raw as Partial<Destination>;
  if (!r.slug || !r.name) return undefined;
  return {
    slug: r.slug,
    name: r.name,
    country: r.country ?? "",
    tagline: r.tagline ?? "",
    price: typeof r.price === "number" ? r.price : 0,
    image: r.image ?? "",
    overview: r.overview ?? "",
    bestTime: r.bestTime ?? "",
    weather: r.weather ?? "",
    budget: r.budget ?? "",
    transport: r.transport ?? "",
    attractions: Array.isArray(r.attractions) ? r.attractions : [],
    things: Array.isArray(r.things) ? r.things : [],
    tips: Array.isArray(r.tips) ? r.tips : [],
    faqs: Array.isArray(r.faqs) ? r.faqs : [],
  };
}

export async function getAllDestinations(): Promise<Destination[]> {
  if (!CMS_ENABLED) return DESTINATIONS;
  try {
    const rows = await sanityClient.fetch<unknown[]>(
      `*[_type == "destination"] | order(name asc) ${DEST_PROJECTION}`,
    );
    const mapped = rows.map(normalize).filter((d): d is Destination => !!d);
    return mapped.length > 0 ? mapped : DESTINATIONS;
  } catch (err) {
    console.error("[cms/destinations] Sanity fetch failed, using local fallback:", err);
    return DESTINATIONS;
  }
}

export async function getDestinationBySlug(slug: string): Promise<Destination | undefined> {
  if (!CMS_ENABLED) return getDestination(slug);
  try {
    const row = await sanityClient.fetch<unknown>(
      `*[_type == "destination" && slug.current == $slug][0] ${DEST_PROJECTION}`,
      { slug },
    );
    return normalize(row) ?? getDestination(slug);
  } catch (err) {
    console.error("[cms/destinations] Sanity fetch failed, using local fallback:", err);
    return getDestination(slug);
  }
}

export async function getRelatedDestinations(slug: string, limit = 4): Promise<Destination[]> {
  const all = await getAllDestinations();
  return all.filter((d) => d.slug !== slug).slice(0, limit);
}
