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
        DEFAULT: "20px",
      },
    },
    extend: {
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
        mat: {
          red: "#F23A2F",
          pink: "#E61A58",
          purple: "#9123A6",
          "deep-purple": "#5C33AE",
          indigo: "#3748AC",
          blue: "#1D8BF1",
          "light-blue": "#009FF2",
          cyan: "#00B4CE",
          teal: "#008B7D",
          green: "#43A547",
          "light-green": "#80BB41",
          lime: "#C6D732",
          yellow: "#FFE734",
          amber: "#FFB80C",
          orange: "#FF8D05",
          "deep-orange": "#FF4C1F",
          brow: "#6E4B3F",
          grey: "#949393",
          "grey-light": "#F0F0F0",
          "blue-grey": "#567280",
          black: "#000000",
          white: "#FFFFFF",
        },
        accent: {
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
        "contact-pattern":
          "linear-gradient(rgba(0, 0, 0, 0.75),rgba(0, 0, 0, 0.7)), url('~/assets/img/contact.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
