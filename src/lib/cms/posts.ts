/**
 * Blog posts adapter.
 *
 * Returns the same `BlogPost` shape whether the source is the local TS
 * array (today) or a headless CMS (later). Route components should import
 * from here instead of `@/data/content` so the source can be swapped
 * without touching pages.
 */
import { BLOG_POSTS, getPost, type BlogPost } from "@/data/content";

export type { BlogPost };

export function getAllPosts(): BlogPost[] {
  return BLOG_POSTS;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getPost(slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, limit);
}
