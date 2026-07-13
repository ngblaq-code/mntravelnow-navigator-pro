# CMS Integration Plan — MnTravelNow

Goal: add a CMS for **blog posts** and **destination guides** without changing the current design, routes, affiliate wiring, SEO metadata shape, or any existing functionality. Fully additive, reversible, and shippable in stages.

## Current architecture (relevant parts)

- **Stack**: TanStack Start (SSR), Vite, Tailwind v4, TanStack Query.
- **Content**: hard-coded in TS
  - `src/data/content.ts` → `BLOG_POSTS: BlogPost[]`, `getPost(slug)`
  - `src/data/destinations.ts` → `DESTINATIONS`
- **Routes** (unchanged): `blog.index.tsx`, `blog.$slug.tsx`, `destinations.index.tsx`, `destinations.$slug.tsx`, plus `sitemap.xml.ts` iterating both arrays.
- **Affiliates**: centralized in `src/config/affiliates.ts` (`getAffiliateLink`, `AFFILIATE_LINK_ATTRS`) — CMS never touches this.
- **SEO**: per-route `head()` with title/description/OG + canonical, driven by post/destination fields.

## Recommendation

Use **Sanity** as the headless CMS (free tier generous, TS-friendly, image CDN, great DX, works cleanly with SSR fetch). Fallback: Contentful or Storyblok if you already have a workspace there — same integration shape applies.

### Why Sanity over alternatives here
- Public read-only CDN → no server function required, works with SSR loaders.
- Rich text (Portable Text) maps 1:1 to your current `{ heading, body }[]` shape.
- Image CDN + `@sanity/image-url` covers your `image` field with zero infra.
- Schema-as-code, versioned in a separate Studio repo — no lock-in.

## Non-breaking strategy: adapter + fallback

Keep every existing type, route, and component identical. Introduce an **adapter layer** that returns the same shapes (`BlogPost`, `Destination`) whether the source is CMS or local TS. If the CMS is empty, unreachable, or the env var is missing, fall back to today's local arrays — the site behaves exactly as it does now.

```text
route loader
   │
   ▼
src/lib/cms/posts.ts        ← adapter (same return types as today)
   │
   ├── if VITE_CMS_ENABLED → fetch from Sanity, map → BlogPost
   └── else / on error     → import BLOG_POSTS from src/data/content.ts
```

## Phased rollout

### Phase 0 — decisions only (no code)
- Confirm Sanity (or pick alternative).
- Confirm content model mirrors current TS types exactly (no new fields yet).

### Phase 1 — adapter with local fallback (still 100% local content)
- Add `src/lib/cms/client.ts`, `src/lib/cms/posts.ts`, `src/lib/cms/destinations.ts`.
- Adapters return existing `BlogPost` / `Destination` types.
- Wire route loaders to call adapters via `queryClient.ensureQueryData` + `useSuspenseQuery` (matches current patterns). Behavior identical because CMS flag is off.
- Sitemap route reads from the same adapters.

### Phase 2 — provision Sanity (parallel, no site change)
- Create Sanity project + Studio in a separate repo.
- Schemas: `post` (slug, title, excerpt, author, date, readingTime, category, image, body[]) and `destination` (mirror `DESTINATIONS` fields).
- Migrate current content into Sanity as seed data (one-time script reading `src/data/*.ts`).
- Add CORS origin for preview + production domains.

### Phase 3 — enable CMS behind a flag
- Add env vars: `VITE_SANITY_PROJECT_ID`, `VITE_SANITY_DATASET`, `VITE_CMS_ENABLED`.
- Adapter reads CMS when flag is on; otherwise local. Both paths return the same shape → components, SEO, affiliate CTAs untouched.
- Roll out on preview first, then production.

### Phase 4 — cleanup (optional, later)
- Once CMS is trusted, keep local arrays as a permanent typed fallback for offline dev or delete them. Recommended: keep them.

## Guardrails (what will NOT change)

- No changes to `src/config/affiliates.ts` or any affiliate CTA rendering.
- No changes to route filenames, `createFileRoute` paths, or `head()` shape — CMS just fills the same fields.
- No changes to Tailwind tokens, components, layout, `SearchTabs`, `AdSlot`, Manual Drive script, AdSense, or the mobile nav.
- No changes to `sitemap.xml.ts` behavior — same URL list, sourced via adapter.
- Types (`BlogPost`, `Destination`) stay in their current files; CMS mappers conform to them.
- Rich text renders through the same `{ heading, body }[]` markup path (Portable Text → mapped, not swapped).

## Technical details

- **Data fetching**: SSR-safe `fetch` inside loaders; `useSuspenseQuery` in components. No client-only `useEffect` fetches.
- **Preview/draft**: optional, add later via a `?preview=1` param that swaps CDN → draft with a read token — not required for launch.
- **Error handling**: adapter try/catch → local fallback; log server-side. Never breaks the page.
- **Caching**: rely on Sanity CDN (`useCdn: true`) + TanStack Query per-request cache. Optional revalidation later.
- **SEO**: unchanged — same `head()` fields populated from adapter output. `og:image` stays on leaf routes only.
- **Sitemap**: adapter feeds the same XML builder; URL structure identical.

## Risks & mitigations

- **CMS outage** → local fallback keeps site live.
- **Schema drift** → Zod-parse CMS responses inside the adapter before returning typed objects.
- **Image regressions** → keep `picsum` fallback if a CMS image is missing.
- **Build-time secrets** → only publishable IDs in `VITE_*`; no service tokens shipped to client.

## Deliverables when you approve

1. `src/lib/cms/{client,posts,destinations}.ts` adapter with local fallback.
2. Loader wiring for `blog.index`, `blog.$slug`, `destinations.index`, `destinations.$slug`, `sitemap.xml`.
3. Sanity Studio repo + schemas + seed script.
4. Env vars + docs in `AGENTS.md`.

Nothing ships until you say go.
