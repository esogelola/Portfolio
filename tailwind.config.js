/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-20": {
      transform: "rotateY(20deg)",
    },
    ".rotate-y-40": {
      transform: "rotateY(40deg)",
    },
    ".rotate-y-60": {
      transform: "rotateY(60deg)",
    },
    ".rotate-y-80": {
      transform: "rotateY(80deg)",
    },
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
  });
});
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "egg-shell": "#ebeae8",
        nav: "#f7f4ed",
        "nav-hover": "#f0e9e0",
        "nav-active": "#ebe3d9",
      },
    },
  },
  plugins: [rotateY],
};
