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
      backgroundColor: {
        glass: "rgba(255, 255, 255, 0.0)",
        glass2: "rgba(255, 255, 255, 0.2)",
      },
      animation: {
        marquee: "marquee 12s linear infinite",
        marquee2: "marquee2 12s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      colors: {
        gray: "#e9e9e9",
        navyBlue: "#010b37",
        buttonBlue: "#125582",
        darkBlue: "#300ffa",
        Buttoncolor: "#125582",
        subText: "#666666",
        GreenText: "#10c277",
        Aqua:"#0d9488"
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
