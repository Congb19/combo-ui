<script lang="ts">
export default {
  name: 'CButton',
}
</script>
<script setup lang="ts">
import { computed, PropType, ref } from 'vue-demi'
import './index.css'
// props & events
// ------------------------------------------------------------------------------
const emit = defineEmits(['c_click'])
const status = ref('normal')
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
      'default' | 'primary' | 'success' | 'warning' | 'error'
    >,
    default: 'default',
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
    c-button-${props.type ? props.type : 'default'} 
    c-button-${props.size} 
    ${props.round ? 'c-button-round' : ''}
    ${props.disabled ? 'c-button-disabled' : ''}
    c-button-${props.clean ? 'clean' : 'dirty'} 
    c-button-${status.value} 
  `
  return name
})
const focus = () => {
  status.value = 'focus'
}
const blur = () => {
  status.value = 'normal'
}
</script>

<template>
  <div
    :class="className"
    @click="events.c_click"
    :tabindex="1"
    @focus="focus"
    @blur="blur"
  >
    <div class="c-button__border"></div>
    <slot>Button</slot>
  </div>
</template>
<!-- <style src="./index.css"></style> -->
