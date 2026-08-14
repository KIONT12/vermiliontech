"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CTASection() {
  return (
    <section className="tech-page-section relative overflow-hidden py-20 lg:py-28">
      <div className="tech-section-bg" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="tech-cta-frame relative px-8 py-14 text-center lg:px-16">
            <span className="tech-corner tech-corner--tl" aria-hidden />
            <span className="tech-corner tech-corner--tr" aria-hidden />
            <span className="tech-corner tech-corner--bl" aria-hidden />
            <span className="tech-corner tech-corner--br" aria-hidden />

            <span className="tech-kicker">Initialize project</span>
            <h2 className="tech-section-title mt-4">
              Ready to launch something <span className="tech-fire-text">powerful</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
              Tell us about your vision. We&apos;ll respond with a clear plan,
              timeline, and quote.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="tech-btn-primary">
                Start a Project
              </Link>
              <Link href="/portfolio" className="tech-btn-ghost">
                View Portfolio
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
