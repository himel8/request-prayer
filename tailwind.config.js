/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "'Manrope', sans-serif",
      },
      backgroundImage: {
        mainBg: "url('assets/img/bg.png')",
      },
      backgroundSize: {
        full: "100% 100%",
      },
      screens: {
        custom1610: "1610px",
        custom1329: "1329px",
        custom1183: "1183px",
        custom1160: "1160px",
        custom1105: "1105px",
        custom950: "950px",
      },
    },
  },
  plugins: [],
};
