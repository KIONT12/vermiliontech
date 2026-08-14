import { milestones } from "@/lib/data/about";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Timeline() {
  return (
    <ScrollReveal>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {milestones.map((item, i) => (
          <ScrollReveal key={item.year + item.title} delay={i * 0.08}>
            <article className="rounded-xl border border-red-500/10 bg-[#111827] p-5">
              <span className="font-mono text-xs font-medium uppercase tracking-wider text-red-400">
                {item.year}
              </span>
              <h4 className="mt-2 font-semibold text-white">{item.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.description}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </ScrollReveal>
  );
}
