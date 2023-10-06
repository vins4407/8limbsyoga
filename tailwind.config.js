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
        backgroundImage: {
          Hero: "url('assets/hero.jpg')",
          'bg-pattern1': "url('assets/mainassets/bg1.jpeg')",
          'bg-pattern2': "url('assets/mainassets/bg2.jpg')",
          'bg-pattern3': "url('assets/mainassets/bg3.jpg')",
          'bg-pattern4': "url('assets/mainassets/bg4.jpg')",
          'bg-pattern5': "url('assets/mainassets/bg5.png')",
          'bg-pattern6': "url('assets/mainassets/bg6.png')",
          'pageJoint': "url('assets/mainassets/pageJoint.png')",




        },
      },
    },
  plugins: [],
}
)

