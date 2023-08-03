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
  value?: Date | number | string | any
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
const props = withDefaults(defineProps<Props>(), {
  value: new Date(),
  disabled: false,
  placement: 'bottom',
  // maxHeight: 100,
})
const emit = defineEmits(['update:value'])

const getFullMonthOrDate = (date: Date, type: string) => {
  let t = type == 'month' ? date.getMonth() + 1 : date.getDate()
  if (t < 10) return '0' + t
  else return t + ''
}

const input = ref()
const showDropdown = ref(false)
const currentValue = ref(props.value)
let displayValue = computed(
  () =>
    currentValue.value.getFullYear() +
    '/' +
    getFullMonthOrDate(currentValue.value, 'month') +
    '/' +
    getFullMonthOrDate(currentValue.value, 'date')
)

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
  console.log('blur')
  collapse()
}
const choose = (date: Date) => {
  console.log('choose!', date)
  currentValue.value = date
  emit('update:value', date)
  blur()
}
const className = computed(() => {
  return `
    c-date-picker
  `
})
</script>
<template>
  <div :class="className" @blur="blur">
    <CInput
      ref="input"
      @c_click="expand"
      @c_blur="() => {}"
      :value="displayValue"
    ></CInput>
    <CDropdown
      :show="showDropdown"
      :parent="input"
      :max-height="320"
      :placement="props.placement"
    >
      <CDatePanel @c_choose="choose" />
    </CDropdown>
  </div>
</template>
