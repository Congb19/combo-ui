<script setup>
import SwitchExample from './switch-example.vue'
</script>

# Switch 开关

Combo UI 提供了一个简单的开关组件，样式类似于 IOS 的开关组件。除此之外还可以在滑块上贴上你喜欢的图标。

那一年为了玩到神作荒野之息，花光了所有的积蓄买了一台 Switch，在海拉鲁大陆沉迷了一整个月（导致我没有好好学前端）。这让我在之后使用别的组件库时，每每看到有 Switch 组件，就会想起那个难忘的假期。

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
