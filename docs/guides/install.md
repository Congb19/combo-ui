# Install 安装

## 安装 / Installation

尚未发布

`pnpm i @congb19/combo-ui`

## 使用 / Usage

```vue
<template>
  <CTag round size="l" @c_click="console.log('click!')">A Cool Tag!</CTag>
</template>

<script setup>
// 如果已经全局注册则无需再引入
import { CTag } from '@congb19/combo-ui'
</script>
```

## 全局注册 / Global Register

```typescript
import App from './App.vue'
import { create, C } from '@congb19/combo-ui'
const app = createApp(App)

const combo = create(C.All) // 全部全局注册
const combo = create([C.Button, C.Tag]) // 指定组件注册

app.use(combo)
app.mount('#app')
```
