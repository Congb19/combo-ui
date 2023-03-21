<script lang="ts">
export default {
  name: 'CButton',
}
</script>
<script setup lang="ts">
import { computed, PropType } from 'vue-demi'
import './index.css'
// props & events
// ------------------------------------------------------------------------------
const emit = defineEmits(['c_click'])
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
    type: String as PropType<'' | 'primary' | 'success' | 'warning' | 'error'>,
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

const events = {
  c_click: () => {
    if (!props.disabled) emit('c_click')
  },
}
const className = computed(() => {
  let name = `
    c-button 
    c-button-${props.type ? props.type : 'primary'} 
    c-button-${props.size} 
    ${props.round ? 'c-button-round' : ''}
    ${props.disabled ? 'c-button-disabled' : ''}
    c-button-${props.clean ? 'clean' : 'dirty'} 
  `
  return name
})
</script>

<template>
  <div :class="className" @click="events.c_click">
    <div class="c-button__border"></div>
    <slot>Button</slot>
  </div>
</template>
<!-- <style src="./index.css"></style> -->
