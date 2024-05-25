---
author: "Mike Awad"
email: "mikeawad662442@gmail.com"
---

# Project Dynamic sidebar

The navigation bar has three states:

- Mobile phone screen size (width 425 pixels) showing the logo and hamburger menu
- The tab's screen size (width is 768 pixels) and the page navigation bar appears at the top
- Computer screen size and above (width 1024 pixels) The navigation sidebar appears

## dependencies Libraries

next-themes => Dark mode

```js
npm install next-themes
```

## shadcn/ui

```js
npx shadcn-ui@latest init

npx shadcn-ui@latest add button accordion menubar separator sheet
```

## devDependencies Libraries

```js
npm i -D eslint-config-prettier prettier prettier-plugin-tailwindcss
```

```js
prettier.config.js;
module.exports = { plugins: ["prettier-plugin-tailwindcss"] };
```
