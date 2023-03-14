<script lang="ts">
export default {
  name: 'CButton',
}
</script>
<script setup lang="ts">
import { computed, PropType } from 'vue-demi'
// import '../../styles/index.css'
// props & events
// ------------------------------------------------------------------------------
const emit = defineEmits(['c_click', 'c_mouseover', 'c_close'])
const props = defineProps({
  size: {
    type: String as PropType<'s' | 'm' | 'l'>,
    default: 'm',
  },
  round: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String as PropType<
      '' | 'primary' | 'info' | 'success' | 'warning' | 'error'
    >,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  clean: {
    type: Boolean,
    default: false,
  },
})
const { type, size, round, disabled, clean } = props

const events = {
  c_click: () => {
    if (!disabled) emit('c_click')
  },
}
const className = computed(() => {
  let name = `
    c-button 
    ${type ? 'c-button-' + type : ''} 
    c-button-${size} 
    ${round ? 'c-button-round' : ''}
    ${disabled ? 'c-button-disabled' : ''}
    c-button-${clean ? 'clean' : 'dirty'} 
  `
  return name
})
</script>

<template>
  <div :class="className" @click="events.c_click">
    <div class="c-button__border"></div>
    <slot>按钮</slot>
  </div>
</template>
<style src="./index.css"></style>
