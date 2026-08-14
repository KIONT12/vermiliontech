"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const { allowHeroVideo, isTablet } = usePerformanceProfile();

  const startPlayback = useCallback(() => {
    const video = videoRef.current;
    if (!video || !allowHeroVideo || !shouldLoadVideo) return;
    playVideo(video);
  }, [allowHeroVideo, shouldLoadVideo]);

  useEffect(() => {
    if (!allowHeroVideo) return;

    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.05, rootMargin: "100px 0px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [allowHeroVideo]);

  useEffect(() => {
    if (!allowHeroVideo || !shouldLoadVideo) return;

    const video = videoRef.current;
    if (!video) return;

    if (!video.getAttribute("src")) {
      video.src = VIDEO_SRC;
      video.load();
    }

    startPlayback();
  }, [allowHeroVideo, shouldLoadVideo, startPlayback]);

  return (
    <div
      ref={containerRef}
      className={`home-video-bg ${!allowHeroVideo ? "home-video-bg--static" : ""}${
        isTablet ? " home-video-bg--tablet" : ""
      }`}
    >
      {allowHeroVideo && shouldLoadVideo && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="home-video-bg__media"
          onLoadedData={startPlayback}
          onCanPlay={startPlayback}
        />
      )}
      <div className="home-video-bg__overlay" aria-hidden />
      <div className="home-video-bg__header-mask" aria-hidden />
      <div className="home-video-bg__pollo-cover" aria-hidden />
    </div>
  );
}
