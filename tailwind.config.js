/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "350px": "350px",
        "130px": "130px",
      },
      height: {
        "130px": "130px",
        "200px": "200px",
        card: "168px",
      },
      screens: {
        tablet: "870px", // Crée un breakpoint personnalisé à 1440px
      },
    },
  },
  plugins: [],
};
