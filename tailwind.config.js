/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation:{
        smoothBounce: "smoothBounce 1s linear infinite",
      },
      keyframes:{
        smoothBounce: {
          "0%, 60%, 100%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(-6px)" },
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
