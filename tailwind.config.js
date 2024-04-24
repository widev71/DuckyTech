/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js,jsx}", "public/index.html"],
  theme: {
    extend: {},
    fontFamily: {
      'Inter': ['Inter', 'sans-serif'],
      'Kanit' :['Kanit', 'sams-serif']
    },
    colors: {
      'primary': '#763EE7',
      'primary-hover' :'#482A83',
      'white' : '#ffff',
      'white-mute' : '#C0C0C0',
      'dark-card-hover': '#191919',
      'dark-primary' : '#161616',
      'dark-button-card' : '#212121',
      'dark-decoration' : '#181818',
      'dark-shadow' :'#131313',
      'dark-decoration-contact' : '#303030'
    },
  },
  plugins: [],
}
