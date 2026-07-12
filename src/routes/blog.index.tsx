import { createFileRoute, Link } from "@tanstack/react-router";
import { AdSlot } from "@/components/AdSlot";
import { PageHeader } from "@/components/Section";
import { BLOG_POSTS } from "@/data/content";
import { Calendar, User } from "lucide-react";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Travel Blog — Tips, Guides & Inspiration | MnTravelNow" },
      { name: "description", content: "Travel tips, packing lists, budget guides, luxury inspiration and destination stories from our editors." },
      { property: "og:title", content: "Travel Blog — Tips, Guides & Inspiration | MnTravelNow" },
      { property: "og:description", content: "Travel tips, packing lists and destination stories." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

const CATEGORIES = ["All", "Travel Tips", "Budget Travel", "Luxury Travel", "Visa Guides", "Packing Lists", "Family Travel"];

function BlogIndex() {
  return (
    <>
      <PageHeader title="Travel Blog" subtitle="Practical tips, deep guides and inspiration for smarter travel." />

      <div className="container-page mt-8 flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <span key={c} className="text-xs font-medium rounded-full bg-surface px-3 py-1.5 border border-border">{c}</span>
        ))}
      </div>

      <section className="container-page mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="grid gap-6 sm:grid-cols-2">
          {BLOG_POSTS.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }}
              className="group rounded-2xl overflow-hidden bg-card shadow-card hover:shadow-elevated transition">
              <div className="aspect-[16/10] bg-muted overflow-hidden">
                <img src={p.image} alt={p.title} loading="lazy" width={1200} height={700} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold text-accent uppercase tracking-wide">{p.category}</span>
                <h2 className="mt-2 font-semibold text-lg leading-snug">{p.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><User className="h-3 w-3" />{p.author}</span>
                  <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" />{p.date}</span>
                  <span>· {p.readingTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <aside className="space-y-6">
          <AdSlot size="sidebar" />
        </aside>
      </section>

      <div className="container-page mt-14"><AdSlot size="leaderboard" /></div>
    </>
  );
}
