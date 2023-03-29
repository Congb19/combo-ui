<script setup>
import SelectExample from './select-example.vue'
</script>

# Select 选择器

下拉列表选择器，感觉会很常用。

---

<select-example></select-example>

```vue
<script setup>
import { ref } from 'vue-demi'
import { CSelect } from '../../src'
const value = ref(2)
const options = ref([
  { value: 1, label: 'testlabel 1' },
  { value: 2, label: 'testlabel 2' },
  { value: 3, label: 'testlabel 3' },
  { value: 4, label: 'testlabel 4' },
])
const select = (val) => console.log('select!!!', val)
</script>

<template>
  <div>
    value：<span>{{ value }}</span>
    <div></div>
    默认
    <br />
    <CSelect v-model:value="value" :options="options"></CSelect>
    <CSelect v-model:value="value" :options="options" disabled></CSelect>
    <div></div>
    placement
    <br />
    <CSelect v-model:value="value" :options="options" placement="top"></CSelect>
    <CSelect
      v-model:value="value"
      :options="options"
      placement="right"
    ></CSelect>
    <div></div>
    maxHeight
    <br />
    <CSelect
      v-model:value="value"
      :options="options"
      :max-height="80"
    ></CSelect>
    <div></div>
    事件
    <br />
    <CSelect
      v-model:value="value"
      :options="options"
      @c_select="select"
    ></CSelect>
  </div>
</template>
```
