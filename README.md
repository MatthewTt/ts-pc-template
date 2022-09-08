# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue
3 `<script setup>` SFCs, check out
the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type
by default. In most cases this is fine if you don't really care about component prop types outside of templates.
However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using
manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look
   for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default,
   Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

# 目录

- Sass 全局样式 ✅
- eslint + prettier + husky + lint-staged ✅
- [vw 适配方案 ✅](#husky)
- Axios 封装 ✅
- Router ✅
- element plus 
- 打包优化 ✅

## eslint + prettier + husky + lint-staged

安装：pnpm install -D eslint prettier husky lint-staged
由于 `eslint`和 `prettier` 会有冲突，所以还需要安装`eslint-config-prettier,eslint-plugin-prettier`, 配置如下

  ```
  {
   "extends": [ // 在最后加入 
     "prettier",
     "plugin:prettier/recommended"
    ]
  }
  ```

如果是`ts`还需加入

```
{
    parserOptions: {
      parser: '@typescript-eslint/parser',
    }
}
  ```


### husky
> npm install husky --save-dev
#### useage
```shell
npm set-script prepare "husky install"
npm run prepare
```
add a hook:
```shell
npx husky add .husky/pre-commit "npm run lint-staged"
git add .husky/pre-commit
```
配置`lint-staged` in package.json: 用于检测新修改代码

```json
{
  "lint-staged": {
    "*.{js,vue}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
```

## vw 适配方案
### install
> pnpm i -D postcss-px-to-viewport-8-plugin
### useage
```js
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport-8-plugin': {
      viewportWidth: 375, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
      unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
      selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议使用vw
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false // 允许在媒体查询中转换`px`
    }
  }
}
```
### 打包优化- 插件
```shell
pnpm i -D vite-plugin-imagemin
pnpm i -D vite-plugin-compression
pnpm i -D vite-plugin-cdn-import
pnpm i -D rollup-plugin-visualizer
```
更多插件可在[awesome-vite](https://github.com/vitejs/awesome-vite#plugins)
