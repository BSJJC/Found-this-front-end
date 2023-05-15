/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      boxShadow: {
        "box": "10px 10px 60px 10px rgba(0, 0, 0, 0.3)"
      }
    },
  },
  plugins: [],
}
