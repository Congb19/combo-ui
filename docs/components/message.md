<script setup>
import MessageExample from './message-example.vue'
</script>

# Message 消息

在全局弹出醒目的消息来。如果你的微信弹出了重要的人的消息，一定要记得回复。

Combo UI 通过 `useMsg` 方法创建一个消息实例。你可以通过这个实例在任意位置唤出全局消息。

---

<message-example />

```vue
<script setup>
import { CMessageProvider, useMsg, CButton } from '../../src'
const msg = useMsg()
const msg1 = () => {
  msg.info('default')
}
const msg2 = () => {
  msg.error({
    msg: 'option',
    position: 'right',
    closable: true,
    duration: 500000,
  })
}
const info = () => {
  msg.info('info')
}
const success = () => {
  msg.success('success')
}
const warning = () => {
  msg.warning('warning')
}
const error = () => {
  msg.error('error')
}
</script>
<template>
  <CMessageProvider>
    <CButton type="primary" @c_click="msg1">default</CButton>&nbsp;
    <CButton type="primary" @c_click="msg2">with Options</CButton>&nbsp;
    <div></div>
    <br />
    <CButton clean type="primary" @c_click="info">info</CButton>&nbsp;
    <CButton clean type="success" @c_click="success">success</CButton>&nbsp;
    <CButton clean type="warning" @c_click="warning">warning</CButton>&nbsp;
    <CButton clean type="error" @c_click="error">error</CButton>&nbsp;
  </CMessageProvider>
</template>
```
