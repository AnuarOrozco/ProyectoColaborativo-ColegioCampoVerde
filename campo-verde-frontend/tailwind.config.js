/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        verde: {
          DEFAULT: '#2e7d32',
          claro: '#66bb6a',
        },
      },
    },
  },
  plugins: [],
}

