/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      colors: {
        page: '#FAF9F6',
        surface: '#FFFFFF',
        dark: {
          DEFAULT: '#111827',
          card: '#121214',
          subtle: '#1F2937'
        },
        brand: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        }
      },
      boxShadow: {
        'soft': '0 12px 36px -8px rgba(0, 0, 0, 0.07)',
        'hover': '0 20px 48px -12px rgba(217, 119, 6, 0.16)',
        'apple': '0 24px 60px -15px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'float-slow': 'floatSlow 6s ease-in-out infinite alternate',
      },
      keyframes: {
        floatSlow: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

