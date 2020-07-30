module.exports = {
  purge: {
    enabled: process.env.NODE_ENV !== 'development',
    mode: 'all',
    content: [
      'src/**/*.tsx','src/**/*.html',
      'samples/sample-react/src/**/*.tsx',
      'samples/sample-vue/src/**/*.vue'
    ],
    // passed to PurgeCSS
    options: { 
      whitelist: []
    }
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
