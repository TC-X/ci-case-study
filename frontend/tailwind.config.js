// react-scripts doesn't support ts-config
// tailwind.config.ts doesn't get rendered

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
