import BondHero from "@/components/home/BondHero";
import BondFeatures from "@/components/home/BondFeatures";
import FeaturedProjects from "@/components/home/FeaturedProjects";

export default function HomeMain() {
  return (
    <div className="home-studio relative">
      <BondHero />
      <div className="studio-flow relative z-10 px-4 pb-20 sm:px-6 lg:px-8">
        <div className="studio-panel mx-auto max-w-6xl">
          <BondFeatures />
          <div className="studio-divider" />
          <FeaturedProjects unifiedTheme />
        </div>
      </div>
    </div>
  );
}
