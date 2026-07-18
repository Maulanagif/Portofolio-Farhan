"use client";

import { experiences } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

function ExperienceDescription({
  description,
}: {
  description: string | string[];
}) {
  if (Array.isArray(description)) {
    return (
      <ul className="space-y-2.5">
        {description.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm text-zinc-600 leading-relaxed">
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500"
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p className="text-sm text-zinc-600 leading-relaxed">{description}</p>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section-padding section-gray relative">
      <div className="content-width relative z-10">
        <Reveal variant="fade-up">
          <SectionHeader
            title="Pengalaman"
            subtitle="Perjalanan pendidikan dan pengalaman profesional yang membentuk kompetensi saya."
          />
        </Reveal>

        <div className="relative space-y-5">
          {experiences.map((exp, index) => (
            <Reveal
              key={exp.role}
              variant={index % 2 === 0 ? "slide-left" : "slide-right"}
              delay={index * 100}
              threshold={0.08}
            >
              <div className="relative pl-9 md:pl-11">
                {index < experiences.length - 1 && (
                  <span
                    className="absolute left-[10px] md:left-[12px] top-12 bottom-0 w-px bg-sky-200"
                    aria-hidden="true"
                  />
                )}

                <span
                  className="absolute left-0 top-6 flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 border-sky-400 bg-white shadow-sm"
                  aria-hidden="true"
                >
                  <span className="h-2 w-2 rounded-full bg-sky-500" />
                </span>

                <article className="rounded-2xl border-2 border-zinc-200 bg-white p-5 sm:p-6 shadow-sm card-hover">
                  <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold text-slate-900">{exp.role}</h3>
                      <p className="mt-1 text-sm font-medium text-zinc-700">{exp.company}</p>
                    </div>
                    <span className="inline-flex w-fit shrink-0 items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
                      {exp.period}
                    </span>
                  </div>

                  <div className="h-px w-full bg-zinc-100 mb-4" aria-hidden="true" />

                  <ExperienceDescription description={exp.description} />
                </article>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
