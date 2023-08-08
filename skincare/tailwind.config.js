/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-10":"#D9D9D9",
        "gray-20": "#F0F0F0",
        "gray-50": "#1E1E1E",
        "gray-100": "#484848",
        "gray-500": "#1e1e1e",
        "gray-600": "#2E2929",
        "primary-10":"#eff0c9",
        "primary-100": "#E0E259",
        "primary-300": "#D5DA00",
        "primary-500": "#D5DA00",

      },
      backgroundImage: (theme) => ({
        "gradient-grey-background":
          "linear-gradient(182deg, #F0F0F0 0%, rgba(240, 240, 240, 0.59) 100%)",
        "gradient-white-background":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.80) 0%, rgba(255, 255, 255, 0.34) 100%)",
        "woman-glass": "url('./assets/background/woman-glass.jpg')",
        "water-drops": "url('./assets/water-background.png')",
       

      }),
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
       
      },
      content: {
        
        skincareSwatch: "url('./assets/elements/skincareswatch2.png')",
        waterDroplet1: "url('./assets/waterdroplet1')",
        starCircle:"url('./assets/elements/star-circle.png')"
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      xxs: "350px"
    },
  },
  plugins: [],
};
