/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'], // Override default sans font
      },
      colors: {
        text: {
          default: 'white',
        },
      },
      boxShadow: {
        'custom-shadow': '0 4px 6px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}
