import BondHero from "@/components/home/BondHero";
import BondFeatures from "@/components/home/BondFeatures";
import FeaturedProjects from "@/components/home/FeaturedProjects";

export default function HomeMain() {
  return (
    <div className="home-tech-fire relative">
      <BondHero />
      <div className="tech-flow-wrap relative z-10 px-4 pb-20 sm:px-6 lg:px-8">
        <div className="tech-deck mx-auto max-w-6xl">
          <div className="tech-deck-glow" aria-hidden />
          <BondFeatures />
          <div className="tech-deck-divider" />
          <FeaturedProjects unifiedTheme />
        </div>
      </div>
    </div>
  );
}
