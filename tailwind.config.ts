import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy:    "#0F172A",
          blue:    "#2563EB",
          sky:     "#0EA5E9",
          amber:   "#F59E0B",
          emerald: "#10B981",
          slate:   "#475569",
        },
        primary: {
          DEFAULT: "#2563EB",
          50:  "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          900: "#1E3A8A",
        },
        amber: {
          DEFAULT: "#F59E0B",
          50:  "#FFFBEB",
          100: "#FEF3C7",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
        },
        navy: {
          DEFAULT: "#0F172A",
          800: "#1E293B",
          700: "#334155",
          600: "#475569",
        },
      },
      fontFamily: {
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-hero":    "linear-gradient(135deg, #0F172A 0%, #1E3A8A 50%, #0F172A 100%)",
        "gradient-amber":   "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
        "gradient-brand":   "linear-gradient(135deg, #2563EB 0%, #0EA5E9 100%)",
        "gradient-emerald": "linear-gradient(135deg, #10B981 0%, #059669 100%)",
        "grid-pattern":     "linear-gradient(rgba(37,99,235,0.05) 1px, transparent 1px), linear-gradient(to right, rgba(37,99,235,0.05) 1px, transparent 1px)",
      },
      animation: {
        "float":       "float 4s ease-in-out infinite",
        "float-delay": "float 5s ease-in-out infinite 1.5s",
        "float-slow":  "float 6s ease-in-out infinite 0.5s",
        "pulse-glow":  "pulseGlow 3s ease-in-out infinite",
        "shimmer":     "shimmer 2s linear infinite",
        "slide-up":    "slideUp 0.6s ease forwards",
        "counter":     "counter 2s ease-out forwards",
        "spin-slow":   "spin 8s linear infinite",
        "ping-slow":   "ping 2s cubic-bezier(0,0,0.2,1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-14px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%":      { opacity: "0.7", transform: "scale(1.06)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        slideUp: {
          "0%":   { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        "glow-blue":   "0 0 30px rgba(37, 99, 235, 0.3)",
        "glow-amber":  "0 0 30px rgba(245, 158, 11, 0.4)",
        "glow-green":  "0 0 20px rgba(16, 185, 129, 0.3)",
        "card-hover":  "0 20px 40px rgba(15, 23, 42, 0.15)",
        "card-blue":   "0 8px 32px rgba(37, 99, 235, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
