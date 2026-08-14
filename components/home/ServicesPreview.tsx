import Link from "next/link";
import { servicePreviews } from "@/lib/data/services";
import { getIcon } from "@/components/ui/Icons";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ServicesPreview() {
  return (
    <section className="tech-page-section relative overflow-hidden py-20 lg:py-28">
      <div className="tech-section-bg" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="tech-section-head mb-12">
          <span className="tech-kicker">Services</span>
          <h2 className="tech-section-title">
            What we <span className="tech-fire-text">build</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-500">
            Business sites, landing pages, and custom digital products — scoped
            to your goals and timeline.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {servicePreviews.slice(0, 3).map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.06}>
              <Link href="/services" className="tech-service-card group block h-full p-6">
                <div className="tech-bento-icon mb-4 text-red-400">
                  {getIcon(service.icon, "h-5 w-5")}
                </div>
                <h3 className="text-base font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {service.description}
                </p>
                <span className="mt-5 inline-block font-mono text-xs uppercase tracking-wider text-red-400/80 transition-colors group-hover:text-red-400">
                  Explore →
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
