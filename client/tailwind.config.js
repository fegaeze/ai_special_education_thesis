module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
    "./src/contexts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb", // blue-600
          foreground: "#ffffff",
          light: "#3b82f6", // blue-500
          dark: "#1e40af", // blue-800
        },
        destructive: {
          DEFAULT: "#dc2626", // red-600
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#6b7280", // gray-500
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#f3f4f6", // gray-100
          foreground: "#374151", // gray-700
        },
        ring: "#d1d5db", // gray-300
      },
    },
  },
  plugins: [],
};
