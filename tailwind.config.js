/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f5f1ed',
        'cream-light': '#faf8f5',
        'cream-dark': '#e8e3de',
        taupe: '#8b8680',
        'taupe-light': '#a89f99',
        gold: '#c9a961',
        'gold-light': '#d4b776',
        brown: '#5c4033',
        'brown-light': '#8b6f47',
      },
      fontFamily: {
        serif: ['Garamond', 'Georgia', 'serif'],
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        '8': '0.5rem',
        '16': '1rem',
        '24': '1.5rem',
        '32': '2rem',
        '40': '2.5rem',
        '48': '3rem',
        '56': '3.5rem',
        '64': '4rem',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
    },
  },
  plugins: [],
};
