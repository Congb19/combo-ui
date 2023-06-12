<template>
  <div class="c-message-wrapper">
    <div :class="className" :style="otherStyle">
      <div class="c-message__icon">
        <CIcon :size="20" :color="iconColor">
          <CheckmarkCircle v-if="type == 'success'"></CheckmarkCircle>
          <InformationCircle v-if="type == 'info'"></InformationCircle>
          <AlertCircle v-if="type == 'warning'"></AlertCircle>
          <CloseCircle v-if="type == 'error'"></CloseCircle>
        </CIcon>
      </div>
      {{ msg }}
      <span class="c-message__close" v-if="closable" @click="() => destroy()">
        <CIcon :size="20" :color="iconColor">
          <Close></Close>
        </CIcon>
      </span>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'CMessage',
}
</script>
<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue-demi'
import { CIcon } from '..'
import {
  CheckmarkCircle,
  InformationCircle,
  CloseCircle,
  AlertCircle,
  Close,
} from '@vicons/ionicons5'
import './index.css'

interface Props {
  type?: 'success' | 'warning' | 'info' | 'error'
  msg: string
  duration?: number
  destroy: Function
  // position?: 'top' | 'left' | 'right'
  closable?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  type: 'info',
  duration: 5000,
  // position: 'top',
  closable: false,
})

const className = computed(() => {
  return `c-message
    c-message-${props.type}
  `
})
const iconColor = computed(() => {
  return `var(--c-color-${props.type == 'info' ? 'primary' : props.type}-1)`
})
const otherStyle: any = computed(() => ({
  '--c-message-padding': `0 ${props.closable ? '44' : '20'}px 0 44px`,
}))
onMounted(() => {
  // console.log('show message')
  if (props.duration)
    setTimeout(() => {
      props.destroy()
    }, props.duration)
})
onUnmounted(() => {
  // console.log('delete message')
})
</script>
