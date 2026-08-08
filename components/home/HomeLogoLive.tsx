"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMotionPreference } from "@/lib/hooks/useMotionPreference";

export default function HomeLogoLive() {
  const { effectsEnabled } = useMotionPreference();

  return (
    <div className="home-logo-live absolute inset-0 flex items-center justify-center overflow-hidden">
      <div className="home-logo-radar" aria-hidden />
      <div className="home-logo-ring home-logo-ring--outer" aria-hidden />
      <div className="home-logo-ring home-logo-ring--inner" aria-hidden />

      <motion.div
        className="home-logo-glow"
        aria-hidden
        animate={
          effectsEnabled
            ? { opacity: [0.35, 0.65, 0.35], scale: [0.92, 1.08, 0.92] }
            : { opacity: 0.5, scale: 1 }
        }
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="home-logo-core"
        animate={
          effectsEnabled
            ? {
                opacity: [0.32, 0.48, 0.32],
                scale: [1, 1.04, 1],
                y: [0, -10, 0],
              }
            : { opacity: 0.4, scale: 1, y: 0 }
        }
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/vermiliontech-logo.png"
          alt=""
          width={800}
          height={800}
          priority
          sizes="(max-width: 768px) 85vw, 800px"
          className="home-logo-img h-[min(88vw,800px)] w-[min(88vw,800px)] object-contain"
        />
        <div className="home-logo-scan" aria-hidden />
        <div className="home-logo-shine" aria-hidden />
      </motion.div>
    </div>
  );
}
