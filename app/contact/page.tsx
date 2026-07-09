import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/contact/ContactForm";
import OpeningSection from "@/components/ui/OpeningSection";
import ScrollReveal from "@/components/ui/ScrollReveal";

import { brand } from "@/lib/data/brand";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact VermilionTech for website development projects. Request a quote or discuss your next website.",
};

export default function ContactPage() {
  return (
    <>
      <OpeningSection
        label="Contact"
        title="Let's Build Something Great"
        highlight="Something Great"
        description="Tell us about your project — we'll respond within 24–48 hours with next steps."
      />

      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5">
            <ScrollReveal className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    Let&apos;s build something great
                  </h2>
                  <p className="mt-3 leading-relaxed text-zinc-400">
                    Whether you need a simple business website or a custom digital
                    solution, I&apos;m here to help bring your vision to life.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="rounded-xl border border-red-500/10 bg-[#111827]/90 p-6 backdrop-blur-sm">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
                      Email
                    </h3>
                    <a
                      href={`mailto:${brand.email}`}
                      className="mt-2 block text-red-400 transition-colors hover:text-red-300"
                    >
                      {brand.email}
                    </a>
                  </div>

                  <div className="rounded-xl border border-red-500/10 bg-[#111827]/90 p-6 backdrop-blur-sm">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
                      Response Time
                    </h3>
                    <p className="mt-2 text-zinc-400">Within 24–48 hours</p>
                  </div>

                  <div className="rounded-xl border border-red-500/10 bg-[#111827]/90 p-6 backdrop-blur-sm">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
                      Availability
                    </h3>
                    <p className="mt-2 flex items-center gap-2 text-zinc-400">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-red-400" />
                      </span>
                      Open to new projects
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="lg:col-span-3">
              <div className="rounded-2xl border border-red-500/10 bg-[#111827]/90 p-8 backdrop-blur-sm lg:p-10">
                <Suspense
                  fallback={
                    <div className="py-12 text-center text-sm text-zinc-500">
                      Loading form...
                    </div>
                  }
                >
                  <ContactForm />
                </Suspense>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
