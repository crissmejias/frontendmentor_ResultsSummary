/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".//**/*.{html,js}"],
  theme: {
    extend: {
     colors:{
      //Primary
      "light-red": '#ff5757',
      "orangey-yellow": '#ffb01f',
      "green-teal": '#00bd91',
      "cobalt-blue": '#1125d4',
      //Gradients
      "light-royal-blue": '#2e2be9',
      "light-slate-blue": '#7857ff',
      "violet-blue": '#4e21ca',
      "persian-blue": '#2421ca00',
      //Neutrals
      "white:": '#fff',
      "pale-blue": '#ebf1ff',
      "light-lavender": '#c8c7ff',
      "dark-gray-blue": '#303b5a',
     }
    },
  },
  plugins: [],
}