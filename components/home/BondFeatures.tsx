"use client";

import { getIcon } from "@/components/ui/Icons";

const highlights = [
  {
    title: "Fully Custom",
    description:
      "No templates or copy-paste layouts — every build is shaped around your brand and goals.",
    icon: "palette",
  },
  {
    title: "Apps & Software",
    description:
      "Web apps, dashboards, and custom tools engineered to work smoothly on every device.",
    icon: "rocket",
  },
  {
    title: "Sites That Convert",
    description:
      "Clear messaging, strong CTAs, and fast load times that turn visitors into leads and sales.",
    icon: "sparkles",
  },
  {
    title: "Creative Edge",
    description:
      "Bold design and thoughtful UX so your business never looks like everyone else online.",
    icon: "device",
  },
];

export default function BondFeatures() {
  return (
    <div className="studio-section">
      <div className="studio-section-head">
        <span className="studio-kicker">What I build</span>
        <h2 className="studio-section-title">
          Creative tech with <span className="studio-accent-text">business impact</span>
        </h2>
        <p className="studio-section-desc mt-3 max-w-2xl">
          From polished business websites to fully custom software — built with care,
          speed, and a focus on results that matter to you.
        </p>
      </div>

      <div className="studio-feature-grid">
        {highlights.map((item) => (
          <article key={item.title} className="studio-feature-card">
            <div className="studio-feature-icon text-red-400">
              {getIcon(item.icon, "h-5 w-5")}
            </div>
            <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
