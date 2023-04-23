<script setup>
import LoadingExample from './loading-example.vue'
</script>

# Loading / LoadingBar 加载

她也许不是不喜欢你送的礼物，可能只是不喜欢你。为什么呢？

就像很多人都讨厌页面开始转圈圈，但是内容没加载完又不得不等它继续转。所以说，人们讨厌的是网速慢和性能差，并不是讨厌 Loading 组件。

Combo UI 提供了两种全局 loading 组件。你可以通过 `useLoading` 方法获取 `CLoading`、 `CLoadingBar` 实例以及 `CLoadingStatus` 、`CLoadingBarStatus` 属性。

将你的应用放在 `CLoadingProvider` 下，就可以在任意地方调用 `CLoading` 实例的 `start` 方法或 `stop` 方法来控制 `CLoading` 组件 的状态，调用 `CLoadingBar` 实例的 `start`、`stop`、`finish`、`error`、`goto` 等方法来控制 `CLoadingBar` 的状态。

说实话这个组件做的有点粗糙了，后续慢慢优化吧。

---

<ClientOnly>
  <loading-example />
</ClientOnly>

```vue
<script setup>
import { CLoadingProvider, useLoading, CButton } from '../../src'
const { CLoading, CLoadingStatus, CLoadingBar, CLoadingBarStatus } = useLoading(
  { text: '加载中' }
)
const loading = () => {
  CLoading.start()
  setTimeout(() => {
    CLoading.stop()
  }, 2000)
}
const loadingbar = () => {
  CLoadingBar.start()
  setTimeout(() => {
    CLoadingBar.finish()
  }, 2000)
}
</script>
<template>
  <CLoadingProvider>
    {{ CLoadingStatus }}&nbsp;
    <CButton type="primary" @c_click="loading">Loading</CButton>&nbsp;
    <div></div>
    <br />
    <CButton type="primary" @c_click="() => CLoading.start()"
      >Loading start</CButton
    >&nbsp;
    <CButton type="primary" @c_click="() => CLoading.stop()"
      >Loading stop</CButton
    >&nbsp;
    <div></div>
    <br />
    {{ CLoadingBarStatus }}&nbsp;
    <CButton type="primary" @c_click="loadingbar">Loadingbar</CButton>&nbsp;
    <div></div>
    <br />
    <CButton type="primary" @c_click="() => CLoadingBar.start()"
      >LoadingBar start</CButton
    >&nbsp;
    <CButton type="primary" @c_click="() => CLoadingBar.stop()"
      >LoadingBar stop</CButton
    >&nbsp;
    <div></div>
    <br />
    <CButton type="success" @c_click="() => CLoadingBar.finish()"
      >LoadingBar finish</CButton
    >&nbsp;
    <CButton type="error" @c_click="() => CLoadingBar.error()"
      >LoadingBar error</CButton
    >&nbsp;
    <CButton type="primary" @c_click="() => CLoadingBar.goto(40)"
      >LoadingBar goto 40</CButton
    >&nbsp;
    <CButton type="primary" @c_click="() => CLoadingBar.goto(70)"
      >LoadingBar goto 70</CButton
    >&nbsp;
  </CLoadingProvider>
</template>
```
