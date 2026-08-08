import { whyWorkWithMe } from "@/lib/data/services";
import { getIcon } from "@/components/ui/Icons";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function WhyWorkWithMe() {
  return (
    <section className="home-section-pro relative border-t border-white/[0.06] bg-[#0a0e14]/50 py-20 lg:py-28">
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Why VermilionTech"
          title="A partner, not just a developer"
          description="Direct communication, thoughtful execution, and sites you can be proud to share."
          centered={false}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {whyWorkWithMe.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.06}>
              <div className="pro-card p-5 text-left">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 text-red-400">
                  {getIcon(item.icon, "h-5 w-5")}
                </div>
                <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
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
