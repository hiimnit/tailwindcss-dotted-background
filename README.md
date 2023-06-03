# Tailwind CSS dotted background plugin

A simple Tailwind CSS plugin that adds dotted backgrounds with all for all configured colors and spacing.

## Installing

First install the package:

```sh
npm install -D tailwindcss-dotted-background
```

or

```sh
yarn add tailwindcss-dotted-background -D
```

Then require the installed plugin directly in your `tailwind.config.js`:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwindcss-dotted-background'),
    // ...
  ],
}
```

## Usage

Combine the `bg-dotted-spacing-{spacing}` and `bg-dotted-{colors}` classes to specify the spacing and the color of the dots.

```html
<div class="bg-dotted-spacing-4 bg-dotted-gray-200" />

<div class="bg-dotted-spacing-[9px] bg-dotted-red-300 hover:bg-dotted-spacing-2" />
```

The default radius of the dots is `1px`. Use `bg-dotted-radius-{spacing}` to change the size.

```html
<div class="bg-dotted-spacing-6 bg-dotted-red-700 bg-dotted-radius-1" />
```

`bg-dotted-spacing-{spacing}` changes both the width and height at once. Use `bg-dotted-spacing-x-{spacing}` and `bg-dotted-spacing-y-{spacing}` to specify different height and width.

```html
<div class="bg-dotted-spacing-x-6 bg-dotted-spacing-y-3 bg-dotted-cyan-900" />
```

## Compatibility

Dots are created using `background-image` and `background-size` so these utilities are incompatible with any classes using these properties.

[Arbitrary values](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values) are supported for both `bg-dotted-spacing-{spacing}` and `bg-dotted-{colors}` classes.
