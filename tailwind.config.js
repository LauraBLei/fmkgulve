/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1c75bc",
        secondary: "#f39c5d",
        "brand-blue": "#1c75bc",
        "brand-orange": "#f39c5d",
      },
      fontFamily: {
        primary: ["Lato", "ui-sans-serif", "system-ui"],
        secondary: ["Inter", "ui-sans-serif", "system-ui"],
      },
      borderWidth: {
        1: "1px",
      },
      width: {
        15: "3.75rem",
      },
      height: {
        15: "3.75rem",
      },
      spacing: {
        50: "12.5rem",
      },
      screens: {
        xs: "550px",
      },
    },
  },
  plugins: [],
};
