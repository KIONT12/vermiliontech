"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/data/projects";
import Button from "@/components/ui/Button";
import ProjectScreenshot from "@/components/ui/ProjectScreenshot";
import { ExternalLinkIcon } from "@/components/ui/Icons";

interface SpotlightProjectCardProps {
  project: Project;
  showPortfolioLink?: boolean;
}

export default function SpotlightProjectCard({
  project,
  showPortfolioLink = false,
}: SpotlightProjectCardProps) {
  return (
    <motion.article
      whileHover={project.livePreview ? { y: -4 } : undefined}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-2xl border border-red-500/25 bg-[#111827] ring-1 ring-red-500/10 card-hover lg:grid lg:grid-cols-2"
    >
      <div className="relative">
        <ProjectScreenshot
          title={project.title}
          gradient={project.gradient}
          liveUrl={project.liveUrl}
          previewImage={project.previewImage}
          previewVideo={project.previewVideo}
          previewPoster={project.previewPoster}
          livePreview={project.livePreview}
          previewMute={project.previewMute}
          previewScale={project.previewScale}
          previewViewportWidth={project.previewViewportWidth}
          previewViewportHeight={project.previewViewportHeight}
          variant={project.previewVariant}
          className="rounded-none lg:rounded-l-2xl lg:rounded-tr-none"
        />
        <span className="absolute right-4 top-4 z-10 rounded-full border border-red-500/30 bg-[#0d1117]/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-red-300 backdrop-blur-sm">
          Live Project
        </span>
      </div>
      <div className="flex flex-col justify-center p-8 lg:p-10">
        <span className="text-xs font-medium uppercase tracking-wider text-red-400">
          {project.category} · {project.industry}
        </span>
        <h3 className="mt-3 text-2xl font-semibold text-white transition-colors group-hover:text-red-300 sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-zinc-800 px-2.5 py-1 text-xs text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href={project.liveUrl} external className="text-sm">
            Visit Live Site
            <ExternalLinkIcon />
          </Button>
          {showPortfolioLink && (
            <Button href="/portfolio" variant="outline" className="text-sm">
              View All Work
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
}
