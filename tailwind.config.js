/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#12141A",
          soft: "#171A22",
        },
        surface: {
          DEFAULT: "#1B1E27",
          raised: "#242836",
          line: "#323748",
        },
        paper: {
          DEFAULT: "#E8E6E1",
          dim: "#B7B9C2",
          faint: "#8A8F9E",
        },
        cyan: {
          DEFAULT: "#7DD3C0",
          dim: "#4E8C80",
        },
        amber: {
          DEFAULT: "#E8A94C",
          dim: "#A87A3E",
        },
        coral: {
          DEFAULT: "#E2695B",
          dim: "#9E4A40",
        },
      },
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-map":
          "linear-gradient(to right, rgba(125,211,192,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(125,211,192,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-map": "32px 32px",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        typewriter: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        fadeUp: "fadeUp 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};
