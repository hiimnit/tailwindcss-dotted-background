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

Combine the `bg-dotted-spacing-{spacing}` and `bg-dotted-{colors}` classes to specify the spacing and dots color.

```html
<div class="bg-dotted-spacing-4 bg-dotted-gray-200">
    Screen readers only
</div>
```

## Compatibility

TODO
