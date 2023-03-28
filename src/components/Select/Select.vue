<script lang="ts">
export default {
  name: 'CSelect',
}
</script>
<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue-demi'
import { CInput } from '..'
import SelectOptions from './SelectOptions.vue'
import { createPopper } from '@popperjs/core'
import './index.css'

interface Props {
  size?: 's' | 'm' | 'l'
  options: any[]
  value: any
  placement?: 'bottom' | 'top'
  disabled?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  size: 'm',
  value: null,
  placement: 'bottom',
  disabled: false,
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
      select(props.value)
    }
  }
)
const label = computed(() => {
  if (value.value == null) return ''
  return props.options.find((item) => item.value == value.value).label
})
const tmp = ref(label.value)

const input = ref()
const cinput = ref()
const dropdown = ref()

let popperInstance: any
onMounted(() => {
  console.log(input, dropdown)
  popperInstance = createPopper(input.value, dropdown.value, {
    placement: props.placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 8],
        },
      },
    ],
  })
})
const expand = () => {
  if (props.disabled || props.options.length < 1) return
  console.log('select expand')
  showDropdown.value = true
  popperInstance.update()
}
const collapse = () => {
  console.log('select collapse')
  showDropdown.value = false
  popperInstance.update()
}
const blur = () => {
  console.log('select blur')
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
  // cinput.value.blur()
  console.log('select select', value)
  emit('update:value', value)
  // emit('c_select', 9)
  emit('c_select', props.options.find((item) => item.value == value).value)
  collapse()
  tmp.value = label.value
}
const customInput = (value: any) => {
  console.log('select customInput', value)
  tmp.value = value
}
</script>
<template>
  <div :class="className" :style="otherStyle">
    <div ref="input" style="display: block">
      <CInput
        ref="cinput"
        :value="tmp"
        @c_blur="blur"
        @click="expand"
        @c_change="customInput"
        :disabled="props.disabled"
      ></CInput>
    </div>
    <div class="c-select__options" ref="dropdown" v-show="showDropdown">
      <div class="c-select__options__arrow" data-popper-arrow></div>
      <SelectOptions
        :options="
          props.placement == 'top' ? props.options.reverse() : props.options
        "
        v-model:value="value"
        @c_select="select"
      ></SelectOptions>
    </div>
  </div>
</template>
