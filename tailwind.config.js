/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    purge: [],
    extend: {
      spacing: {
        128: "32rem",
        168: "42rem",
      },
      colors: {
        Blue: "hsl(192, 45%, 57%)",
        DarkBlue: "hsl(192, 34%, 44%)",
        Green: "hsl(93, 53%, 58%)",
        LightGreen: "hsl(101, 33%, 80%)",
        DarkGreen: "hsl(93, 53%, 40%)",
        Red: "hsl(358, 58%, 58%)",
        DarkRed: "hsl(358, 41%, 42%)",
        Purple: "hsl(285, 45%, 57%)",
        BlueGrey: "hsl(192, 10%, 90%)",
        LightBlueGrey: "hsl(200, 12%, 95%)",
        DarkBlueGrey: "hsl(190, 12%, 39%)",
        WhiteBG: "hsl(0, 0%, 100%)",
        BlackBG: "hsl(0, 0%, 10%)",
        LightBlueBlack: "hsl(0, 0%, 20%)",
        BlueBlack: "hsl(0, 0%, 17%)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
