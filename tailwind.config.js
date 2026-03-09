/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      colors: {
        blue: {
          500: "#3b82f6",
          600: "#2563eb",
        }
      },
    },
  },
  plugins: [],
}