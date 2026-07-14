/**
 * One-off seed: copy local BLOG_POSTS + DESTINATIONS into Sanity.
 * Usage: SANITY_WRITE_TOKEN=xxx node scripts/sanity-seed.mjs
 * Idempotent: uses createOrReplace with deterministic IDs.
 */
import { createClient } from "@sanity/client";
import { pathToFileURL } from "node:url";

const projectId = process.env.SANITY_PROJECT_ID || "g8jasgtu";
const dataset = process.env.SANITY_DATASET || "production";
const token = process.env.SANITY_WRITE_TOKEN;
if (!token) {
  console.error("SANITY_WRITE_TOKEN is required");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

// Load TS sources via tsx-style dynamic import isn't available in plain node;
// re-declare the seed data inline by re-exporting from compiled sources via bun.
// Simpler: use bun to run this file so TS imports work.
const { BLOG_POSTS } = await import(pathToFileURL(new URL("../src/data/content.ts", import.meta.url).pathname).href);
const { DESTINATIONS } = await import(pathToFileURL(new URL("../src/data/destinations.ts", import.meta.url).pathname).href);

const tx = client.transaction();

for (const p of BLOG_POSTS) {
  tx.createOrReplace({
    _id: `post-${p.slug}`,
    _type: "post",
    title: p.title,
    slug: { _type: "slug", current: p.slug },
    excerpt: p.excerpt,
    author: p.author,
    date: p.date,
    readingTime: p.readingTime,
    category: p.category,
    image: p.image,
    content: p.content.map((s, i) => ({ _key: `s${i}`, _type: "section", heading: s.heading, body: s.body })),
  });
}

for (const d of DESTINATIONS) {
  tx.createOrReplace({
    _id: `destination-${d.slug}`,
    _type: "destination",
    name: d.name,
    slug: { _type: "slug", current: d.slug },
    country: d.country,
    tagline: d.tagline,
    price: d.price,
    image: d.image,
    overview: d.overview,
    bestTime: d.bestTime,
    weather: d.weather,
    budget: d.budget,
    transport: d.transport,
    attractions: d.attractions.map((a, i) => ({ _key: `a${i}`, _type: "attraction", name: a.name, description: a.description })),
    things: d.things,
    tips: d.tips,
    faqs: d.faqs.map((f, i) => ({ _key: `f${i}`, _type: "faq", q: f.q, a: f.a })),
  });
}

const res = await tx.commit();
console.log(`Seeded ${res.results.length} documents.`);
