import { whyWorkWithMe } from "@/lib/data/services";
import { getIcon } from "@/components/ui/Icons";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function WhyWorkWithMe() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Why Work With Me"
          title="Built for Results"
          description="Every project is crafted with attention to detail, performance, and your business goals."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {whyWorkWithMe.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div className="group rounded-xl border border-red-500/10 bg-[#111827]/80 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-red-500/25 card-hover">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red-500/20 to-red-500/10 text-red-400 transition-transform group-hover:scale-110">
                  {getIcon(item.icon, "h-7 w-7")}
                </div>
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
