import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0f172a", // Slate 900
          navyLight: "#1e293b", // Slate 800
          amber: "#f59e0b", // Amber 500 (Industrial safety tone)
          amberHover: "#d97706", // Amber 600
          concrete: "#64748b", // Slate 500
          lightGrey: "#f8fafc", // Slate 50
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
