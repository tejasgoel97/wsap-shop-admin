module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", 'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {
      colors:{
        "theme-100":"red",
        "primary": "#588157",
        "secondary":"#dad7cd"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
