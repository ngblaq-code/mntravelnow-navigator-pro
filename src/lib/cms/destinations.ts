/**
 * Destinations adapter.
 *
 * Returns the same `Destination` shape whether the source is the local TS
 * array (today) or a headless CMS (later).
 */
import { DESTINATIONS, getDestination, type Destination } from "@/data/destinations";

export type { Destination };

export function getAllDestinations(): Destination[] {
  return DESTINATIONS;
}

export function getDestinationBySlug(slug: string): Destination | undefined {
  return getDestination(slug);
}

export function getRelatedDestinations(slug: string, limit = 4): Destination[] {
  return DESTINATIONS.filter((d) => d.slug !== slug).slice(0, limit);
}
