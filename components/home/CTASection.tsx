"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CTASection() {
  return (
    <section className="studio-page-section relative overflow-hidden py-20 lg:py-28">
      <div className="studio-section-bg" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="studio-cta text-center">
            <span className="studio-kicker">Let&apos;s talk</span>
            <h2 className="studio-section-title mx-auto mt-4 max-w-2xl">
              Have an idea? <span className="studio-accent-text">Let&apos;s make it real.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
              Tell me what you&apos;re building — I&apos;ll reply with a clear plan,
              timeline, and quote. No pressure, just an honest conversation.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="studio-btn-primary">
                Get a Free Quote
              </Link>
              <Link href="/portfolio" className="studio-btn-secondary">
                Browse Portfolio
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
