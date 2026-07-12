import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/Section";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { SITE } from "@/config/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact ${SITE.name} — We're Here to Help` },
      { name: "description", content: "Get in touch with our travel team. We'll respond within one business day." },
      { property: "og:title", content: `Contact ${SITE.name}` },
      { property: "og:description", content: "Get in touch with our travel team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const inputCls = "h-11 w-full rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring";

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHeader title="Contact us" subtitle="Questions, partnership ideas, or feedback? We'd love to hear from you." />
      <section className="container-page mt-14 grid gap-10 lg:grid-cols-[1fr_360px]">
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="rounded-2xl bg-card border border-border p-6 md:p-8 space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block"><span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Name</span><input required className={inputCls} /></label>
            <label className="block"><span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Email</span><input required type="email" className={inputCls} /></label>
          </div>
          <label className="block"><span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Subject</span><input required className={inputCls} /></label>
          <label className="block"><span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Message</span>
            <textarea required rows={6} className="w-full rounded-lg border border-input bg-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
          </label>
          <button type="submit" className="rounded-xl bg-accent text-accent-foreground px-6 py-3 font-semibold hover:brightness-110">
            {sent ? "Message sent — thank you!" : "Send Message"}
          </button>
        </form>

        <aside className="space-y-4">
          <div className="rounded-2xl bg-surface p-5">
            <h3 className="font-semibold">Get in touch</h3>
            <div className="mt-4 space-y-3 text-sm">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" />{SITE.email}</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" />{SITE.phone}</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" />Remote-first · Worldwide</p>
              <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" />Mon–Fri · 9am – 6pm</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden bg-surface aspect-video grid place-items-center text-muted-foreground text-sm border border-dashed border-border">
            🗺️ Google Maps placeholder
          </div>
        </aside>
      </section>
    </>
  );
}
