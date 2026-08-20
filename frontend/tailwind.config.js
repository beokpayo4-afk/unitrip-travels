/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1F3A',
          light: '#122B52',
          dark: '#081527'
        },
        gold: {
          DEFAULT: '#E8873C',
          light: '#F5A662',
          dark: '#C9701F'
        },
        offwhite: '#FAF8F5',
        charcoal: '#22262B'
      },
      fontFamily: {
        heading: ['Poppins', 'Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(11,31,58,0.18)',
        soft: '0 4px 20px rgba(11,31,58,0.08)'
      }
    },
  },
  plugins: [],
}
