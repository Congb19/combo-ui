<script lang="ts">
export default {
  name: 'CButton',
}
</script>
<script setup lang="ts">
import { computed, onMounted, PropType, Ref, ref } from 'vue-demi'

import './index.css'

const emit = defineEmits(['update:value', 'c_change', 'c_blur', 'c_focus'])
const props = defineProps({
  size: {
    type: String as PropType<'s' | 'm' | 'l'>,
    default: 'm',
  },
  type: {
    type: String as PropType<'text' | 'password' | 'textarea'>,
    default: 'text',
  },
  maxLength: {
    type: Number,
    default: false,
  },
  align: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: 'left',
  },
  value: {
    type: [String, Number],
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
const { size, type, maxLength, value, disabled } = props

const c_input = ref()
const lock = ref(false)

onMounted(() => {
  c_input.value.addEventListener('compositionstart', (event: Event) => {
    lock.value = true
    // console.log('composition start', event)
  })
  c_input.value.addEventListener('compositionend', (event: Event) => {
    lock.value = false
    // console.log('composition end', event)
    handleInput(event)
  })
})

const currentValue = ref(value)
const handleInput = (event: any) => {
  if (lock.value) return
  console.log('input,', event, event.target)
  currentValue.value = event.target.value
  emit('update:value', currentValue.value)
  emit('c_change')
}

const status = ref('default')
const mouseenter = () => {
  if (status.value !== 'focus' && !disabled) status.value = 'hover'
}
const mouseleave = () => {
  if (status.value !== 'focus' && !disabled) status.value = 'default'
}

const events = {
  c_change: () => {
    emit('c_change')
  },
  c_blur: () => {
    status.value = 'default'
    emit('c_blur')
  },
  c_focus: () => {
    status.value = 'focus'
    emit('c_focus')
  },
}

const className = computed(() => {
  return `
    c-input
    c-input-${status.value}
    c-input-${size} 
    ${disabled ? 'c-input-disabled' : ''}
  `
})
</script>

<template>
  <div :class="className">
    <!-- <div class="c-input__border"></div> -->
    <input
      ref="c_input"
      v-if="type !== 'textarea'"
      type="text"
      :disabled="disabled"
      :value="currentValue"
      @focus="events.c_focus"
      @blur="events.c_blur"
      @mouseenter="mouseenter"
      @mouseleave="mouseleave"
      @input="handleInput"
    />
    <!-- <slot>Button</slot> -->
  </div>
</template>
