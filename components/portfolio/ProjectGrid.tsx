"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  projects,
  projectCategories,
  sortProjects,
  type ProjectCategory,
} from "@/lib/data/projects";
import ProjectCard from "@/components/portfolio/ProjectCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "All">(
    "All",
  );

  const filtered = sortProjects(
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter),
  );

  const filters: (ProjectCategory | "All")[] = ["All", ...projectCategories];

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Portfolio"
          title="Project Showcase"
          description="Explore websites I've built for businesses across different industries."
        />

        <ScrollReveal>
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/25"
                    : "border border-zinc-700 bg-zinc-800/50 text-zinc-400 hover:border-red-500/30 hover:text-red-300"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <div key={project.id} id={project.id}>
                <ProjectCard project={project} />
              </div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-zinc-500">
            No projects found in this category.
          </p>
        )}
      </div>
    </section>
  );
}
