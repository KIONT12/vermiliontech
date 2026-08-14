import type { Metadata } from "next";
import OpeningSection from "@/components/ui/OpeningSection";
import ProjectGrid from "@/components/portfolio/ProjectGrid";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore web development projects by VermilionTech — business websites, landing pages, e-commerce, and custom solutions.",
};

export default function PortfolioPage() {
  return (
    <>
      <OpeningSection
        compact
        label="Portfolio"
        title="Client Work"
        highlight="Work"
        description="Live websites and applications we've built for businesses across sports, music, retail, and services."
      />
      <ProjectGrid />
    </>
  );
}
