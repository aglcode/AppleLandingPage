/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0D0E10",
        grayishDark: "#282728",
        mediumGray: "#4F5052",
        lightGray: "#C5C6C8",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

