<script lang="ts">
export default {
  name: 'CSwitch',
}
</script>
<script setup lang="ts">
import { computed, PropType, reactive, ref, watch } from 'vue-demi'
import './index.css'

const emit = defineEmits(['c_change', 'update:value'])
const props = defineProps({
  value: {
    type: Boolean,
  },
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
const value = ref(props.value)
const status = ref('normal')
watch(
  () => props.value,
  (val) => {
    value.value = val
  }
)
const className = computed(() => {
  return `
    c-switch
    c-switch-${props.size}
    ${props.disabled ? 'c-switch-disabled' : ''}
    c-switch-${value.value + ''}
    c-switch-${status.value}
  `
})
const otherStyle = computed(() => ({
  backgroundColor: value.value ? props.color : 'var(--c-color-default-1)',
}))
const events = {
  c_change: () => {
    if (props.disabled) return
    value.value = !value.value
    emit('update:value', value.value)
    emit('c_change')
  },
}
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
    @click="events.c_change"
    :style="otherStyle"
    :tabindex="1"
    @focus="focus"
    @blur="blur"
  >
    <div class="c-switch__driver"></div>
  </div>
</template>
