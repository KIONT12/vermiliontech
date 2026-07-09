"use client";

import { useEffect, useRef, useState } from "react";

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

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowIframe(true);
          observer.disconnect();
        }
      },
      { rootMargin: "120px", threshold: 0.1 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 top-[3.25rem] overflow-hidden bg-[#0f0f12]">
      {showIframe ? (
        <iframe
          src={src}
          title={title}
          loading="lazy"
          width={width}
          height={height}
          allow={
            previewMute ? "autoplay 'none'; microphone 'none'" : undefined
          }
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
