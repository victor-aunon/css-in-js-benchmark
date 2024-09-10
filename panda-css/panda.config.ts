import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx,astro}", "./pages/**/*.{js,jsx,ts,tsx,astro}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        fonts: {
          base: { value: "Montserrat" },
        },

        fontSizes: {
          body: { value: "1rem" },
          subTitle: { value: "1.1em" },
          huge: { value: "2.5em" },
          heading: { value: "1.5em" },
          title: { value: "1.2em" },
          small: { value: "0.8em" },
        },

        fontWeights: {
          thin: { value: 100 },
          light: { value: 300 },
          normal: { value: 400 },
          bold: { value: 600 },
          extraBold: { value: 800 },
        },

        sizes: {
          none: { value: "0" },
          small: { value: "0.5rem" },
          medium: { value: "1rem" },
          big: { value: "2rem" },
          large: { value: "3rem" },
          xlarge: { value: "5rem" },
          xxlarge: { value: "8rem" },
        },

        radii: {
          fullRounded: { value: "50%" },
          small: { value: "0.5rem" },
          medium: { value: "1rem" },
          big: { value: "2rem" },
        },

        colors: {
          black: { value: "#000" },
          white: { value: "#fff" },
          transparent: { value: "transparent" },
          gray: { value: "#aaa" },
          danger: { value: "#eb5757" },
          success: { value: "#46c076" },
          warning: { value: "#f1b604" },
          primaryColor: { value: "#79bf79" },
          secondaryColor: { value: "#3c7e3c" },
          textColor: { value: "#566a7f" },
          titleColor: { value: "#566a7f" },
          labelColor: { value: "#566a7f" },
          placeholderColor: { value: "#444" },
          backgroundColor: { value: "#fff" },
          textAlternativeColor: { value: "#fff" },
          disabled: { value: "#ccc" },
          shadow: { value: "#cbcbcb" },
          buttonHover: { value: "#eaeaea" },
          calendarHighlight: { value: "#d5ebd5" },
          item1: { value: "#00B1D8" },
          item2: { value: "#F1B604" },
          item3: { value: "#A22A7E" },
          item4: { value: "#79BF79" },
          item5: { value: "#EC6A56" },
          item6: { value: "#345995" },
          admin: { value: "#C62828" },
          therapist: { value: "#2E7D32" },
          guardian: { value: "#0277BD" },
          patient: { value: "#212121" },
          homeBackgroundColor: { value: "#f6fbf7" },
          actionColor: { value: "#a22a7e" },
          skeletonDarkColor: { value: "#ececec" },
          skeletonLightColor: { value: "#f5f5f5" },
          reportColor10: { value: "#FF0000" },
          reportColor20: { value: "#FFA500" },
          reportColor30: { value: "#E8E84A" },
          reportColor60: { value: "#45BA6E" },
          reportColor100: { value: "#4DBAEC" },
        },

        shadows: {
          down: { value: "0em 0.5rem 0.7rem" },
          downSmall: { value: "0em 0.25rem 0.35rem" },
          right: { value: "0.5rem 0rem 0.7rem" },
          left: { value: "-0.5rem 0rem 0.7rem" },
          downRight: { value: "0.5rem 0.5rem 0.7rem" },
          downLeft: { value: "-0.5rem 0.5rem 0.7rem" },
          center: { value: "0rem 0rem 0.7rem" },
        },

        animations: {
          default: { value: "0.2s ease-in-out" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  // The JSX framework to use
  jsxFramework: "react",

  // The CSS Syntax to use to use
  // syntax: "template-literal",
});
