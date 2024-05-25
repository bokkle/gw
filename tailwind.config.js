/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'mystery-quest': ['Mystery Quest', 'system-ui'],
      },
      animation: {
        'spin-slow': 'spin 7s linear infinite',
      },
    },
  },
  plugins: [],
};
