/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        'gray-50': '#fafafa',
        'gray-100': '#f5f5f5',
        'gray-900': '#1a1a1a',
      },
    },
  },
  plugins: [],
}
