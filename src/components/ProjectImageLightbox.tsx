"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { ProjectImage } from "@/data/portfolio";

interface ProjectImageLightboxProps {
  images: ProjectImage[];
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
}

export function ProjectImageLightbox({
  images,
  index,
  onClose,
  onChange,
}: ProjectImageLightboxProps) {
  const image = images[index];
  const hasMultiple = images.length > 1;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft" && hasMultiple) {
        onChange((index - 1 + images.length) % images.length);
      }
      if (event.key === "ArrowRight" && hasMultiple) {
        onChange((index + 1) % images.length);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [images.length, hasMultiple, index, onChange, onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[300] flex flex-col bg-slate-950/95"
      role="dialog"
      aria-modal="true"
      aria-label="Tampilan gambar penuh"
    >
      <div className="flex shrink-0 items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <p className="min-w-0 truncate text-sm text-white/90">{image.alt}</p>
        <div className="flex items-center gap-2">
          {hasMultiple && (
            <span className="text-xs text-white/60 tabular-nums">
              {index + 1} / {images.length}
            </span>
          )}
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-white/20 p-2 text-white/80 transition-colors hover:border-white/40 hover:text-white"
            aria-label="Tutup tampilan penuh"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-4 pb-4 sm:px-12">
        <button
          type="button"
          className="absolute inset-0 -z-10"
          onClick={onClose}
          aria-label="Tutup tampilan penuh"
        />

        {hasMultiple && (
          <button
            type="button"
            onClick={() => onChange((index - 1 + images.length) % images.length)}
            className="absolute left-2 sm:left-4 rounded-full border border-white/20 bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Gambar sebelumnya"
          >
            <ChevronLeft size={22} />
          </button>
        )}

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={encodeURI(image.src)}
          alt={image.alt}
          className="max-h-[calc(100vh-7rem)] max-w-full object-contain"
          draggable={false}
        />

        {hasMultiple && (
          <button
            type="button"
            onClick={() => onChange((index + 1) % images.length)}
            className="absolute right-2 sm:right-4 rounded-full border border-white/20 bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Gambar berikutnya"
          >
            <ChevronRight size={22} />
          </button>
        )}
      </div>
    </div>,
    document.body
  );
}
