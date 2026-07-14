import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const SANITY_PROJECT_ID = import.meta.env.VITE_SANITY_PROJECT_ID ?? "g8jasgtu";
export const SANITY_DATASET = import.meta.env.VITE_SANITY_DATASET ?? "production";
export const CMS_ENABLED = (import.meta.env.VITE_CMS_ENABLED ?? "false").toString() === "true";

export const sanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);
export function urlFor(source: unknown) {
  return builder.image(source as never);
}
