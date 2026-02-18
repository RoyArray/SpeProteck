/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A5F',
        secondary: '#2B4C8C',
        accent: '#2A9D8F',
        'text-body': '#7A7A7A',
        'dark-bg': '#0F1E2E',
        'light-bg': '#F8F9FA',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      fontWeight: {
        bold: '700',
      }
    },
    container: {
      center: true,
      padding: '1.5rem', // Default padding for all breakpoints (24px)
      screens: {
        // Custom screen sizes to match ~1152px max-width
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px', // Example: This breakpoint effectively uses a max-width slightly above the desired
        '2xl': '1152px', // Custom breakpoint for the desired max-width
      },
    },
  },
  plugins: [],
}
