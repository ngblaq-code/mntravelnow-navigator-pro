import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/Section";
import { SITE } from "@/config/site";

const CONTENT: Record<string, { title: string; body: string[]; canonical: string; desc: string }> = {
  privacy: {
    title: "Privacy Policy",
    canonical: "/privacy",
    desc: "How MnTravelNow collects, uses and protects your personal information.",
    body: [
      `${SITE.name} respects your privacy. This policy explains what data we collect, how we use it, and your rights.`,
      "We collect basic analytics (pages visited, device type, approximate location) to improve the site. We do not sell your personal data.",
      "When you click an affiliate link, our partners may set cookies to attribute your booking. You can control cookies through your browser.",
      "You can request access, correction or deletion of your data anytime by emailing us at " + SITE.email + ".",
    ],
  },
  terms: {
    title: "Terms of Service",
    canonical: "/terms",
    desc: "Terms and conditions governing your use of MnTravelNow.",
    body: [
      `By using ${SITE.name}, you agree to these terms.`,
      "MnTravelNow is a comparison and discovery platform. We are not a travel agency and do not process bookings ourselves.",
      "All bookings are governed by the terms and conditions of the respective travel providers you book through.",
      "We strive for accuracy but cannot guarantee availability, pricing, or the performance of third-party services.",
    ],
  },
  cookies: {
    title: "Cookie Policy",
    canonical: "/cookies",
    desc: "How MnTravelNow uses cookies and similar technologies.",
    body: [
      "We use cookies to remember your preferences, measure traffic, and improve the site.",
      "Essential cookies are required for the site to function. Analytics and advertising cookies are optional.",
      "Our advertising partners (including Google AdSense) may use cookies to serve relevant ads. You can opt out via your browser or Google Ads Settings.",
      "By continuing to use our site, you consent to the use of cookies as described.",
    ],
  },
  "affiliate-disclosure": {
    title: "Affiliate Disclosure",
    canonical: "/affiliate-disclosure",
    desc: "How MnTravelNow earns commissions from affiliate partnerships.",
    body: [
      `${SITE.name} participates in affiliate programs, including Travelpayouts and other travel partner networks.`,
      "When you click an affiliate link and complete a booking, we may earn a small commission at no additional cost to you.",
      "This helps us keep the site free and continue producing quality travel content.",
      "Our recommendations are independent — we only feature providers we consider trustworthy and useful for travelers.",
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    canonical: "/disclaimer",
    desc: "Important disclaimers about the information provided on MnTravelNow.",
    body: [
      "All content on this website is provided for general information purposes only.",
      "Prices, availability, and details are indicative and subject to change without notice. Always verify with the booking provider.",
      "Travel involves risks. Consult official government resources for the latest advisories, entry requirements and health information.",
      "MnTravelNow disclaims responsibility for the actions, products, or services of third-party providers.",
    ],
  },
};

function makeLegalRoute(slug: keyof typeof CONTENT, path: string) {
  const c = CONTENT[slug];
  return createFileRoute(path as any)({
    head: () => ({
      meta: [
        { title: `${c.title} — ${SITE.name}` },
        { name: "description", content: c.desc },
        { property: "og:title", content: `${c.title} — ${SITE.name}` },
        { property: "og:description", content: c.desc },
        { property: "og:url", content: c.canonical },
      ],
      links: [{ rel: "canonical", href: c.canonical }],
    }),
    component: () => <LegalPage slug={slug} />,
  });
}

function LegalPage({ slug }: { slug: keyof typeof CONTENT }) {
  const c = CONTENT[slug];
  return (
    <>
      <PageHeader title={c.title} />
      <section className="container-page mt-12 max-w-3xl space-y-5 text-foreground/85 leading-relaxed pb-16">
        {c.body.map((p, i) => <p key={i}>{p}</p>)}
        <p className="text-xs text-muted-foreground">Last updated: {new Date().getFullYear()}</p>
      </section>
    </>
  );
}

// Individual route files re-export the same page.
export { CONTENT, LegalPage, makeLegalRoute };
