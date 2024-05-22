/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
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
  },
  plugins: [],
};
