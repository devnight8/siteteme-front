/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'selector',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#5A6AF2",
        backgroundColor: "#FBFBFB",
        title: "#A7A7A7",
        blackSite: "#1D1D1D",
        graytext: "#E3E3E3",
      },
      backgroundImage: {
        "intro-img": "url('assets/img/hexa-spiral.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
    animation: {
      'infinite-scroll': 'infinite-scroll 25s linear infinite',
    },
    keyframes: {
      'infinite-scroll': {
        from: {transform: 'translateX(0)'},
        to: {transform: 'translateX(-100%)'},
      }
    }
  },
  plugins: [
    require('tailwindcss-animated'),
    require('daisyui'),
  ],

};
