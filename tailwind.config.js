/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryDark: "#014e56",
        primaryLight: "#f67e7e",
        secondaryBlue: "#79c8c7",
        secondaryDarkBlue: "#2c6269",
        secondaryDarkGreen: "#004047",
        secondaryDarkerGreen: "#012f34",
        secondaryDarkestGreen: "#002529",
      },
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
      screens: {
        sm: "375px",
        lsm: "600px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
        xxl: "1536px",
      },
    },
  },
  plugins: [],
};
