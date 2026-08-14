import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Kiont Jones, founder of VermilionTech—building custom websites, web apps, and software for businesses that need professional results.",
};

export default function AboutPage() {
  return <AboutContent />;
}
