<template>
  <CThemeProvider>
    <CMessageProvider>
      ---------------------button---------------------- default
      <CButton>Btn 默认</CButton>
      <br />
      size
      <CButton size="s">Btn s</CButton>
      <CButton size="m">Btn m</CButton>
      <CButton size="l">Btn l</CButton>
      <br />
      round
      <CButton round>Btn round</CButton>
      <br />
      type
      <CButton type="primary">Btn primary</CButton>
      <CButton type="success">Btn success</CButton>
      <CButton type="warning">Btn warning</CButton>
      <CButton type="error">Btn error</CButton>
      <br />
      clean
      <CButton type="primary" clean>primary clean</CButton>
      <CButton type="success" clean>success clean</CButton>
      <CButton type="warning" clean>warning clean</CButton>
      <CButton type="error" clean>error clean</CButton>
      <br />
      disabled
      <CButton disabled>Btn disabled</CButton>
      <CButton disabled clean>Btn disabled</CButton>
      <br />
      c_click
      <CButton @c_click="clicktest">Btn 事件</CButton>

      <br />
      -------------------切换主题测试---------------------
      <br />
      <CButton @c_click="changeTheme('dark')">changetheme-dark</CButton>
      <CButton @c_click="changeTheme('light')">changetheme-light</CButton>
      <CButton @c_click="changeTheme2('dark')">changetheme-dark</CButton>
      <CButton @c_click="changeTheme2('light')">changetheme-light</CButton>
      <div
        style="color: var(--combo-test-color); transition: all 0.2s ease-out"
      >
        {{ currentTheme }}
      </div>
      <!-- <CTag size="s" round type="error">TestTag0 样式</CTag>
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
  <CTag /> -->
      <!-- <CTabBar /> -->
      <br />
      ------------------input-------------------
      <br />
      {{ inputvalue }}
      <CInput v-model:value="inputvalue" />
      <br />
      size
      <br />
      <CInput v-model:value="inputvalue" size="s" />
      <CInput v-model:value="inputvalue" size="m" />
      <CInput v-model:value="inputvalue" size="l" />
      <br />
      disabled
      <br />
      <CInput v-model:value="inputvalue" disabled />
      <br />
    </CMessageProvider>
  </CThemeProvider>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import {
  CTag,
  CInput,
  CMessageProvider,
  CThemeProvider,
  useMsg,
  useTheme,
} from '../../src'
const msg = useMsg()
const { currentTheme, changeTheme } = useTheme()
const changeTheme2 = (theme: string) => {
  document.getElementsByTagName('html')[0].className = theme ? theme : ''
}
const clicktest = () => {
  console.log('click')
  msg.error('test msg', 4000)
}
const mouseovertest = () => {
  console.log('mouseover')
}
const closetest = () => {
  console.log('close')
}
const inputvalue = ref('123')
</script>
