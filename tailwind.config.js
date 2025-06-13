/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  darkMode: [ 'class', '[data-theme="dark"]' ],
  theme: {
    screens: {
      "2xs": "320px",
      "xs": "460px",
      ...defaultTheme.screens,
    },

    fontFamily: {
      notosans: ["NotoSans", "system-ui"],
      // systemui: ["system-ui", "sans-serif"],
      // 'serif': ["DM Sans", "serif"],
      // 'opensans': ["Open Sans", "system-ui"],
    },

    colors: {
      "mainbg-color": "#f9f8f4",
      "mainbg-color-dark": "#1e1e1e",

      "font-color-pri": "#37352f",
      "font-color-sec": "#20C20E",
      "font-color-white": "#FFFFFF",
      "font-color-green": "#20C20E",
      "font-color-green-dark": "#106107",
      "font-color-blue": "#55aff9",
      "font-color-blue-dark": "#146EBE",
      "font-color-blue-extra-dark": "#043c6e",
      "font-color-yellow": "#ffe075", 
      "font-color-yellow-dark":  "#f99c06",
      "font-color-orange": "#ff6424",
      "font-color-purple": "#B197FC",
      "font-color-purple-dark": "#6741D9",
      "font-color-violet": "#a570ff",
      "font-color-pink": "#E599F7",
      "font-color-pink-dark": "#9C36B5",
      "font-color-pink-extra-dark": "#631975",
      "font-color-red": "#ffa49e",
      "font-color-red-dark": "#E03131",
      "font-color-red-extra-dark": "#8a1313",
      "font-color-brown-light": "#6e6e6e",
      "font-color-brown": "#37352f",
      "font-color-dark": "#ebebeb",

      "link-color": "#e81c4f",
      
      "hover-color": "#6c757d",
      
      "navbar-color-pri": "#f4f2e9",
      "navbar-color-dark": "#121212",
      "color-transparent": "rgb(0,0,0,0)",

      "color-border-pri": "#9c9a97",
      "color-border-dark": "#6c757d",
    },

    extend: {
      borderWidth: {
        6: "6px",
      },

      maxWidth: {
        mdsm: "340px",
      },

      width: {
        120: "420px",
        152: "712px",
        200: "784px",
      },

      height: {
        18: "68px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  extend: {
    // typography: {
    //   DEFAULT: {
    //     css: {
    //     },
    //   },
    // },
  },
};
