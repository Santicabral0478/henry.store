/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'eerie-black': '#1a1a1a',
      },
      spacing: {
        1: "8px",
        2: "12px",
        3: "16px"
      }
    },
  },
  plugins: [],
}

