/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fcfefe",
        primary: "#1f2b6c",
        lightsteelblue: {
          "100": "#bfd2f8",
          "200": "#a6b8de",
        },
        secondary: "#159eec",
        black: "#202124",
        black1: "#000",
        gray: {
          "100": "#fafdfe",
          "200": "rgba(252, 254, 254, 0.2)",
          "300": "rgba(0, 0, 0, 0.19)",
          "400": "rgba(252, 254, 254, 0.8)",
          "500": "rgba(255, 255, 255, 0.5)",
        },
        silver: {
          "100": "#c4c4c4",
          "200": "#bebebe",
        },
        whitesmoke: "#f1f1f1",
        darkgray: "#9c9c9c",
        darkslateblue: {
          "100": "#525e9e",
          "200": "rgba(31, 43, 108, 0.6)",
        },
        cornflowerblue: "rgba(21, 158, 236, 0.01)",
        turquoise: "#02ddcd",
      },
      spacing: {},
      fontFamily: {
        body: "'Work Sans'",
        "display-2": "'Yeseva One'",
        "display-3": "'Poppins'",
      },
      borderRadius: {
        "8xs": "5px",
        "31xl": "50px",
      },
    },
    fontSize: {
      base: "1rem",
      lg: "1.125rem",
      "17xl": "2.25rem",
      "3xl": "1.375rem",
      "10xl": "1.813rem",
      sm: "0.875rem",
      "13xl": "2rem",
      lgi: "1.188rem",
      "7xl": "1.625rem",
      "2xl": "1.313rem",
      "29xl": "3rem",
      "19xl": "2.375rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      xl: {
        max: "1300px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      mq4502: {
        raw: "screen and (min-width: 450px)",
      },
      sm: {
        raw: "screen and (max-width: 640px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
