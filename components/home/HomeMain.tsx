import BondHero from "@/components/home/BondHero";
import BondFeatures from "@/components/home/BondFeatures";
import FeaturedProjects from "@/components/home/FeaturedProjects";

export default function HomeMain() {
  return (
    <div className="home-unified relative">
      <BondHero />
      <div className="unified-deck-wrap relative z-10 px-4 pb-16 sm:px-6 lg:px-8">
        <div className="unified-deck mx-auto max-w-6xl">
          <BondFeatures />
          <div className="unified-deck-divider" />
          <FeaturedProjects unifiedTheme />
        </div>
      </div>
    </div>
  );
}
