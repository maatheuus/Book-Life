/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];

export default {
  fontFamily: {
    sans: "Roboto Mono",
  },
  extend: {
    height: {
      screen: "100dvh",
    },
  },
  theme: {
    extend: {
      screens: {
        small: "485px",
        ms: "510px",
        big: "1150px",
      },
      colors: {
        primary: "#f28738",
        secondary: "#ffa15e",
      },
      fontFamily: {
        satisfy: ["Satisfy", "cursive", "serif"],
      },
    },
  },
};
export const plugins = ["prettier-plugin-tailwindcss"];
