"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/data/portfolio";
import { HeroBackground } from "@/components/HeroBackground";

export function Hero() {
  const [displayName, setDisplayName] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const name = siteConfig.name;

    if (!isDeleting && displayName.length === name.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else {
      timeout = setTimeout(() => {
        if (!isDeleting) {
          setDisplayName(name.slice(0, displayName.length + 1));
        } else if (displayName.length > 0) {
          setDisplayName(displayName.slice(0, -1));
        } else {
          setIsDeleting(false);
        }
      }, isDeleting ? 50 : 90);
    }

    return () => clearTimeout(timeout);
  }, [displayName, isDeleting]);

  return (
    <section
      id="home"
      className="relative section-padding section-padding-hero overflow-hidden"
    >
      <HeroBackground />

      <div className="content-width w-full relative z-10">
        <div className="max-w-2xl">
          <div className="flex items-start gap-5 md:gap-8">
            <div className="hidden sm:block w-px shrink-0 bg-sky-400/60 self-stretch min-h-[12rem]" />

            <div className="flex-1 min-w-0">
              <span className="inline-block px-3 py-1 mb-5 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-zinc-500 border border-zinc-200 rounded-sm opacity-0 animate-fade-in [animation-fill-mode:forwards]">
                {siteConfig.title}
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold tracking-tight leading-[1.15] mb-6 min-h-[2.4em] text-slate-900 max-w-xl">
                <span className="font-normal">Halo, saya </span>
                <span className="font-bold">{displayName}</span>
                <span className="inline-block w-px h-[0.85em] bg-sky-400 ml-1 align-middle animate-blink" />
              </h1>

              <p className="text-sm md:text-base text-zinc-600 leading-relaxed mb-8 opacity-0 animate-slide-up stagger-2 [animation-fill-mode:forwards]">
                {siteConfig.bio}
              </p>

              <div className="flex flex-wrap items-center gap-3 opacity-0 animate-slide-up stagger-3 [animation-fill-mode:forwards]">
                <a href="#projects" className="btn-primary">
                  Lihat Proyek
                </a>
                <a href="#contact" className="btn-secondary">
                  Hubungi Saya
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
