<script lang="ts">
export default {
  name: 'CSwitch',
}
</script>
<script setup lang="ts">
import { computed, PropType, ref } from 'vue-demi'
import './index.css'

const emit = defineEmits(['c_change', 'update:value'])
const props = defineProps({
  size: {
    type: String as PropType<'s' | 'm' | 'l'>,
    default: 'm',
  },
  color: {
    type: String,
    default: 'var(--c-color-primary-1)',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
const value = ref(false)
const className = computed(() => {
  return `
    c-switch
    c-switch-${props.size}
    ${props.disabled ? 'c-switch-disabled' : ''}
    c-switch-${value.value + ''}
  `
})
const otherStyle = {
  backgroundColor: props.color,
}
const events = {
  c_change: () => {
    if (props.disabled) return
    value.value = !value.value
    emit('update:value', value.value)
    emit('c_change')
  },
}
</script>

<template>
  <div :class="className" @click="events.c_change" :style="otherStyle">
    <div class="c-switch__driver"></div>
  </div>
</template>
