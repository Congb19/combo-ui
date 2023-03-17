<script setup>
import { CButton } from '../../src'
import ThemeExample from './theme-example.vue'
</script>

# Theme 主题

Combo UI 提供了两种默认主题（light、dark）、两种切换默认主题的方法（useTheme、ThemeProvider）、自定义主题。

默认情况下，Combo UI 的主题会自动跟随系统的深色模式开关变化。

<ThemeExample></ThemeExample>

## useTheme

在组件内使用 useTheme 控制应用主题。

请确保在非 SSR 的环境中使用。如果在 SSR 中使用，请确保在组件挂载后再调用 useTheme。

```vue
<template>
  <CButton clean @c_click="changeTheme('dark')">ToLight</CButton>
  <CButton clean @c_click="changeTheme('dark')">ToDark</CButton>
  {{ currentTheme }}
</script>
</template>
<script setup>
import { useTheme } from '@congb19/combo-ui'
const { currentTheme, systemTheme, changeTheme } = useTheme()
</script>
```

## ThemeProvider

将你的应用嵌套在 CThemeProvider 内控制应用主题。

在这种情况下，控制主题的方法是，手动给外层 html 元素赋予 className ('light' 或 'dark')。

```vue
<template>
  <CThemeProvider>
    <your-app></your-app>
  </CThemeProvider>
</template>
```

```vue
<script setup>
const global = document.getElementByTagName('html')[0]
global.className = 'dark'
</script>
```

## 自定义主题

将主题 css 文件通过文本字符串的形式引入，并通过 changeTheme 方法引入即可。

在这种情况下，Combo UI 的主题将不再跟随系统变化，完全由应用自己控制。

```vue
<script setup>
import { useTheme } from '@congb19/combo-ui'
import customTheme from 'xxx.css'
const { changeTheme } = useTheme()
changeTheme(customTheme)
</script>
```

## todo

- 主题生成器
- 使用主题生成器生成自定义主题 css 文件。
