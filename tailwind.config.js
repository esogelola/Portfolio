/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-180": { transform: "rotateY(180deg)" },
  });
});
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Geist Variable"', "system-ui", "sans-serif"],
        mono: ['"PT Mono"', "ui-monospace", "monospace"],
      },
      colors: {
        paper: { DEFAULT: "#f9f9f1", card: "#ffffff", dark: "#191817", "dark-card": "#24231f", "dark-raised": "#2a2824" },
        parchment: { DEFAULT: "#f2eee5", soft: "#c8c1b5", faint: "#8f887d" },
        ink: { DEFAULT: "#1a1a1a", soft: "#525252", faint: "#8a8a8a" },
        accent: {
          security: "#059669", // emerald-600
          ml: "#7c3aed",       // purple-600
          finance: "#d97706",  // amber-600
          product: "#2563eb",  // blue-600
        },
      },
      borderRadius: { bubble: "1.6rem", pill: "2rem" },
      boxShadow: {
        sheet: "0 2px 6px rgba(20,20,30,0.04), 0 12px 32px -8px rgba(20,20,30,0.08)",
        lift: "0 6px 16px rgba(20,20,30,0.06), 0 24px 60px -12px rgba(20,20,30,0.14)",
        "night-sheet": "0 1px 0 rgba(255,248,235,0.025), 0 18px 40px -24px rgba(0,0,0,0.78)",
        "night-lift": "0 1px 0 rgba(255,248,235,0.035), 0 26px 70px -26px rgba(0,0,0,0.88)",
      },
      borderColor: { hair: "#e5e5e0", "hair-dark": "#3a3731" },
    },
  },
  plugins: [rotateY],
};
