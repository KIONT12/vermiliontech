import Link from "next/link";
import { servicePreviews } from "@/lib/data/services";
import { getIcon } from "@/components/ui/Icons";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ServicesPreview() {
  return (
    <section className="pro-section border-t border-white/[0.06] bg-[#0d1117]">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="pro-section-header max-w-2xl">
          <p className="pro-label">Services</p>
          <h2 className="pro-section-title mt-3">How we can help</h2>
          <p className="pro-section-desc mt-3">
            Structured services for businesses at every stage—from a professional
            web presence to fully custom software development.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicePreviews.slice(0, 3).map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.05}>
              <Link href="/services" className="pro-service-card group block h-full">
                <div className="pro-capability-icon text-red-500">
                  {getIcon(service.icon, "h-5 w-5")}
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {service.description}
                </p>
                <span className="mt-5 inline-block text-sm text-zinc-400 transition-colors group-hover:text-white">
                  View details →
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
