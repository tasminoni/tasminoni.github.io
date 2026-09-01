/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        void: '#080808',
        surface: {
          DEFAULT: '#121212',
          light: '#181818',
          border: '#27272A',
          hover: '#222225',
        },
        crimson: {
          DEFAULT: '#F44849',
          hover: '#E03435',
          glow: 'rgba(244, 72, 73, 0.35)',
        },
        flame: '#FF4C24',
        accent: '#F44849',
        paper: '#F4F1EE',
        muted: '#71717A',
        steel: '#A1A1AA',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', '-apple-system', 'sans-serif'],
        display: ['Syne', 'Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
