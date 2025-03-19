/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
    },
    screens: {
      'smob': '320px',

      'mmob': '375px',

      'lmob': '400px',

      'desk': '640px',

      'sm': '700px',
      
      'md': '768px',
    
      'lg': '1024px',
    
      'xl': '1280px',
   
      '2xl': '1536px',

      '3xl': '2150px'
      
    }
  },
  plugins: [],
}
