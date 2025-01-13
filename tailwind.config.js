/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: " #C1CF16",

        dark: "#1C2834",
        lightDark: "#495D69",
        light: "#DBDBDB",
      },
    },
    gridTemplateColumns: {
      "custom-75-25": "75fr 25fr",
      "custom-40-60": "40fr 60fr",
      "custom-60-40": "60fr 40fr",
      "custom-1fr-1fr-1fr-1fr": "1fr 1fr 1fr 1fr",
      "custom-1fr-1fr-1fr": "1fr 1fr 1fr",
      "custom-1fr-1fr": "1fr 1fr",
      "custom-1fr": "1fr ",
    },
    backgroundImage: {
      "custom-image": "url('/path/to/image.jpg')",
    },
  },
  plugins: [],
};
