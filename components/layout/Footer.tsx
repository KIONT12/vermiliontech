import Image from "next/image";
import Link from "next/link";
import BrandName from "@/components/ui/BrandName";
import { GitHubIcon } from "@/components/ui/Icons";
import { brand } from "@/lib/data/brand";

const footerLinks = {
  navigation: [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services", label: "Business Websites" },
    { href: "/services", label: "Landing Pages" },
    { href: "/services", label: "E-Commerce" },
    { href: "/services", label: "Custom Solutions" },
  ],
};

export default function Footer() {
  return (
    <footer className="accent-border border-t bg-[#0a0e18]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-red-500/30">
                <Image
                  src="/vermiliontech-logo.png"
                  alt="VermilionTech"
                  fill
                  className="object-cover"
                />
              </span>
              <BrandName size="md" />
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400">
              {brand.description} Founded by {brand.founder}.
            </p>
            <a
              href={`mailto:${brand.email}`}
              className="mt-4 inline-block text-sm accent-text transition-colors hover:text-red-300"
            >
              {brand.email}
            </a>
            <a
              href={brand.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-red-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-red-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-8 sm:flex-row">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <p className="text-sm text-zinc-500">
            Built with Next.js, React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
