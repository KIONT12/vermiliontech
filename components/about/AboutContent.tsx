"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { aboutContent, skills, techStack, timeline } from "@/lib/data/about";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import OpeningSection from "@/components/ui/OpeningSection";
import Button from "@/components/ui/Button";

export default function AboutContent() {
  return (
    <>
      <OpeningSection
        label="About Us"
        title="About VermilionTech"
        highlight="VermilionTech"
        description={aboutContent.headline}
      />

      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <ScrollReveal>
              <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-2xl border border-red-500/20 bg-gradient-to-br from-[#111827] to-[#0a1628] glow-accent">
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
                    Founded by Kiont Jones
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="space-y-6">
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
            label="Skills"
            title="What I Bring to the Table"
            description="A blend of technical expertise and creative problem-solving."
          />

          <div className="mx-auto max-w-3xl space-y-6">
            {skills.map((skill, i) => (
              <ScrollReveal key={skill.name} delay={i * 0.05}>
                <div>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="font-medium text-white">{skill.name}</span>
                    <span className="text-red-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-red-600 to-red-400"
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            label="Tech Stack"
            title="Technologies I Use"
            description="Modern tools and frameworks for building fast, scalable websites."
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
            label="Timeline"
            title="My Journey"
            description="From professional athlete to web developer — a path driven by discipline and passion."
          />

          <div className="relative mx-auto max-w-2xl">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-red-500/50 via-red-500/30 to-transparent sm:left-1/2" />

            {timeline.map((item, i) => (
              <ScrollReveal key={item.year + item.title} delay={i * 0.1}>
                <div
                  className={`relative mb-12 flex items-start gap-8 sm:gap-0 ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  <div className="hidden flex-1 sm:block" />
                  <div className="absolute left-4 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-red-500 bg-[#0d1117] sm:left-1/2">
                    <div className="h-2 w-2 rounded-full bg-red-400" />
                  </div>
                  <div className="ml-12 flex-1 sm:ml-0">
                    <div className="rounded-xl border border-red-500/10 bg-[#111827] p-6">
                      <span className="text-sm font-semibold text-red-400">
                        {item.year}
                      </span>
                      <h3 className="mt-1 text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
