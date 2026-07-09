import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Kiont Jones — professional athlete turned web developer building modern websites that drive business results.",
};

export default function AboutPage() {
  return <AboutContent />;
}
