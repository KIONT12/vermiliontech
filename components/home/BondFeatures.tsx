"use client";

import { getIcon } from "@/components/ui/Icons";

const highlights = [
  {
    title: "Conversion Focus",
    description: "Messaging and CTAs engineered to turn traffic into leads.",
    icon: "sparkles",
  },
  {
    title: "Performance",
    description: "Next.js builds tuned for speed, SEO, and Core Web Vitals.",
    icon: "rocket",
  },
  {
    title: "Mobile First",
    description: "Layouts that stay sharp on every screen size.",
    icon: "device",
  },
  {
    title: "Premium Design",
    description: "Bold visuals that make your brand feel high-end.",
    icon: "palette",
  },
];

export default function BondFeatures() {
  return (
    <div className="tech-section">
      <div className="tech-section-head">
        <span className="tech-kicker">System capabilities</span>
        <h2 className="tech-section-title">
          Built <span className="tech-fire-text">fast</span>. Built to convert.
        </h2>
      </div>

      <div className="tech-bento">
        {highlights.map((item, i) => (
          <article key={item.title} className="tech-bento-cell" data-index={`0${i + 1}`}>
            <div className="tech-bento-icon text-red-400">
              {getIcon(item.icon, "h-5 w-5")}
            </div>
            <h3 className="mt-4 text-sm font-semibold tracking-wide text-white">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
