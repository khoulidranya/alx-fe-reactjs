/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Updated purge paths
  theme: {
    extend: {}, // Add custom styles if needed
  },
  plugins: [], // Add Tailwind plugins if needed
};
