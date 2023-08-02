<script lang="ts">
export default {
  name: 'CDatePicker',
}
</script>
<script lang="ts" setup>
import CInput from '../Input'
import CDropdown from '../Dropdown'
import CDatePanel from './DatePanel.vue'
import { computed, ref } from 'vue-demi'
import './index.css'

interface Props {
  value?: Date | number | string
  placement?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top-start'
    | 'bottom-start'
    | 'left-start'
    | 'right-start'
    | 'top-end'
    | 'bottom-end'
    | 'left-end'
    | 'right-end'
  disabled?: boolean
  // maxHeight?: number
}
let initDate = new Date()
const props = withDefaults(defineProps<Props>(), {
  value: 'initDate',
  disabled: false,
  placement: 'bottom',
  // maxHeight: 100,
})
const input = ref()
const showDropdown = ref(true)
const currentValue = ref(props.value)

const expand = () => {
  if (props.disabled) return
  // console.log('select expand')
  showDropdown.value = true
  // popperInstance.update()
}
const collapse = () => {
  showDropdown.value = false
}
const blur = () => {
  collapse()
}
const choose = (date: Date) => {}
const className = computed(() => {
  return `
    c-date-picker
  `
})
</script>
<template>
  <div :class="className">
    <CInput ref="input" @c_click="expand" @c_blur="blur"> </CInput>
    <CDropdown
      :show="showDropdown"
      :parent="input"
      :max-height="200"
      :placement="props.placement"
    >
      <CDatePanel @c_choose="choose" />
    </CDropdown>
  </div>
</template>
