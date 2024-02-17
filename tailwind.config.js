/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // Enable dark mode variants
  theme: {
    extend: {
      colors: {
        // Customize the color palette to match the brand in light mode
        primary: '#3498db',
        secondary: '#e74c3c',
        accent: '#f39c12',
        grey: '#F3F3F3',
        darkGrey: '#6B6B6B',
        purple: '#8B46FF',
        // Dark mode color palette
        dark: {
          primary: '#2980b9',
          secondary: '#c0392b',
          accent: '#e67e22',
          success: '#27ae60',
          info: '#2980b9',
          warning: '#f1c40f',
          danger: '#c0392b',
        },
      },
      fontFamily: {
        // Define font families for e-commerce content
        sans: ['Arial', 'sans'],
        serif: ['Georgia', 'serif'],
        inter: ["'Inter'", "sans-serif"],
        gelasio: ["'Gelasio'", "serif"]
      },
      fontSize: {
        // Define custom font sizes for headings, paragraphs, etc.
        'xs': '.8rem',
        'sm': '.8.5rem',
        'base': '.9.5rem',
        'lg': '1rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      fontWeight: {
        // Define custom font weights
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
      },
      letterSpacing: {
        // Define custom letter spacing values
        'tight': '-0.05em',
        'wide': '0.05em',
      },
      boxShadow: {
        // Define custom shadow styles
        sm: '0 1px 3px rgba(0, 0, 0, 0.1)',
        DEFAULT: '0 2px 4px rgba(0, 0, 0, 0.1)',
        md: '0 4px 6px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'], // Enable dark mode for background colors
      textColor: ['dark'],       // Enable dark mode for text colors
    },
  },
  plugins: [],
};
