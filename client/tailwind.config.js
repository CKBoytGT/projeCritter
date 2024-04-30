/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: [
        "Montserrat",
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      display: ['"Cherry Bomb One"'],
    },
    extend: {
      height: {
        screen: ["100vh /* fallback for Opera, IE and etc. */", "100dvh"],
      },
    },
  },

  plugins: [require("tailwind-scrollbar")],
};
