"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HomeBondAtmosphere from "@/components/home/HomeBondAtmosphere";
import { heroContent, heroTags } from "@/lib/data/brand";
import { useMotionPreference } from "@/lib/hooks/useMotionPreference";

function renderTitle() {
  const { title, highlight } = heroContent;
  const index = title.indexOf(highlight);
  if (index === -1) return title;

  return (
    <>
      {title.slice(0, index)}
      <span className="studio-accent-text">{highlight}</span>
      {title.slice(index + highlight.length)}
    </>
  );
}

const stats = [
  { label: "Live client sites", value: "5+" },
  { label: "Fully custom builds", value: "100%" },
  { label: "Typical delivery", value: "2–4 wks" },
];

export default function BondHero() {
  const { effectsEnabled } = useMotionPreference();
  const fade = (delay = 0) =>
    effectsEnabled
      ? {
          initial: { opacity: 0, y: 20 } as const,
          animate: { opacity: 1, y: 0 } as const,
          transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
        }
      : {};

  return (
    <section className="studio-hero relative min-h-[92vh] overflow-hidden pt-24">
      <HomeBondAtmosphere />

      <div className="relative z-[1] flex min-h-[calc(92vh-6rem)] items-end pb-16 lg:items-center lg:pb-0">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
          <motion.div {...fade()} className="studio-hero-card max-w-3xl">
            <p className="studio-eyebrow">{heroContent.badge}</p>

            <h1 className="studio-headline mt-5 text-white">{renderTitle()}</h1>

            <p className="studio-lead mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              {heroContent.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="studio-btn-primary">
                Start Your Project
              </Link>
              <Link href="/portfolio" className="studio-btn-secondary">
                View Live Work
              </Link>
            </div>

            <div className="studio-tag-row mt-8 flex flex-wrap gap-2">
              {heroTags.map((tag) => (
                <span key={tag} className="studio-tag">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fade(0.15)}
            className="studio-stat-row mt-12 grid gap-3 sm:grid-cols-3 lg:mt-14 lg:max-w-3xl"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="studio-stat">
                <span className="studio-stat-value">{stat.value}</span>
                <span className="studio-stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
