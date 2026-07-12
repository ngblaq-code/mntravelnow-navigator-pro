import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={cn(center && "text-center mx-auto", "max-w-3xl", className)}>
      {eyebrow && (
        <div className="text-xs font-bold uppercase tracking-widest text-accent mb-2">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground text-base md:text-lg">{subtitle}</p>}
    </div>
  );
}

export function PageHeader({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-gradient-to-br from-primary to-[oklch(0.32_0.18_262)] text-primary-foreground">
      <div className="container-page py-14 md:py-20">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h1>
        {subtitle && <p className="mt-3 text-lg opacity-90 max-w-2xl">{subtitle}</p>}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}
