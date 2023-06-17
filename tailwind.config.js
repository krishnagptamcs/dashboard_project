/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Helvetica' : ["Helvetica" , "normal"],
        'Helvitica-rounded': ["Helvetica", "rounded"]
      }
    },
  },
  plugins: [],
}