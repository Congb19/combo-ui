<script lang="ts">
export default {
  name: 'CButton',
}
</script>
<script setup lang="ts">
import { computed, onMounted, PropType, Ref, ref, watch } from 'vue-demi'
import './index.css'

const emit = defineEmits([
  'update:value',
  'c_change',
  'c_blur',
  'c_focus',
  'c_click',
])
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
  },
  value: {
    type: [String, Number],
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: [String],
    default: '',
  },
})
// const { size, type, maxLength, value, disabled, placeholder } = props
watch(
  () => props.value,
  (val) => {
    if (props.maxLength)
      currentValue.value = (val + '').substring(0, props.maxLength)
    else currentValue.value = val + ''
  }
)

const c_input = ref()
const lock = ref(false) // 中文输入

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

const currentValue = ref(props.value)
const handleInput = (event: any) => {
  if (lock.value) return
  // console.log('input,', event, event.target)
  currentValue.value = event.target.value
  emit('update:value', currentValue.value)
  emit('c_change', currentValue.value)
}

const status = ref('default')
const mouseenter = () => {
  if (status.value !== 'focus' && !props.disabled) status.value = 'hover'
}
const mouseleave = () => {
  if (status.value !== 'focus' && !props.disabled) status.value = 'default'
}
const blur = () => {
  c_input.value.blur()
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
  c_click: () => {
    c_input.value.focus()
    emit('c_click')
  },
}
const cfocus = () => {
  c_input.value.focus()
}
const className = computed(() => {
  return `
    c-input
    c-input-${status.value}
    c-input-${props.size} 
    ${props.disabled ? 'c-input-disabled' : ''}
  `
})
</script>

<template>
  <div :class="className" @click="events.c_click">
    <!-- <div class="c-input__border"></div> -->
    <input
      ref="c_input"
      v-if="props.type !== 'textarea'"
      :type="props.type"
      :disabled="props.disabled"
      :value="currentValue"
      :placeholder="props.placeholder"
      :maxlength="props.maxLength ? props.maxLength : undefined"
      @focus="events.c_focus"
      @blur="events.c_blur"
      @mouseenter="mouseenter"
      @mouseleave="mouseleave"
      @input="handleInput"
    />
    <!-- <slot>Button</slot> -->
    <textarea
      ref="c_input"
      v-else
      name=""
      id=""
      cols="30"
      rows="2 "
      :disabled="props.disabled"
      :value="currentValue"
      :placeholder="props.placeholder"
      :maxlength="props.maxLength ? props.maxLength : undefined"
      @focus="events.c_focus"
      @blur="events.c_blur"
      @mouseenter="mouseenter"
      @mouseleave="mouseleave"
      @input="handleInput"
    >
    </textarea>
  </div>
</template>
