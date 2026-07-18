"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ExternalLink, Maximize2, X } from "lucide-react";
import type { Certification } from "@/data/portfolio";
import { ProjectImageLightbox } from "@/components/ProjectImageLightbox";

interface CertificationDetailModalProps {
  certification: Certification | null;
  onClose: () => void;
}

export function CertificationDetailModal({
  certification,
  onClose,
}: CertificationDetailModalProps) {
  const [mounted, setMounted] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!certification) {
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
  }, [certification, onClose, lightboxIndex]);

  if (!certification || !mounted) return null;

  const { detail } = certification;
  const hasMeta = detail.issuer || detail.issuedAt;

  return createPortal(
    <>
      <div
        className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="certification-detail-title"
      >
        <button
          type="button"
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          onClick={onClose}
          aria-label="Tutup detail sertifikat"
        />

        <div className="relative z-10 flex w-full max-w-3xl max-h-[90vh] flex-col overflow-hidden rounded-2xl border-2 border-zinc-200 bg-white shadow-2xl">
          <div className="flex shrink-0 items-start justify-between gap-4 border-b border-zinc-200 px-5 py-4 sm:px-6">
            <div className="min-w-0">
              <span className="text-[10px] font-medium uppercase tracking-wider text-sky-600">
                {certification.subtitle}
              </span>
              <h2
                id="certification-detail-title"
                className="mt-1 text-lg font-semibold text-slate-900 sm:text-xl"
              >
                {certification.title}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-md border border-zinc-300 p-2 text-zinc-500 transition-colors hover:border-sky-400 hover:text-sky-600"
              aria-label="Tutup"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 space-y-6 overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
            {detail.images.length > 0 && (
              <section>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="text-sm font-semibold text-slate-900">Foto Sertifikat</h3>
                  <span className="text-xs text-zinc-500">Klik gambar untuk melihat penuh</span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {detail.images.map((image, index) => (
                    <figure key={image.src} className="min-w-0">
                      <button
                        type="button"
                        onClick={() => setLightboxIndex(index)}
                        className="group relative block w-full overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
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
                          Gambar sertifikat belum tersedia
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
            )}

            {hasMeta && (
              <section className="grid gap-3 sm:grid-cols-2">
                {detail.issuer && (
                  <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                    <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                      Penerbit
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-900">{detail.issuer}</p>
                  </div>
                )}
                {detail.issuedAt && (
                  <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                    <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                      Tanggal
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-900">{detail.issuedAt}</p>
                  </div>
                )}
              </section>
            )}

            <section>
              <h3 className="mb-2 text-sm font-semibold text-slate-900">Deskripsi</h3>
              <p className="text-sm leading-relaxed text-zinc-600">{detail.fullDescription}</p>
            </section>

            {certification.tags && certification.tags.length > 0 && (
              <section>
                <h3 className="mb-3 text-sm font-semibold text-slate-900">Kategori</h3>
                <div className="flex flex-wrap gap-1.5">
                  {certification.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {detail.credentialUrl && (
              <a
                href={detail.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-sky-200 bg-sky-50 px-4 py-2.5 text-sm font-medium text-sky-700 transition-colors hover:bg-sky-100"
              >
                <ExternalLink size={16} />
                {detail.credentialLabel ?? "Lihat Sertifikat"}
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
