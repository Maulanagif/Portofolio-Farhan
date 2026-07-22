"use client";

import { useMemo, useState } from "react";

/** Path logo di folder public — disesuaikan dengan nama file yang ada */
const ICON_PATHS: Record<string, string> = {
  HTML5: "/Logo_HTML 5.webp",
  CSS3: "/Logo_CSS3.webp",
  JavaScript: "/skills/javascript.webp",
  TypeScript: "/skills/typescript.webp",
  "React Native": "/logo_ReactNative.png",
  "Next.js": "/Logo_Nextjs.png",
  "Tailwind CSS": "/Logo_TailwindCSS.webp",
  "PHP (Native)": "/Logo_PHP.webp",
  "Node.js": "/Logo_NodeJS.png",
  MySQL: "/Logo_MySQL.png",
  Firebase: "/logo_Firebase.png",
  "Visual Studio Code": "/skills/visual-studio-code.webp",
  Cursor: "/Logo_Cursor.png",
  Antigravity: "/Google-Antigravity-Icon-Full-Color.png",
  XAMPP: "/skills/xampp.png",
  "Microsoft Office": "/Logo_MicrosoftOffice.png",
  Wireshark: "/Logo_Wireshark.png",
  VirtualBox: "/skills/virtualbox.png",
  "Cisco Packet Tracer": "/skills/cisco-packet-tracer.png",
  Figma: "/Logo_Figma.png",
};

function getLocalIconSources(name: string) {
  const path = ICON_PATHS[name];
  return path ? [path] : [];
}

interface SkillIconProps {
  name: string;
  className?: string;
}

export function SkillIcon({ name, className = "h-7 w-7" }: SkillIconProps) {
  const sources = useMemo(() => getLocalIconSources(name), [name]);
  const [sourceIndex, setSourceIndex] = useState(0);

  if (sourceIndex >= sources.length) {
    return (
      <span
        className={`${className} flex items-center justify-center rounded-md bg-slate-100 text-[10px] font-bold text-slate-500 uppercase`}
        aria-hidden="true"
      >
        {name.slice(0, 2)}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={sources[sourceIndex]}
      alt=""
      className={`${className} object-contain object-center`}
      loading="lazy"
      draggable={false}
      onError={() => setSourceIndex((i) => i + 1)}
    />
  );
}
