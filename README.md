<div>
  <h1>Yet Another Vue 3 Boilerplate Template v0.5.0</h1>
  [![repo-size](https://img.shields.io/github/repo-size/freestyler-rmg/YAVBT.svg)](repo-size)
  [![last-commit](https://img.shields.io/github/last-commit/freestyler-rmg/YAVBT.svg)](last-commit)
  <br /><br />
</div>

It's kinda a hassle to set up every Vue SPA project from zero. The purpose of this boilerplate is that it can be a "cheatsheet" and learning material for best practices in Vue structure.

So every time I forget how to use certain Vue features or library, I can go back to this template and re-learn how things work.

## ⛓️ What Is Included and What Is That?

| Library                                                                    | Version                                                                  | Description                                                                                                                                                                                                                                           |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Axios](https://axios-http.com/)                                           | ![Axios](https://img.shields.io/badge/%5E1.13.2-blue.svg)                | A very helpful promise-based HTTP client for the browser and Node.js. Can't wait until I confusing myself the interceptors                                                                                                                            |
| [Eslint](https://eslint.org/)                                              | ![Eslint](https://img.shields.io/badge/%5E9.39.2-blue.svg)               | Getting scold by linter never gets old and always get on my nerve. Yeah, I shouldn't ignore them.                                                                                                                                                     |
| [Pinia](https://pinia.vuejs.org/)                                          | ![Pinia](https://img.shields.io/badge/%5E3.0.4-blue.svg)                 | The Vue state management library for sharing a state across components or pages. Just remember not to put everything on a flat global state file, it's not fun.                                                                                       |
| [Prettier](https://prettier.io/)                                           | ![Prettier](https://img.shields.io/badge/3.8.1-blue.svg)                 | Code formatter for consistent code style                                                                                                                                                                                                              |
| [Tailwind CSS](https://tailwindcss.com/)                                   | ![Tailwind%20CSS](https://img.shields.io/badge/%5E4.1.18-blue.svg)       | The most popular utility-first CSS framework that's very easy and intuitive to use. But unfortunately it will often make an ugly choo choo train CSS classes and forgot that I can make a reusable clean custom CSS class.                            |
| [Unhead](https://unhead.unjs.io/)                                          | ![Unhead](https://img.shields.io/badge/1.10.0--beta.6-blue.svg)          | Reactive head tag manager for Vue                                                                                                                                                                                                                     |
| [unplugin-auto-import](https://www.npmjs.com/package/unplugin-auto-import) | ![unplugin-auto-import](https://img.shields.io/badge/%5E21.0.0-blue.svg) | Used for auto import Vue APIs (so I don't need to write `import { ref } from 'vue'`) and everything inside `\utils\` folder. I added 'util' suffix on each exported variables / functions, so I don't confused where the hell these codes comes from. |
| [Vee Validate](https://vee-validate.logaretm.com/v4/)                      | ![Vee%20Validate](https://img.shields.io/badge/%5E4.15.1-blue.svg)       | The most popular Vue validation library with documentation that insist giving me tutorial using Option API first. Oh, and guess what? The documentation is confusing too!                                                                             |
| [Vue Router](https://router.vuejs.org/)                                    | ![Vue%20Router](https://img.shields.io/badge/%5E4.6.4-blue.svg)          | Expressive, configurable and convenient routing for Vue.js. Expressive?                                                                                                                                                                               |
| [VueUse](https://vueuse.org/)                                              | ![VueUse](https://img.shields.io/badge/%5E14.1.0-blue.svg)               | The Swiss Army Knife of Vue composition utilities with confusing documentation.                                                                                                                                                                       |
| [yup](https://github.com/jquense/yup)                                      | ![yup](https://img.shields.io/badge/%5E1.7.1-blue.svg)                   | Yup, I kinda understand what is this for. Instead of writing regex manually for form validation, I can use yup's methods and chain it. Yup, it's kinda interesting.                                                                                   |

## 🔝 Top 8 VueUse composables

- `useAsyncState` - Simplifying try...catch
- `useClipboard` - Reactive Clipboard API
- `useDateFormat` - simple date formatting
- `useDebounceFn` - Debounce execution of a function
- `useLocalStorage` - Reactive localStorage
- `useMediaQuery` - Reactive media query
- `useOnClickOutside` - Very useful for dropdown or modal
- `useTimeoutFn` - Auto clean up timeout

## ❓ How to Use This Boilerpate Template?

### Prerequisites

Currently I'm using [Node Js](https://nodejs.org/en/) version `v23.3.0`.

### Installation

Clone this repo and just do a `pnpm install`. After I finish ogling my awesome codes and remember why I'm the greatest frontend on this earth, here's the order what I should do:

1. Remove the content of 'views' folder
2. Remove the content of 'components' folder
3. Remove 'composables/colorRange.ts'
4. Clean up the 'router/routes.ts' routing
5. To be continue...

Maybe I will create a Node script for removing those files. Yeah, that's a good idea.

#### Todos

- [x] JSDoc (where it needed)
- [x] sfc example
- [x] have example for routing
- [x] composable example
- [x] state management example
- [x] axios example
- [x] util example
- [x] make utils available globally
- [x] able to change head title
- [ ] test unit
- [x] how to use this template
- [x] example for typing
- [ ] sfc example with defineModel
- [x] use @ for absolute path
- [x] display image from assets and public folder
- [ ] create a script to 'reset' this template
- [ ] add layout example
- [x] add vee validate
- [x] add vueuse localStorage example
- [x] add vueuse onClickOutside example
- [x] add vueuse useDateFormat example

## 📝 License

This project is licensed under the [MIT](./LICENSE) License.

##### Footnote

Other than me, I hope there are at least 5 people out there that find this useful 🤞
