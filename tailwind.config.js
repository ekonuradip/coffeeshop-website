/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightColor: "#F4511F",
        backgroundColor: "#513d2f",
        lightText: "#959595",
      }
    },
  },
  plugins: [],
};
