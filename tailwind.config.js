module.exports = {
  content: [],
  theme: {
    extend: {
      spacing: {
        '80%': '80%'
      },
      boxShadow: {
        'orange-glow': '0px 0px 20px 2px rgba(237,150,0,0.9);'
      },
      colors: {
        'brand-primary': '#142B76',
        'brand-lighter': '#3D529A',
        'highlight-primary': '#FFC700'
      }
    },
  },
  plugins: [],
  purge: {
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
