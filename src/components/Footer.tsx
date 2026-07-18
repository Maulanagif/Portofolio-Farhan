import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sky-600 border-t border-sky-400/60 py-8">
      <div className="content-width">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="text-sm font-medium text-white">{siteConfig.name}</p>
            <p className="text-xs text-sky-100/80 mt-1">{siteConfig.title}</p>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-sky-500/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-sky-100/90">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-xs text-sky-100/90 hover:text-white transition-colors group"
          >
            Kembali ke atas
            <ArrowUp
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
