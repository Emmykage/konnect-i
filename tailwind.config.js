/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(224, 217, 212, 1)"
      },
      backgroundColor: {
        primary: "rgba(224, 217, 212, 1)",
        alt: "rgba(153, 189, 255, 1)",
        "primary-var": "rgba(248, 241, 238, 1)",
        "theme-purple": "rgba(197, 161, 255, 1)",
        "theme-purple-light": "rgba(198, 208, 248, 1)"
      }
    },
  },
  plugins: [],
}

