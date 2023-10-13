/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'primary' : "url('/src/assets/images/primary.jpg')",
      }
    },
  },
  plugins: [],
};
