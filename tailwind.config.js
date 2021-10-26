const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: [],
  //   purge: [
  //   './components/**/*.{vue,js}',
  //   './layouts/**/*.vue',
  //   './pages/**/*.vue',
  //   './plugins/**/*.{js,ts}',
  //   './nuxt.config.{js,ts}',
  // ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "24px",
      },
    },
    extend: {
      padding: {
        60: "60px",
        90: "90px",
        120: "120px"
      },
      boxShadow: {
        "inset-1": "inset 0 2px 4px 0 rgb(206 209 224 / 20%)"
      },
      height: {
        "screen-full": "calc(100vh - 80px)"
      },
      minHeight: {
        "screen-full": "calc(100vh - 80px)",
        120: "120px",
      },
      colors: {
        foreground: {
          DEFAULT: "#212121",
          light: "#484848",
          dark: "#000000",
        },
        background: {
          DEFAULT: "#fafafa",
          light: "#ffffff",
          dark: "c7c7c7",
        },
        blue: {
          DEFAULT: "#1D8BF1",
          light: "#009FF2",
        },
        green: {
          DEFAULT: "#43A547",
          light: "#80BB41"
        },
        accent: {
          DEFAULT: "#162125",
          1: "#eaeaea"
        }
      },
      maxWidth: {
        "80-ch": "80ch",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Spectral", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url('~/assets/img/homepage/hero-alt.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
