<div>
  <h1>Yet Another Vue 3 Boilerplate Template v0.5.0</h1>
  <div>
    <img alt="repo-size" src="https://img.shields.io/github/repo-size/freestyler-rmg/YAVBT.svg" />
    <img alt="last-commit" src="https://img.shields.io/github/last-commit/freestyler-rmg/YAVBT.svg" />
  </div>
  <br />
</div>

It's kinda a hassle to set up every Vue SPA project from zero. The purpose of this boilerplate is that it can be a "cheatsheet" and a learning material for best practices in Vue structure.

So every time I forget how to use certain Vue features or libraries, I can go back to this template and re-learn how things work.

### 📑 Table of Contents

- [⛓️ What Is Included and What Is That?](#-what-is-included-and-what-is-that)
- [🔝 Top 8 VueUse composables](#-top-8-vueuse-composables)
- [📂 Project Structure](#-project-structure)
  - [Further Structure for Components Folder](#-further-structure-for-components-folder)
- [❓How to Use This Boilerplate Template?](#-how-to-use-this-boilerplate-template)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Scripts](#scripts)
- [📝 Todos](#-todos)
- [🤝 License](#-license)

## ⛓️ What Is Included and What Is That?

| Library                                                                    | Version                                                                  | Description                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Axios](https://axios-http.com/)                                           | ![Axios](https://img.shields.io/badge/%5E1.13.2-blue.svg)                | A very helpful promise-based HTTP client for the browser and Node.js. Can't wait until I confuse myself with the interceptors                                                                                                                                  |
| [Eslint](https://eslint.org/)                                              | ![Eslint](https://img.shields.io/badge/%5E9.39.2-blue.svg)               | Getting scolded by linters never gets old and always gets on my nerves. Yeah, I shouldn't ignore them.                                                                                                                                                         |
| [Pinia](https://pinia.vuejs.org/)                                          | ![Pinia](https://img.shields.io/badge/%5E3.0.4-blue.svg)                 | The Vue state management library for sharing a state across components or pages. Just remember not to put everything on a flat global state file, it's not fun.                                                                                                |
| [Prettier](https://prettier.io/)                                           | ![Prettier](https://img.shields.io/badge/3.8.1-blue.svg)                 | Code formatter for consistent code style and to stop bickering with fellow FE colleagues                                                                                                                                                                       |
| [Tailwind CSS](https://tailwindcss.com/)                                   | ![Tailwind%20CSS](https://img.shields.io/badge/%5E4.1.18-blue.svg)       | The most popular utility-first CSS framework that's very easy and intuitive to use. But unfortunately it will often create an ugly choo choo train CSS classes and forget that I can make a reusable clean custom CSS class.                                   |
| [Unhead](https://unhead.unjs.io/)                                          | ![Unhead](https://img.shields.io/badge/1.10.0--beta.6-blue.svg)          | Reactive head tag manager for Vue for handling search engine SEO. Is it proven? I don't know.                                                                                                                                                                  |
| [unplugin-auto-import](https://www.npmjs.com/package/unplugin-auto-import) | ![unplugin-auto-import](https://img.shields.io/badge/%5E21.0.0-blue.svg) | Used for auto import Vue APIs (so I don't need to write `import { ref } from 'vue'`) and everything inside `\utils\` folder. I added 'util' suffix on each exported variables / functions, so I don't get confused about where the hell these code comes from. |
| [Vee Validate](https://vee-validate.logaretm.com/v4/)                      | ![Vee%20Validate](https://img.shields.io/badge/%5E4.15.1-blue.svg)       | The most popular Vue validation library with documentation that insists on giving me a tutorial using Option API first. Oh, and guess what? The documentation is confusing too!                                                                                |
| [Vue Router](https://router.vuejs.org/)                                    | ![Vue%20Router](https://img.shields.io/badge/%5E4.6.4-blue.svg)          | Expressive, configurable and convenient routing for Vue.js. Expressive?                                                                                                                                                                                        |
| [VueUse](https://vueuse.org/)                                              | ![VueUse](https://img.shields.io/badge/%5E14.1.0-blue.svg)               | The Swiss Army Knife of Vue composition utilities with confusing documentation.                                                                                                                                                                                |
| [yup](https://github.com/jquense/yup)                                      | ![yup](https://img.shields.io/badge/%5E1.7.1-blue.svg)                   | Yup, I kinda understand what is this for. Instead of writing regex manually for form validation, I can use yup's methods and chain it. Yup, it's kinda interesting.                                                                                            |

## 🔝 Top 8 VueUse composables

- [`useAsyncState`](https://vueuse.org/core/useAsyncState/#useasyncstate) - Simplifying try...catch
- [`useClipboard`](https://vueuse.org/core/useClipboard/#useclipboard) - Reactive Clipboard API
- [`useDateFormat`](https://vueuse.org/shared/useDateFormat/#usedateformat) - simple date formatting
- [`useDebounceFn`](https://vueuse.org/shared/useDebounceFn/#usedebouncefn) - Debounce execution of a function for preventing repeat execution on repeat clicks
- [`useLocalStorage`](https://vueuse.org/core/useLocalStorage/#uselocalstorage) - Reactive localStorage
- [`useMediaQuery`](https://vueuse.org/core/useMediaQuery/#usemediaquery) - Reactive media query
- [`onClickOutside`](https://vueuse.org/core/onClickOutside/) - Very useful for dropdown or modal
- [`useTimeoutFn`](https://vueuse.org/shared/useTimeoutFn/#usetimeoutfn) - Auto clean up timeout

## 📂 Project Structure

```
YAVBT/
├── src/
│   ├── assets/                       # Static assets
│   │   ├── css/
│   │   │   └── style.css             # Add new css files and then import them into this file
│   │   └── images/
│   │       └── ...
│   ├── components/                   # Reusable Vue components
│   │   ├── Example*.vue              # Example components (remove these)
│   │   └── Simple*.vue               # Simple example components (remove these)
│   ├── composables/                  # Reusable composition functions
│   │   ├── colorRange.ts             # Example composable (remove this)
│   │   └── useDefaultHead.ts         # Update the title value as needed
│   ├── constants/                    # Application constants
│   │   └── etc.ts                    # Example for constant (remove this)
│   ├── router/                       # Vue Router configuration
│   │   ├── index.ts                  # Main Vue Router logic
│   │   └── routes.ts                 # Add the routings here
│   ├── stores/                       # Pinia state management
│   │   └── quote.ts                  # Example for how to write Pinia (remove this)
│   ├── types/                        # TypeScript type definitions
│   │   └── api.ts                    # Example for how to typing API response (remove this)
│   ├── utils/                        # Utility functions (auto-imported)
│   │   └── ExtensionCheck.ts         # Example for utility (remove this)
│   ├── views/                        # Page components
│   │   ├── BoilerplateExamples.vue   # (remove this)
│   │   └── HelloWorld.vue            # (remove this)
│   ├── App.vue                       # Root component
│   ├── auto-imports.d.ts             # Auto-import type definitions
│   └── main.ts                       # Application entry point
├── public/                           # Public static assets
│   └── ...
├── index.html                        # HTML entry point
├── package.json                      # Project version and dependencies
└── README.md                         # This file
```

### Further Structure for Components Folder

Use Feature-Based (Domain-Driven) for medium to large projects, example: `/src/components/auth/`, `/src/components/products/`, `/src/components/cart/`.

Or use Component Type Hierarchy, example: `/components/common/`, `/components/forms/`, `/components/layouts/`

## ❓ How to Use This Boilerplate Template?

### Prerequisites

Currently I'm using [Node Js](https://nodejs.org/en/) version `v23.3.0` and [PNPM](https://pnpm.io/) version `v10.28.1`.

### Installation

Clone this repo and just do a `pnpm install`. After I finish ogling my awesome code and remember why I'm the greatest frontend on this earth, here's the order of what I should do:

1. Remove the content of 'views' folder
2. Remove the content of 'components' folder
3. Remove the content of 'stores' folder
4. Remove the content of 'types' folder
5. Remove 'composables/colorRange.ts' file
6. Clean up the 'router/routes.ts' routings
7. Remove the content of 'utils' folder
8. Remove the content of 'constants' folder

Maybe I will create a Node script for removing those files. Yeah, that's a good idea.

#### Scripts

| Script                | Action                              |
| --------------------- | ----------------------------------- |
| `pnpm install`        | Install the project dependencies    |
| `pnpm run dev`        | Runs the app in development mode    |
| `pnpm run build`      | Builds the application              |
| `pnpm run lint`       | Runs ESLint                         |
| `pnpm run prettier`   | Runs prettier for `src/` folder     |
| `pnpm run type-check` | Runs vue-tsc for checking TS typing |

## 📝 Todos

- [ ] add beforeRoute example
- [ ] add layout example
- [ ] create a script to 'reset' this template
- [ ] sfc example with defineModel
- [ ] test unit
- [x] able to change head title
- [x] add github.io page
- [x] add vee validate
- [x] add vueuse localStorage example
- [x] add vueuse onClickOutside example
- [x] add vueuse useDateFormat example
- [x] axios example
- [x] composable example
- [x] display image from assets and public folder
- [x] example for typing
- [x] have example for routing
- [x] how to use this template
- [x] JSDoc (where it needed)
- [x] make utils available globally
- [x] sfc example
- [x] state management example
- [x] use @ for absolute path
- [x] util example

## 🤝 License

This project is licensed under the [MIT](./LICENSE) License.
