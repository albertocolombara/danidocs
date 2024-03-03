/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'astrid-regular': ['Astrid Grotesk Regular', 'sans-serif'],        
        'astrid-light': ['Astrid Grotesk Light', 'sans-serif'],
        'cormorant': ['Cormorant', 'serif'],
      },
    },
  },
  plugins: [],
}