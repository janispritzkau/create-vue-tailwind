import { Config } from "tailwindcss";

export default {
  darkMode: "selector",
  content: ["./**/*.html", "./src/**/*.{ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
