"use client";

import { useEffect, useRef } from "react";
import { usePerformanceProfile } from "@/lib/hooks/usePerformanceProfile";

const VIDEO_SRC = "/backgrounds/live-bg.mp4";

export default function HomeVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { reducedMotion, saveData, prefersLightEffects } = usePerformanceProfile();

  const useStaticBackground = reducedMotion || saveData;

  useEffect(() => {
    if (useStaticBackground) return;

    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [useStaticBackground]);

  return (
    <div
      ref={containerRef}
      className={`home-video-bg ${useStaticBackground ? "home-video-bg--static" : ""}`}
    >
      {!useStaticBackground && (
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          preload={prefersLightEffects ? "metadata" : "auto"}
          className="home-video-bg__media"
          src={VIDEO_SRC}
        />
      )}
      <div className="home-video-bg__overlay" aria-hidden />
      <div className="home-video-bg__header-mask" aria-hidden />
    </div>
  );
}
