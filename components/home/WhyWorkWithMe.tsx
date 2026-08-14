import { whyWorkWithMe } from "@/lib/data/services";
import { getIcon } from "@/components/ui/Icons";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function WhyWorkWithMe() {
  return (
    <section className="pro-section border-t border-white/[0.06] bg-[#0a0d12]">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="pro-section-header max-w-2xl">
          <p className="pro-label">Why VermilionTech</p>
          <h2 className="pro-section-title mt-3">A partner you can rely on</h2>
          <p className="pro-section-desc mt-3">
            Direct communication, transparent process, and work that meets professional
            standards from first draft to final deployment.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {whyWorkWithMe.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.04}>
              <div className="pro-service-card h-full">
                <div className="pro-capability-icon text-red-500">
                  {getIcon(item.icon, "h-5 w-5")}
                </div>
                <h3 className="mt-4 text-sm font-semibold text-white">{item.title}</h3>
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
