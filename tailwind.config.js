/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'mystery-quest': ['Mystery Quest', 'system-ui'],
      },
    },
  },
  plugins: [],
};
