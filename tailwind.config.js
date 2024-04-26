/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["League Spartan", "sans-serif"],
    },
    extend: {
      colors: {
        "dark-brown": "#1E1205",
        "light-dark-brown": "#291C0E",
        "light-brown": "#844E18",
      },
    },
  },
  plugins: [],
};
