<script setup>
import { CButton } from '../../src'
import ThemeExample from './theme-example.vue'
</script>

# Theme 主题

Combo UI 提供了两种默认主题（light、dark）、两种切换默认主题的方法（`useTheme`、`ThemeProvider`）、自定义主题。

不使用自定义主题的情况下，Combo UI 的主题会自动跟随系统的深色模式开关变化。

<ClientOnly>
  <ThemeExample></ThemeExample>
</ClientOnly>

## useTheme

在任意位置使用 `useTheme` 控制应用主题。

`useTheme` 方法调用了浏览器 API，因此请确保在非 SSR 的环境中使用。如果在 SSR 中使用，请考虑`CThemeProvider`，或确保在组件挂载后再调用 `useTheme`。

```ts
import { useTheme } from '@congb19/combo-ui'
const { currentTheme, systemTheme, changeTheme } = useTheme()

changeTheme('dark')
changeTheme('light')
console.log(systemTheme.value, currentTheme.value)
```

## ThemeProvider

将你的应用嵌套在 `CThemeProvider` 内控制应用主题。

在这种情况下，Combo UI 控制主题的方法是，手动给外层 html 元素赋予 className (`'light'` 或 `'dark'`)。事实上，很多框架也是这么做的（例如 vitepress、Element Plus），你的应用也可以基于这一点，自行进行暗黑模式的适配。

```vue
<template>
  <CThemeProvider>
    <your-app></your-app>
  </CThemeProvider>
</template>
```

```ts
const global = document.getElementByTagName('html')[0]
global.className = 'dark'
```

## 自定义主题

将主题 css 文件通过文本字符串的形式引入，并通过 changeTheme 方法引入即可。想要切换回默认时，传参改为`'light'`或`'dark'`即可。

在这种情况下，Combo UI 的主题将不再跟随系统变化，完全由应用自行控制。

```ts
import { useTheme } from '@congb19/combo-ui'
import customTheme from 'xxx.css'

const { changeTheme } = useTheme()
changeTheme(customTheme)
changeTheme('light')
```
