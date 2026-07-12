import { Link } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { NAV_ITEMS, SITE } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/85 backdrop-blur border-b border-border">
      <div className="container-page flex items-center justify-between gap-4 h-16">
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label={SITE.name}>
          <img src={logo} alt="" width={36} height={36} className="h-9 w-9" />
          <span className="font-display font-bold text-lg tracking-tight text-primary">
            Mn<span className="text-accent">Travel</span>Now
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary rounded-md hover:bg-muted transition-colors"
              activeProps={{ className: "text-primary bg-muted" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Search"
            className="p-2 rounded-md text-foreground/70 hover:text-primary hover:bg-muted transition-colors"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className="lg:hidden p-2 rounded-md text-foreground/70 hover:text-primary hover:bg-muted"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 border-t border-border bg-background",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="container-page py-3 flex flex-col" aria-label="Mobile">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="py-2.5 text-sm font-medium text-foreground/85 border-b border-border/60 last:border-0"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
