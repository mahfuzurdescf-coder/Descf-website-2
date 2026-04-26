import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#eef7f1",
          100: "#d9eadf",
          500: "#2f6f4e",
          700: "#16452f",
          900: "#092116"
        },
        earth: {
          100: "#efe4d2",
          300: "#c8a46b",
          700: "#6e4f28"
        },
        cream: "#f7f1e6",
        charcoal: "#111713"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(9, 33, 22, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
