"use client";

import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CTASection() {
  return (
    <section className="home-section-pro relative border-t border-white/[0.06] py-20 lg:py-28">
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="pro-cta rounded-2xl px-8 py-14 text-center lg:px-16">
            <p className="text-sm font-medium uppercase tracking-wider text-red-400/90">
              Get started
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Ready to build your next website?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
              Tell us about your project. We&apos;ll respond with a clear plan,
              timeline, and quote — no pressure.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contact">Start a Project</Button>
              <Button href="/portfolio" variant="outline">
                View Portfolio
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
