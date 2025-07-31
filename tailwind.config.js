// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./{app,components,libs,pages,hooks}/**/*.{html,js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{app,components,libs,pages,hooks}/**/*.{html,js,ts,jsx,tsx}"],
  darkMode: 'class', // ⬅️ এটা না থাকলে dark: ক্লাস কাজ করবে না
  theme: {
    extend: {},
  },
  plugins: [],
}
