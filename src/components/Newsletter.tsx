import { Mail } from "lucide-react";
import { useState } from "react";

export function Newsletter({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <section
      className={
        compact
          ? "rounded-2xl bg-primary text-primary-foreground p-6"
          : "rounded-3xl bg-gradient-to-br from-primary to-[oklch(0.35_0.18_260)] text-primary-foreground p-8 md:p-12"
      }
    >
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-grid place-items-center h-12 w-12 rounded-2xl bg-white/10 mb-4">
          <Mail className="h-6 w-6" />
        </div>
        <h2 className={compact ? "text-xl font-bold" : "text-3xl md:text-4xl font-bold"}>
          Stay Updated With Amazing Travel Deals
        </h2>
        <p className="mt-2 opacity-90 text-sm md:text-base">
          Weekly flight drops, hotel promos and curated destination guides — straight to your inbox.
        </p>
        <form
          onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }}
          className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
        >
          <input
            required
            type="email"
            aria-label="Email address"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 h-12 rounded-xl px-4 text-foreground bg-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button
            type="submit"
            className="h-12 px-6 rounded-xl bg-accent text-accent-foreground font-semibold hover:brightness-110 transition"
          >
            {done ? "Subscribed" : "Subscribe"}
          </button>
        </form>
        <p className="mt-3 text-xs opacity-75">We respect your inbox — unsubscribe anytime.</p>
      </div>
    </section>
  );
}
