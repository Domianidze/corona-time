module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        300: '75rem',
      },
      colors: {
        'dark/100': '#010414',
        'dark/60': '#808189',
        'dark/20': '#E6E6E7',
        'dark/6': '#F6F6F7',
        'brand/secondary': '#0FBA68',
        'brand/primary': '#2029F3',
        'system/success': '#249E2C',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '2.1xl': '1.55rem',
      },
    },
  },
  plugins: [require('@tailwindcss/custom-forms')],
};
