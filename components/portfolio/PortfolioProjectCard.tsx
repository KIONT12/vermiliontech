"use client";

import Link from "next/link";
import type { Project } from "@/lib/data/projects";
import ProjectScreenshot from "@/components/ui/ProjectScreenshot";
import { ExternalLinkIcon } from "@/components/ui/Icons";
import { useMotionPreference } from "@/lib/hooks/useMotionPreference";

interface PortfolioProjectCardProps {
  project: Project;
  reverse?: boolean;
}

export default function PortfolioProjectCard({
  project,
  reverse = false,
}: PortfolioProjectCardProps) {
  const { effectsEnabled, isDesktop } = useMotionPreference();

  return (
    <article
      className={`portfolio-card group${reverse ? " portfolio-card--reverse" : ""}${
        effectsEnabled && isDesktop ? " portfolio-card--interactive" : ""
      }`}
    >
      <div className="portfolio-card-preview">
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
          className="portfolio-screenshot"
        />
        <span className="portfolio-live-badge">Live</span>
      </div>

      <div className="portfolio-card-body">
        <p className="portfolio-card-meta">
          <span>{project.category}</span>
          <span aria-hidden>·</span>
          <span>{project.industry}</span>
        </p>
        <h3 className="portfolio-card-title">{project.title}</h3>
        <p className="portfolio-card-desc">{project.description}</p>
        <div className="portfolio-card-actions">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-card-btn portfolio-card-btn--primary"
          >
            Visit live site
            <ExternalLinkIcon />
          </a>
          <Link
            href={`/contact?project=${encodeURIComponent(project.title)}`}
            className="portfolio-card-btn portfolio-card-btn--secondary"
          >
            <span className="portfolio-btn-label-long">Discuss a similar project</span>
            <span className="portfolio-btn-label-short">Similar project</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
