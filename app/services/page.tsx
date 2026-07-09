import type { Metadata } from "next";
import { services } from "@/lib/data/services";
import ServiceCard from "@/components/services/ServiceCard";
import OpeningSection from "@/components/ui/OpeningSection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

import { brand } from "@/lib/data/brand";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website development services by VermilionTech — starter websites, business sites, and custom digital solutions.",
};

export default function ServicesPage() {
  return (
    <>
      <OpeningSection
        label="Services"
        title="Services That Scale With You"
        highlight="Scale With You"
        description="Clear packages for every stage — from launch-ready sites to fully custom digital products."
      />

      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            label="Pricing"
            title="Choose Your Package"
            description="Not sure which option fits? Contact me for a free consultation."
          />

          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 0.1}>
                <ServiceCard service={service} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
