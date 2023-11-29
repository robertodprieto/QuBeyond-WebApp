# QuBeyond-WebApp

This is a simple assessment project for QuBeyond which I´m building as a candidate.

- Vue3 + Vite + TypeScript + Vitest
- The sorting logic in this case is responsability of the parent component, which is arguable but since it is a demo project it can be refactored to pass the responsability to table itself if needed
- No state management library such as Pinia or Vuex is being used at this point due to the simplicity of the project
- No components library used such as Vuetify, Bootstrap Vue, Prime Vue, Antd but I worked with all them in the past (this is simulating a tiny in-house design system, of course spacing system, structured font sizes and branding color with tints and shades can be added too but I tried to keep it simple)
- Sass used as a Css pre-processor with a simplified version of 7-1 architecture
- The structure of the project's folder is simple but it´s flexible and scalable
- Low test coverage just to show some test cases
- Some of the items are returning URL's to get the related field data, I´m not fetching this data simply cause I disagree with the fact of trigger an API call for each detail, the original endpoint should concanate the needed data in the original response.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
