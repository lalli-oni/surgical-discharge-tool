module.exports = {
  content: [],
  theme: {
    extend: {
      spacing: {
        '80%': '80%'
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
