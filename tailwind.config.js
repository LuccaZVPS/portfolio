/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "500px",
      md: "768px",
      lg: "900px",
      xl: "1250px",
      xl2: "1600px",
      xl3: "1920px",
    },
    fontFamily: {
      main: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        background: "#f1f3f5",
        primary: "#1c7ed6",
        paragraph: "#495057",
        heading: "#212529",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
