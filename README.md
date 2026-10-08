# Bridge Collective — Grid Landing Page

A responsive landing page built with **Vue 3** as a Frontend Mentor practice project.

The project focuses on reusable Vue components, CSS Grid, responsive design, interactive navigation, and unit testing.

## Tech Stack

- Vue 3 (Composition API)
- Vite
- JavaScript and SCSS
- CSS Grid and Flexbox
- Vitest and Vue Test Utils

## Features

- Responsive landing page for desktop, tablet, and mobile
- Four statistic cards rendered from an array of data
- Reusable `Card` component with dynamic SVG icons
- Navigation menu with open/close interaction and slide transition
- Component-level unit tests

## Project Structure

```text
src/
├── components/
│   ├── header/
│   │   ├── Header.vue
│   │   └── Menu.vue
│   ├── Card.vue
│   ├── GridContent.vue
│   └── Footer.vue
├── __tests__/
│   ├── Card.test.js
│   ├── Content.test.js
│   ├── Header.test.js
│   ├── Menu.test.js
│   └── Footer.test.js
├── assests/
│   ├── icons/
│   └── scss/
└── App.vue
```

## Getting Started

Use a Node.js version compatible with the project's `package.json`.

```bash
npm install
npm run dev
```

To build the project:

```bash
npm run build
```

## Unit Tests

The tests cover rendering, statistic card props, navigation items, and menu visibility interactions.

```bash
# Watch mode
npm run test:unit

# Run tests once
npm run test:unit:run
```

## Learning Goals

- Organize a Vue application into focused components
- Pass structured data through props
- Render collections with `v-for` and stable keys
- Manage local reactive state with `ref`
- Animate conditional content with Vue `<Transition>`
- Write behavior-focused tests with Vitest and Vue Test Utils

## Notes

This is a learning project based on a Frontend Mentor design challenge.
