/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // Logo-inspired color palette
        'logo-blue': {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6', // Main logo blue
          600: '#2563eb', // Darker logo blue
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        'sparkle': {
          'white': '#ffffff',
          'glow': '#f8fafc',
        }
      },
      fontFamily: {
        'logo': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'sparkle-delayed': 'sparkle 2s ease-in-out infinite 0.5s',
        'float-gentle': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        sparkle: {
          '0%, 100%': { 
            transform: 'scale(1) rotate(45deg)',
            opacity: '0.7'
          },
          '50%': { 
            transform: 'scale(1.3) rotate(45deg)',
            opacity: '1'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backgroundImage: {
        'logo-gradient': 'linear-gradient(to bottom, #3b82f6, #2563eb, #1d4ed8)',
        'sparkle-pattern': 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
};
