module.exports = {
  content: ['./src/pages/**/*.{html,js,astro}', './src/components/**/*.{html,js,astro}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
};
