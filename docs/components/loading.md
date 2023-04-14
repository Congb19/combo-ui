<script setup>
import LoadingExample from './loading-example.vue'
</script>

# Loading 加载

很多人都讨厌页面开始转圈圈。但是内容没加载完的话，不得不转着等。

Combo UI 通过 `useLoading` 方法提供了 `CLoading` 实例以及 `CLoadingStatus` 属性。你可以在任意地方调用 `CLoading` 实例的 start 方法或 stop 方法来控制 loading 的状态。

---

<ClientOnly>
  <loading-example />
</ClientOnly>

```vue
<script setup>
import { CLoadingProvider, useLoading, CButton } from '../../src'
const { CLoading, CLoadingStatus } = useLoading()
const loading = () => {
  CLoading.start()
  setTimeout(() => {
    CLoading.stop()
  }, 4000)
}
</script>
<template>
  <CLoadingProvider>
    {{ CLoadingStatus }}&nbsp;
    <CButton type="primary" @c_click="loading">start</CButton>&nbsp;
  </CLoadingProvider>
</template>
```
