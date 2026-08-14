"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import BrandName from "@/components/ui/BrandName";
import { useMotionPreference } from "@/lib/hooks/useMotionPreference";

interface OpeningSectionProps {
  label?: string;
  title: string;
  highlight?: string;
  description: string;
  badge?: string;
  brand?: boolean;
  fullHeight?: boolean;
  compact?: boolean;
  children?: ReactNode;
}

export default function OpeningSection({
  label,
  title,
  highlight,
  description,
  badge,
  brand = false,
  fullHeight = false,
  compact = false,
  children,
}: OpeningSectionProps) {
  const { effectsEnabled } = useMotionPreference();
  const motionProps = effectsEnabled
    ? {}
    : { initial: false, animate: false, transition: { duration: 0 } };

  const renderTitle = () => {
    if (!highlight) {
      return title;
    }

    const index = title.indexOf(highlight);
    if (index === -1) {
      return (
        <>
          {title} <span className="text-gradient">{highlight}</span>
        </>
      );
    }

    return (
      <>
        {title.slice(0, index)}
        <span className="text-gradient">{highlight}</span>
        {title.slice(index + highlight.length)}
      </>
    );
  };

  return (
    <section
      className={`relative overflow-hidden pt-24 ${
        fullHeight
          ? "min-h-screen"
          : compact
            ? "pb-8 pt-28 sm:pb-10 sm:pt-32"
            : "pb-12 pt-32"
      }`}
    >
      <div className="absolute inset-0 grid-bg opacity-15" />

      <div
        className={`relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${
          fullHeight
            ? "flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center py-20 text-center"
            : "pb-4 text-center"
        }`}
      >
        {brand && (
          <motion.div
            {...motionProps}
            initial={effectsEnabled ? { opacity: 0, y: 20 } : false}
            animate={effectsEnabled ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5"
          >
            <BrandName size="lg" />
          </motion.div>
        )}

        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/5 px-4 py-1.5 text-sm text-red-300"
          >
            {effectsEnabled && (
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-400" />
              </span>
            )}
            {!effectsEnabled && (
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-400" />
            )}
            {badge}
          </motion.div>
        )}

        {label && (
          <motion.span
            {...motionProps}
            initial={effectsEnabled ? { opacity: 0, y: 10 } : false}
            animate={effectsEnabled ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-3 inline-block font-mono text-xs font-medium uppercase tracking-[0.16em] text-red-400 sm:mb-4 sm:text-sm"
          >
            {label}
          </motion.span>
        )}

        <motion.h1
          {...motionProps}
          initial={effectsEnabled ? { opacity: 0, y: 30 } : false}
          animate={effectsEnabled ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className={`font-bold leading-[1.1] tracking-tight text-white ${
            fullHeight
              ? "max-w-4xl text-[clamp(2rem,8vw,3.75rem)]"
              : compact
                ? "text-[clamp(1.875rem,7vw,3rem)]"
                : "text-[clamp(2rem,7vw,3rem)]"
          }`}
        >
          {renderTitle()}
        </motion.h1>

        <motion.p
          {...motionProps}
          initial={effectsEnabled ? { opacity: 0, y: 30 } : false}
          animate={effectsEnabled ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className={`text-zinc-400 ${
            fullHeight
              ? "mt-5 max-w-2xl text-base sm:mt-6 sm:text-lg lg:text-xl"
              : "mx-auto mt-3 max-w-2xl text-base sm:mt-4 sm:text-lg"
          }`}
        >
          {description}
        </motion.p>

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={fullHeight ? "mt-10" : "mt-8"}
          >
            {children}
          </motion.div>
        )}

        {fullHeight && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2 text-zinc-500">
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="h-8 w-5 rounded-full border border-zinc-700 p-1"
              >
                <div className="mx-auto h-2 w-1 rounded-full bg-red-400" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
