# Combo UI

Congb19 的 Vue 3 组件库。Congb19's Vue 3 Component Library.

文档地址：combo.congb19.com

## 开始 / Start

### 安装 / Installation

` pnpm i @congb19/combo-ui`

- main.ts

```typescript
import App from './App.vue';
import { create, C } from '@congb19/combo-ui';

const app = createApp(App);
// 全量，按需，二选一即可。
const combo = create(C.All);
const combo = create([C.Button, C.Tag]);

app.use(combo);
app.mount('#app');
```

### 使用 / Usage

- demo.vue

```vue
<template>
  <CTag round size="large">A Cool Tag!</CTag>
</template>
```

## 设计思路 / Thinking

有人说，每个前端程序员都需要一个自己的组件库。这不无道理，所以先给自己挖个大坑吧！

计划从原子化的小组件写起。

### 特点 / Features

- 移动端特化？
- 连续，养眼的动画效果
- 简单易用

## 日程表 / Todos

- 通用组件
  - 按钮 Button
  - 标签 Tag
