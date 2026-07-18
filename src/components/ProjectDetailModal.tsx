"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ExternalLink, Maximize2, X } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { ProjectImageLightbox } from "@/components/ProjectImageLightbox";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const [mounted, setMounted] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!project) {
      setLightboxIndex(null);
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && lightboxIndex === null) onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose, lightboxIndex]);

  if (!project || !mounted) return null;

  const { detail } = project;
  const hasDemoAccounts = detail.demoAccounts && detail.demoAccounts.length > 0;
  const hasFeatures = detail.features && detail.features.length > 0;

  return createPortal(
    <>
      <div
        className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-detail-title"
      >
        <button
          type="button"
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          onClick={onClose}
          aria-label="Tutup detail proyek"
        />

        <div className="relative z-10 flex w-full max-w-3xl max-h-[90vh] flex-col overflow-hidden rounded-2xl border-2 border-zinc-200 bg-white shadow-2xl">
          <div className="flex shrink-0 items-start justify-between gap-4 border-b border-zinc-200 px-5 py-4 sm:px-6">
            <div className="min-w-0">
              <span className="text-[10px] font-medium uppercase tracking-wider text-blue-600">
                {project.subtitle}
              </span>
              <h2
                id="project-detail-title"
                className="mt-1 text-lg font-semibold text-slate-900 sm:text-xl"
              >
                {project.title}
              </h2>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden items-center gap-1.5 rounded-md border border-zinc-300 px-3 py-2 text-xs font-medium text-zinc-600 transition-colors hover:border-blue-400 hover:text-blue-600 sm:inline-flex"
                >
                  <ExternalLink size={14} />
                  {project.liveLabel ?? "Buka Link"}
                </a>
              )}
              <button
                type="button"
                onClick={onClose}
                className="rounded-md border border-zinc-300 p-2 text-zinc-500 transition-colors hover:border-blue-400 hover:text-blue-600"
                aria-label="Tutup"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          <div className="flex-1 space-y-6 overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
            <section>
              <div className="mb-3 flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold text-slate-900">Tampilan Proyek</h3>
                <span className="text-xs text-zinc-500">Klik gambar untuk melihat penuh</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {detail.images.map((image, index) => (
                  <figure key={image.src} className="min-w-0">
                    <button
                      type="button"
                      onClick={() => setLightboxIndex(index)}
                      className="group relative block w-full overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      aria-label={`Perbesar: ${image.alt}`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={encodeURI(image.src)}
                        alt={image.alt}
                        className="max-h-52 w-full object-contain object-center sm:max-h-56"
                        loading="lazy"
                        draggable={false}
                        onError={(event) => {
                          const target = event.currentTarget;
                          target.style.display = "none";
                          const placeholder = target.nextElementSibling;
                          if (placeholder instanceof HTMLElement) {
                            placeholder.style.display = "flex";
                          }
                        }}
                      />
                      <div
                        className="hidden h-40 w-full items-center justify-center p-4 text-center text-xs text-zinc-500"
                        aria-hidden="true"
                      >
                        Gambar {index + 1} — akan ditambahkan
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-900/0 transition-colors group-hover:bg-slate-900/35">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-medium text-slate-800 opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
                          <Maximize2 size={14} />
                          Lihat penuh
                        </span>
                      </div>
                    </button>
                    <figcaption className="mt-2 text-xs leading-relaxed text-zinc-500">
                      {image.alt}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>

            <section>
              <h3 className="mb-2 text-sm font-semibold text-slate-900">Deskripsi</h3>
              <p className="text-sm leading-relaxed text-zinc-600">{detail.fullDescription}</p>
            </section>

            <section>
              <h3 className="mb-3 text-sm font-semibold text-slate-900">Teknologi</h3>
              <div className="flex flex-wrap gap-1.5">
                {detail.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {hasFeatures && (
              <section>
                <h3 className="mb-3 text-sm font-semibold text-slate-900">Fitur Utama</h3>
                <ul className="space-y-2">
                  {detail.features!.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-2 text-sm leading-relaxed text-zinc-600"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {hasDemoAccounts && (
              <section>
                <h3 className="mb-3 text-sm font-semibold text-slate-900">Akun Demo</h3>
                <div className="overflow-x-auto rounded-lg border border-zinc-200" data-scroll-x="allowed">
                  <table className="w-full min-w-[280px] text-sm">
                    <thead>
                      <tr className="border-b border-zinc-200 bg-zinc-50 text-left">
                        <th className="px-4 py-2.5 font-medium text-slate-900">Role</th>
                        <th className="px-4 py-2.5 font-medium text-slate-900">Username</th>
                        <th className="px-4 py-2.5 font-medium text-slate-900">Password</th>
                      </tr>
                    </thead>
                    <tbody>
                      {detail.demoAccounts!.map((account) => (
                        <tr key={account.role} className="border-b border-zinc-100 last:border-0">
                          <td className="px-4 py-2.5 text-zinc-700">{account.role}</td>
                          <td className="px-4 py-2.5 font-mono text-xs text-zinc-600">
                            {account.username}
                          </td>
                          <td className="px-4 py-2.5 font-mono text-xs text-zinc-600">
                            {account.password}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2.5 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-100 sm:hidden"
              >
                <ExternalLink size={16} />
                {project.liveLabel ?? "Buka Link"}
              </a>
            )}
          </div>
        </div>
      </div>

      {lightboxIndex !== null && (
        <ProjectImageLightbox
          images={detail.images}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onChange={setLightboxIndex}
        />
      )}
    </>,
    document.body
  );
}
