/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#f4f3ff",
        btnColor: "#646cff",
        darkColor: "#242424",
        helperColor: "#99b9ff",
      },
    },
  },
  plugins: [],
};
