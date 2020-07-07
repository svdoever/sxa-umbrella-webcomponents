module.exports = {
  purge: {
    enabled: process.env.NODE_ENV !== 'development',
    mode: 'all',
    content: ['src/**/*.tsx','src/**/*.html'],
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
