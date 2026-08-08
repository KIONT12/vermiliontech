import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeBackground from "@/components/layout/ThemeBackground";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { brand } from "@/lib/data/brand";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${brand.name} | Modern Web Development Studio`,
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
    title: `${brand.name} | Modern Web Development Studio`,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
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
