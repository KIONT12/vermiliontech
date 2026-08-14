"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HomeBondAtmosphere from "@/components/home/HomeBondAtmosphere";
import { heroContent } from "@/lib/data/brand";
import { useMotionPreference } from "@/lib/hooks/useMotionPreference";

export default function BondHero() {
  const { effectsEnabled } = useMotionPreference();
  const fade = (delay = 0) =>
    effectsEnabled
      ? {
          initial: { opacity: 0, y: 16 } as const,
          animate: { opacity: 1, y: 0 } as const,
          transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] as const },
        }
      : {};

  return (
    <section className="pro-hero relative min-h-[90vh] overflow-hidden pt-24">
      <HomeBondAtmosphere />
      <div className="pro-hero-scrim" aria-hidden />

      <div className="relative z-[1] mx-auto flex min-h-[calc(90vh-6rem)] max-w-6xl flex-col justify-end px-6 pb-16 lg:justify-center lg:px-8 lg:pb-0">
        <motion.div {...fade()} className="max-w-2xl">
          <p className="pro-label">{heroContent.badge}</p>
          <h1 className="pro-hero-title mt-4 text-white">{heroContent.title}</h1>
          <p className="pro-hero-subtitle mt-3 text-lg text-zinc-200 sm:text-xl">
            {heroContent.subtitle}
          </p>
          <p className="pro-hero-desc mt-5 max-w-xl text-base leading-relaxed text-zinc-400">
            {heroContent.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="pro-btn pro-btn-primary">
              Request a Quote
            </Link>
            <Link href="/portfolio" className="pro-btn pro-btn-secondary">
              View Portfolio
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
