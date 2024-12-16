import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#8B5CF6",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#F97316",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#D946EF",
          foreground: "#ffffff",
        },
        comic: {
          blue: "#0EA5E9",
          purple: "#E5DEFF",
          peach: "#FDE1D3",
        },
      },
      keyframes: {
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "squish": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.9, 1.1)" },
        },
        "writing": {
          "0%": { "stroke-dashoffset": "1000" },
          "100%": { "stroke-dashoffset": "0" },
        },
        "pop": {
          "0%": { transform: "scale(0)", opacity: "0" },
          "80%": { transform: "scale(1.1)", opacity: "0.8" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "float": "float 3s ease-in-out infinite",
        "squish": "squish 0.5s ease-in-out",
        "writing": "writing 2s linear forwards",
        "pop": "pop 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      fontFamily: {
        comic: ["Comic Sans MS", "cursive"],
        handwriting: ["Permanent Marker", "cursive"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;