import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        workflow: "0 15px 40px -15px #008080",
        workflowHover: "0 15px 40px -15px #f8f32b",
        servicesHover: "0 15px 30px -10px #008080",
      },
      colors: {
        gray: "#333333",
        teal: "#008080",
        yellow: "#f8f32b",
        azure: "#ebfcfb",
        lightGray: "#d3d3d3",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        // "hero-img": "url('../public/herobg.jpg')",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        carousel: "marquee 60s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
