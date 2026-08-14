"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  reportLivePreviewVisibility,
  subscribeLivePreview,
  unregisterLivePreview,
} from "@/lib/livePreviewManager";
import { usePerformanceProfile } from "@/lib/hooks/usePerformanceProfile";

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
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const { allowLivePreviews } = usePerformanceProfile();

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
        setIsVisible(entry.isIntersecting && ratio >= 0.2);
        reportLivePreviewVisibility(previewKey, ratio);
      },
      { rootMargin: "48px 0px", threshold: [0, 0.2, 0.45, 0.7, 1] },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      unregisterLivePreview(previewKey);
    };
  }, [allowLivePreviews, previewKey]);

  useEffect(() => {
    if (!isVisible || !isActive) {
      setShouldLoad(false);
      return;
    }

    const timer = window.setTimeout(() => {
      setShouldLoad(true);
    }, 180);

    return () => window.clearTimeout(timer);
  }, [isVisible, isActive]);

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
          loading="lazy"
          width={width}
          height={height}
          allow={previewMute ? "autoplay 'none'; microphone 'none'" : undefined}
          className="pointer-events-none absolute left-1/2 top-0 border-0"
          style={{
            transform: `translate3d(-50%, 0, 0) scale(${scale})`,
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
