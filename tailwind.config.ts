import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {},
      colors: {},
      width: {
        tablet: "640px",
        laptop: "1024px",
        desktop: "1440px",
      },
      maxWidth: {
        tablet: "640px",
        laptop: "1024px",
        desktop: "1440px",
      },
      screens: {
        tablet: "640px",
        laptop: "1024px",
        desktop: "1440px",
        "pointer-fine": { raw: "(pointer: fine)" },
        "pointer-coarse": { raw: "(pointer: coarse)" },
      },
    },
  },
  plugins: [],
} satisfies Config;
