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
        },
      },
    },
  plugins: [],
}
)

