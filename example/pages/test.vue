<template>
  <CButton>TestBtn0 样式</CButton>
  <CButton @c_click="clicktest">TestBtn1 事件</CButton>
  <CButton size="m" type="primary">按钮</CButton>
  <CButton size="l" type="success" round>TestBtn1asdasd</CButton>
  <div></div>
  <CTag size="s" round type="error">TestTag0 样式</CTag>
  <CTag size="m">TestTag1</CTag>
  <CTag
    size="l"
    closable
    round
    type="warning"
    @c_mouseover="mouseovertest"
    @c_click="clicktest"
    @c_close="closetest"
    >测试标签2 事件</CTag
  >
  <CTag size="l" round>测试标签3</CTag>
  <c-tag size="l" round>测试标签4</c-tag>
  <CTag />
  <!-- <CTabBar /> -->
</template>
<script setup lang="ts">
import { CTag } from '../../src'
const clicktest = () => {
  console.log('click')
}
const mouseovertest = () => {
  console.log('mouseover')
}
const closetest = () => {
  console.log('close')
}
</script>
<style>
.test {
  /* width: 500px;
  height: 500px; */
  background-color: rgb(167, 251, 223);
  overflow: hidden;
}
</style>
