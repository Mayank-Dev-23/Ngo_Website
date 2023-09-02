/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     
      colors:{
        primary:'#138999', //primary website color
        seconday:'#DF5311' // secondary website color
      },
      fontFamily: {
      Inter: ['Inter', 'sans-serif'],
        
      },
    },
  },
  plugins: [],
}
