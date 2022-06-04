module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#d5e549",

          secondary: "#F91944",

          accent: "#0f7d8c",

          neutral: "#201A2D",

          "base-100": "#EEEFF1",

          info: "#81C1F8",

          success: "#16A271",

          warning: "#976D11",

          error: "#F66A96",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
