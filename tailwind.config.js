/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: "4rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      mycustombreakpoint: "960px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      
      colors: {
        gray: "#e9e9e9",
        navyBlue: "#010b37",
        buttonBlue: "#125582",
        // buttonBlue: "#300ffa",
        Buttoncolor: "#125582",
        subText: "#666666",
        GreenText: "#10c277",
      },
      fontFamily: {
        RobotoMono: "Roboto Mono",
        Mynerve: "Mynerve",
        SourceSans: ["Source Sans Pro"],
      },
    },
  },
  plugins: [],
};
