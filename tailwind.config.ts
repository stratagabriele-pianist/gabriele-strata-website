import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-dim": "var(--primary-dim)",
        "primary-container": "var(--primary-container)",
        "primary-fixed-dim": "var(--primary-fixed-dim)",
        accent: "var(--accent)",
        "accent-dim": "var(--accent-dim)",
        "accent-container": "var(--accent-container)",
        surface: "#12141a",
        "surface-container-low": "#161820",
        "surface-container": "#1f222d",
        "surface-container-high": "#262a36",
        "surface-container-highest": "#2d313f",
        "surface-variant": "#1c1f28",
        tertiary: "var(--tertiary)",
        "on-primary": "var(--on-primary)",
        "on-surface": "var(--on-surface)",
        "on-surface-variant": "var(--on-surface-variant)",
        "outline-variant": "var(--outline-variant)",
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
      fontSize: {
        "display-lg": "3.5rem",
        "display-md": "2.75rem",
        "display-sm": "2rem",
        "headline-lg": "1.75rem",
        "headline-md": "1.5rem",
        "title-lg": "1.25rem",
        "title-md": "1rem",
        "body-lg": "1rem",
        "body-md": "0.875rem",
        "label-sm": "0.6875rem",
      },
      spacing: {
        "spacing-2": "0.5rem",
        "spacing-4": "1rem",
        "spacing-6": "2rem",
        "spacing-8": "3rem",
        "spacing-12": "4.5rem",
        "spacing-16": "6rem",
        "spacing-24": "8.5rem",
      },
      borderRadius: {
        "round-two": "0.5rem",
        "round-four": "1rem",
        lg: "2rem",
        xl: "3rem",
      },
      backdropBlur: {
        glass: "20px",
      },
    },
  },
  plugins: [],
};
export default config;
