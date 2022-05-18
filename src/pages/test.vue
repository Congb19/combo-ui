<template>
  <CButton>TestBtn0 样式</CButton>
  <CButton @c_click="clicktest">TestBtn1 事件</CButton>
  <CButton size="m" type="r">按钮</CButton>
  <CButton size="l" type="g" round="100">TestBtn1asdasd</CButton>
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
  <CTag size="xl" round>测试标签3</CTag>
  <CTag />
</template>
<script setup lang="ts">
const clicktest = () => {
  console.log('click');
};
const mouseovertest = () => {
  console.log('mouseover');
};
const closetest = () => {
  console.log('close');
};
</script>
