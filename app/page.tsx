import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyWorkWithMe from "@/components/home/WhyWorkWithMe";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <ServicesPreview />
      <WhyWorkWithMe />
      <CTASection />
    </>
  );
}
