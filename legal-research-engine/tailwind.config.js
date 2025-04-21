// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',    // Include all the pages
    './components/**/*.{js,ts,jsx,tsx}',  // Include all the components
    './app/**/*.{js,ts,jsx,tsx}',       // If you're using the app directory in Next.js 13+
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a1a1a', // Dark background
        'light-bg': '#ffffff', // Light background
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  },
  plugins: [],
};
