"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CTASection() {
  return (
    <section className="pro-section border-t border-white/[0.06] bg-[#0d1117]">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <ScrollReveal>
          <div className="pro-cta">
            <p className="pro-label">Get started</p>
            <h2 className="pro-section-title mt-3 max-w-xl">
              Ready to discuss your project?
            </h2>
            <p className="pro-section-desc mt-4 max-w-lg">
              Share your requirements and we&apos;ll respond with a clear scope,
              timeline, and quote. No obligation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="pro-btn pro-btn-primary">
                Contact us
              </Link>
              <Link href="/portfolio" className="pro-btn pro-btn-secondary">
                View portfolio
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
