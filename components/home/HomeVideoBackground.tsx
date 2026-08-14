"use client";

import { useCallback, useEffect, useRef } from "react";
import { usePerformanceProfile } from "@/lib/hooks/usePerformanceProfile";

const VIDEO_SRC = "/backgrounds/live-bg.mp4";

export default function HomeVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { allowHeroVideo, isTablet, isMobile } = usePerformanceProfile();

  const startPlayback = useCallback(() => {
    const video = videoRef.current;
    if (!video || !allowHeroVideo) return;

    video.muted = true;
    video.setAttribute("muted", "");

    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => {});
    }
  }, [allowHeroVideo]);

  useEffect(() => {
    if (!allowHeroVideo) return;

    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    startPlayback();

    const retryTimers = [120, 400, 1000, 2500].map((delay) =>
      window.setTimeout(startPlayback, delay),
    );

    const onFirstInteraction = () => startPlayback();
    document.addEventListener("touchstart", onFirstInteraction, {
      passive: true,
    });
    document.addEventListener("click", onFirstInteraction);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startPlayback();
        } else {
          video.pause();
        }
      },
      { threshold: 0.01, rootMargin: "120px 0px" },
    );

    observer.observe(container);

    const onVisibility = () => {
      if (!document.hidden) {
        startPlayback();
      }
    };

    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      retryTimers.forEach((timer) => window.clearTimeout(timer));
      document.removeEventListener("touchstart", onFirstInteraction);
      document.removeEventListener("click", onFirstInteraction);
      document.removeEventListener("visibilitychange", onVisibility);
      observer.disconnect();
    };
  }, [allowHeroVideo, startPlayback]);

  return (
    <div
      ref={containerRef}
      className={`home-video-bg ${!allowHeroVideo ? "home-video-bg--static" : ""}${
        isTablet ? " home-video-bg--tablet" : ""
      }${isMobile ? " home-video-bg--mobile" : ""}`}
    >
      {allowHeroVideo && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          className="home-video-bg__media"
          src={VIDEO_SRC}
          onLoadedData={startPlayback}
          onCanPlay={startPlayback}
          onCanPlayThrough={startPlayback}
        />
      )}
      <div className="home-video-bg__overlay" aria-hidden />
      <div className="home-video-bg__header-mask" aria-hidden />
      <div className="home-video-bg__pollo-cover" aria-hidden />
    </div>
  );
}
