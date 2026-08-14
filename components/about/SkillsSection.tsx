"use client";

import { valueProps } from "@/lib/data/about";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getIcon } from "@/components/ui/Icons";

export default function SkillsSection() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {valueProps.map((item, i) => (
        <ScrollReveal key={item.title} delay={i * 0.06}>
          <article className="rounded-xl border border-red-500/10 bg-[#111827] p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-red-500/20 bg-red-500/10 text-red-400">
              {getIcon(item.icon, "h-5 w-5")}
            </div>
            <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.description}</p>
          </article>
        </ScrollReveal>
      ))}
    </div>
  );
}
