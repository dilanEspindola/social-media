/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      xs: "320px",
      sm: "400px",
      md: "600px",
      lg: "1000px",
      xl: "1440px",
    },
  },
  plugins: [require("daisyui")],
};
