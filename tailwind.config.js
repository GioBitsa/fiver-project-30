/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        primary: "0 9px 29px 0 rgba(0, 0, 0, 0.12)",
        secondary: "0 4px 31px 0 rgba(0, 0, 0, 0.1)",
      },
    },
    fontFamily: {
      monserat: ["Montserrat", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    colors: {
      primaryColor: "#49D0AF",
      "primary-1": "#55D5A2",
      "primary-2": "#65DB91",
      orange: "#FBA508",
      buttonGradient:
        "linear-gradient(90deg, rgba(125,227,115,1) 0%, rgba(73,208,175,1) 50%, rgba(18,190,236,1) 100%)",
      gradientFrom: "rgba(125,227,115,1)",
      gradientVia: "rgba(73,208,175,1)",
      gradientTo: "rgba(18,190,236,1)",
      primaryGradient:
        "linear-gradient(175deg, rgba(125,227,115,1) 0%, rgba(73,208,175,1) 50%, rgba(18,190,236,1) 100%)",
      "gray-50": "#F0F0F0",
      "gray-100": "#E0E0E0",
      "gray-200": "#C2C2C2",
      "gray-300": "#A3A3A3",
      "gray-400": "#858585",
      "gray-500": "#666666",
      "gray-600": "#4D4D4D",
      "gray-700": "#333333",
      "gray-800": "#1A1A1A",
      "gray-900": "#0A0A0A",
      "primary-50": "#F0FCF5",
      "primary-100": "#E0F8E9",
      "primary-200": "#C1F1D3",
      "primary-300": "#A3E9BD",
      "primary-400": "#84E2A7",
      "primary-500": "#65DB91",
      "primary-600": "#4CA46D",
      "primary-700": "#336E49",
      "primary-800": "#193724",
      "primary-900": "#0A160F",
      white: "#FFFFFF",
      black: "#000000",
    },
  },
  plugins: [],
};
