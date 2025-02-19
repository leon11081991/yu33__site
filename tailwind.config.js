/** @type {import('tailwindcss').Config} */
// import remToPx from 'tailwindcss-rem-to-px';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '390px',
      md: '768px',
      lg: '992px',
      xl: '1920px'
    },
    extend: {
      colors: {
        gray: {
          '01': '#2C2C2C',
          '02': 'rgba(#FFFFFF, 0.2)',
          '03': 'rgba(#FFFFFF, 0.5)',
          '04': 'rgba(#FFFFFF, 0.7)',
          '05': '#9A9A9A'
        }
      },
      fontSize: {
        h1: ['1.75rem', '45px'],
        h2: ['1.125rem', '2rem'],
        h3: ['1rem', '1rem'],
        h4: ['1rem', '2rem']
      },
      letterSpacing: {
        h1: '1px',
        h2: '0.5px',
        h3: '0.5px',
        h4: '0.5px'
      }
    }
  },
  plugins: [
    // remToPx()
  ]
}
