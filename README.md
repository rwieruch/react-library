# React Library

## Setup

### Installation

- `git clone` this repository
- first terminal: `cd demo && npm install && npm start`
- second terminal: `cd library && npm run library:build`

### Publish

- create account on https://www.npmjs.com
- `npm login` on command line
- replace `rwieruch-react-library` in all files with `your-name-react-library`
- first terminal: `cd library && npm run library:build && npm publish`
- second terminal: `cd demo && npm install your-name-react-library`

### Update

- make changes in _/library_
- increment `version` in _package.json_
- first terminal: `cd library && npm run library:build && npm publish`
- second terminal: `cd demo && npm install your-name-react-library`

## Tasks

### Webpack to Rollup

- The _/library_ is build with Webpack and Babel. However, Rollup is the most popular choice when it comes to libraries. So exchange Webpack with Rollup, but keep and use the _.babelrc_.

### Code Splitting

- Webpack does code splitting at the moment. Rollup should do the same, so that the annotated // TODO imports in _/demo/src/App.js_ work.

### TypeScript

- Make _/library_ work with TypeScript and export the type definitions. Then convert _/demo_ to TypeScript and use the typed library.

### CSS Modules instead of Styled Components

- Make _/library_ work with CSS Modules instead of TypeSript. The crucial file that needs to work is _/library/src/Data/Item/index.js_ with its _theme_ and _offset_. So injecting CSS from the outside needs to work (_theme_) and setting dynamic values (_offset_) should work too.

### NPM Link

- Use NPM linking, so that /library can be used like a library in /demo, but without installing it via npm.
