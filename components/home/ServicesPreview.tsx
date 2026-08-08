import Link from "next/link";
import { servicePreviews } from "@/lib/data/services";
import { getIcon } from "@/components/ui/Icons";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ServicesPreview() {
  return (
    <section className="home-section-pro relative border-t border-white/[0.06] py-20 lg:py-28">
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Services"
          title="What we deliver"
          description="From business websites to custom digital products — scoped to your goals and timeline."
          centered={false}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {servicePreviews.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.06}>
              <Link
                href="/services"
                className="pro-card group flex h-full flex-col p-6"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-red-500/10 text-red-400">
                  {getIcon(service.icon, "h-5 w-5")}
                </div>
                <h3 className="text-base font-semibold text-white">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500">
                  {service.description}
                </p>
                <span className="mt-5 text-sm font-medium text-red-400/80 transition-colors group-hover:text-red-400">
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
