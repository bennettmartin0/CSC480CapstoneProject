/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        "lotus-eden": ["lotus-eden", "sans-serif"],
        "allotrope-variable": ["allotrope-variable", "sans-serif"],
      },
    },
  },
  plugins: [],
};
