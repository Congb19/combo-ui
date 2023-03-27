<script lang="ts">
export default {
  name: 'CCheckbox',
}
</script>
<script setup lang="ts">
import { computed, PropType, reactive, ref, watch } from 'vue-demi'
import { CIcon } from '..'
import { CheckmarkSharp } from '@vicons/ionicons5'
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
  icon: {
    default: CheckmarkSharp,
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
    c-checkbox
    c-checkbox-${props.size}
    ${props.disabled ? 'c-checkbox-disabled' : ''}
    c-checkbox-${value.value + ''}
    c-checkbox-${status.value}
  `
})
const otherStyle = computed(() => ({
  // backgroundColor: value.value ? props.color : 'var(--c-color-default-1)',
  '--c-color-checkbox': props.color,
}))
const events = {
  c_change: (event: any) => {
    if (props.disabled) return
    // console.log(event)
    value.value = !value.value
    emit('update:value', value.value)
    emit('c_change', value.value)
  },
}
const mouseEnter = () => {
  if (status.value == 'focus') return
  status.value = 'hover'
}
const mouseLeave = () => {
  if (status.value == 'focus') return
  status.value = 'normal'
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
    :style="otherStyle"
    @click="events.c_change"
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave"
    @focus="focus"
    @blur="blur"
    tabindex="1"
  >
    <Transition name="icon">
      <CIcon
        v-if="value"
        class="c-checkbox__inner"
        :size="props.size == 's' ? 12 : props.size == 'm' ? 14 : 16"
        :background-color="
          disabled ? 'var(--c-color-default-1)' : 'var(--c-color-checkbox)'
        "
        color="var(--c-color-text-dirty-1)"
        :border-radius="2"
      >
        <component :is="icon" :background-color="props.color"></component>
        <!-- <CheckmarkSharp :background-color="props.color"></CheckmarkSharp> -->
      </CIcon>
    </Transition>
  </div>
</template>
<style>
.icon-enter-active,
.icon-leave-active {
  transition: opacity 0.1s ease;
}

.icon-enter-from,
.icon-leave-to {
  opacity: 0;
}
</style>
