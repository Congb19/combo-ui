<script setup>
import ButtonExample from './button-example.vue'
</script>

# Button 按钮

按钮可以说是所有组件库都有的组件，太重要了。

因此它也是 Combo UI 实现的第一个组件。提供了一些不同的样式选项。

在绑定事件方面，你可以使用我们提供的 `c_click` 事件，也可以绑定 DOM 元素原生的 click 事件。这两种方式绑定的事件都既可以通过点击触发，也可以在 js 里获取元素再调用其 click 方法来触发，差别不大。

---

<button-example />

```vue
<script setup>
import { CButton } from '../../src'
const clicktest = () => alert('clicked')
</script>
<template>
  type、clean
  <br />
  <CButton clean>Button1</CButton>&nbsp;
  <CButton clean type="primary">Button1</CButton>&nbsp;
  <CButton clean type="success">Button1</CButton>&nbsp;
  <CButton clean type="warning" round>Button1</CButton>&nbsp;
  <CButton clean type="error" round>Button1</CButton>&nbsp;
  <div></div>
  <br />
  <CButton>Button1</CButton>&nbsp;
  <CButton type="primary" round>Button1</CButton>&nbsp;
  <CButton type="success" round>Button1</CButton>&nbsp;
  <CButton type="warning">Button1</CButton>&nbsp;
  <CButton type="error">Button1</CButton>&nbsp;
  <div></div>
  <br />
  size
  <br />
  <CButton clean type="success" size="s">Button1</CButton>&nbsp;
  <CButton clean type="warning" size="m">Button1</CButton>&nbsp;
  <CButton clean type="error" size="l">Button1</CButton>&nbsp;
  <CButton clean type="success" size="s" round>Button1</CButton>&nbsp;
  <CButton clean type="warning" size="m" round>Button1</CButton>&nbsp;
  <CButton clean type="error" size="l" round>Button1</CButton>&nbsp;
  <div></div>
  <br />
  event
  <br />
  <CButton @c_click="clicktest">Click!</CButton>&nbsp;
  <div></div>
  <br />
  disabled
  <br />
  <CButton disabled>Button1</CButton>&nbsp;
  <CButton type="primary" disabled>Button1</CButton>&nbsp;
  <CButton type="success" disabled>Button1</CButton>&nbsp;
  <CButton type="warning" disabled>Button1</CButton>&nbsp;
  <CButton type="error" disabled>Button1</CButton>&nbsp;
</template>
```
