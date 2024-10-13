/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primarycolor:'#4c2776',
        secondarycolor:'#7e418c',
        tertiarycolor:'#592e7c',
        bgmodaloverlay:'rgba(76, 39, 118, .5)',
      },
      backgroundImage:{
        btnprimary:'linear-gradient(97.62deg, #482574 3.07%, #81428D 97.66%)',
        bgsidebar:'linear-gradient(164.41deg, #4C2776 1.43%, #7E418C 101.45%)',
        bgWelcome:'url("./public/assets/images/welcome.png")',
        bgty:'url("./public/assets/images/thankyou.jpeg")',
        
      },
      fontFamily:{
        'gotham-medium':['gotham_medium'],
        'gotham-black':['gotham_black'],
      }
    },
  },
  plugins: [],
}

