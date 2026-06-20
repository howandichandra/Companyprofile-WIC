/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Biru WIC asli dari poster
        wic: {
          50: '#EFF7FE',
          100: '#D9EBFC',
          200: '#B3D6F9',
          300: '#80BAF4',
          400: '#4D9EEF',
          500: '#0066CC',  // Primary blue WIC
          600: '#0054A8',
          700: '#003D7A',  // Deep blue untuk text
          800: '#002B57',
          900: '#001B3D',
          950: '#000F26',
        },
        sky: {
          tint: '#E8F2FB',  // Background section soft
        },
        // Red accent — sama kayak checkbox merah di poster
        ruby: {
          500: '#E11D48',
          600: '#BE123C',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'wic-glow': '0 20px 60px -15px rgba(0, 102, 204, 0.35)',
        'wic-soft': '0 8px 30px -10px rgba(0, 61, 122, 0.15)',
      },
    },
  },
  plugins: [],
}
