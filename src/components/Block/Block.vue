<script lang="ts">
export default {
  name: 'CBlock',
}
</script>
<script lang="ts" setup>
import { computed, ref } from 'vue-demi'
import { CIcon } from '..'
import {
  CheckmarkCircle,
  InformationCircle,
  CloseCircle,
  AlertCircle,
  CaretDown,
  CaretUp,
} from '@vicons/ionicons5'
import './index.css'

interface Props {
  type?: 'default' | 'info' | 'success' | 'warning' | 'error'
  title?: string
  content: string
  detail?: boolean
  expanded?: boolean
  width?: number
}
const props = withDefaults(defineProps<Props>(), {
  type: 'default',
  title: '',
  detail: false,
  expanded: true,
})

const expanded = ref(props.expanded)

const className = computed(() => {
  return `
    c-block
    c-block-${props.type}
    ${props.detail ? 'c-block-detail' : ''}
  `
})
const otherStyle = computed(() => {
  return {
    width: props.width ? props.width + 'px' : '100%',
  }
})
const iconColor = computed(() => {
  return `var(--c-color-${props.type == 'info' ? 'primary' : props.type}-1)`
})
const borderColor = computed(() => {
  return `var(--c-color-${props.type == 'info' ? 'primary' : props.type}-6)`
})

const click = () => {
  if (!props.detail) return
  expanded.value = !expanded.value
}
const clickBody = (e: any) => {
  if (!props.detail) return
  e.stopPropagation()
}
</script>
<template>
  <div :class="className" @click="click" :style="otherStyle">
    <span class="c-block__icon">
      <CIcon :size="20" :color="iconColor">
        <CheckmarkCircle v-if="type == 'success'"></CheckmarkCircle>
        <InformationCircle
          v-if="type == 'info' || type == 'default'"
        ></InformationCircle>
        <AlertCircle v-if="type == 'warning'"></AlertCircle>
        <CloseCircle v-if="type == 'error'"></CloseCircle>
      </CIcon>
    </span>
    <span class="c-block__title">
      {{ props.title ? props.title : props.type }}
    </span>
    <Transition name="block">
      <div class="c-block__body" v-show="expanded" @click="clickBody">
        {{ props.content }}
      </div>
    </Transition>
    <div class="c-block__arrow" v-if="props.detail">
      <CIcon :size="14" :color="iconColor">
        <CaretUp v-if="expanded"></CaretUp>
        <CaretDown v-else></CaretDown>
      </CIcon>
    </div>
  </div>
</template>
<style>
.block-enter-active,
.block-leave-active {
  /* transition: all 1s ease; */
  transition: all 0.2s ease;
}

.block-enter-from,
.block-leave-to {
  opacity: 0;
  /* height: 0px; */
  /* transform: scale(1, 0); */
}
</style>
