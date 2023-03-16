<template>
  <div id="c-theme-provider-body">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue-demi'
import { useTheme } from '../Theme'
onMounted(() => {
  useTheme()
})
</script>
