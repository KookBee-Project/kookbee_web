/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      minWidth: {
        10: "10rem",
        12: "12rem",
        20: "20rem",
        30: "30rem",
      },
      minHeight: {
        10: "10rem",
        12: "12rem",
        30: "30rem",
      },
    },
  },
  plugins: [],
};
