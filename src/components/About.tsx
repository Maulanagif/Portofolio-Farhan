import Image from "next/image";
import { Download } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { SocialIcon } from "@/components/icons/SocialIcon";

export function About() {
  return (
    <section id="about" className="section-padding section-muted relative">
      <div className="content-width">
        <Reveal variant="slide-left">
          <SectionHeader
            title="Tentang Saya"
            subtitle="Mengenal lebih dekat siapa saya dan apa yang saya kerjakan."
          />
        </Reveal>

        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          <Reveal variant="scale-up" delay={120} className="w-full md:w-auto md:shrink-0">
            <div className="flex items-center gap-4 md:block">
              <div className="w-28 shrink-0 overflow-hidden border border-zinc-200 bg-slate-200 sm:w-32 md:w-40 md:rounded-lg">
                <div className="relative aspect-[3/4] w-full bg-slate-200 md:aspect-[4/5]">
                  <Image
                    src={siteConfig.profileImage}
                    alt={`Foto ${siteConfig.name}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 112px, 160px"
                    priority
                  />
                </div>
                <div className="hidden border-t border-sky-200 bg-sky-50 px-3 py-3 md:block">
                  <p className="text-xs font-semibold leading-tight text-slate-900">
                    {siteConfig.name}
                  </p>
                  <p className="mt-0.5 text-[10px] leading-snug text-sky-700">
                    {siteConfig.title}
                  </p>
                </div>
              </div>

              <div className="min-w-0 flex-1 md:mt-3">
                <p className="text-sm font-semibold leading-tight text-slate-900 md:hidden">
                  {siteConfig.name}
                </p>
                <p className="mt-1 text-xs leading-snug text-zinc-500 md:hidden">
                  {siteConfig.title}
                </p>
                <a
                  href={siteConfig.locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center gap-2 text-xs leading-relaxed text-zinc-500 transition-colors hover:text-sky-700"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                    <SocialIcon type="location" className="h-full w-full" />
                  </span>
                  <span>{siteConfig.location}</span>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal variant="slide-right" delay={200} className="min-w-0 flex-1">
            <div className="border-t border-zinc-200 pt-6 md:border-t-0 md:pt-0">
              {siteConfig.about.map((paragraph, i) => (
                <p
                  key={i}
                  className="mb-4 text-justify text-sm leading-[1.75] text-zinc-700 last:mb-0 md:text-left md:text-base"
                >
                  {paragraph}
                </p>
              ))}

              <div className="flex flex-col gap-3 pt-6 sm:flex-row">
                <a href="#contact" className="btn-primary w-full justify-center sm:w-auto">
                  Mari Berkolaborasi
                </a>
                <a
                  href={siteConfig.cv}
                  download={siteConfig.cvDownloadName}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full justify-center gap-2 sm:w-auto"
                >
                  <Download size={16} />
                  Download CV
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
