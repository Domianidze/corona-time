module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        300: '75rem',
        200: '50rem',
        130: '32.5rem',
      },
      colors: {
        'dark/100': '#010414',
        'dark/60': '#808189',
        'dark/20': '#E6E6E7',
        'dark/6': '#F6F6F7',
        'dark/4': '#F6F6F7',
        'brand/primary': '#2029F3',
        'brand/secondary': '#0FBA68',
        'brand/teritary': '#EAD621',
        'system/success': '#249E2C',
        'system/error': '#CC1E1E',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        firaGO: ['firaGO', 'sans-serif'],
      },
      fontSize: {
        '2.1xl': '1.55rem',
        '4.2xl': '2.4rem',
      },
    },
  },
  plugins: [require('@tailwindcss/custom-forms')],
};
