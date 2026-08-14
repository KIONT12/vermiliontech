import { whyWorkWithMe } from "@/lib/data/services";
import { getIcon } from "@/components/ui/Icons";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function WhyWorkWithMe() {
  return (
    <section className="tech-page-section relative overflow-hidden border-t border-red-500/10 py-20 lg:py-28">
      <div className="tech-section-bg tech-section-bg--alt" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="tech-section-head mb-12">
          <span className="tech-kicker">Why VermilionTech</span>
          <h2 className="tech-section-title">
            Precision builds. <span className="tech-fire-text">Real results.</span>
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {whyWorkWithMe.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.05}>
              <div className="tech-mini-card h-full p-5">
                <div className="tech-bento-icon mb-3 text-red-400">
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
