 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./*.html"],
   theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976',
      xl:'1440px'
    },
     extend: {
      colors:{
        brightRed:'hsl(12,88%,59%)',
        brightRedLight:'hsl(12,88%,69%)',
        brightRedSupLight:'hsl(12,88%,95%)',
        darkBlue:'hsl(228,39%,23%)',
        darkGrayishBlue:'hsl(227,12%,61%)',
        veryDarkBlue:'hsl(223,12%,13%)',
        veryPaleRed:'hsl(13,100%,96%)',
        veryLightGrey:'hsl(0,0%,98%)',
       
      }
     },
   },
   plugins: [],
 }