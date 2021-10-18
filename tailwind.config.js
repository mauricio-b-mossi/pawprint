module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      rotate: {
        720: "720deg",
      },
      minHeight: {
        slider: "calc(100vh - 132px)",
      },
      gridTemplateRows: {
        // Simple 8 row grid
        8: "repeat(8, minmax(0, 1fr))",
      },
      width: {
        "2xl": "42rem",
        xl: "36rem",
        lg: "32rem",
        md: "28",
      },
    },
  },
  variants: {
    extend: {
      padding: ["hover"],
      scale: ["hover", "group-hover"],
      rotate: ["hover", "group-hover"],
      translate: ["active", "group-hover"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
