/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f0abfc",

          secondary: "#fbbf24",

          accent: "#f472b6",

          neutral: "#885773",

          "base-100": "#e6cbdd",

          info: "#ea580c",

          success: "#14b8a6",

          warning: "#dc2626",

          error: "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
