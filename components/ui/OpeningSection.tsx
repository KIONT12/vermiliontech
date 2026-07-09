"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import BrandName from "@/components/ui/BrandName";

interface OpeningSectionProps {
  label?: string;
  title: string;
  highlight?: string;
  description: string;
  badge?: string;
  brand?: boolean;
  fullHeight?: boolean;
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
  children,
}: OpeningSectionProps) {
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
        fullHeight ? "min-h-screen" : "pb-12 pt-32"
      }`}
    >
      <div className="absolute inset-0 grid-bg opacity-15" />

      <div
        className={`relative z-10 mx-auto max-w-7xl px-6 lg:px-8 ${
          fullHeight
            ? "flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center py-20 text-center"
            : "pb-4 text-center"
        }`}
      >
        {brand && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-400" />
            </span>
            {badge}
          </motion.div>
        )}

        {label && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-red-400"
          >
            {label}
          </motion.span>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className={`font-bold leading-tight tracking-tight text-white ${
            fullHeight
              ? "max-w-4xl text-4xl sm:text-5xl lg:text-6xl"
              : "text-4xl sm:text-5xl"
          }`}
        >
          {renderTitle()}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className={`text-zinc-400 ${
            fullHeight
              ? "mt-6 max-w-2xl text-lg sm:text-xl"
              : "mx-auto mt-4 max-w-2xl text-lg"
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
