<script lang="ts">
export default {
  name: 'CButton',
}
</script>
<script setup lang="ts">
import { computed, ref } from 'vue-demi'
import './index.css'
// import { c_log } from '../../utils'
// c_log('error', 'test')
// props & events
// ------------------------------------------------------------------------------
interface Props {
  size?: 's' | 'm' | 'l'
  round?: boolean
  type?: 'default' | 'primary' | 'success' | 'warning' | 'error'
  disabled?: boolean
  clean?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  size: 'm',
  round: false,
  type: 'default',
  disabled: false,
  clean: false,
})
const emit = defineEmits(['c_click'])

const status = ref('normal')

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
