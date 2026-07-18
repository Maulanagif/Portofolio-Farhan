"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

const SECTION_LABELS: Record<string, string> = {
  home: "Beranda",
  about: "Tentang",
  skills: "Keahlian",
  projects: "Proyek",
  experience: "Pengalaman",
  certifications: "Sertifikasi",
  contact: "Kontak",
};

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function smoothScrollTo(targetY: number, duration = 900) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  function step(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutExpo(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

export function SectionTransitionProvider({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState<"idle" | "enter" | "exit">("idle");
  const [activeSection, setActiveSection] = useState("home");
  const isAnimating = useRef(false);

  const navigateToSection = useCallback((href: string) => {
    if (isAnimating.current) return;

    const target = document.querySelector(href);
    if (!target) return;

    const sectionId = href.replace("#", "");
    isAnimating.current = true;
    setActiveSection(sectionId);
    setPhase("enter");

    window.setTimeout(() => {
      const navbarOffset = 80;
      const targetTop =
        target.getBoundingClientRect().top + window.scrollY - navbarOffset;

      smoothScrollTo(Math.max(0, targetTop), 1200);
      setPhase("exit");
    }, 650);

    window.setTimeout(() => {
      setPhase("idle");
      isAnimating.current = false;
    }, 1900);
  }, []);

  useEffect(() => {
    const handleClick = (event: Event) => {
      const anchor = (event.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href?.startsWith("#") || href.length < 2) return;

      event.preventDefault();
      navigateToSection(href);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [navigateToSection]);

  const label = SECTION_LABELS[activeSection] ?? "";

  return (
    <>
      {children}
      <div
        aria-hidden="true"
        className={`section-transition ${
          phase === "enter"
            ? "section-transition-active"
            : phase === "exit"
              ? "section-transition-exit"
              : ""
        }`}
      >
        <div className="section-transition-panel" />
        <div className="section-transition-content">
          <div className="section-transition-loader" />
          <p className="section-transition-label">{label}</p>
        </div>
      </div>
    </>
  );
}
