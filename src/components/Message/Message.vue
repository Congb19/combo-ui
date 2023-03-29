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
<script setup lang="ts">
import { computed, onMounted, onUnmounted, PropType } from 'vue-demi'
import { CIcon } from '..'
import {
  CheckmarkCircle,
  InformationCircle,
  CloseCircle,
  AlertCircle,
  Close,
} from '@vicons/ionicons5'
import './index.css'
const props = defineProps({
  type: {
    type: String as PropType<'success' | 'warning' | 'info' | 'error'>,
    default: 'info',
    // required: true,
  },
  msg: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: false,
  },
  destroy: {
    type: Function,
    required: true,
  },
  position: {
    type: String,
    default: 'top',
  },
  closable: {
    type: Boolean,
    default: false,
  },
})

// const otherStyle = computed(() => {
//   return props.position.includes('left')
//     ? { left: '20px' }
//     : props.position.includes('right')
//     ? { right: '20px' }
//     : {}
// })

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
