"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl border border-red-500/20 bg-gradient-to-br from-[#111827]/95 to-[#0a1628]/95 px-8 py-16 text-center backdrop-blur-sm lg:px-16 glow-accent">
            <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-red-500/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-red-500/10 blur-3xl" />

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative text-3xl font-bold text-white sm:text-4xl"
            >
            Ready to Launch Your Next Website?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative mt-4 text-lg text-zinc-400"
          >
            Partner with VermilionTech to build a site that looks sharp, loads fast,
            and converts visitors into customers.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Button href="/contact">Start a Project</Button>
              <Button href="/portfolio" variant="outline">
                View Portfolio
              </Button>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
