"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import BrandName from "@/components/ui/BrandName";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  const mobileMenu =
    mounted &&
    createPortal(
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="absolute inset-0 bg-[#0d1117]" aria-hidden />

            <div className="relative flex h-full flex-col px-6 pb-10 pt-24">
              <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-6">
                <BrandName size="md" />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={closeMobile}
                  className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700 bg-[#111827] text-white"
                >
                  <span className="absolute block h-0.5 w-5 rotate-45 bg-white" />
                  <span className="absolute block h-0.5 w-5 -rotate-45 bg-white" />
                </button>
              </div>

              <nav className="flex flex-1 flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 + i * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMobile}
                      className="block rounded-lg px-3 py-4 text-xl font-medium text-zinc-200 transition-colors hover:bg-white/5 hover:text-red-400"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <Link
                href="/contact"
                onClick={closeMobile}
                className="btn-primary mt-6 block rounded-lg px-6 py-3.5 text-center text-base font-semibold"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body,
    );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          mobileOpen
            ? "border-b border-white/10 bg-[#0d1117] md:bg-transparent"
            : scrolled
              ? "border-b accent-border bg-[#0d1117]/90 shadow-lg shadow-black/20 backdrop-blur-lg"
              : "bg-[#0d1117]/80 backdrop-blur-md md:bg-[#0d1117]/55 md:backdrop-blur-sm"
        }`}
      >
        <div
          className="pointer-events-none absolute top-0 right-0 z-[1] h-full w-44 bg-gradient-to-l from-[#0d1117] via-[#0d1117]/90 to-transparent"
          aria-hidden
        />
        <nav className="relative z-[2] mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="group flex items-center gap-3" onClick={closeMobile}>
            <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-red-500/30 transition-transform group-hover:scale-105">
              <Image
                src="/vermiliontech-logo.png"
                alt="VermilionTech"
                fill
                className="object-cover"
              />
            </span>
            <div className="hidden flex-col sm:flex">
              <BrandName size="md" />
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                Digital Studio
              </span>
            </div>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-red-500/10 hover:text-red-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="btn-primary hidden rounded-lg px-5 py-2.5 text-sm font-semibold md:inline-block"
          >
            Start a Project
          </Link>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700 bg-[#0d1117] md:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-white" />
              <span className="block h-0.5 w-5 bg-white" />
              <span className="block h-0.5 w-5 bg-white" />
            </div>
          </button>
        </nav>
      </header>

      {mobileMenu}
    </>
  );
}
