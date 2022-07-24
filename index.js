const plugin = require("tailwindcss/plugin");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const dottedBg = plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      "bg-dotted-spacing": (value) => ({
        "background-size": `${value} ${value}`,
      }),
    },
    {
      values: theme("spacing"),
    }
  );

  matchUtilities(
    {
      "bg-dotted": (value) => ({
        "background-image": `radial-gradient(circle at center, ${value} 1px, transparent 0)`,
      }),
    },
    {
      values: flattenColorPalette(theme("colors")),
      type: "color",
    }
  );
});

module.exports = dottedBg;
