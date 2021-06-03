# iTunes Viewer

A viewer for browsing the iTunes public catalogue.

## Demo

https://itunes-viewer.vercel.app/

## Install & Run

```
git clone https://github.com/josephj/itunes-viewer.git
cd itunes-viewer
yarn 
yarn dev
```

It contains storybook

```
yarn storybook
```

## Summary

* About UI design - I can decide. Keep clean and simple.
* Home Page - Search Input + Result List (album name, cover image, release date, artist name)
* Album Page - Details (album name, cover image, release date, artist name) + Tracks (name, duration in mins, anything it might be interesting)
* Your application must be responsive.
* Your application must support these browsers:
  * Chrome
  * Firefox
  * Safari
  * Edge


## Tech Stacks

- React + NextJS
- Apollo Client (REST Link)
- Chakra UI
- TypeScript

## Bonus points

- Unit Test / Cypress
  - Only storybook snapshot testing at this moment
- Deploy - Vercel
- Accessibility - Making your application accessible.
  - Several `role` attributes

## What we're assessing

Not only JavaScript 🙂. We're looking for a good demonstration across all areas of front-end development, e.g.:

- How well you can write semantic HTML.
  - Headings, `<header/>`, `<main/>`, `<footer/>`
- How well you can write and organise CSS.
  - [Style System](https://styled-system.com/) with Chakra UI library.
- How well you can componentise a UI.
  - `component`: Reusable UI library
  - `modules/<feature>`: Orgainised by feature
- How well you can optimise for performance.
  - Plan to use **GraphQL** to reduce duplicate call.
  - Plan to use more **SSR** in the first load.
