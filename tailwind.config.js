/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          // light grey
          primary: "#EBEDEC",
          // success green
          secondary: "#03ba92",
          // dark purple
          accent: "#8125d8",
          // dark grey
          neutral: "#24292D",
          // lavender
          "base-100": "#BEABE3",
          // light blue
          info: "#48B9EA",
          // success green
          success: "#03ba92",
          // orange
          warning: "#EC9909",
          // red
          error: "#F8443A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
