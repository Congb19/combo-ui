<script setup>
import ButtonExample from './button-example.vue'
</script>

# Button 按钮

按钮可以说是所有组件库都有的组件，太重要了。

因此它也是 Combo UI 实现的第一个组件。

---

<button-example />

```vue
<script setup>
import { CButton } from '../../src'
const clicktest = () => alert('clicked')
</script>
<template>
  <CButton clean>Button1</CButton>&nbsp;
  <CButton clean type="primary">Button1</CButton>&nbsp;
  <CButton clean type="success">Button1</CButton>&nbsp;
  <CButton clean type="warning">Button1</CButton>&nbsp;
  <CButton clean type="error">Button1</CButton>&nbsp;
  <div></div>
  <br />
  <CButton>Button1</CButton>&nbsp;
  <CButton type="primary">Button1</CButton>&nbsp;
  <CButton type="success">Button1</CButton>&nbsp;
  <CButton type="warning">Button1</CButton>&nbsp;
  <CButton type="error">Button1</CButton>&nbsp;
  <div></div>
  <br />
  <CButton clean type="success" size="s">Button1</CButton>&nbsp;
  <CButton clean type="warning" size="m">Button1</CButton>&nbsp;
  <CButton clean type="error" size="l">Button1</CButton>&nbsp;
  <div></div>
  <br />
  <CButton @c_click="clicktest">Click!</CButton>&nbsp;
  <div></div>
  <br />
  <CButton disabled>Button1</CButton>&nbsp;
  <CButton type="primary" disabled>Button1</CButton>&nbsp;
  <CButton type="success" disabled>Button1</CButton>&nbsp;
  <CButton type="warning" disabled>Button1</CButton>&nbsp;
  <CButton type="error" disabled>Button1</CButton>&nbsp;
</template>
```
