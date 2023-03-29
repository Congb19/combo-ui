<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  options: any[]
  value: any
}
const props = defineProps<Props>()
// console.log('selectoptions', props.options, props.value)
const emit = defineEmits(['update:value', 'c_select'])
const select = (value: any) => {
  // console.log('selectOptions select', value)
  emit('update:value', value)
  emit('c_select', value)
}
const mousedown = (event: any) => {
  // console.log('selectOptions mousedown', event.target)
  event.preventDefault()
}
const mouseup = (value: any) => {
  // console.log('selectOptions mouseup', value)
  select(value)
}
const className = computed(() => {
  return `
    c-select__options__option
  `
})
const selected = (val: any) => val == props.value
// c - select__options__option - selected
</script>
<template>
  <div
    :class="className"
    v-for="item in props.options"
    @mousedown="mousedown"
    @mouseup="mouseup(item.value)"
    :style="
      selected(item.value)
        ? { backgroundColor: 'var(--c-color-primary-5)' }
        : {}
    "
  >
    {{ item.label }}
  </div>
</template>
