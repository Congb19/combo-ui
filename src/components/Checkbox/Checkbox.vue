<script lang="ts">
export default {
  name: 'CCheckbox',
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
watch(
  () => props.value,
  (val) => {
    value.value = val
  }
)
const className = computed(() => {
  return `
    c-checkbox
    c-checkbox-${props.size}
    ${props.disabled ? 'c-checkbox-disabled' : ''}
    c-checkbox-${value.value + ''}
  `
})
const otherStyle = computed(() => ({
  // backgroundColor: value.value ? props.color : 'var(--c-color-default-1)',
}))
const events = {
  c_change: (event: any) => {
    if (props.disabled) return
    console.log(event)
    value.value = event.target.checked
    emit('update:value', value.value)
    emit('c_change')
  },
}
</script>

<template>
  <div :class="className" :style="otherStyle">
    <input type="checkbox" :checked="value" @change="events.c_change" />
  </div>
</template>
