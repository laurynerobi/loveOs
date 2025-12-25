/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '0.7', transform: 'translateY(0px)' },
          '50%': { opacity: '1', transform: 'translateY(-2px)' },
        },
      },
      animation: {
        shimmer: 'shimmer 3s ease-in-out infinite',
      },
    },
  },
}
