<script setup>
import BlockExample from './block-example.vue'
</script>

# Block 块

在页面中间插入一个醒目的块。

一般用于醒目提示一些正文中容易遗漏的信息，或是作为可折叠块来使用，都可以。

---

<block-example />

```vue
<script setup>
import { CBlock } from '../../src'
const blockcontent =
  'Either change the import in "example/pages/test.vue?vue&type=script&setup=true&lang.ts" to point directly to the exporting module or reconfigure "output.manualChunks" to ensure these modules end up in the same chunk.'
const blocktitle = 'customtitle'
const expandtest = (expand) => console.log('expand!!', expand)
</script>
<template>
  <CBlock content="default"></CBlock>
  <div></div>
  <br />
  type
  <CBlock type="info" :content="blockcontent"></CBlock>
  <div></div>
  <br />
  <CBlock type="success" :content="blockcontent"></CBlock>
  <div></div>
  <br />
  <CBlock type="warning" :content="blockcontent"></CBlock>
  <div></div>
  <br />
  <CBlock type="error" :content="blockcontent"></CBlock>
  <div></div>
  <br />
  <CBlock type="info" :content="blockcontent"></CBlock>
  <br />
  指定标题
  <br />
  <CBlock type="info" :title="blocktitle" :content="blockcontent"></CBlock>
  <br />
  指定宽度
  <br />
  <CBlock type="info" :content="blockcontent" :width="300"></CBlock>
  <br />
  展开收起、事件
  <br />
  <CBlock
    type="success"
    detail
    :expanded="false"
    :content="blockcontent"
    @c_expand="expandtest"
  ></CBlock>
</template>
```
