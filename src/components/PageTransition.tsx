"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    el.classList.remove("page-enter");
    void el.offsetWidth;
    el.classList.add("page-enter");
  }, [pathname]);

  return (
    <div ref={containerRef} className="page-enter page-transition-root">
      {children}
    </div>
  );
}
