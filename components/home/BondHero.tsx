"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BrandName from "@/components/ui/BrandName";
import HomeBondAtmosphere from "@/components/home/HomeBondAtmosphere";
import { heroContent } from "@/lib/data/brand";
import { useMotionPreference } from "@/lib/hooks/useMotionPreference";

function renderTitle() {
  const { title, highlight } = heroContent;
  const index = title.indexOf(highlight);
  if (index === -1) return title;

  return (
    <>
      {title.slice(0, index)}
      <span className="tech-fire-text">{highlight}</span>
      {title.slice(index + highlight.length)}
    </>
  );
}

const stats = [
  { label: "Live Sites", value: "5+" },
  { label: "Stack", value: "Next.js" },
  { label: "Delivery", value: "Fast" },
];

export default function BondHero() {
  const { effectsEnabled } = useMotionPreference();
  const motionProps = (delay = 0) =>
    effectsEnabled
      ? {
          initial: { opacity: 0, y: 24 } as const,
          animate: { opacity: 1, y: 0 } as const,
          transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] as const },
        }
      : {};

  return (
    <section className="tech-hero relative min-h-[94vh] overflow-hidden pt-24">
      <HomeBondAtmosphere />

      <div className="relative z-[1] flex min-h-[calc(94vh-6rem)] items-end pb-14 lg:items-center lg:pb-0">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <motion.div
              {...motionProps()}
              className="tech-hero-frame"
            >
              <span className="tech-corner tech-corner--tl" aria-hidden />
              <span className="tech-corner tech-corner--tr" aria-hidden />
              <span className="tech-corner tech-corner--bl" aria-hidden />
              <span className="tech-corner tech-corner--br" aria-hidden />

              <div className="tech-status-strip">
                <span className="tech-pulse-dot" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-red-400">
                  {heroContent.badge}
                </span>
              </div>

              <h1 className="tech-headline mt-6 text-white">{renderTitle()}</h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
                {heroContent.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/portfolio" className="tech-btn-primary">
                  View Portfolio
                </Link>
                <Link href="/contact" className="tech-btn-ghost">
                  Start a Project
                </Link>
              </div>
            </motion.div>

            <motion.div
              {...(effectsEnabled
                ? {
                    initial: { opacity: 0, x: 20 },
                    animate: { opacity: 1, x: 0 },
                    transition: { duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] },
                  }
                : {})}
              className="tech-hero-side hidden lg:block"
            >
              <BrandName size="lg" className="opacity-90" />
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
                Digital studio // Web systems
              </p>
              <div className="tech-stat-grid mt-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="tech-stat-cell">
                    <span className="tech-stat-value">{stat.value}</span>
                    <span className="tech-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
              <div className="tech-code-block mt-8">
                <p className="font-mono text-[11px] leading-relaxed text-zinc-500">
                  <span className="text-red-400/80">&gt;</span> deploy_status:{" "}
                  <span className="text-emerald-400/90">live</span>
                  <br />
                  <span className="text-red-400/80">&gt;</span> performance: optimized
                  <br />
                  <span className="text-red-400/80">&gt;</span> stack: next.js + react
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            {...motionProps(0.12)}
            className="tech-pill-row mt-10 lg:hidden"
          >
            {stats.map((stat) => (
              <span key={stat.label} className="tech-pill">
                <span className="text-red-400">{stat.value}</span> {stat.label}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
