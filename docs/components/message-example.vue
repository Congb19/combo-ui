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
