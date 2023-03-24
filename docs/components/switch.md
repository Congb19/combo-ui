<script setup>
import SwitchExample from './switch-example.vue'
</script>

# Switch 开关

任天堂就是世界的主宰！

---

<switch-example />

```vue
<script setup>
import { CSwitch } from '../../src'
import { ref } from 'vue-demi'
const switchvalue = ref(false)
</script>
<template>
  <br />
  {{ switchvalue }}
  <br />
  默认
  <br />
  <CSwitch v-model:value="switchvalue"></CSwitch>&nbsp;
  <CSwitch v-model:value="switchvalue" disabled></CSwitch>&nbsp;
  <br />
  颜色
  <br />
  <CSwitch v-model:value="switchvalue" color="red"></CSwitch>&nbsp;
  <CSwitch v-model:value="switchvalue" color="green"></CSwitch>&nbsp;
  <br />
  尺寸
  <br />
  <CSwitch v-model:value="switchvalue" size="s"></CSwitch>&nbsp;
  <CSwitch v-model:value="switchvalue" size="m"></CSwitch>&nbsp;
  <CSwitch v-model:value="switchvalue" size="l"></CSwitch>&nbsp;
</template>
```
