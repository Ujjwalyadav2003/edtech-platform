/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        // 🔥 StudyNotion style dark palette
        richblack: {
          900: "#000814",
          800: "#001d3d",
          700: "#003566",
          600: "#0a2540",
          500: "#1a3a5f",
        },

        // 🔥 Brand colors
        primary: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },

        secondary: {
          500: "#ec4899",
          600: "#db2777",
        },

        accent: {
          500: "#22c55e",
          600: "#16a34a",
        },

        // UI neutrals
        dark: {
          900: "#0f172a",
          800: "#1e293b",
          700: "#334155",
        },

        light: {
          100: "#f8fafc",
          200: "#f1f5f9",
        },
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],     // ✅ now works with font-inter
        poppins: ["Poppins", "sans-serif"],
      },

      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.08)",
        glow: "0 0 20px rgba(99,102,241,0.5)",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },

      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },

  plugins: [],
};