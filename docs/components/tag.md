<script setup>
import TagExample from './tag-example.vue'
</script>

# Tag 标签

你可以给一切事物贴上花花绿绿的标签，但最好不要随便给人贴标签。

---

<tag-example />

```vue
<script setup>
import { CTag } from '../../src'
const clicktest = () => console.log('clicked')
const closetest = () => console.log('closed')
const mouseovertest = () => console.log('mouseover')
</script>
<template>
  各种样式
  <br />
  <CTag clean>Tag1</CTag>&nbsp; <CTag clean type="primary">Tag1</CTag>&nbsp;
  <CTag clean type="success">Tag1</CTag>&nbsp;
  <CTag clean type="warning">Tag1</CTag>&nbsp;
  <CTag clean type="error">Tag1</CTag>&nbsp; <CTag>Tag1</CTag>&nbsp;
  <CTag type="primary">Tag1</CTag>&nbsp; <CTag type="success">Tag1</CTag>&nbsp;
  <CTag type="warning">Tag1</CTag>&nbsp; <CTag type="error">Tag1</CTag>&nbsp;
  <div></div>
  圆形
  <br />
  <CTag round>Tag1</CTag>&nbsp; <CTag type="primary" round>Tag1</CTag>&nbsp;
  <CTag type="success" round>Tag1</CTag>&nbsp;
  <CTag type="warning" round>Tag1</CTag>&nbsp;
  <CTag type="error" round>Tag1</CTag>&nbsp;
  <div></div>
  尺寸
  <br />
  <CTag clean type="success" size="s">Tag1</CTag>&nbsp;
  <CTag clean type="warning" size="m">Tag1</CTag>&nbsp;
  <CTag clean type="error" size="l">Tag1</CTag>&nbsp;
  <CTag clean round type="success" size="s">Tag1</CTag>&nbsp;
  <CTag clean round type="warning" size="m">Tag1</CTag>&nbsp;
  <CTag clean round type="error" size="l">Tag1</CTag>&nbsp;
  <div></div>
  可关闭
  <br />
  <CTag clean round type="success" size="s" closable>Tag1</CTag>&nbsp;
  <CTag clean round type="warning" size="m" closable>Tag1</CTag>&nbsp;
  <CTag clean round type="error" size="l" closable>Tag1</CTag>&nbsp;
  <div></div>
  事件
  <br />
  <CTag @c_click="clicktest">Click!</CTag>&nbsp;
  <CTag @c_mouseover="mouseovertest">Mouseover!</CTag>&nbsp;
  <CTag closable @c_close="closetest">Close!</CTag>&nbsp;
  <div></div>
  <br />
</template>
```
