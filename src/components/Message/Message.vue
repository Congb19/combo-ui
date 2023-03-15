<template>
  <div>
    <div>{{ msg }}<span @click="() => destroy()"> X </span></div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue-demi'
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  msg: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: false,
  },
  destroy: {
    type: Function,
    required: true,
  },
})

onMounted(() => {
  console.log('show message')
  if (props.duration)
    setTimeout(() => {
      props.destroy()
    }, props.duration)
})
onUnmounted(() => {
  console.log('delete message')
})
</script>
<style>
.inner {
  background-color: aquamarine;
}
</style>
