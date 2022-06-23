/** @type {import('tailwindcss').Config} */
{
  import("tailwindcss").Config;
}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
      colors: {
        dribble: "#a7d9c8",
        dribblesh: "##cbd4a1",
        dribbledark: "#607f75",
        dbcontrast: "#d4afa1",
      },

      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        md: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
        xl: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;",
      },
    },
  },
  plugins: [],
},
}
