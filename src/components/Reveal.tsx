"use client";

import { useInView } from "@/hooks/useInView";
import type { ReactNode } from "react";

export type RevealVariant =
  | "fade-up"
  | "slide-left"
  | "slide-right"
  | "scale-up"
  | "blur-in"
  | "clip-up"
  | "flip-up";

interface RevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
  threshold?: number;
}

export function Reveal({
  children,
  variant = "fade-up",
  delay = 0,
  className = "",
  threshold = 0.12,
}: RevealProps) {
  const { ref, isVisible } = useInView(threshold);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      data-visible={isVisible}
      className={`reveal reveal-${variant} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
