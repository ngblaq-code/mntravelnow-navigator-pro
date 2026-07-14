/**
 * CMS flag. When VITE_CMS_ENABLED=true, adapters fetch from Sanity;
 * otherwise they fall back to the local TS arrays in @/data/*.
 */
export { CMS_ENABLED, sanityClient } from "@/integrations/sanity/client";
