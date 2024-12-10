/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
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
          'floralbg'  : "url('assets/mainassets/bgfloral.jpg')",

        },
        screens: {
          '3xl': '1700px',
        },
  
      },
    },
  plugins: [],
}
)

