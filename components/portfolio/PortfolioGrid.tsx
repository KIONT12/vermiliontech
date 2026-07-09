"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  projects,
  projectCategories,
  type ProjectCategory,
} from "@/lib/data/projects";
import ProjectCard from "@/components/portfolio/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState<
    ProjectCategory | "All"
  >("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const filters: (ProjectCategory | "All")[] = ["All", ...projectCategories];

  return (
    <>
      <div className="mb-12 flex flex-wrap justify-center gap-2">
        {filters.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/25"
                : "border border-zinc-700 text-zinc-400 hover:border-red-500/30 hover:text-red-400"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-zinc-500">
          No projects found in this category.
        </p>
      )}
    </>
  );
}

export function PortfolioHeader() {
  return (
    <SectionHeading
      label="Portfolio"
      title="Project Showcase"
      description="Explore websites I've built for businesses across fitness, real estate, e-commerce, and more."
    />
  );
}
