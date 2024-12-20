/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Active le mode sombre via la classe "dark"
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Inclut tous les fichiers JS et JSX
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        scaleUp: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.3)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out",
        blink: "blink 1.5s infinite",
        "slide-up": "slideUp 0.8s ease-out",
        "scale-up": "scaleUp 2s ease-in-out", // Animation lente sur 3 secondes
      },
      transitionDuration: {
        1500: "1500ms", // Durée de transition pour 3 secondes
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
