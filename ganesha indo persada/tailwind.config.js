/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { 
        merriweather: ['Merriweather', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
    }
      
    },
  },
  plugins: [],
}

