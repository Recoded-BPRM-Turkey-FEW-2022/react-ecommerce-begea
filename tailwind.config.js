/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        opensans: ['Open Sans', 'sans-serif'],
      },
      backgroundColor: {
        avokado: '#f7f7f7',
        navbar: '#fcfaf8',
      },
      backgroundImage: {
        chair: 'url(./images/chair.png)',
      },
    },
  },
  plugins: [],
};
