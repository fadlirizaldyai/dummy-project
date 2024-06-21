import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "main-color": "#00539F",
        "secondary-color": "#DEEBFF",
        "main-text": "#2E3B41",
        "secondary-text": "#1F2123",
        "tertiary-text": "#4E5F80",
        "main-gray": "#F8F9FC",
        "bg-gray": "#E0E8FA",
        "tertiary-gray": "#D4DBE3",
        "line-gray": "#95989A",
        idle: "#A6ADB6",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
export default config;
