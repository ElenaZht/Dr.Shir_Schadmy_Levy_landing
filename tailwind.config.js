/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2c5aa0',
          dark: '#1e4080',
        },
        gray: {
          light: '#f8f9fa',
          medium: '#666',
        }
      },
      fontFamily: {
        'sans': ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      boxShadow: {
        'navbar': '0 2px 10px rgba(0, 0, 0, 0.1)',
        'button': '0 3px 10px rgba(44, 90, 160, 0.3)',
        'button-hover': '0 5px 15px rgba(44, 90, 160, 0.4)',
        'mobile': '0 5px 15px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #2c5aa0 0%, #1e4080 100%)',
        'gradient-primary-reverse': 'linear-gradient(135deg, #1e4080 0%, #2c5aa0 100%)',
      }
    },
  },
  plugins: [],
}
