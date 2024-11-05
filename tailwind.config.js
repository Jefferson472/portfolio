// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3C3D40',
        secondary: '#D7D7D9',
        accent: '#666A73',
        dark: '#222326',
        lightGray: '#9FA3A6',
        contrast: '#FFC107',
      },
    },
  },
  plugins: [],
}
