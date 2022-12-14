/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        "white": "#FFFFFF",

        "background": "#FAFAFA",
        "base-card": "#F3F2F2",
        "base-input": "#EDEDED",
        "base-button": "#E6E5E5",
        "base-hover": "#D7D5D5",
        "base-label": "#8D8686",
        "base-text": "#574F4D",
        "base-subtitle": "#403937",
        "base-title": "#272221",

        "purple-light": "#EBE5F9",
        "purple": "#8047F8",
        "purple-dark": "#4B2995",
        "yellow-light": "#F1E9C9",
        "yellow": "#DBAC2C",
        "yellow-dark": "#C47F17",
      },
      fontFamily: {
        "baloo2": ["Baloo-2", "cursive"],
        'roboto': ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '0px 4px 4px rgba(0, 0, 0, 0.25)'
      },
      borderWidth: {
        '1': '1px'
      },
      backgroundImage: {
        "border-gradient": "linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%)"
      }
    },
  },
  plugins: [],
}
