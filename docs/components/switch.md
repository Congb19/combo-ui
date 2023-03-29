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
import { FootballOutline } from '@vicons/ionicons5'
const switchvalue = ref(true)
const change = (val) => alert('changed!!', val)
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
  尺寸
  <br />
  <CSwitch v-model:value="switchvalue" size="s"></CSwitch>&nbsp;
  <CSwitch v-model:value="switchvalue" size="m"></CSwitch>&nbsp;
  <CSwitch v-model:value="switchvalue" size="l"></CSwitch>&nbsp;
  <br />
  自定义图标
  <br />
  <CSwitch v-model:value="switchvalue" :icon="FootballOutline"></CSwitch>&nbsp;
  <CSwitch v-model:value="switchvalue" size="l" icon="☀️"></CSwitch>
  <br />
  事件
  <br />
  <CSwitch v-model:value="switchvalue" @c_change="change"></CSwitch>&nbsp;
</template>
```
