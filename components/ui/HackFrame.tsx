"use client";

import { ReactNode } from "react";

interface HackFrameProps {
  children: ReactNode;
  className?: string;
  label?: string;
  prompt?: string;
}

export default function HackFrame({
  children,
  className = "",
  label,
  prompt,
}: HackFrameProps) {
  return (
    <div className={`hack-frame relative ${className}`}>
      <div className="hack-frame-scan" aria-hidden />
      <div className="hack-frame-bar flex items-center justify-between gap-3 px-4 py-2">
        <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-red-400/90">
          <span className="bond-pulse-dot" />
          {label || "VT-SHELL"}
        </span>
        <span className="font-mono text-[10px] text-zinc-600">ENCRYPTED</span>
      </div>
      <div className="relative p-6 sm:p-8">
        <span className="bond-hud-corner bond-hud-corner--tl" />
        <span className="bond-hud-corner bond-hud-corner--tr" />
        <span className="bond-hud-corner bond-hud-corner--bl" />
        <span className="bond-hud-corner bond-hud-corner--br" />
        {children}
        {prompt && (
          <p className="hack-prompt mt-6 font-mono text-[11px] text-emerald-500/70">
            <span className="text-red-400/80">root@vt</span>
            <span className="text-zinc-600">:</span>
            <span className="text-zinc-500">~</span>
            <span className="text-zinc-600">$</span> {prompt}
            <span className="hack-cursor" />
          </p>
        )}
      </div>
    </div>
  );
}
