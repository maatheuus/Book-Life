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
        "gray-primary": "#848484",
      },
      fontFamily: {
        satisfy: ["Satisfy", "cursive", "serif"],
      },
      animation: {
        toggle: "toggleMenu 300ms ease",
      },
      boxShadow: {
        img: "0px 4px 3px -2px rgb(0,0,0)",
      },
    },
  },
};
export const plugins = ["prettier-plugin-tailwindcss"];
