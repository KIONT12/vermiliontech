import Button from "@/components/ui/Button";
import OpeningSection from "@/components/ui/OpeningSection";
import { heroContent } from "@/lib/data/brand";

export default function Hero() {
  return (
    <OpeningSection
      fullHeight
      badge={heroContent.badge}
      title={heroContent.title}
      highlight={heroContent.highlight}
      description={heroContent.description}
    >
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button href="/portfolio">Explore Our Work</Button>
        <Button href="/contact" variant="outline">
          Start a Project
        </Button>
      </div>
    </OpeningSection>
  );
}
