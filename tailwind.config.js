/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css,scss}",

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
      backgroundImage: {
        'gradient-background': 'linear-gradient(101.77deg, #FF1053 0%, #3452FF 100%)',
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
        subText: " rgba(111, 112, 116, 1)",
        GreenText: "#10c277",
        Aqua: "#0d9488",
        lightBlue: "#0E9BD7",
        textColor: "#6F7074",
        primaryButton: "#6440FB",
        customPurple: 'rgba(112, 84, 230, 1)',
        customRed: 'rgba(239, 92, 114, 1)',
        customOrange: 'rgba(199, 85, 51, 1)',
        customBlue: 'rgba(25, 38, 117, 0.8)',
        cardbg: 'rgba(54, 159, 219, 1)',
        bgColor: 'rgba(240, 250, 252, 1)',
        btColor: 'rgba(36, 65, 231, 1)',
        deepBlue: 'rgba(1, 34, 55, 1)',
        cartBtn: 'rgba(255, 16, 83, 1)',
        footerBg: 'rgba(100, 64, 251, 1)',
        footerText: 'rgba(150, 150, 150, 1)',
        borderColor: 'rgba(213, 214, 216, 1)',
        googleBtn: 'rgba(36, 65, 231, 1)',
        dotsBg: 'rgba(255, 154, 40, 1)',
        dropdownBg: 'rgba(20, 3, 66, 1)',
        gradient:'linear-gradient(69.8deg, rgb(25, 49, 108) 2.8%, rgb(1, 179, 201) 97.8%)',
        
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
