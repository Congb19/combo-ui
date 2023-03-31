<script lang="ts">
export default {
  name: 'CSelect',
}
</script>
<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue-demi'
import { CInput, CDropdown } from '..'

import SelectOptions from './SelectOptions.vue'
import './index.css'

interface Props {
  size?: 's' | 'm' | 'l'
  options: any[]
  value: any
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
  maxHeight?: number
}
const props = withDefaults(defineProps<Props>(), {
  size: 'm',
  placement: 'bottom-start',
  disabled: false,
  maxHeight: 200,
})

const emit = defineEmits(['c_select', 'update:value'])

const className = computed(() => {
  return `
    c-select
    ${props.disabled ? 'c-select-disabled' : ''}
  `
})
const otherStyle = {}

const showDropdown = ref(false)
const value = ref(props.value)
watch(
  () => props.value,
  (val) => {
    if (value.value == props.value) return
    else {
      value.value = props.value
      // select(props.value)
      tmp.value = label.value
    }
  }
)
const label = computed(() => {
  if (value.value == null) return ''
  return props.options.find((item) => item.value == value.value).label
})
const tmp = ref(label.value)

const input = ref()

onMounted(() => {})
const expand = () => {
  if (props.disabled || props.options.length < 1) return
  // console.log('select expand')
  showDropdown.value = true
  // popperInstance.update()
}
const collapse = () => {
  // console.log('select collapse')
  showDropdown.value = false
  // popperInstance.update()
}
const blur = () => {
  // console.log('select blur')
  collapse()

  if (tmp.value == label.value) return

  if (tmp.value == '') {
    value.value = null
    select(null)
  } else {
    const res = props.options.find((item) => item.label == tmp.value)
    if (res) {
      value.value = res.value
      select(res.value)
    } else tmp.value = label.value
  }
}
const select = (value: any) => {
  // console.log('select select', value)
  emit('update:value', value)
  emit('c_select', value)
  // emit('c_select', props.options.find((item) => item.value == value).value)
  collapse()
  tmp.value = label.value
}
const customInput = (value: any) => {
  // console.log('select customInput', value)
  tmp.value = value
}
</script>
<template>
  <div :class="className" :style="otherStyle">
    <div ref="input" style="display: block">
      <CInput
        :value="tmp"
        @c_click="expand"
        @c_blur="blur"
        @c_change="customInput"
        :disabled="props.disabled"
      ></CInput>
    </div>
    <CDropdown
      :show="showDropdown"
      :parent="input"
      :max-height="props.maxHeight"
      :placement="props.placement"
    >
      <SelectOptions
        :options="
          props.options
          // props.placement == 'top' ? props.options.reverse() : props.options
        "
        v-model:value="value"
        @c_select="select"
      ></SelectOptions>
    </CDropdown>
  </div>
</template>
