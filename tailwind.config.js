/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: require('./.tailwind/colors')
    },
  },
  plugins: [],
  presets: [require("nativewind/preset")],
}

