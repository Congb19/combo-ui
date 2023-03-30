<template>
  <CSwitch v-model:value="dark" @c_change="change"></CSwitch>
  <br />
  currentTheme:
  <CTag type="primary" clean size="m">{{ currentTheme }}</CTag> &nbsp;
  systemTheme:
  <CTag type="primary" clean size="m">{{ systemTheme }}</CTag>
</template>

<script setup>
import { CTag, CSwitch, useTheme } from '../../src'
import { ref, watch } from 'vue-demi'

let { systemTheme, currentTheme, changeTheme } = useTheme()
let dark = ref(systemTheme == 'dark')

const change = (val) => {
  changeTheme(val ? 'dark' : 'light')
}
watch(
  () => currentTheme.value,
  (val) => {
    dark.value = val == 'dark'
  }
)
</script>
