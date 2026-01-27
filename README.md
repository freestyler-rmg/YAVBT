# Yet Another Vue 3 Boilerplate Template

It's kinda a hassle to set up every Vue SPA project from zero. The purpose of this boilerplate is that it can be a "cheatsheet" and a learning material for best practices in Vue structure.

So every time I forget how to use certain Vue features or library, I can go back to this template and re-learn how things work.

## How to Use This Boilerpate Template?

Clone this repo and just do a `pnpm install`. After I finish ogling my awesome codes and remember why I'm the greatest frontend on this earth, here's the order what I should do:

1. Remove the content of 'views' folder
2. Remove the content of 'components' folder
3. Remove 'composables/colorRange.ts'
4. Clean up the 'router/routes.ts' routing

Maybe I will create a Node script for removing those files. Yeah, that's a good idea.

### What Is Included and What Is That?

- Axios

- [Eslint](https://eslint.org/)

  Getting scold by linter never gets old and always get on my nerve. Yeah, I shouldn't ignore them.

- [Pinia](https://pinia.vuejs.org/)

  The Vue state management library for sharing a state across components or pages. Just remember not to put everything on a flat global state file, it's not fun.

- [Prettier](https://prettier.io/)

- [Tailwind CSS](https://tailwindcss.com/)

  The most popular utility-first CSS framework that's very easy and intuitive to use. But unfortunately it will often make an ugly choo choo train CSS classes and forgot that I can make a reusable clean custom CSS class.

- [Unhead](https://unhead.unjs.io/)

- [unplugin-auto-import](https://www.npmjs.com/package/unplugin-auto-import)

  Used for auto import Vue APIs (so I don't need to write `import { ref } from 'vue'`) and everything inside `\utils\` folder. I added 'util' suffix on each exported variables / functions, so I don't confused where the hell these codes comes from.

- [Vue Router](https://router.vuejs.org/)

- [VueUse](https://vueuse.org/)

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
- [ ] display image from assets and public folder
- [ ] create a script to 'reset' this template
- [ ] add to npm repo
- [ ] add layout
- [ ] add vee validate
- [ ] add vueuse localStorage example
- [ ] add vueuse onClickOutside example
- [ ] add vueuse useDateFormat example
