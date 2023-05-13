/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        10: "10rem",
        12: "12rem",
        20: "20rem",
        30: "30rem",
        40: "40rem",
      },
      minHeight: {
        10: "10rem",
        12: "12rem",
        30: "30rem",
        40: "40rem",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(-1000px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "slide-right": "slide 1s ease-in-out",
      },
    },
  },
  plugins: [],
});
