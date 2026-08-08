"use client";

import { useEffect, useRef, useState } from "react";
import { usePerformanceProfile } from "@/lib/hooks/usePerformanceProfile";

interface LazyLiveIframeProps {
  src: string;
  title: string;
  width: number;
  height: number;
  scale: number;
  previewMute: boolean;
}

export default function LazyLiveIframe({
  src,
  title,
  width,
  height,
  scale,
  previewMute,
}: LazyLiveIframeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showIframe, setShowIframe] = useState(false);
  const { prefersLightEffects } = usePerformanceProfile();

  useEffect(() => {
    if (prefersLightEffects) return;

    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowIframe(entry.isIntersecting);
      },
      { rootMargin: "80px", threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [prefersLightEffects]);

  if (prefersLightEffects) {
    return <div className="absolute inset-0 top-[3.25rem] bg-[#0f0f12]" aria-hidden />;
  }

  return (
    <div ref={containerRef} className="absolute inset-0 top-[3.25rem] overflow-hidden bg-[#0f0f12]">
      {showIframe ? (
        <iframe
          src={src}
          title={title}
          loading="lazy"
          width={width}
          height={height}
          allow={previewMute ? "autoplay 'none'; microphone 'none'" : undefined}
          className="pointer-events-none absolute left-1/2 top-0 border-0"
          style={{
            transform: `translateX(-50%) scale(${scale})`,
            transformOrigin: "top center",
          }}
        />
      ) : (
        <div className="absolute inset-0 bg-[#0f0f12]" />
      )}
    </div>
  );
}
