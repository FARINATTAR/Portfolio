module.exports = {
  variants: {
    extend: {
      textColor: ['hover'], // Ensure hover variants are enabled
      textDecoration: ['hover'],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        dela: ['"Dela Gothic One"', 'serif'],
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      animation: {
        'slide-in': 'slide-in 1s ease-out',
      },
    },
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
};
