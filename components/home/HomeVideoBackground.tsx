"use client";

import { useCallback, useEffect, useRef } from "react";
import { usePerformanceProfile } from "@/lib/hooks/usePerformanceProfile";

const VIDEO_SRC = "/backgrounds/live-bg.mp4";

function playVideo(video: HTMLVideoElement) {
  const start = () => {
    video.play().catch(() => {});
  };

  if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
    start();
    return;
  }

  video.addEventListener("loadeddata", start, { once: true });
  video.addEventListener("canplay", start, { once: true });
}

export default function HomeVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { reducedMotion, saveData } = usePerformanceProfile();

  const useStaticBackground = reducedMotion || saveData;

  const startPlayback = useCallback(() => {
    const video = videoRef.current;
    if (!video || useStaticBackground) return;
    playVideo(video);
  }, [useStaticBackground]);

  useEffect(() => {
    if (useStaticBackground) return;

    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    startPlayback();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startPlayback();
        } else {
          video.pause();
        }
      },
      { threshold: 0.05, rootMargin: "100px 0px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [useStaticBackground, startPlayback]);

  return (
    <div
      ref={containerRef}
      className={`home-video-bg ${useStaticBackground ? "home-video-bg--static" : ""}`}
    >
      {!useStaticBackground && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="home-video-bg__media"
          src={VIDEO_SRC}
          onLoadedData={startPlayback}
          onCanPlay={startPlayback}
        />
      )}
      <div className="home-video-bg__overlay" aria-hidden />
      <div className="home-video-bg__header-mask" aria-hidden />
      <div className="home-video-bg__watermark-mask" aria-hidden />
    </div>
  );
}
