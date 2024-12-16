/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Active le mode sombre via la classe "dark"
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Inclut tous les fichiers JS et JSX
  ],
  theme: {},
  plugins: [require("@tailwindcss/line-clamp")],
};
