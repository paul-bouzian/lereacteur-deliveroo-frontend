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
        tablet: "870px",
      },
      boxShadow: {
        "up-sm": "0 -1px 2px 0 rgba(0, 0, 0, 0.05)",
        "up-md":
          "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
        "up-lg":
          "0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -2px rgba(0, 0, 0, 0.05)",
        "up-xl":
          "0 -20px 25px -5px rgba(0, 0, 0, 0.1), 0 -10px 10px -5px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};
