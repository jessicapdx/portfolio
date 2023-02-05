/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#EBEDEC",

          secondary: "#03ba92",

          accent: "#f2b424",

          neutral: "#24292D",

          "base-100": "#BEABE3",

          info: "#48B9EA",

          success: "#71EAE0",

          warning: "#EC9909",

          error: "#F8443A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
