"use client";

import Image from "next/image";
import { usePerformanceProfile } from "@/lib/hooks/usePerformanceProfile";

export default function LiveLogoWatermark() {
  const { isDesktop } = usePerformanceProfile();

  return (
    <div className="logo-watermark-wrap absolute inset-0 flex items-center justify-center">
      {isDesktop && <div className="logo-glow" aria-hidden />}
      <Image
        src="/vermiliontech-logo.png"
        alt=""
        width={720}
        height={720}
        priority={false}
        loading="lazy"
        sizes="(max-width: 768px) 70vw, 720px"
        className={`logo-watermark h-[min(70vw,720px)] w-[min(70vw,720px)] object-contain ${
          isDesktop ? "logo-live-css" : "logo-watermark--static"
        }`}
      />
    </div>
  );
}
