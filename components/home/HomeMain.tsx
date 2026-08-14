import BondHero from "@/components/home/BondHero";
import BondFeatures from "@/components/home/BondFeatures";
import FeaturedProjects from "@/components/home/FeaturedProjects";

export default function HomeMain() {
  return (
    <div className="home-pro">
      <BondHero />
      <BondFeatures />
      <FeaturedProjects proTheme />
    </div>
  );
}
