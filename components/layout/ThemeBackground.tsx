"use client";

import { usePathname } from "next/navigation";

export default function ThemeBackground() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden theme-bg theme-bg--minimal"
    >
      {!isHome && (
        <div className="absolute inset-0 grid-bg opacity-12" />
      )}
    </div>
  );
}
