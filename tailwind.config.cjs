/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'xsm': [{ 'min': '430px','max' : '640px'}]
    },
    extend: {
      fontFamily: {
        siteFont: ["TTHovesProTrial", "sans-serif"],
        specialFont: ["TTHovesProTrialExpandedLight", "sans-serif"]
      },
    },
  },
  plugins: [],
});
