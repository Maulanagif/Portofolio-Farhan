import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        muted: "var(--muted)",
        card: "var(--card)",
        border: "var(--border)",
        sky: {
          50: "#f7f9fb",
          100: "#eef2f6",
          200: "#dde5ec",
          300: "#c5d1db",
          400: "#a9bac7",
          500: "#8fa3b3",
          600: "#7a8f9f",
          700: "#667a89",
          800: "#566773",
          900: "#485660",
          950: "#3a464f",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-down": "slideDown 0.5s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        shimmer: "shimmer 3s ease-in-out infinite",
        "gradient-x": "gradientX 4s ease infinite",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
        "line-grow": "lineGrow 1.2s ease-out forwards",
        wiggle: "wiggle 1s ease-in-out infinite",
        blob: "blob 12s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "grid-move": "gridMove 20s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)" },
          "100%": { boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        lineGrow: {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(24px, -20px) scale(1.04)" },
          "66%": { transform: "translate(-16px, 16px) scale(0.96)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        gradientShift: {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" },
        },
        gridMove: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(48px, 48px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
