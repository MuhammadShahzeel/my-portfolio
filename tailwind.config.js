/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "769px",
      lg: "1025px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {
      colors: {
        primary: "#141414",
        secondary: "#8D29EC",
      },
      fontFamily: {
        heading: ["Merriweather", "serif"],
        body: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
