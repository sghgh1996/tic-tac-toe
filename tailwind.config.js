// const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // plugin(function({ addVariant, e }) {
    //   addVariant('child(3)', ({ modifySelectors, separator }) => {
    //     modifySelectors(({ className }) => {
    //       return `.${e(`child(3)${separator}${className}`)}:nth-child(3)`
    //     })
    //   })
    // })
  ]
}