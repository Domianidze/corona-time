module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark/100': '#010414',
        'dark/60': '#808189',
        'dark/20': '#E6E6E7',
        'brand/secondary': '#0FBA68',
        'brand/primary': '#2029F3',
      },
      fontSize: {
        '2.5xl': '1.5rem',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/custom-forms')],
};
