/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#fff',
      black: '#000',
      coral: '#FF858D',
      eggshell: '#F3EFE0',
      gray: {
        DEFAULT: '#30343F',
        dark: '#1B2021'
      },
      xanadu: '#7D8570',
    },
    extend: {},
  },
  plugins: [],
}
