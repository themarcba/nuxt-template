const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    // Custom font sizes
    fontSize: {
      xs: '.8rem',
      sm: '1rem',
      tiny: '1rem',
      base: '1.2rem',
      lg: '1.4rem',
      xl: '1.75rem',
      '2xl': '2rem',
      '3xl': '2.2rem',
      '4xl': '2.7rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },

    extend: {
      // You can cefine colors here, you can then access as
      // bg-accent, text-accentContrast, border-secondary, etc
      colors: {
        surface: '#fff',
        elevatedSurface: '#f9f3ff',
        accent: '#8213b4',
        accentContrast: '#fff',
        primary: '#000',
        secondary: '#777',
        success: '#2ecc71',
        danger: '#e74c3c',
        warning: '#e67e22',
        info: '#3498db',
      },
      fontFamily: {
        // You can define fonts here
        sans: ['Asap', ...defaultTheme.fontFamily.sans],
        serif: ['Glegoo', ...defaultTheme.fontFamily.serif],
      },
    },
    variants: {
      background: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    },
  },
}
