/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'hero-thumb-sm-animation': 'slideX 2s linear infinite alternate',

      },
      keyframes: {
        slideX: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(20px)' },
        }
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
