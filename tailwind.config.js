/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'detail-name': '#081F32'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        'header': '3.75rem',
        'logo': '12.5rem', // Define el tamaño de altura personalizado que necesitas
        'max-h-card': '15.25rem',
        'detail-img': '18.75rem'
      },
      width: {
        'logo': '37.5rem',
        'max-w-card': '15rem',
        'detail-img': '18.75rem'
      }
    },
  },
  plugins: [],
}
