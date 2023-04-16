const { withAnimations } = require('animated-tailwindcss')

module.exports = withAnimations({
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [],
})

