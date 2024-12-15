/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Specify files to scan for classes
  darkMode: "class", // Enable dark mode using the "class" strategy
  theme: {
    extend: {}, // Extend the default Tailwind theme if needed
  },
  variants: { // Explicitly define variants
    extend: {}, // Extend variants for utilities (e.g., hover, focus)
  },
  plugins: [], // Add any Tailwind plugins here if needed
};
