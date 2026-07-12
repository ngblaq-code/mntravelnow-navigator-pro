import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { AdSlot } from "@/components/AdSlot";
import { Newsletter } from "@/components/Newsletter";
import { BLOG_POSTS, getPost } from "@/data/content";
import { Calendar, User } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const p = getPost(params.slug);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Article — MnTravelNow" }, { name: "robots", content: "noindex" }] };
    const p = loaderData;
    return {
      meta: [
        { title: `${p.title} | MnTravelNow` },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.excerpt },
        { property: "og:image", content: p.image },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
        { name: "twitter:image", content: p.image },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: p.title,
          image: [p.image],
          datePublished: p.date,
          author: [{ "@type": "Person", name: p.author }],
        }),
      }],
    };
  },
  component: BlogPost,
  notFoundComponent: () => (
    <div className="container-page py-20 text-center">
      <h1 className="text-3xl font-bold">Article not found</h1>
      <Link to="/blog" className="mt-4 inline-flex text-primary font-semibold hover:underline">Back to blog →</Link>
    </div>
  ),
});

function BlogPost() {
  const p = Route.useLoaderData();
  const related = BLOG_POSTS.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <article className="pb-16">
      <div className="container-page pt-10">
        <nav className="text-xs text-muted-foreground mb-4" aria-label="Breadcrumb">
          <Link to="/">Home</Link> / <Link to="/blog">Blog</Link> / <span>{p.category}</span>
        </nav>
        <span className="text-xs font-semibold text-accent uppercase tracking-wide">{p.category}</span>
        <h1 className="mt-2 text-3xl md:text-5xl font-bold tracking-tight max-w-4xl">{p.title}</h1>
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1"><User className="h-4 w-4" />{p.author}</span>
          <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4" />{p.date}</span>
          <span>· {p.readingTime}</span>
        </div>
      </div>

      <div className="container-page mt-8">
        <img src={p.image} alt={p.title} width={1200} height={700} className="w-full rounded-2xl aspect-[16/9] object-cover" />
      </div>

      <div className="container-page mt-10 grid gap-10 lg:grid-cols-[1fr_320px]">
        <div className="min-w-0">
          <div className="rounded-2xl bg-surface p-5 mb-8">
            <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Table of contents</h2>
            <ol className="mt-3 space-y-1.5 text-sm">
              {p.content.map((s: {heading:string;body:string}, i: number) => (
                <li key={i}><a href={`#s-${i}`} className="text-primary hover:underline">{s.heading}</a></li>
              ))}
            </ol>
          </div>

          <div className="prose max-w-none">
            <p className="text-lg text-foreground/90 leading-relaxed">{p.excerpt}</p>
            {p.content.map((s: {heading:string;body:string}, i: number) => (
              <div key={i}>
                <h2 id={`s-${i}`} className="mt-8 text-2xl font-bold">{s.heading}</h2>
                <p className="mt-3 text-foreground/90 leading-relaxed">{s.body}</p>
                {(i === 1 || i === 4) && <div className="my-8"><AdSlot size="rectangle" /></div>}
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-surface p-5 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 text-primary grid place-items-center font-bold">
              {p.author.split(" ").map((n: string) => n[0]).join("")}
            </div>
            <div>
              <div className="font-semibold">Written by {p.author}</div>
              <div className="text-xs text-muted-foreground">Contributing editor at MnTravelNow</div>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold">Related articles</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} to="/blog/$slug" params={{ slug: r.slug }} className="rounded-xl overflow-hidden bg-card shadow-card">
                  <img src={r.image} alt="" loading="lazy" width={600} height={400} className="aspect-[16/10] w-full object-cover" />
                  <div className="p-3">
                    <div className="text-[11px] font-semibold text-accent uppercase">{r.category}</div>
                    <div className="mt-1 text-sm font-semibold line-clamp-2">{r.title}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <AdSlot size="sidebar" />
          <div className="rounded-2xl bg-surface p-5">
            <h3 className="font-semibold">Popular categories</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {["Travel Tips","Budget Travel","Luxury","Visa","Packing","Family"].map((c) => (
                <li key={c} className="text-xs bg-background border border-border rounded-full px-2.5 py-1">{c}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <div className="container-page mt-14"><Newsletter compact /></div>

      <div className="container-page mt-10">
        <div className="rounded-2xl bg-surface p-6 text-center text-sm text-muted-foreground">
          💬 Comments are coming soon. In the meantime, share your thoughts with us on social media.
        </div>
      </div>
    </article>
  );
}
