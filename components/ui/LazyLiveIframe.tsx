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
  /** Load iframe on mobile when no static preview fallback exists. */
  forceLive?: boolean;
}

export default function LazyLiveIframe({
  src,
  title,
  width,
  height,
  scale,
  previewMute,
  forceLive = false,
}: LazyLiveIframeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showIframe, setShowIframe] = useState(false);
  const { prefersLightEffects } = usePerformanceProfile();
  const skipIframe = prefersLightEffects && !forceLive;

  useEffect(() => {
    if (skipIframe) return;

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
  }, [skipIframe]);

  if (skipIframe) {
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
