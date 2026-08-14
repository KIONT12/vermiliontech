"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  refreshLivePreviewActive,
  reportLivePreviewVisibility,
  subscribeLivePreview,
  unregisterLivePreview,
} from "@/lib/livePreviewManager";
import { usePerformanceProfile } from "@/lib/hooks/usePerformanceProfile";
import { livePreviewScale } from "@/lib/performanceProfile";

interface LazyLiveIframeProps {
  previewKey: string;
  src: string;
  title: string;
  width: number;
  height: number;
  scale: number;
  previewMute: boolean;
  fallbackSrc?: string;
}

export default function LazyLiveIframe({
  previewKey,
  src,
  title,
  width,
  height,
  scale,
  previewMute,
  fallbackSrc,
}: LazyLiveIframeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const { allowLivePreviews, isMobile, isTablet } = usePerformanceProfile();
  const effectiveScale = livePreviewScale(scale, { isMobile, isTablet });

  useEffect(() => {
    if (!allowLivePreviews) return;

    return subscribeLivePreview((active) => {
      setIsActive(active === previewKey);
    });
  }, [allowLivePreviews, previewKey]);

  useEffect(() => {
    if (!allowLivePreviews) return;

    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.isIntersecting ? entry.intersectionRatio : 0;
        reportLivePreviewVisibility(previewKey, ratio);
      },
      {
        rootMargin: "120px 0px",
        threshold: [0, 0.08, 0.15, 0.3, 0.5, 0.75, 1],
      },
    );

    observer.observe(node);

    const measure = () => {
      const rect = node.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const visibleHeight =
        Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
      const ratio = rect.height > 0 ? Math.max(0, visibleHeight / rect.height) : 0;
      reportLivePreviewVisibility(previewKey, ratio);
    };

    measure();
    window.addEventListener("resize", measure);
    refreshLivePreviewActive();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
      unregisterLivePreview(previewKey);
    };
  }, [allowLivePreviews, previewKey]);

  useEffect(() => {
    if (!allowLivePreviews || !isActive) {
      setShouldLoad(false);
      return;
    }

    setShouldLoad(true);
  }, [allowLivePreviews, isActive]);

  if (!allowLivePreviews) {
    if (fallbackSrc) {
      return (
        <Image
          src={fallbackSrc}
          alt=""
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      );
    }

    return <div className="absolute inset-0 top-[3.25rem] bg-[#0f0f12]" aria-hidden />;
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 top-[3.25rem] overflow-hidden bg-[#0f0f12]"
      style={{ contain: "strict" }}
    >
      {shouldLoad ? (
        <iframe
          src={src}
          title={title}
          width={width}
          height={height}
          allow={previewMute ? "autoplay 'none'; microphone 'none'" : undefined}
          className="pointer-events-none absolute left-1/2 top-0 border-0"
          style={{
            transform: `translate3d(-50%, 0, 0) scale(${effectiveScale})`,
            transformOrigin: "top center",
          }}
        />
      ) : fallbackSrc ? (
        <Image
          src={fallbackSrc}
          alt=""
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        <div className="absolute inset-0 bg-[#0f0f12]" aria-hidden />
      )}
    </div>
  );
}
