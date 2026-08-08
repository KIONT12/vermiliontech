"use client";

import { getIcon } from "@/components/ui/Icons";

const highlights = [
  {
    title: "Conversion Focus",
    description: "Clear messaging and CTAs designed to drive inquiries and sales.",
    icon: "sparkles",
  },
  {
    title: "Performance",
    description: "Fast-loading Next.js builds with optimized assets and SEO.",
    icon: "rocket",
  },
  {
    title: "Mobile First",
    description: "Responsive layouts that look polished on every device.",
    icon: "device",
  },
  {
    title: "Premium Design",
    description: "Modern visuals that establish credibility from the first visit.",
    icon: "palette",
  },
];

export default function BondFeatures() {
  return (
    <div className="unified-deck-section">
      <div className="unified-section-head">
        <p className="unified-label">Capabilities</p>
        <h2 className="unified-section-title">
          Built for growth, not just looks
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-500">
          Every project combines strategy, design, and engineering so your site
          works as hard as your business.
        </p>
      </div>
      <div className="unified-features-grid">
        {highlights.map((item) => (
          <article key={item.title} className="unified-feature">
            <div className="unified-feature-icon text-red-400">
              {getIcon(item.icon, "h-5 w-5")}
            </div>
            <h3 className="mt-4 text-sm font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
