"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data/about";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function SkillsSection() {
  return (
    <ScrollReveal>
      <div className="rounded-xl border border-red-500/10 bg-[#111827] p-8">
        <h3 className="text-xl font-bold text-white">Skills</h3>
        <div className="mt-6 space-y-5">
          {skills.map((skill, i) => (
            <div key={skill.name}>
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-zinc-300">{skill.name}</span>
                <span className="text-red-400">{skill.level}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-red-600 to-red-400"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
