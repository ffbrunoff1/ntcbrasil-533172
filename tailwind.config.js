/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#57ACDF',
        secondary: '#FFFFFF',
        'dark-blue': '#2E7DAF',
        'light-gray': '#F0F4F8',
        'text-dark': '#1E293B',
        'text-light': '#F8FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 20px 30px -10px rgba(87, 172, 223, 0.4)',
      },
      backgroundImage: {
        'hero-pattern':
          "url('https://www.transparenttextures.com/patterns/concrete-wall.png')",
      },
    },
  },
  plugins: [],
};
