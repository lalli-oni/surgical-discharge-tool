module.exports = {
  theme: {
    extend: {
      spacing: {
        '80%': '80%',
        '60%': '60%',
        '50%': '50%'
      },
      maxWidth: {
        '40': '10rem'
      },
      boxShadow: {
        'orange-glow': '0px 0px 20px 2px rgba(237,150,0,0.9);'
      },
      colors: {
        'brand-primary': '#4538D4',
        'brand-lighter': '#3D529A',
        'highlight-primary': '#FFC700',
        'highlight-secondary': '#f5c242',
        'highlight-light': '#fcce4e'
      },
      animation: {
        'animate-ping-once': 'ping-once 3s cubic-bezier(0, 0, 0.2, 1)'
      },
      keyframes: {
        'ping-once': {
          '0%': { transform: 'scale(1);' },
          '50%': { transform: 'scale(5);' },
          '100%': { transform: 'scale(1);' },
        }
      }
    },
  },
  plugins: [],
  content: {
      enabled: !process.env.ROLLUP_WATCH,
      content: ['./public/index.html', './src/**/*.svelte'],
      options: {
          defaultExtractor: content => [
              ...(content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []),
              ...(content.match(/(?<=class:)[^=>\/\s]*/g) || []),
          ],
      }
  },
}
