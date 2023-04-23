<script setup>
import IconExample from './icon-example.vue'
</script>

# Icon 图标

展示 svg 图标。

你可以使用 emoji、 [xicons](https://xicons.org/#/) 图标库，或使用 UI 给你提供的 svg，具体可见下方的参考代码。

但是，emoji 在不同字体下的表现可能有巨大的差别，第三方图标库里又可能没有你需要的图标。所以，希望 UI 总是能给我们提供完整切好的图标库。

---

<icon-example />

```vue
<script setup>
import { CIcon } from '../../src'
import {
  AmericanFootballSharp,
  FootballSharp,
  LogoNpm,
} from '@vicons/ionicons5'
const clicktest = () => console.log('click!!')
</script>
<template>
  基础使用
  <br />
  <CIcon size="20"><AmericanFootballSharp /></CIcon>&nbsp;
  <CIcon size="20"><FootballSharp /></CIcon>&nbsp;
  <CIcon size="20"><LogoNpm /></CIcon>&nbsp;
  <CIcon size="20">😂</CIcon>
  <br />
  尺寸、颜色、背景色、圆角
  <br />
  <CIcon size="20" color="blue"><AmericanFootballSharp /></CIcon>&nbsp;
  <CIcon size="35" background-color="yellow"><FootballSharp /></CIcon>&nbsp;
  <CIcon size="50" color="white" background-color="red" border-radius="20"
    ><LogoNpm /></CIcon
  >&nbsp;
  <br />
  自定义svg
  <br />
  <CIcon size="30" background-color="orange" color="white">
    <img src="../public/assets/test.svg" /> </CIcon
  >&nbsp;
  <br />
  事件
  <br />
  <CIcon size="20" @c_click="clicktest"><AmericanFootballSharp /></CIcon>&nbsp;
</template>
```
