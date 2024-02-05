/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },

    extend: {
      gridTemplateRows: {
        gridList: "auto auto 1fr auto",
      },
    },
  },
  plugins: [],
};
