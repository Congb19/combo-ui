<script setup lang="ts">
interface Props {
  options: any[]
  value: any
}
const props = defineProps<Props>()
console.log('selectoptions', props.options, props.value)
const emit = defineEmits(['update:value', 'c_select'])
const select = (value: any) => {
  console.log('selectOptions select', value)
  emit('update:value', value)
  emit('c_select', value)
}
const mousedown = (event: any) => {
  console.log('selectOptions mousedown', event.target)
  event.preventDefault()
}
const mouseup = (value: any) => {
  console.log('selectOptions mouseup', value)
  select(value)
}
</script>
<template>
  <!-- <div> -->
  <div
    class="c-select__options__option"
    v-for="item in props.options"
    @mousedown="mousedown"
    @mouseup="mouseup(item.value)"
  >
    {{ item.label }}
  </div>
  <!-- <div class="c-select__options__option" v-if="props.options.length < 1">
    &nbsp;
  </div> -->
  <!-- </div> -->
</template>
