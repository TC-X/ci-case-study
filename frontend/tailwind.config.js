// NOTE:
// react-scripts doesn't support ts-config files
// tailwind.config.ts doesn't get rendered

import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    keyframes: {
      'loading-bar': {
        '0%': { maxWidth: '0%', opacity: 0 },
        '100%': { maxWidth: '100%', opacity: 1 },
      },
    },
    animation: {
      'loading-bar': 'loading-bar 0.6s ease-out',
    },
    scale: {
      98: '.98',
    },
  },
  plugins: [typography],
}

export default config
