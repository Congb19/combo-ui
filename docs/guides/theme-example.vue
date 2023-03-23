<template>
  <CThemeProvider>
    <br />
    <CButton clean type="primary" @c_click="click('light')">ToLight</CButton
    >&nbsp;
    <CButton clean type="primary" @c_click="click('dark')">ToDark</CButton>
    <!-- <div style="color: var(--combo-test-color)">1234</div> -->
    <br />
  </CThemeProvider>
</template>

<script setup>
import { CButton, CThemeProvider } from '../../src'
let click = (theme) => {
  document.getElementsByTagName('html')[0].className = theme
}
</script>
