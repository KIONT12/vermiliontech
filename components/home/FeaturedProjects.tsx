"use client";

import { featuredProjects } from "@/lib/data/projects";
import Link from "next/link";
import Button from "@/components/ui/Button";
import ProjectScreenshot from "@/components/ui/ProjectScreenshot";
import SpotlightProjectCard from "@/components/portfolio/SpotlightProjectCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { ExternalLinkIcon } from "@/components/ui/Icons";

interface FeaturedProjectsProps {
  bondTheme?: boolean;
  flyerTheme?: boolean;
  cinemaTheme?: boolean;
  unifiedTheme?: boolean;
  proTheme?: boolean;
}

export default function FeaturedProjects({
  bondTheme = false,
  flyerTheme = false,
  cinemaTheme = false,
  unifiedTheme = false,
  proTheme = false,
}: FeaturedProjectsProps) {
  const spotlightProjects = featuredProjects.filter((p) => p.spotlight);
  const otherFeatured = featuredProjects.filter((p) => !p.spotlight);

  const isHomeThemed = bondTheme || flyerTheme || cinemaTheme || unifiedTheme || proTheme;

  if (proTheme) {
    return (
      <section className="pro-section border-t border-white/[0.06] bg-[#0a0d12]">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="pro-section-header max-w-2xl">
            <p className="pro-label">Portfolio</p>
            <h2 className="pro-section-title mt-3">Client work</h2>
            <p className="pro-section-desc mt-3">
              A selection of live websites and applications currently in production.
            </p>
          </div>

          <div className="pro-project-list mt-12">
            {spotlightProjects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.04}>
                <SpotlightProjectCard
                  project={project}
                  showPortfolioLink={i === spotlightProjects.length - 1}
                  proStyle
                />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-12 text-center">
            <Link href="/portfolio" className="pro-btn pro-btn-secondary">
              View full portfolio
            </Link>
          </ScrollReveal>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`relative overflow-hidden ${
        unifiedTheme
          ? "tech-section tech-projects-panel"
          : `py-24 lg:py-32 ${
              cinemaTheme ? "cinema-section" : bondTheme ? "bond-section" : flyerTheme ? "flyer-section" : ""
            }`
      }`}
    >
        {unifiedTheme ? (
          <div className="tech-projects-bg" aria-hidden>
            <div className="tech-projects-glow" />
            <div className="tech-grid-lines" />
          </div>
        ) : (
        <div
          className={`absolute inset-0 ${
            cinemaTheme
              ? "opacity-0"
              : bondTheme
                ? "bond-grid opacity-20"
                : flyerTheme
                  ? "flyer-dots opacity-40"
                  : "grid-bg opacity-30"
          }`}
        />
      )}
      <div className={`relative z-[1] ${unifiedTheme ? "" : "mx-auto max-w-7xl px-6 lg:px-8"}`}>
        {unifiedTheme ? (
          <div className="tech-section-head relative z-[1] mb-10">
            <span className="tech-kicker">Selected work</span>
            <h2 className="tech-section-title">
              Real projects, <span className="tech-fire-text">live online</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-500">
              Sports brands, music studios, retail, and agencies — custom builds
              that are running in production today.
            </p>
          </div>
        ) : cinemaTheme ? (
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
              Featured Work
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Live <span className="text-gradient">Client Projects</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
              Real sites, real businesses — WhiteAsh BKK, GSoundz, JD Mobile Detailing, and J. Parker Sports Agency.
            </p>
          </div>
        ) : flyerTheme ? (
          <div className="mb-14 text-center">
            <span className="flyer-section-kicker">Featured Work</span>
            <h2 className="flyer-section-title mt-3 text-white">
              Live
              <span className="text-gradient"> Client Sites</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-400">
              Real projects, real results — WhiteAsh BKK, GSoundz, JD Mobile Detailing, and J. Parker Sports Agency.
            </p>
          </div>
        ) : bondTheme ? (
          <div className="mb-14">
            <div className="hack-terminal-strip mb-8 flex flex-wrap items-center justify-between gap-4 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.15em]">
              <span className="flex items-center gap-2 text-red-400">
                <span className="bond-pulse-dot" />
                Operation Files // Classified
              </span>
              <span className="text-zinc-600">Session: VT-007 // Encrypted</span>
            </div>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="hack-tag mb-4 inline-flex">Deployed Assets</span>
                <h2 className="hack-section-title text-white">
                  LIVE
                  <br />
                  <span className="text-gradient">TARGETS</span>
                </h2>
              </div>
              <p className="max-w-sm font-mono text-xs leading-relaxed tracking-wide text-zinc-600 lg:text-sm">
                Production environments running live — intercept and inspect each deployment.
              </p>
            </div>
            <div className="bond-divider mt-10 max-w-full" />
          </div>
        ) : (
          <SectionHeading
            label="Featured Work"
            title="Recent Projects"
            description="Live client websites — including WhiteAsh BKK, GSoundz Beatz, JD Mobile Detailing, and J. Parker Sports Agency."
          />
        )}

        <div className={unifiedTheme ? "tech-project-grid" : "space-y-8"}>
          {spotlightProjects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.05}>
              <SpotlightProjectCard
                project={project}
                showPortfolioLink={i === spotlightProjects.length - 1}
                bondStyle={bondTheme}
                cinemaStyle={cinemaTheme}
                unifiedStyle={unifiedTheme}
                flyerStyle={flyerTheme}
                flyerIndex={isHomeThemed && !unifiedTheme && (bondTheme || flyerTheme) ? i + 1 : undefined}
              />
            </ScrollReveal>
          ))}
        </div>

        {otherFeatured.length > 0 && (
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {otherFeatured.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.1}>
                <article
                  className={`group overflow-hidden card-hover ${
                    unifiedTheme
                      ? "tech-mini-card overflow-hidden"
                      : cinemaTheme
                        ? "cinema-glass cinema-card overflow-hidden rounded-2xl"
                        : flyerTheme
                          ? "flyer-card rounded-none border-2 border-red-500/35 bg-[#0d1117]"
                          : bondTheme
                            ? "rounded-xl border border-red-500/30 bg-[#0a0e14]/90"
                            : "rounded-xl border border-red-500/10 bg-[#111827]"
                  }`}
                >
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
                  <div className="p-6">
                    <span className="text-xs font-medium uppercase tracking-wider text-red-400">
                      {project.category}
                    </span>
                    <h3 className="mt-2 text-xl font-semibold text-white transition-colors group-hover:text-red-300">
                      {project.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-400">
                      {project.description}
                    </p>
                    <div className="mt-6">
                      <Button
                        href={project.liveUrl}
                        variant="outline"
                        external
                        className="w-full text-xs"
                      >
                        Live Website
                        <ExternalLinkIcon />
                      </Button>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        )}

        <ScrollReveal className={unifiedTheme ? "tech-deck-footer mt-10" : "mt-12 text-center"}>
          {unifiedTheme || cinemaTheme ? (
            <Link href="/portfolio" className="tech-btn-primary">
              View Full Portfolio
            </Link>
          ) : bondTheme ? (
            <Link href="/portfolio" className="hack-btn-primary">
              Access Full Archive
            </Link>
          ) : (
            <Button
              href="/portfolio"
              variant={flyerTheme ? "primary" : "secondary"}
              className={flyerTheme ? "btn-flyer-cta" : ""}
            >
              View Full Portfolio
            </Button>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
