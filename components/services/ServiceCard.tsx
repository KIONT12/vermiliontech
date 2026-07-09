"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Service } from "@/lib/data/services";
import { CheckIcon } from "@/components/ui/Icons";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className={`relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-300 card-hover ${
        service.highlighted
          ? "border-red-500/40 bg-gradient-to-b from-[#111827] to-[#0a1628] glow-accent"
          : "border-red-500/10 bg-[#111827]"
      }`}
    >
      {service.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-4 py-1 text-xs font-semibold text-white">
          Most Popular
        </span>
      )}

      <h3 className="text-2xl font-bold text-white">{service.name}</h3>
      <p className="mt-2 text-sm text-zinc-400">{service.tagline}</p>
      <p className="mt-4 text-3xl font-bold text-gradient">{service.price}</p>

      <div className="mt-8 flex-1">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
          Features
        </h4>
        <ul className="mt-4 space-y-3">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-zinc-400">
              <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
              {feature}
            </li>
          ))}
        </ul>

        <h4 className="mt-8 text-sm font-semibold uppercase tracking-wider text-zinc-300">
          Benefits
        </h4>
        <ul className="mt-4 space-y-2">
          {service.benefits.map((benefit) => (
            <li key={benefit} className="text-sm text-red-400/90">
              → {benefit}
            </li>
          ))}
        </ul>
      </div>

      <Link
        href="/contact"
        className={`mt-8 block rounded-lg px-6 py-3 text-center text-sm font-semibold transition-all duration-300 ${
          service.highlighted
            ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/25 hover:shadow-red-500/40 hover:brightness-110"
            : "border border-red-500/50 text-red-400 hover:bg-red-500/10"
        }`}
      >
        Request Quote
      </Link>
    </motion.div>
  );
}
