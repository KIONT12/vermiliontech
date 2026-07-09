import { timeline } from "@/lib/data/about";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Timeline() {
  return (
    <ScrollReveal>
      <div>
        <h3 className="text-xl font-bold text-white">Project Timeline</h3>
        <div className="relative mt-8">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-red-500 via-red-500 to-transparent" />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year + item.title} delay={i * 0.1}>
                <div className="relative flex gap-6 pl-8">
                  <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-red-500 bg-[#0d1117]">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                  </span>
                  <div>
                    <span className="text-sm font-semibold text-red-400">
                      {item.year}
                    </span>
                    <h4 className="mt-1 font-semibold text-white">{item.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
