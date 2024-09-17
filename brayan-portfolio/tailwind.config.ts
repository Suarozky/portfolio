import type { Config } from "tailwindcss";

const config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        // Background
        MainBackgroundColor: "#415a77",
        MainBackgroundColorDark: "#242423",

        SecondaryBackgroundColor: "#e0fbfc",
        SecondaryBackgroundColorDark: "#3A5A40",

        // -------------------------

        // Titulo y Subtitulo
        MainBannerColor: "#e0fbfc",
        MainBannerColorDark: "#e0fbfc",

        SecondaryColorBanner: "#e0fbfc",
        SecondaryColorBannerDark: "#ffe5ec",

        // -------------------------

        // Hover
        SelectedShadowHover: "#c8b1e4",
        SelectedTextColor: "#e0fbfc",
        SelectedTextColorDark: "#e0fbfc",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
