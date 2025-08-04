module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb", // blue-600
          light: "#3b82f6", // blue-500
          dark: "#1e40af", // blue-800
        },
      },
    },
  },
  plugins: [],
};
