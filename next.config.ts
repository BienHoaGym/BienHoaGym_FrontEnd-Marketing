// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DC2626", // Màu đỏ chủ đạo
      },
      fontFamily: {
        // Đảm bảo bạn đã import font này trong layout.tsx hoặc globals.css
        display: ['"Bebas Neue"', "sans-serif"], 
      },
      // Thêm các keyframes và animation mới
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "zoom-slow": {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(1.1)", // Zoom nhẹ lên 110%
          },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "zoom-slow": "zoom-slow 20s linear infinite alternate", // Zoom chậm trong 20s, lặp lại
      },
    },
  },
  plugins: [],
};
export default config;