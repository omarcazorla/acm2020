import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        warm: '#f3f1ea',
        'primary-text': '#F36611',
        primary: {
          DEFAULT: '#E67E22',
          50: '#FCF0E6',
          100: '#F9E1CC',
          200: '#F3C399',
          300: '#EDA566',
          400: '#E78733',
          500: '#E67E22',
          600: '#C56A1A',
          700: '#945013',
          800: '#62350D',
          900: '#311B06',
        },
        secondary: {
          DEFAULT: '#1E3A5F',
          50: '#E8EDF3',
          100: '#D1DBE7',
          200: '#A3B7CF',
          300: '#7593B7',
          400: '#476F9F',
          500: '#1E3A5F',
          600: '#182E4C',
          700: '#122339',
          800: '#0C1726',
          900: '#060C13',
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-stix)', 'Georgia', 'serif'],
        accent: ['var(--font-instrument-serif)', 'Georgia', 'serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
