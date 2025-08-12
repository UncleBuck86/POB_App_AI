import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef7ff",
          100: "#d9ecff",
          200: "#bcdcfe",
          300: "#90c6fd",
          400: "#5aa7fb",
          500: "#3189f7",
          600: "#1e6eea",
          700: "#1a59c8",
          800: "#1a4ba2",
          900: "#1a407f"
        }
      }
    }
  },
  darkMode: "class",
  plugins: []
} satisfies Config;
