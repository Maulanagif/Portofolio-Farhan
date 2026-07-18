"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectDetailModal } from "@/components/ProjectDetailModal";

function getCoverImage(project: Project) {
  return project.detail.images[0];
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-padding section-gray relative">
      <div className="content-width relative z-10">
        <SectionHeader
          title="Proyek"
          subtitle="Kumpulan proyek yang saya kerjakan selama perkuliahan, Praktik Kerja Lapangan (PKL), dan pengembangan mandiri."
        />

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project, index) => {
            const cover = getCoverImage(project);

            return (
              <Reveal
                key={project.id}
                variant="scale-up"
                delay={index * 70}
                threshold={0.08}
                className="h-full"
              >
                <article className="group project-card flex h-full flex-col overflow-hidden rounded-lg border-2 border-zinc-200 bg-white">
                  <div className="relative h-32 shrink-0 overflow-hidden border-b border-zinc-200 bg-zinc-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={encodeURI(cover.src)}
                      alt={cover.alt}
                      className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                      loading="lazy"
                      draggable={false}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute right-3 top-3 rounded-md border border-white/70 bg-white/90 p-2 text-zinc-600 shadow-sm backdrop-blur-sm transition-all hover:border-blue-400 hover:text-blue-600"
                        aria-label="Buka link proyek"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    {project.subtitle && (
                      <span className="text-[10px] font-medium uppercase tracking-wider text-blue-600">
                        {project.subtitle}
                      </span>
                    )}
                    <h3 className="mt-1 text-base font-semibold text-slate-900">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-zinc-200 px-2 py-0.5 text-xs text-zinc-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="btn-secondary mt-4 w-full sm:w-auto"
                    >
                      Lihat Detail
                    </button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
