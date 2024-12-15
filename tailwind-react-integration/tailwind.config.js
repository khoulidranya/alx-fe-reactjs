/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Paths for purging unused styles
  darkMode: "class", // Enable dark mode with the "class" strategy
  theme: {
    extend: {}, // Extend the default theme here
  },
  variants: {
    extend: {}, // Add or extend variants for utilities
  },
  plugins: [], // Add plugins if needed
};
