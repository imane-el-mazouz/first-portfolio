import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#9500ff",
          light: "#b347ff",
          dark: "#6d00bf",
        },
        surface: {
          DEFAULT: "var(--c-surface)",
          raised: "var(--c-surface-raised)",
          border: "var(--c-surface-border)",
        },
        white: "var(--c-white)",
        zinc: {
          200: "var(--c-zinc-200)",
          300: "var(--c-zinc-300)",
          400: "var(--c-zinc-400)",
          500: "var(--c-zinc-500)",
          600: "var(--c-zinc-600)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
