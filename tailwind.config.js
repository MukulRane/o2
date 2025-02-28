// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#5663f3',
        'custom-orange': '#db6135',
        'custom-purple-50': 'rgba(86, 99, 243, 0.1)', // Custom purple with 50% opacity
        'custom-orange-50': 'rgba(219, 97, 53, 0.1)', // Custom orange with 50% opacity
        'background-base': '#010210', // Base background color
        'spot-gradient': '#051338',  // Gradient color for spots
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #db6135, #2d2d7e)',
        'spots-1': 'radial-gradient(circle, rgba(5, 19, 56, 1) 5%, rgba(5, 19, 56, 0) 70%)', // Small, dense spots
      },
      borderRadius: {
        '4xl': '2rem', // Define a new '4xl' size
        '5xl': '3rem', // Define a '5xl' size, and so on
      },
    },
  },
  plugins: [],
};
