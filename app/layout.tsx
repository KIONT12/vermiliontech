import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Sora } from "next/font/google";
import ThemeBackground from "@/components/layout/ThemeBackground";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { brand } from "@/lib/data/brand";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0d1117",
};

export const metadata: Metadata = {
  title: {
    default: `${brand.name} | Professional Web Development`,
    template: `%s | ${brand.name}`,
  },
  description: brand.description,
  keywords: [
    "VermilionTech",
    "web development",
    "website design",
    "Next.js developer",
    "business websites",
    "landing pages",
    "digital solutions",
  ],
  authors: [{ name: brand.founder, url: `mailto:${brand.email}` }],
  openGraph: {
    title: `${brand.name} | Professional Web Development`,
    description: brand.description,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${jetbrainsMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#0d1117] text-zinc-100 antialiased">
        <ThemeBackground />
        <Navbar />
        <main className="relative z-10 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
