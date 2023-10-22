/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
      extend: {
        colors: {
          primary: "#4A3AFF",
        },
        scale: {
          '-100': '-1',
        },
        fontFamily: {
          'manrope': 'Manrope',
        },  
        backgroundImage: {
          'pageJoint'  : "url('assets/mainassets/pageJoint.png')",
        },
        screens: {
          '3xl': '1700px',
        },
  
      },
    },
  plugins: [],
}
)

