"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useMotionPreference } from "@/lib/hooks/useMotionPreference";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: ScrollRevealProps) {
  const { effectsEnabled, isDesktop } = useMotionPreference();

  if (!effectsEnabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: isDesktop ? 24 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: isDesktop ? "-60px" : "-24px" }}
      transition={{ duration: isDesktop ? 0.4 : 0.32, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
