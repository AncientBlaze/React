/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    'flowbite/plugin'
  ],
  safelist: [
    "bg-green-600",
    "bg-red-600",
    "bg-blue-600",
    "bg-purple-600",
    "bg-amber-600",
  ]
}