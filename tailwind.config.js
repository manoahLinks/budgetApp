/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/texture-scratch-1.png')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

