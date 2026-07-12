import { createFileRoute } from "@tanstack/react-router";
import { LEGAL, LegalPage } from "@/lib/legal";
const c = LEGAL["affiliate-disclosure"];
export const Route = createFileRoute("/affiliate-disclosure")({
  head: () => ({
    meta: [
      { title: `${c.title} — MnTravelNow` },
      { name: "description", content: c.desc },
      { property: "og:title", content: c.title }, { property: "og:description", content: c.desc },
      { property: "og:url", content: c.canonical },
    ],
    links: [{ rel: "canonical", href: c.canonical }],
  }),
  component: () => <LegalPage slug="affiliate-disclosure" />,
});
