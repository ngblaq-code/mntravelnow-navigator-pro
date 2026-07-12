import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type AdSlotSize = "leaderboard" | "banner" | "rectangle" | "sidebar" | "mobile" | "anchor";

interface AdSlotProps {
  size?: AdSlotSize;
  className?: string;
  label?: string;
  /**
   * AdSense slot ID. When your account is approved, paste the real
   * <ins className="adsbygoogle" ... data-ad-slot="…" /> block into
   * AdSenseSlot() below.
   */
  slotId?: string;
}

const DIM: Record<AdSlotSize, string> = {
  leaderboard: "min-h-[90px] md:min-h-[90px]",
  banner: "min-h-[100px] md:min-h-[120px]",
  rectangle: "min-h-[250px]",
  sidebar: "min-h-[600px]",
  mobile: "min-h-[100px] md:hidden",
  anchor: "min-h-[60px] fixed bottom-0 inset-x-0 z-40 md:hidden shadow-elevated",
};

/**
 * Reusable Google AdSense placeholder.
 * ------------------------------------
 * When your AdSense account is approved:
 * 1. Add the AdSense loader <script> once in src/routes/__root.tsx head.
 * 2. Replace the placeholder JSX inside AdSenseSlot() with your <ins> block.
 * The reserved space prevents Cumulative Layout Shift.
 */
export function AdSlot({ size = "rectangle", className, label = "Advertisement", slotId }: AdSlotProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <aside
      ref={ref}
      aria-label={label}
      data-ad-slot={slotId ?? size}
      className={cn(
        "w-full flex items-center justify-center rounded-xl bg-surface border border-dashed border-border text-xs text-muted-foreground",
        DIM[size],
        className,
      )}
    >
      {/* PASTE-YOUR-ADSENSE-CODE-HERE — replace this span with your <ins className="adsbygoogle" ... /> tag */}
      {visible ? (
        <span className="opacity-60">Ad space — {size}</span>
      ) : (
        <span className="opacity-40">Ad</span>
      )}
    </aside>
  );
}
