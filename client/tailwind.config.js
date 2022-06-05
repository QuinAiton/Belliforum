module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideMenu: {
          '0%': {
            transform: 'translatex(0)'
          },
          '50%': {
            transform: 'translatex(25vw)'
          },
          '100%': {
            transform: 'translatex(50vw)'
          }

        },
      },
      animation: {
        slideMenu: 'slideMenue 3s ease-in-out infinite',
      },
      colors: {
        primary: '#015450',
        secondary: '#ffffff',
        tertiary: '##a0138e',

      },
      fontFamily: {
        exo: ['Exo', 'sans-serif']
      },
      backgroundImage: {
        'hero-image': "url('/assets/headerImage.jpg')",
        'solutions-image': "url('/assets/solutions.jpg')",
        'yacht-image': "url('/assets/yacht.jpg')",
      }
    }
  },
  plugins: [],
};
