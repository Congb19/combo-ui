<template>
  <div class="c-message">
    <div>
      {{ msg }}<span v-if="closable" @click="() => destroy()"> X </span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, onUnmounted, PropType } from 'vue-demi'
import './index.css'
const props = defineProps({
  type: {
    type: String as PropType<'success' | 'warning' | 'info' | 'error'>,
    default: 'info',
    // required: true,
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
  position: {
    type: String,
    default: 'top',
  },
  closable: {
    type: Boolean,
    default: false,
  },
})

// const otherStyle = computed(() => {
//   return props.position.includes('left')
//     ? { left: '20px' }
//     : props.position.includes('right')
//     ? { right: '20px' }
//     : {}
// })

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
