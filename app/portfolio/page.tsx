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
        label="Portfolio"
        title="Our Portfolio"
        highlight="Portfolio"
        description="A showcase of websites we've built for businesses ready to stand out online."
      />
      <ProjectGrid />
    </>
  );
}
