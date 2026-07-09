"use client";

import { featuredProjects } from "@/lib/data/projects";
import Button from "@/components/ui/Button";
import ProjectScreenshot from "@/components/ui/ProjectScreenshot";
import SpotlightProjectCard from "@/components/portfolio/SpotlightProjectCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { ExternalLinkIcon } from "@/components/ui/Icons";

export default function FeaturedProjects() {
  const spotlightProjects = featuredProjects.filter((p) => p.spotlight);
  const otherFeatured = featuredProjects.filter((p) => !p.spotlight);

  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Featured Work"
          title="Recent Projects"
          description="Live client websites — including WhiteAsh BKK, GSoundz Beatz, JD Mobile Detailing, and J. Parker Sports Agency."
        />

        <div className="space-y-8">
          {spotlightProjects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.05}>
              <SpotlightProjectCard
                project={project}
                showPortfolioLink={i === spotlightProjects.length - 1}
              />
            </ScrollReveal>
          ))}
        </div>

        {otherFeatured.length > 0 && (
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {otherFeatured.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.1}>
                <article className="group overflow-hidden rounded-xl border border-red-500/10 bg-[#111827] card-hover">
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

        <ScrollReveal className="mt-12 text-center">
          <Button href="/portfolio" variant="secondary">
            View Full Portfolio
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
