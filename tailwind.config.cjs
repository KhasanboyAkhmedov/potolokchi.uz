/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'vsm': [{ 'min': '300px','max' : '350px'}],
      'xsm': [{ 'min': '430px','max' : '640px'}],
      '3xl': '1800px'
    },
    extend: {
      colors: {
        gradientStart: '#BB824A',
        gradientEnd: '#E9C775',
      },
      fontFamily: {
        siteFont: ["TTHovesProTrial", "sans-serif"],
        specialFont: ["TTHovesProTrialExpandedLight", "sans-serif"],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
});
