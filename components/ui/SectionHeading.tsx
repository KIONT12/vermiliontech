"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 inline-block text-xs font-medium uppercase tracking-[0.14em] text-zinc-500"
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-[clamp(1.625rem,5vw,2.25rem)] font-semibold tracking-tight text-white"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`mt-3 text-base leading-relaxed text-zinc-400 sm:mt-4 sm:text-lg ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
