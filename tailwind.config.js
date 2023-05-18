/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "500px",
      md: "768px",
      lg: "900px",
      xl: "1150px",
      xl2: "1600px",
      xl3: "1920px",
    },
    fontFamily: {
      main: ["Montserrat", "sans-serif"],
    },
    extend: {
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, 260px)",
        fluid2: "repeat(auto-fit, 280px)",
        fluid3: "repeat(auto-fit, 320px)",
      },

      boxShadow: {
        light: "0 0 5px #1c7ed6",
        dark: "0 0 5px #1c7ed6",
      },
      colors: {
        background: "#f8f9fa",
        primary: "#1c7ed6",
        paragraph: "#343a40",
        heading: "#343a40",
        card: "#e9ecef",
        border: "#ced4da",
        footer: "#dee2e6",
        //dark
        dbackground: "#181a1c",
        dprimary: "#1c7ed6",
        dparagraph: "#adb5bd",
        dheading: "#f8f9fa",
        dcard: "#212529",
        dborder: "#4A4A4A",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
