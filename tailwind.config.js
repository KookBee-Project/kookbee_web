/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      minWidth: {
        10: "10rem",
        12: "12rem",
        15: "15rem",
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
    },
  },
  plugins: [],
};
