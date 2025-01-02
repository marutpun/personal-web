/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // colors: {
      //   foreground: "hsl(var(--foreground))",
      // },
      fontFamily: {
        inter: ['"Inter"', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  safelist: [
    {
      pattern: /alert--(success|danger)/,
    },
  ],
};
