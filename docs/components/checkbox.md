<script setup>
import CheckboxExample from './checkbox-example.vue'
</script>

# Checkbox 勾选框

说实话原生 input 元素的 checkbox 表现很怪，所以还是决定重制一个。

---

<checkbox-example />

```vue
<script setup>
import { CCheckbox } from '../../src'
import { ref } from 'vue-demi'
import { AmericanFootballSharp } from '@vicons/ionicons5'
const checkboxvalue = ref(true)
</script>
<template>
  <br />
  <br />
  {{ checkboxvalue }}
  <br />
  默认
  <br />
  <CCheckbox v-model:value="checkboxvalue"></CCheckbox>&nbsp;
  <CCheckbox v-model:value="checkboxvalue" disabled></CCheckbox>&nbsp;
  <br />
  尺寸
  <br />
  <CCheckbox v-model:value="checkboxvalue" size="s"></CCheckbox>&nbsp;
  <CCheckbox v-model:value="checkboxvalue" size="m"></CCheckbox>&nbsp;
  <CCheckbox v-model:value="checkboxvalue" size="l"></CCheckbox>&nbsp;
  <br />
  自定义图标
  <br />
  <CCheckbox
    v-model:value="checkboxvalue"
    size="l"
    :icon="AmericanFootballSharp"
  ></CCheckbox
  >&nbsp;
</template>
```
