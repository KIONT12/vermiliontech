import Link from "next/link";
import { servicePreviews } from "@/lib/data/services";
import { getIcon } from "@/components/ui/Icons";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ServicesPreview() {
  return (
    <section className="relative border-y border-red-500/10 bg-[#0a0e18]/80 py-24 lg:py-32">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Services"
          title="What I Build"
          description="From simple business sites to custom digital solutions — tailored to your goals."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicePreviews.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.08}>
              <Link
                href="/services"
                className="group flex h-full flex-col rounded-xl border border-red-500/10 bg-[#111827] p-6 transition-all duration-300 hover:border-red-500/30 hover:bg-[#1a2332] card-hover"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10 text-red-400 transition-colors group-hover:bg-red-500/20">
                  {getIcon(service.icon, "h-6 w-6")}
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-red-300 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                  {service.description}
                </p>
                <span className="mt-4 text-sm font-medium text-red-400 opacity-0 transition-opacity group-hover:opacity-100">
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
