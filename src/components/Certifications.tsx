"use client";

import { useState } from "react";
import { Award } from "lucide-react";
import { certifications, type Certification } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { CertificationDetailModal } from "@/components/CertificationDetailModal";

function getCoverImage(cert: Certification) {
  return cert.detail.images[0] ?? null;
}

export function Certifications() {
  const [selectedCertification, setSelectedCertification] = useState<Certification | null>(
    null
  );

  return (
    <section id="certifications" className="section-padding section-muted relative">
      <div className="content-width relative z-10">
        <Reveal variant="blur-in">
          <SectionHeader
            title="Sertifikasi"
            subtitle="Kumpulan sertifikat dan pelatihan yang saya ikuti untuk meningkatkan kompetensi profesional."
          />
        </Reveal>

        {certifications.length === 0 ? (
          <Reveal variant="fade-up" delay={120}>
            <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-zinc-300 bg-white px-6 py-14 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sky-50 text-sky-600">
                <Award size={28} />
              </div>
              <p className="text-sm font-medium text-slate-900">Belum ada sertifikat ditambahkan</p>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-500">
                Tambahkan data sertifikat di{" "}
                <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-xs text-zinc-700">
                  src/data/portfolio.ts
                </code>{" "}
                dan letakkan foto di folder{" "}
                <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-xs text-zinc-700">
                  public/sertifikat/
                </code>
                .
              </p>
            </div>
          </Reveal>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2">
            {certifications.map((cert, index) => {
              const cover = getCoverImage(cert);

              return (
                <Reveal
                  key={cert.id}
                  variant="scale-up"
                  delay={index * 70}
                  threshold={0.08}
                  className="h-full"
                >
                  <article className="group project-card flex h-full flex-col overflow-hidden rounded-2xl border-2 border-zinc-200 bg-white shadow-sm">
                    <div className="relative h-40 shrink-0 overflow-hidden border-b border-zinc-200 bg-zinc-100">
                      {cover ? (
                        <>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={encodeURI(cover.src)}
                            alt={cover.alt}
                            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                            loading="lazy"
                            draggable={false}
                            onError={(event) => {
                              event.currentTarget.style.display = "none";
                            }}
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </>
                      ) : (
                        <div className="flex h-full items-center justify-center text-sky-600/40">
                          <Award size={48} strokeWidth={1.25} />
                        </div>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <span className="text-[10px] font-medium uppercase tracking-wider text-sky-600">
                        {cert.subtitle}
                      </span>
                      <h3 className="mt-1 text-base font-semibold text-slate-900">
                        {cert.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">
                        {cert.description}
                      </p>
                      {cert.tags && cert.tags.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {cert.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded border border-zinc-200 px-2 py-0.5 text-xs text-zinc-500"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <button
                        type="button"
                        onClick={() => setSelectedCertification(cert)}
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
        )}
      </div>

      <CertificationDetailModal
        certification={selectedCertification}
        onClose={() => setSelectedCertification(null)}
      />
    </section>
  );
}
