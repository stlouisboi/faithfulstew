/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        cream: {
          DEFAULT: '#FDFCFB',
          dark: '#F8F7F4',
        },
        navy: '#1B222C',
        ink: {
          DEFAULT: '#1B222C',
          secondary: '#4A5568',
          tertiary: '#718096',
        },
        gold: '#D4AF37',
        border: {
          light: '#EAE7E1',
          dark: '#2D3748',
        },
      },
    },
  },
  plugins: [],
}
