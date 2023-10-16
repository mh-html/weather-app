/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'primary' : "url('/src/assets/images/primary.jpg')",
        'cloudy' : "url('/src/assets/images/cloudy.jpg')",
        'rainy' : "url('/src/assets/images/rainy.jpg')",
        'snow' : "url('/src/assets/images/snow.jpg')",
        'clear' : "url('/src/assets/images/clear.jpg')",
        'thunder' : "url('/src/assets/images/thunder.jpg')",
        'dust' : "url('/src/assets/images/dust.jpg')",
        'haze' : "url('/src/assets/images/haze.jpg')",
        'dizzle' : "url('/src/assets/images/dizzle.jpg')",
      }
    },
  },
  plugins: [],
};
