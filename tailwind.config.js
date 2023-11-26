/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        'Inter': ['Inter', 'sans-serif']
      },
      backgroundColor: {
        'Off-White': ['hsl(36, 100%, 99%)'],
        'Grayish-blue' : ['hsl(233, 8%, 79%)'],
        'Dark-grayish-blue' : ['hsl(236, 13%, 42%)'],
        'Dark-grayish-blueV2' : ['hsla(236, 13%, 42%, 40%)'],
        'Very-dark-blue': ['hsl(240, 100%, 5%)'],

        'Soft-orange': ['hsl(35, 77%, 62%)'],
        'Soft-red': ['hsl(5, 85%, 63%)']
      },
      textColor: {
        'Off-White': ['hsl(36, 100%, 99%)'],
        'Grayish-blue' : ['hsl(233, 8%, 79%)'],
        'Dark-grayish-blue' : ['hsl(236, 13%, 42%)'],
        'Very-dark-blue': ['hsl(240, 100%, 5%)'],

        'Off-White': ['hsl(36, 100%, 99%)'],
        'Soft-orange': ['hsl(35, 77%, 62%)'],
        'Soft-red': ['hsl(5, 85%, 63%)']
      },
      fontSize: {
        '15': ['15px']
      },
      borderWidth: {
        '1': ['1px']
      }
    },
  },
  plugins: [],
}