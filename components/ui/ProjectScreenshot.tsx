"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import LazyLiveIframe from "@/components/ui/LazyLiveIframe";
import { useMotionPreference } from "@/lib/hooks/useMotionPreference";
import { usePerformanceProfile } from "@/lib/hooks/usePerformanceProfile";

interface ProjectScreenshotProps {
  title: string;
  gradient: string;
  liveUrl?: string;
  previewImage?: string;
  previewVideo?: string;
  previewPoster?: string;
  livePreview?: boolean;
  previewMute?: boolean;
  previewScale?: number;
  previewViewportWidth?: number;
  previewViewportHeight?: number;
  variant?: "dark" | "light";
  className?: string;
}

function buildEmbedUrl(liveUrl: string, muted: boolean) {
  const url = new URL(liveUrl);
  if (muted) {
    url.searchParams.set("embed", "1");
    url.searchParams.set("mute", "1");
  }
  return url.toString();
}

function startVideoPlayback(video: HTMLVideoElement) {
  const play = () => {
    video.play().catch(() => {});
  };

  if (video.readyState >= 2) {
    play();
    return;
  }

  video.addEventListener("loadeddata", play, { once: true });
  video.addEventListener("canplay", play, { once: true });
}

function displayUrl(title: string, liveUrl?: string) {
  if (liveUrl) {
    try {
      const { hostname, pathname } = new URL(liveUrl);
      const path = pathname === "/" ? "" : pathname;
      return `${hostname}${path}`;
    } catch {
      return `${title.toLowerCase().replace(/\s+/g, "")}.com`;
    }
  }
  return `${title.toLowerCase().replace(/\s+/g, "")}.com`;
}

function BrowserChrome({
  title,
  liveUrl,
  isLight,
}: {
  title: string;
  liveUrl?: string;
  isLight: boolean;
}) {
  const chromeClass = isLight
    ? "bg-white/90 text-zinc-600 shadow-sm"
    : "bg-black/20 text-white/60";

  return (
    <div className="project-browser-chrome absolute inset-x-0 top-0 z-10 bg-gradient-to-b from-black/30 to-transparent p-2.5 sm:p-4">
      <div
        className={`flex items-center gap-1 sm:gap-1.5 rounded-md sm:rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 backdrop-blur-sm ${chromeClass}`}
      >
        <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-red-400/80" />
        <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-yellow-400/80" />
        <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-400/80" />
        <div
          className={`ml-2 sm:ml-3 flex-1 truncate rounded px-2 py-0.5 text-[9px] sm:text-[10px] ${
            isLight ? "bg-zinc-100 text-zinc-500" : "bg-white/10 text-white/80"
          }`}
        >
          {displayUrl(title, liveUrl)}
        </div>
      </div>
    </div>
  );
}

function StaticPreview({
  title,
  liveUrl,
  isLight,
  className,
  src,
}: {
  title: string;
  liveUrl?: string;
  isLight: boolean;
  className: string;
  src: string;
}) {
  return (
    <div
      className={`relative aspect-[16/10] overflow-hidden rounded-t-xl bg-zinc-900 ${className}`}
    >
      <Image
        src={src}
        alt={`${title} website preview`}
        fill
        className="object-cover object-top"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <BrowserChrome title={title} liveUrl={liveUrl} isLight={isLight} />
    </div>
  );
}

function VideoPreview({
  title,
  liveUrl,
  isLight,
  className,
  previewVideo,
  previewPoster,
  allowPlayback,
  preload,
}: {
  title: string;
  liveUrl?: string;
  isLight: boolean;
  className: string;
  previewVideo: string;
  previewPoster?: string;
  allowPlayback: boolean;
  preload: "none" | "metadata" | "auto";
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!allowPlayback) return;

    const video = videoRef.current;
    const container = videoContainerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startVideoPlayback(video);
        } else {
          video.pause();
        }
      },
      { threshold: 0.15, rootMargin: "80px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [allowPlayback, previewVideo]);

  if (!allowPlayback && previewPoster) {
    return (
      <StaticPreview
        title={title}
        liveUrl={liveUrl}
        isLight={isLight}
        className={className}
        src={previewPoster}
      />
    );
  }

  return (
    <div
      ref={videoContainerRef}
      className={`relative aspect-[16/10] overflow-hidden rounded-t-xl bg-black ${className}`}
    >
      <video
        ref={videoRef}
        poster={previewPoster}
        autoPlay={allowPlayback}
        loop={allowPlayback}
        muted
        playsInline
        preload={preload}
        className="absolute inset-0 h-full w-full object-cover object-top"
        onLoadedData={(e) => allowPlayback && startVideoPlayback(e.currentTarget)}
        onCanPlay={(e) => allowPlayback && startVideoPlayback(e.currentTarget)}
      >
        <source
          src={previewVideo}
          type={
            previewVideo.endsWith(".mov") ? "video/quicktime" : "video/mp4"
          }
        />
      </video>
      <BrowserChrome title={title} liveUrl={liveUrl} isLight={isLight} />
    </div>
  );
}

