"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  projects,
  projectCategories,
  sortProjects,
  type ProjectCategory,
} from "@/lib/data/projects";
import PortfolioProjectCard from "@/components/portfolio/PortfolioProjectCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useMotionPreference } from "@/lib/hooks/useMotionPreference";

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "All">(
    "All",
  );
  const { effectsEnabled } = useMotionPreference();

  const filtered = sortProjects(
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter),
  );

  const filters: (ProjectCategory | "All")[] = ["All", ...projectCategories];

  return (
    <section className="portfolio-section">
      <div className="portfolio-inner">
        <ScrollReveal>
          <div className="portfolio-toolbar">
            <div className="portfolio-filters-wrap">
              <div
                className="portfolio-filters"
                role="tablist"
                aria-label="Filter projects by category"
              >
                {filters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    role="tab"
                    aria-selected={activeFilter === filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`portfolio-filter-btn${
                      activeFilter === filter ? " is-active" : ""
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            <p className="portfolio-count">
              {filtered.length}{" "}
              {filtered.length === 1 ? "project" : "projects"}
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          key={activeFilter}
          initial={effectsEnabled ? { opacity: 0, y: 8 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="portfolio-project-list"
        >
          {filtered.map((project, i) => (
            <ScrollReveal key={project.id} delay={effectsEnabled ? i * 0.03 : 0}>
              <div id={project.id}>
                <PortfolioProjectCard
                  project={project}
                  reverse={i % 2 === 1}
                />
              </div>
            </ScrollReveal>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="portfolio-empty">No projects in this category yet.</p>
        )}

        <ScrollReveal className="portfolio-cta-wrap">
          <div className="portfolio-cta">
            <p className="pro-label">Next project</p>
            <h2 className="pro-section-title mt-3">
              Ready to build something for your business?
            </h2>
            <p className="pro-section-desc mx-auto mt-3 max-w-lg">
              Share your goals and we&apos;ll outline a clear plan — timeline,
              scope, and what success looks like for you.
            </p>
            <Link href="/contact" className="portfolio-cta-btn">
              Start a project
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
