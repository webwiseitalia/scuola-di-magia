/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: {
          DEFAULT: '#1A1A3E',
          light: '#252560',
          dark: '#111130',
        },
        purple: {
          deep: '#2D1B4E',
          light: '#4A2D7A',
        },
        gold: {
          DEFAULT: '#C8A951',
          light: '#E0C878',
          dark: '#A68A3E',
        },
        parchment: {
          DEFAULT: '#F5E6C8',
          light: '#FBF3E4',
          dark: '#E8D4A8',
        },
        bordeaux: {
          DEFAULT: '#8B1A1A',
          light: '#A52A2A',
        },
      },
      fontFamily: {
        serif: ['"Cinzel"', 'Georgia', 'serif'],
        display: ['"Cinzel Decorative"', '"Cinzel"', 'Georgia', 'serif'],
        body: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(200, 169, 81, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(200, 169, 81, 0.6)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
