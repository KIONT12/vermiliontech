"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/lib/data/projects";
import Button from "@/components/ui/Button";
import ProjectScreenshot from "@/components/ui/ProjectScreenshot";
import { ExternalLinkIcon } from "@/components/ui/Icons";
import { useMotionPreference } from "@/lib/hooks/useMotionPreference";

interface SpotlightProjectCardProps {
  project: Project;
  showPortfolioLink?: boolean;
  bondStyle?: boolean;
  cinemaStyle?: boolean;
  unifiedStyle?: boolean;
  proStyle?: boolean;
  flyerStyle?: boolean;
  flyerIndex?: number;
  /** Flip preview/content on large screens (portfolio alternating rows). */
  reverse?: boolean;
  /** 1-based index shown on pro portfolio cards. */
  projectIndex?: number;
}

export default function SpotlightProjectCard({
  project,
  showPortfolioLink = false,
  bondStyle = false,
  cinemaStyle = false,
  unifiedStyle = false,
  proStyle = false,
  flyerStyle = false,
  flyerIndex,
  reverse = false,
  projectIndex,
}: SpotlightProjectCardProps) {
  const cardClass = proStyle
    ? "pro-project-card overflow-hidden"
    : unifiedStyle
    ? "tech-project-card overflow-hidden"
    : cinemaStyle
      ? "cinema-glass cinema-card overflow-hidden rounded-2xl"
      : flyerStyle
        ? "flyer-card rounded-none border-2 border-red-500/40 bg-[#0d1117]"
        : bondStyle
          ? "hack-project-card bond-card relative rounded-none border border-red-500/35 bg-[#080c12]/95"
          : "rounded-2xl border border-red-500/25 bg-[#111827] ring-1 ring-red-500/10";

  const { effectsEnabled, isDesktop } = useMotionPreference();

  const previewRoundedClass = proStyle
    ? reverse
      ? "rounded-none lg:rounded-r-lg"
      : "rounded-none lg:rounded-l-lg"
    : unifiedStyle
      ? "rounded-none lg:rounded-l-xl"
      : cinemaStyle
        ? "rounded-none lg:rounded-l-2xl"
        : flyerStyle || bondStyle
          ? "rounded-none"
          : "rounded-none lg:rounded-l-2xl lg:rounded-tr-none";

  return (
    <motion.article
      whileHover={
        effectsEnabled && isDesktop && (proStyle || unifiedStyle)
          ? { y: proStyle ? -2 : -4 }
          : effectsEnabled && isDesktop
            ? { y: -6 }
            : undefined
      }
      transition={{ duration: 0.25 }}
      className={`group card-hover lg:grid lg:grid-cols-2 ${cardClass}`}
    >
      {unifiedStyle && !proStyle && (
        <>
          <span className="tech-corner tech-corner--tl scale-75" aria-hidden />
          <span className="tech-corner tech-corner--tr scale-75" aria-hidden />
        </>
      )}

      {bondStyle && !cinemaStyle && !unifiedStyle && (
        <>
          <span className="bond-hud-corner bond-hud-corner--tl scale-75" />
          <span className="bond-hud-corner bond-hud-corner--tr scale-75" />
          <span className="bond-hud-corner bond-hud-corner--bl scale-75" />
          <span className="bond-hud-corner bond-hud-corner--br scale-75" />
        </>
      )}

      <div className={`relative ${reverse ? "lg:order-2" : ""}`}>
        {flyerStyle && flyerIndex != null && (
          <span className="flyer-number absolute left-0 top-0 z-10 px-4 py-3 font-black leading-none text-red-500/25">
            {String(flyerIndex).padStart(2, "0")}
          </span>
        )}
        {bondStyle && !cinemaStyle && !unifiedStyle && flyerIndex != null && (
          <span className="absolute left-4 top-4 z-10 font-mono text-[10px] uppercase tracking-[0.2em] text-red-500/60">
            Target // {String(flyerIndex).padStart(3, "0")}
          </span>
        )}
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
          className={previewRoundedClass}
        />
        {bondStyle && !cinemaStyle && !unifiedStyle && (
          <div className="hack-target-scan absolute inset-0 z-[5]" aria-hidden />
        )}
        <span
          className={`absolute right-4 top-4 z-10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-sm ${
            proStyle
              ? "pro-live-badge"
              : unifiedStyle || cinemaStyle
              ? "cinema-live-badge"
              : flyerStyle
                ? "flyer-stamp-sm -rotate-3"
                : bondStyle
                  ? "hack-live-badge"
                  : "rounded-full border border-red-500/30 bg-[#0d1117]/80 text-red-300"
          }`}
        >
          {proStyle || unifiedStyle || cinemaStyle ? "Live" : flyerStyle ? "Live Site" : bondStyle ? "● Deployed" : "Live Project"}
        </span>
      </div>
      <div
        className={`relative flex flex-col justify-center ${
          reverse ? "lg:order-1" : ""
        } ${
          proStyle ? "p-6 lg:p-8" : unifiedStyle ? "p-6 lg:p-8" : "p-8 lg:p-10"
        }`}
      >
        {proStyle && projectIndex != null && (
          <span className="portfolio-index" aria-hidden>
            {String(projectIndex).padStart(2, "0")}
          </span>
        )}
        {bondStyle && !cinemaStyle && !unifiedStyle && <div className="bond-data-stream mb-4" aria-hidden />}
        <span
          className={`text-xs font-medium uppercase tracking-wider ${
            proStyle ? "text-zinc-500" : "text-red-400"
          } ${bondStyle && !cinemaStyle && !unifiedStyle && !proStyle ? "font-mono text-[10px] font-bold tracking-[0.2em]" : ""}`}
        >
          {proStyle || unifiedStyle || cinemaStyle
            ? `${project.category} · ${project.industry}`
            : bondStyle
              ? `${project.category} // ${project.industry}`
              : project.category}
        </span>
        <h3
          className={`font-semibold text-white transition-colors group-hover:text-red-300 ${
            proStyle ? "mt-2 text-xl sm:text-2xl" : unifiedStyle ? "mt-2 text-xl sm:text-2xl" : "mt-3 text-2xl sm:text-3xl"
          }`}
        >
          {project.title}
        </h3>
        <p className={`leading-relaxed text-zinc-400 ${unifiedStyle ? "mt-3 text-sm" : "mt-4 text-sm sm:text-base"}`}>
          {project.description}
        </p>
        {bondStyle && !cinemaStyle && !unifiedStyle && (
          <div className="mt-4 flex gap-4 font-mono text-[10px] uppercase tracking-wider text-zinc-600">
            <span>
              Modules: <span className="text-red-400/70">{project.technologies.length}</span>
            </span>
            <span>
              Status: <span className="text-emerald-500/70">Active</span>
            </span>
          </div>
        )}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className={`px-2.5 py-1 text-xs text-zinc-300 ${
                proStyle
                  ? "rounded bg-zinc-800/80 text-zinc-400"
                  : unifiedStyle || cinemaStyle
                  ? "rounded-full bg-white/5 text-zinc-400"
                  : flyerStyle
                    ? "border border-red-500/25 bg-red-500/5 font-semibold uppercase tracking-wide"
                    : bondStyle
                      ? "hack-tech-chip font-mono uppercase tracking-wider text-red-300/80"
                      : "rounded-md bg-zinc-800"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          {proStyle ? (
            <>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pro-btn pro-btn-primary text-sm"
              >
                Visit live site
                <ExternalLinkIcon />
              </a>
              {showPortfolioLink && (
                <Link href="/portfolio" className="pro-btn pro-btn-secondary text-sm">
                  View all work
                </Link>
              )}
            </>
          ) : unifiedStyle || cinemaStyle ? (
            <>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${unifiedStyle ? "tech-btn-primary" : "cinema-btn-primary"} text-sm`}
              >
                Visit Live Site
                <ExternalLinkIcon />
              </a>
              {showPortfolioLink && (
                <Link
                  href="/portfolio"
                  className={`${unifiedStyle ? "tech-btn-ghost" : "cinema-btn-secondary"} text-sm`}
                >
                  View All Work
                </Link>
              )}
            </>
          ) : bondStyle ? (
            <>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hack-btn-primary text-sm"
              >
                Intercept Live Site
                <ExternalLinkIcon />
              </a>
              {showPortfolioLink && (
                <Link href="/portfolio" className="hack-btn-ghost text-sm">
                  Full Archive
                </Link>
              )}
            </>
          ) : (
            <>
              <Button href={project.liveUrl} external className="text-sm">
                Visit Live Site
                <ExternalLinkIcon />
              </Button>
              {showPortfolioLink && (
                <Button href="/portfolio" variant="outline" className="text-sm">
                  View All Work
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </motion.article>
  );
}
