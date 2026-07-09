"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "@/lib/data/projects";
import ProjectScreenshot from "@/components/ui/ProjectScreenshot";
import { ExternalLinkIcon } from "@/components/ui/Icons";

interface ProjectCardProps {
  project: Project;
  showDetails?: boolean;
}

export default function ProjectCard({
  project,
  showDetails = true,
}: ProjectCardProps) {
  const isSpotlight = project.spotlight;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -6 }}
      className={`group overflow-hidden rounded-xl bg-[#111827] card-hover ${
        isSpotlight
          ? "border border-red-500/25 ring-1 ring-red-500/10"
          : "border border-red-500/10"
      }`}
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
        />
        {isSpotlight && (
          <span className="absolute right-4 top-4 z-10 rounded-full border border-red-500/30 bg-[#0d1117]/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-red-300 backdrop-blur-sm">
            Live Project
          </span>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-medium uppercase tracking-wider text-red-400">
            {project.category}
          </span>
          <span className="text-xs text-zinc-500">{project.industry}</span>
        </div>
        <h3 className="mt-2 text-xl font-semibold text-white transition-colors group-hover:text-red-300">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-zinc-800 px-2.5 py-1 text-xs text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all ${
              isSpotlight
                ? "border border-red-500/50 bg-red-500/10 text-red-300 hover:border-red-400 hover:bg-red-500/15"
                : "border border-red-500/50 text-red-400 hover:border-red-400 hover:bg-red-500/10"
            }`}
          >
            Visit Website
            <ExternalLinkIcon />
          </a>
          {showDetails && (
            <Link
              href={`/contact?project=${encodeURIComponent(project.title)}`}
              className="inline-flex flex-1 items-center justify-center rounded-lg bg-zinc-800 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-zinc-700"
            >
              View Details
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}
