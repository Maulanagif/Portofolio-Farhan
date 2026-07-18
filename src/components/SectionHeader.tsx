interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  variant?: "light" | "dark";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = false,
  variant = "light",
  className = "",
}: SectionHeaderProps) {
  const isDark = variant === "dark";

  return (
    <div className={`mb-8 ${centered ? "text-center" : ""} ${className}`}>
      <div className={`flex items-start gap-4 ${centered ? "justify-center" : ""}`}>
        {!centered && (
          <div
            className={`hidden sm:block w-1 shrink-0 rounded-full self-stretch min-h-[2.5rem] ${
              isDark ? "bg-blue-500" : "bg-blue-500"
            }`}
          />
        )}
        <div className={centered ? "" : "flex-1 min-w-0"}>
          <h2
            className={`text-xl md:text-2xl font-semibold tracking-tight ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className={`text-sm mt-2 max-w-2xl leading-relaxed ${
                isDark ? "text-slate-400" : "text-zinc-500"
              } ${centered ? "mx-auto" : ""}`}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
      <div
        className={`mt-4 h-px w-full ${isDark ? "bg-zinc-700" : "bg-zinc-300"}`}
      />
    </div>
  );
}
