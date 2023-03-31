<script lang="ts">
export default {
  name: 'CIcon',
}
</script>
<script setup lang="ts">
import './index.css'
interface Props {
  size?: number
  color?: string
  backgroundColor?: string
  borderRadius?: number
}
const props = withDefaults(defineProps<Props>(), {
  size: 14,
  color: 'var(--c-color-text-1)',
  backgroundColor: 'transparent',
  borderRadius: 2,
})

const otherStyle: any = {
  height: props.size + 'px',
  width: props.size + 'px',
  borderRadius: props.borderRadius + 'px',
  color: props.color,
  backgroundColor: props.backgroundColor,
  '--c-size-icon': props.size + 'px',
  '--c-color-icon': props.color,
}
</script>
<template>
  <div class="c-icon" :style="otherStyle">
    <slot></slot>
  </div>
</template>
