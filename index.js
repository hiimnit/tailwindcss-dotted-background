const plugin = require("tailwindcss/plugin");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const dottedBg = plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      "bg-dotted-spacing": (value) => ({
        "--tw-bg-dotted-spacing-x": value,
        "--tw-bg-dotted-spacing-y": value,
        "background-size":
          "var(--tw-bg-dotted-spacing-x) var(--tw-bg-dotted-spacing-y)",
      }),
      "bg-dotted-spacing-x": (value) => ({
        "--tw-bg-dotted-spacing-x": value,
        "background-size":
          "var(--tw-bg-dotted-spacing-x) var(--tw-bg-dotted-spacing-y)",
      }),
      "bg-dotted-spacing-y": (value) => ({
        "--tw-bg-dotted-spacing-y": value,
        "background-size":
          "var(--tw-bg-dotted-spacing-x) var(--tw-bg-dotted-spacing-y)",
      }),
    },
    {
      values: theme("spacing"),
    }
  );

  matchUtilities(
    {
      "bg-dotted": (value) => ({
        "--tw-bg-dotted-color": value,
        "--tw-bg-dotted-radius": "1px",
        "background-image":
          "radial-gradient(circle at center, var(--tw-bg-dotted-color) var(--tw-bg-dotted-radius), transparent 0)",
      }),
    },
    {
      values: flattenColorPalette(theme("colors")),
      type: "color",
    }
  );

  matchUtilities(
    {
      "bg-dotted-radius": (value) => ({
        "--tw-bg-dotted-radius": value,
        "background-image":
          "radial-gradient(circle at center, var(--tw-bg-dotted-color) var(--tw-bg-dotted-radius), transparent 0)",
      }),
    },
    {
      values: theme("spacing"),
    }
  );
});

module.exports = dottedBg;
