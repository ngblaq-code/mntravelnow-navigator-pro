/**
 * CMS client stub.
 *
 * Phase 1: the adapters below always return local data.
 * Phase 3 will read VITE_CMS_ENABLED and swap in a Sanity client.
 *
 * Keeping this file so downstream adapters have a single place to check
 * the flag once CMS is provisioned.
 */
export const CMS_ENABLED =
  (import.meta.env.VITE_CMS_ENABLED ?? "false").toString() === "true";
