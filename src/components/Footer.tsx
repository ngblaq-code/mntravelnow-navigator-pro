import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Youtube, Plane } from "lucide-react";
import { SITE } from "@/config/site";

const cols = [
  {
    title: "Explore",
    links: [
      { label: "Flights", to: "/flights" },
      { label: "Hotels", to: "/hotels" },
      { label: "Car Rentals", to: "/car-rentals" },
      { label: "Airport Transfers", to: "/airport-transfers" },
      { label: "Tours & Activities", to: "/tours" },
      { label: "Travel Insurance", to: "/travel-insurance" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
      { label: "Blog", to: "/blog" },
      { label: "Destinations", to: "/destinations" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
      { label: "Cookie Policy", to: "/cookies" },
      { label: "Affiliate Disclosure", to: "/affiliate-disclosure" },
      { label: "Disclaimer", to: "/disclaimer" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 bg-surface border-t border-border">
      <div className="container-page py-14 grid gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Plane className="h-5 w-5" />
            </span>
            <div>
              <div className="font-display font-bold text-lg text-primary">
                Mn<span className="text-accent">Travel</span>Now
              </div>
              <p className="text-xs text-muted-foreground">{SITE.tagline}</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            {SITE.description}
          </p>
          <div className="flex gap-2 mt-5" aria-label="Social">
            <a aria-label="Twitter" href={SITE.social.twitter} className="p-2 rounded-md hover:bg-muted"><Twitter className="h-4 w-4" /></a>
            <a aria-label="Facebook" href={SITE.social.facebook} className="p-2 rounded-md hover:bg-muted"><Facebook className="h-4 w-4" /></a>
            <a aria-label="Instagram" href={SITE.social.instagram} className="p-2 rounded-md hover:bg-muted"><Instagram className="h-4 w-4" /></a>
            <a aria-label="YouTube" href={SITE.social.youtube} className="p-2 rounded-md hover:bg-muted"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="text-sm font-semibold text-foreground mb-3">{c.title}</h4>
            <ul className="space-y-2">
              {c.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>
            {SITE.name} is a travel discovery platform. Bookings are processed by third-party partners.
          </p>
        </div>
      </div>
    </footer>
  );
}
