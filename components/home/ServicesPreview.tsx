import Link from "next/link";
import { servicePreviews } from "@/lib/data/services";
import { getIcon } from "@/components/ui/Icons";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ServicesPreview() {
  return (
    <section className="studio-page-section relative overflow-hidden py-20 lg:py-28">
      <div className="studio-section-bg" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="studio-section-head mb-12">
          <span className="studio-kicker">Services</span>
          <h2 className="studio-section-title">
            Built for <span className="studio-accent-text">your next move</span>
          </h2>
          <p className="studio-section-desc mt-3 max-w-2xl">
            Whether you need a high-converting website, a custom web app, or
            software tailored to how you work — I scope every project around your goals.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {servicePreviews.slice(0, 3).map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.06}>
              <Link href="/services" className="studio-service-card group block h-full">
                <div className="studio-feature-icon mb-4 text-red-400">
                  {getIcon(service.icon, "h-5 w-5")}
                </div>
                <h3 className="text-base font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {service.description}
                </p>
                <span className="mt-5 inline-block text-sm font-medium text-red-400/90 transition-colors group-hover:text-red-300">
                  Learn more →
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
