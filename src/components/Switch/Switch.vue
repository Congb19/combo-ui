<script lang="ts">
export default {
  name: 'CSwitch',
}
</script>
<script setup lang="ts">
import { computed, ref, watch } from 'vue-demi'
// import { Component } from 'vue'
import { CIcon } from '..'
import './index.css'

interface Props {
  value: boolean
  size?: 's' | 'm' | 'l'
  color?: string // 有问题，最好先不用
  disabled?: boolean
  icon?: string | object
}
const props = withDefaults(defineProps<Props>(), {
  size: 'm',
  color: 'var(--c-color-primary-1)',
  disabled: false,
})

const emit = defineEmits(['c_change', 'update:value'])

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
    emit('c_change', value.value)
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
    <div class="c-switch__driver">
      <CIcon
        style="position: absolute; top: 0; left: 0"
        v-if="props.icon"
        :size="props.size == 's' ? 12 : props.size == 'm' ? 16 : 20"
        color="var(--c-color-text-1)"
      >
        <span v-if="typeof props.icon == 'string'">{{ props.icon }}</span>
        <component v-else :is="props.icon"></component>
      </CIcon>
    </div>
  </div>
</template>
