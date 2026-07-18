"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/data/portfolio";

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full max-w-full overflow-x-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b py-3 shadow-sm shadow-sky-100 [border-color:var(--page-border-soft)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="content-width flex items-center justify-between">
        <a
          href="#home"
          className="relative block h-8 w-12 shrink-0 transition-opacity hover:opacity-85 sm:h-9 sm:w-14"
          aria-label={`${siteConfig.name} — Beranda`}
        >
          <Image
            src={siteConfig.logo}
            alt={`Logo ${siteConfig.name}`}
            fill
            className="object-contain object-left"
            sizes="56px"
            priority
          />
        </a>

        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative text-sm transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:transition-all after:duration-300 ${
                    isActive
                      ? "text-sky-600 after:w-full after:bg-sky-400"
                      : "text-zinc-500 hover:text-sky-600 after:w-0 hover:after:w-full after:bg-sky-400"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <a href="#contact" className="btn-primary text-xs px-4 py-2">
            Hubungi
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-zinc-500 hover:text-sky-600 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <div className="content-width pb-4">
          <div className="border-t border-zinc-200 bg-white rounded-lg p-5 shadow-lg shadow-sky-100">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-sm py-1 transition-colors ${
                      isActive ? "text-sky-600 font-medium" : "text-zinc-600 hover:text-sky-600"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li className="pt-2 border-t border-zinc-100">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex btn-primary text-xs w-full justify-center"
              >
                Hubungi
              </a>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
