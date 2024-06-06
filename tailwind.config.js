// tailwind.config.js
import defaultTheme from "tailwindcss/defaultTheme";
import svgToDataUri from "mini-svg-data-uri";
import colors from "tailwindcss/colors";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,mdx}",
    "./src/components/**/*.{js,jsx,mdx}",
    "./src/app/**/*.{js,jsx,mdx}",
    "./src/**/*.{js,jsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      boxShadow: {
        "secondary-glow": "0px 0px 105px 45px rgba(243, 124, 32, 0.9)",
      },
      textShadow: {
        "secondary-glow-text":
          "0 0 15px rgba(243, 124, 32, 1), 0 0 25px rgba(243, 124, 32, 0.8), 0 0 35px rgba(243, 124, 32, 0.6)",
      },
    },
  },
  plugins: [
    addVariablesForColors,
    addTextShadowUtilities,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
function addTextShadowUtilities({ addUtilities }) {
  const newUtilities = {
    ".text-shadow": {
      "text-shadow": "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    ".text-shadow-md": {
      "text-shadow": "0 3px 8px rgba(0, 0, 0, 0.15)",
    },
    ".text-shadow-lg": {
      "text-shadow": "0 10px 15px rgba(0, 0, 0, 0.2)",
    },
    ".text-shadow-xl": {
      "text-shadow": "0 20px 25px rgba(0, 0, 0, 0.25)",
    },
    ".text-shadow-2xl": {
      "text-shadow": "0 25px 50px rgba(0, 0, 0, 0.5)",
    },
    ".text-secondary-glow-text": {
      "text-shadow":
        "0 0 15px rgba(243, 124, 32, 1), 0 0 25px rgba(243, 124, 32, 0.8), 0 0 35px rgba(243, 124, 32, 0.6)",
    },
  };

  addUtilities(newUtilities, ["responsive", "hover"]);
}
