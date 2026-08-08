"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HomeBondAtmosphere from "@/components/home/HomeBondAtmosphere";
import { heroContent } from "@/lib/data/brand";

function renderTitle() {
  const { title, highlight } = heroContent;
  const index = title.indexOf(highlight);
  if (index === -1) return title;

  return (
    <>
      {title.slice(0, index)}
      <span className="text-gradient">{highlight}</span>
      {title.slice(index + highlight.length)}
    </>
  );
}

const trustPoints = ["4+ live client sites", "Next.js & React", "Mobile-first builds"];

export default function BondHero() {
  return (
    <section className="unified-hero relative min-h-[92vh] overflow-hidden pt-24">
      <HomeBondAtmosphere />
      <div className="relative z-[1] flex min-h-[calc(92vh-6rem)] items-center pb-12">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="hero-pro-panel max-w-2xl"
          >
            <p className="hero-eyebrow">{heroContent.badge}</p>
            <h1 className="unified-headline mt-4 text-white">{renderTitle()}</h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              {heroContent.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/portfolio" className="unified-btn-primary">
                View Portfolio
              </Link>
              <Link href="/contact" className="unified-btn-secondary">
                Start a Project
              </Link>
            </div>
            <ul className="hero-trust">
              {trustPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
