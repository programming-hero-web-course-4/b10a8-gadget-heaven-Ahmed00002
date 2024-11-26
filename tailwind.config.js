/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      colors: {
        primaryColor: "#9538E2",
        paraColor: "rgba(9, 8, 15, 0.6)",
        cameraBg: "rgba(255, 255, 255, 0.3)",
        stockButtonColor: "rgba(48, 156, 8, 0.1)",
      },
    },
  },
  plugins: [daisyui],
};