export default function ProjectScreenshot({
  title,
  gradient,
  liveUrl,
  previewImage,
  previewVideo,
  previewPoster,
  livePreview = false,
  previewMute = false,
  previewScale = 0.5,
  previewViewportWidth = 390,
  previewViewportHeight = 900,
  variant = "dark",
  className = "",
}: ProjectScreenshotProps) {
  const isLight = variant === "light";
  const { effectsEnabled } = useMotionPreference();
  const {
    prefersLightEffects,
    allowLivePreviews,
    allowPreviewVideos,
    isMobile,
  } = usePerformanceProfile();

  const staticSrc = previewImage || previewPoster;
  const videoPreload = isMobile ? "none" : prefersLightEffects ? "metadata" : "auto";

  if (livePreview && liveUrl) {
    if (!allowLivePreviews && staticSrc) {
      return (
        <StaticPreview
          title={title}
          liveUrl={liveUrl}
          isLight={isLight}
          className={className}
          src={staticSrc}
        />
      );
    }

    if (allowLivePreviews) {
      return (
        <div
          className={`relative aspect-[16/10] overflow-hidden rounded-t-xl bg-zinc-900 ${className}`}
        >
          <LazyLiveIframe
            previewKey={liveUrl}
            src={buildEmbedUrl(liveUrl, previewMute)}
            title={`${title} live preview`}
            width={previewViewportWidth}
            height={previewViewportHeight}
            scale={previewScale}
            previewMute={previewMute}
            fallbackSrc={staticSrc}
          />
          <BrowserChrome title={title} liveUrl={liveUrl} isLight={isLight} />
        </div>
      );
    }
  }

  if (previewVideo) {
    return (
      <VideoPreview
        title={title}
        liveUrl={liveUrl}
        isLight={isLight}
        className={className}
        previewVideo={previewVideo}
        previewPoster={previewPoster}
        allowPlayback={allowPreviewVideos}
        preload={videoPreload}
      />
    );
  }

  if (staticSrc) {
    return (
      <StaticPreview
        title={title}
        liveUrl={liveUrl}
        isLight={isLight}
        className={className}
        src={staticSrc}
      />
    );
  }

  const blockClass = isLight ? "bg-zinc-900/10" : "bg-white/20";
  const blockClassMuted = isLight ? "bg-zinc-900/8" : "bg-white/15";
  const blockClassSoft = isLight ? "bg-zinc-900/6" : "bg-white/10";
  const chromeClass = isLight
    ? "bg-white/80 text-zinc-600"
    : "bg-black/20 text-white/60";

  return (
    <div
      className={`relative aspect-[16/10] overflow-hidden rounded-t-xl ${className}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2NCAwIEwgMCAwIDAgNjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjA0KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />

      <div className="absolute inset-x-4 top-4">
        <div
          className={`flex items-center gap-1.5 rounded-lg px-3 py-2 backdrop-blur-sm ${chromeClass}`}
        >
          <span className="h-2 w-2 rounded-full bg-red-400/80" />
          <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
          <span className="h-2 w-2 rounded-full bg-green-400/80" />
          <div
            className={`ml-3 flex-1 truncate rounded px-3 py-0.5 text-[10px] ${
              isLight ? "bg-zinc-100 text-zinc-500" : "bg-white/10 text-white/60"
            }`}
          >
            {displayUrl(title, liveUrl)}
          </div>
        </div>
      </div>

      {effectsEnabled && (
        <div className="absolute inset-x-6 top-16 bottom-6 flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`h-8 w-3/4 rounded backdrop-blur-sm ${blockClass}`}
          />
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`h-4 w-1/2 rounded backdrop-blur-sm ${blockClassMuted}`}
          />
          <div className="mt-2 grid flex-1 grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.05 }}
                className={`rounded-lg backdrop-blur-sm ${blockClassSoft}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
