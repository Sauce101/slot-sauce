/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'red-seven': "url('/src/assets/images/slot7.svg')",
      },
    },
  },
  plugins: [],
}
