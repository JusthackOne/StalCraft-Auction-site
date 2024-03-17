module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lazure: "#1611F5",
        darkBlue: "#080B2A",
        'darkBlue-900': "#090A19",
        red: "#8B3232",
        "light-red": "#51111",
        pink: "#D628C4",
        gray: "#B3B3B3",
        'gray-300': "#636B6F",
        "red-20": "#8B3232",
        dark: "#090909",
        'darkLight': 'rgb(13, 13, 13, 0.4)',
        'light': 'rgb(255, 255, 255, 0.05)'
      },
      fontFamily: {
        inter: ["inter", "sans-serif"], // Здесь 'sans-serif' - это fallback шрифт
      },
    },
  },
  variants: {},
  plugins: [],
};
