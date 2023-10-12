/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '940px',
    },
    extend: {
      colors: {
        'retink-grey': '#463D61'
      }
    },
  },
  plugins: [],
}