/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx,jfif}",
  ],
  theme: {
    extend: {
      boxShadow: {
        neon: '0 0 10px #3232326d, 0 0 20px #3232326d, 0 0 30px #3232326d, 0 0 40px #3232326d',
        neonInset: 'inset 0 0 10px #3232326d, inset 0 0 20px #3232326d, inset 0 0 30px #3232326d, inset 0 0 40px #3232326d',
      }
    }
  },
  plugins: [],
}

