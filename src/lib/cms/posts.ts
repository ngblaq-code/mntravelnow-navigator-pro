/**
 * Blog posts adapter — Sanity when flag on, local TS otherwise.
 * Always returns the same `BlogPost` shape.
 */
import { BLOG_POSTS, getPost, type BlogPost } from "@/data/content";
import { CMS_ENABLED, sanityClient } from "@/integrations/sanity/client";

export type { BlogPost };

const POST_PROJECTION = `{
  "slug": slug.current,
  title,
  excerpt,
  author,
  date,
  readingTime,
  category,
  image,
  "content": content[]{ heading, body }
}`;

function normalize(raw: unknown): BlogPost | undefined {
  if (!raw || typeof raw !== "object") return undefined;
  const r = raw as Partial<BlogPost>;
  if (!r.slug || !r.title) return undefined;
  return {
    slug: r.slug,
    title: r.title,
    excerpt: r.excerpt ?? "",
    author: r.author ?? "",
    date: r.date ?? "",
    readingTime: r.readingTime ?? "",
    category: r.category ?? "",
    image: r.image ?? "",
    content: Array.isArray(r.content) ? r.content : [],
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  if (!CMS_ENABLED) return BLOG_POSTS;
  try {
    const rows = await sanityClient.fetch<unknown[]>(
      `*[_type == "post"] | order(date desc) ${POST_PROJECTION}`,
    );
    const mapped = rows.map(normalize).filter((p): p is BlogPost => !!p);
    return mapped.length > 0 ? mapped : BLOG_POSTS;
  } catch (err) {
    console.error("[cms/posts] Sanity fetch failed, using local fallback:", err);
    return BLOG_POSTS;
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  if (!CMS_ENABLED) return getPost(slug);
  try {
    const row = await sanityClient.fetch<unknown>(
      `*[_type == "post" && slug.current == $slug][0] ${POST_PROJECTION}`,
      { slug },
    );
    return normalize(row) ?? getPost(slug);
  } catch (err) {
    console.error("[cms/posts] Sanity fetch failed, using local fallback:", err);
    return getPost(slug);
  }
}

export async function getRelatedPosts(slug: string, limit = 3): Promise<BlogPost[]> {
  const all = await getAllPosts();
  return all.filter((p) => p.slug !== slug).slice(0, limit);
}
