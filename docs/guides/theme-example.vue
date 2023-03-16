<template>
  <CThemeProvider>
    -------------------切换主题测试
    <br />
    <CButton @c_click="click('dark')">changetheme-dark</CButton>
    <CButton @c_click="click('light')">changetheme-light</CButton>

    <div style="color: var(--combo-test-color)">1234</div>
  </CThemeProvider>
</template>

<script setup>
import { onMounted } from 'vue-demi'
import { CButton, useMsg, CThemeProvider, useTheme } from '../../src'
const msg = useMsg()
let click = (theme) => {
  document.getElementsByTagName('html')[0].className = theme
}
</script>
