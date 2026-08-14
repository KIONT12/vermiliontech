"use client";

import Image from "next/image";
import { aboutContent, milestones, techStack, valueProps } from "@/lib/data/about";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import OpeningSection from "@/components/ui/OpeningSection";
import Button from "@/components/ui/Button";
import { getIcon } from "@/components/ui/Icons";

export default function AboutContent() {
  return (
    <>
      <OpeningSection
        label="About"
        title="About VermilionTech"
        highlight="VermilionTech"
        description={aboutContent.headline}
      />

      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <ScrollReveal>
              <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-2xl border border-red-500/20 bg-gradient-to-br from-[#111827] to-[#0a1628] glow-accent lg:sticky lg:top-28">
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <Image
                    src="/vermiliontech-logo.png"
                    alt="VermilionTech"
                    width={280}
                    height={280}
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0d1117] to-transparent p-8">
                  <p className="text-center text-sm font-medium text-zinc-400">
                    Founded by {aboutContent.founderName}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="space-y-6">
                <p className="text-sm font-medium uppercase tracking-wider text-red-400">
                  Meet the founder
                </p>
                {aboutContent.paragraphs.map((paragraph, i) => (
                  <p key={i} className="text-lg leading-relaxed text-zinc-400">
                    {paragraph}
                  </p>
                ))}
                <Button href="/contact">Let&apos;s Work Together</Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="border-y border-red-500/10 bg-[#0a0e18] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            label="Working with VermilionTech"
            title="What you can expect"
            description="A clear, hands-on approach—not skill bars or buzzwords, but how we actually work together."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {valueProps.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.06}>
                <article className="h-full rounded-xl border border-red-500/10 bg-[#111827] p-6 transition-colors hover:border-red-500/25">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-red-500/20 bg-red-500/10 text-red-400">
                    {getIcon(item.icon, "h-5 w-5")}
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {item.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            label="Tech stack"
            title="Technologies we use"
            description="Modern, proven tools for fast and maintainable builds."
          />

          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-red-500/20 bg-[#111827] px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-red-500/40 hover:text-red-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-t border-red-500/10 bg-[#0a0e18] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            label="Background"
            title="How we got here"
            description="A short path from competitive sports to building digital products for businesses."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((item, i) => (
              <ScrollReveal key={item.year + item.title} delay={i * 0.08}>
                <article className="relative h-full rounded-xl border border-red-500/10 bg-[#111827] p-5">
                  <span className="font-mono text-xs font-medium uppercase tracking-wider text-red-400">
                    {item.year}
                  </span>
                  <h3 className="mt-2 text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {item.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
