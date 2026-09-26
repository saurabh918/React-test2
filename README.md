# Recipe Search

A responsive React app for browsing featured recipes, searching [TheMealDB](https://www.themealdb.com/), and saving favorites for later. Built with React Router, Redux Toolkit, Axios, and styled-components.

**Live demo:** [recipe-task.netlify.app](https://recipe-task.netlify.app/)

## Features

- Featured recipes from local JSON on the home page
- Debounced search against TheMealDB with loading, error, and no-results states
- Recipe details for local and API meals (ingredients, instructions, metadata)
- Saved recipes persisted in `localStorage`
- Responsive layout, accessible controls, and subtle CSS motion (with reduced-motion support)

## Tech stack

- React 18, React Router 6
- Redux Toolkit (search, saved recipes, featured list)
- Axios (TheMealDB API)
- styled-components + theme tokens
- lodash.debounce

## API

- Search: `https://www.themealdb.com/api/json/v1/1/search.php?s={query}`
- Lookup: `https://www.themealdb.com/api/json/v1/1/lookup.php?i={id}`

## Local storage

Saved recipes are stored under the key `savedRecipes` in the browser’s localStorage.

## Run locally

**Prerequisites:** Node.js 16+ and npm

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

**Production build:**

```bash
npm run build
```

Serve the `build` folder with any static host (Netlify, etc.). For client-side routing, use a fallback to `index.html` (see `public/_redirects` for Netlify).

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm start`    | Development server       |
| `npm run build`| Optimized production build |
| `npm test`     | Jest (CRA; see known issues below) |

## Known issues

- `npm test` may fail on importing Axios under the default Create React App Jest setup (ESM). The production app builds and runs normally with `npm run build`.
