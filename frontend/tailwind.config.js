// react-scripts doesn't support ts-config
// tailwind.config.ts doesn't get rendered

import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    scale: {
      98: '.98',
    },
  },
  plugins: [typography],
}

export default config
