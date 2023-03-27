<template>
  <div class="c-icon" :style="otherStyle">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import './index.css'
const props = defineProps({
  size: {
    type: Number,
    default: 14,
  },
  color: {
    type: String,
    default: 'var(--c-color-text-1)',
  },
  backgroundColor: {
    type: String,
    default: 'transparent',
  },
  borderRadius: {
    type: Number,
    default: 2,
  },
})
const otherStyle = {
  height: props.size + 'px',
  width: props.size + 'px',
  borderRadius: props.borderRadius + 'px',
  color: props.color,
  backgroundColor: props.backgroundColor,
  '--c-size-icon': props.size + 'px',
  '--c-color-icon': props.color,
}
</script>
