// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeUp: "fadeUp 1s ease-out forwards",
        fadeIn: "fadeIn 1.5s ease-out forwards",
      },
      fontFamily: {
        montserrat: ['"Montserrat Alternates"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
