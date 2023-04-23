<script setup>
import InputExample from './input-example.vue'
</script>

# Input 输入框

简简单单输入框。

Combo UI 的输入框内部的元素为原生的 input 元素。在封装时对中文拼音输入法等特殊输入法输入进行了等待处理，使得这类文字的输入更加符合直觉；提供了值的双向绑定和一些触发事件。除此之外，没有做太多的定制。

---

<input-example></input-example>

```vue
<script setup>
import { ref } from 'vue-demi'
import { CInput } from '../../src'
const value = ref('test')
const focustest = () => console.log('focus!!')
const blurtest = () => console.log('blur!!')
const changetest = (val) => console.log('change!!', val)
</script>
<template>
  <div>
    value：<span>{{ value }}</span>
    <div></div>
    默认
    <br />
    <CInput v-model:value="value" />&nbsp;
    <CInput placeholder="placeholder" />&nbsp;
    <CInput value="disabled" disabled />
    <div></div>
    textarea、password
    <br />
    <CInput v-model:value="value" type="textarea" />&nbsp;
    <CInput v-model:value="value" type="password" />
    <div></div>
    尺寸
    <br />
    <CInput v-model:value="value" size="s" />&nbsp;
    <CInput v-model:value="value" size="m" />&nbsp;
    <CInput v-model:value="value" size="l" />
    <div></div>
    事件
    <br />
    <CInput
      v-model:value="value"
      @c_blur="blurtest"
      @c_focus="focustest"
      @c_change="changetest"
    />&nbsp;
  </div>
</template>
```
