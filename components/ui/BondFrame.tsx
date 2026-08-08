"use client";

import { ReactNode } from "react";

interface BondFrameProps {
  children: ReactNode;
  className?: string;
  label?: string;
}

export default function BondFrame({
  children,
  className = "",
  label,
}: BondFrameProps) {
  return (
    <div className={`bond-frame bond-frame-holo relative ${className}`}>
      <div className="bond-frame-scan" aria-hidden />
      <div className="bond-holo-border" aria-hidden />
      <span className="bond-hud-corner bond-hud-corner--tl" />
      <span className="bond-hud-corner bond-hud-corner--tr" />
      <span className="bond-hud-corner bond-hud-corner--bl" />
      <span className="bond-hud-corner bond-hud-corner--br" />
      <span className="bond-hud-tick bond-hud-tick--top" />
      <span className="bond-hud-tick bond-hud-tick--bottom" />
      {label && (
        <span className="bond-frame-label font-mono text-[10px] uppercase tracking-[0.2em] text-red-400/80">
          {label}
        </span>
      )}
      {children}
    </div>
  );
}
