/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Raleway"],
      },
      backgroundColor: {
        gray: "#222222",
        purple: "#4903fc",
      },
      textColor: {
        gray: "#222222",
        purple: "#4903fc",
      },
      borderColor: {
        gray: "#222222",
        purple: "#4903fc",
      },
    },
  },
  plugins: [],
};
