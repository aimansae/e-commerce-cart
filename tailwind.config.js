/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customOrange: "var(--customOrange)",
        paleOrange: "var(--paleOrange)",
        customGray: "var(--customGray)",
        customDarkBlue: "var(--customDarkBlue)",
        customLightGray: "var(--customLightGray)",
      },
    },
  },
  plugins: [],
};
