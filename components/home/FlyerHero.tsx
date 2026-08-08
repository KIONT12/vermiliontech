"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BrandName from "@/components/ui/BrandName";
import { heroContent } from "@/lib/data/brand";

const perks = [
  "Fast turnaround",
  "Mobile-first design",
  "Live client sites",
  "Custom builds",
];

export default function FlyerHero() {
  return (
    <section className="flyer-hero relative min-h-screen overflow-hidden pt-24">
      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flyer-poster relative overflow-hidden"
        >
          <div className="flyer-top-band flex flex-wrap items-center justify-between gap-3 px-5 py-3 sm:px-8">
            <BrandName size="sm" />
            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/90 sm:text-xs">
              Web Design Studio
            </span>
          </div>

          <div className="relative px-5 py-10 sm:px-10 sm:py-14">
            <motion.span
              initial={{ opacity: 0, rotate: -8 }}
              animate={{ opacity: 1, rotate: -6 }}
              transition={{ delay: 0.15 }}
              className="flyer-stamp absolute right-5 top-5 sm:right-10 sm:top-8"
            >
              {heroContent.badge}
            </motion.span>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-red-400"
            >
              VermilionTech Presents
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flyer-headline max-w-4xl text-white"
            >
              <span className="block">We Build</span>
              <span className="block text-gradient">Websites</span>
              <span className="block">That Convert</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg"
            >
              {heroContent.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link href="/portfolio" className="btn-flyer-primary">
                View Portfolio
              </Link>
              <Link href="/contact" className="btn-flyer-outline">
                Start Your Project
              </Link>
            </motion.div>
          </div>

          <div className="flyer-ribbon">
            <span>Limited spots open — book your build today</span>
          </div>

          <div className="grid grid-cols-2 border-t-2 border-red-500/30 sm:grid-cols-4">
            {perks.map((perk, i) => (
              <motion.div
                key={perk}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                className="flyer-perk border-r border-red-500/20 px-4 py-5 last:border-r-0"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-400">
                  0{i + 1}
                </span>
                <p className="mt-1 text-xs font-semibold uppercase leading-snug text-zinc-200 sm:text-sm">
                  {perk}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flyer-tear" aria-hidden />
        </motion.div>
      </div>
    </section>
  );
}
