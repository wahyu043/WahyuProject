/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./public/*.html",
    "./src/**/*.{js,ts}"
  ],
  safelist: [
    'glow-spot'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

