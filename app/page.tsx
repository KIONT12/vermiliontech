import HomeMain from "@/components/home/HomeMain";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyWorkWithMe from "@/components/home/WhyWorkWithMe";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HomeMain />
      <ServicesPreview />
      <WhyWorkWithMe />
      <CTASection />
    </>
  );
}
