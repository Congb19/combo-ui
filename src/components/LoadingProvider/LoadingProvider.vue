<template>
  <!-- <Transition> -->
  <div id="c-loading-provider"></div>
  <!-- </Transition> -->
  <slot></slot>
</template>
<script lang="ts">
export default {
  name: 'CLoadingProvider',
}
</script>
<script setup lang="ts">
import './index.css'
</script>
