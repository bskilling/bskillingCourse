/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: "4rem",
    },

    extend: {
      colors: {
        gray: "#ffffcc",
        navyBlue: "#010b37",
        buttonBlue: "#300ffa",
        subText: "#666666",
        GreenText:"#10c277"
      },
      fontFamily: {
        RobotoMono: "Roboto Mono",
        Mynerve: "Mynerve",
      },
    },
  },
  plugins: [],
};
