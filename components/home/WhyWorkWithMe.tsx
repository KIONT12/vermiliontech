import { whyWorkWithMe } from "@/lib/data/services";
import { getIcon } from "@/components/ui/Icons";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function WhyWorkWithMe() {
  return (
    <section className="studio-page-section relative overflow-hidden border-t border-white/5 py-20 lg:py-28">
      <div className="studio-section-bg studio-section-bg--alt" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="studio-section-head mb-12">
          <span className="studio-kicker">Why work with me</span>
          <h2 className="studio-section-title">
            One partner. <span className="studio-accent-text">Full creative control.</span>
          </h2>
          <p className="studio-section-desc mt-3 max-w-2xl">
            You work directly with the person designing and building your product —
            no hand-offs, no generic solutions, just focused work that ships.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {whyWorkWithMe.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.05}>
              <div className="studio-mini-card h-full">
                <div className="studio-feature-icon mb-3 text-red-400">
                  {getIcon(item.icon, "h-5 w-5")}
                </div>
                <h3 className="text-sm font-semibold text-white">{item.title}</h3>
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
