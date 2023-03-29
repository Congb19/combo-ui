<script lang="ts">
export default {
  name: 'CTag',
}
</script>
<script setup lang="ts">
import { computed, PropType, ref } from 'vue-demi'
import { CIcon } from '..'
import { Close } from '@vicons/ionicons5'
import './index.css'
const emit = defineEmits(['c_click', 'c_mouseover', 'c_close'])
const props = defineProps({
  size: {
    type: String as PropType<'s' | 'm' | 'l'>,
    default: 'm',
  },
  round: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String as PropType<
      'default' | 'primary' | 'success' | 'warning' | 'error'
    >,
    default: 'default',
  },
  closable: {
    type: Boolean,
    default: false,
  },
  clean: {
    type: Boolean,
    default: false,
  },
})
const show = ref(true)
const events = {
  c_click: () => {
    emit('c_click')
  },
  c_mouseover: () => {
    emit('c_mouseover')
  },
  c_close: (e: Event) => {
    // console.log('close')
    show.value = false
    emit('c_close')
    // e.stopPropagation()
  },
}
const className = computed(() => {
  return `
    c-tag
    c-tag-${props.clean ? 'clean' : 'dirty'}
    c-tag-${props.type}
    c-tag-${props.size}
    ${props.round ? 'c-tag-round' : ''}
  `
})
const closeColor = computed(() => {
  if (!props.clean) return 'var(--c-color-text-dirty-1)'
  return `var(--c-color-${props.type}-1)`
})
const otherStyle: any = {
  '--c-tag-padding-s': props.closable ? '0 16px 0 8px' : '0 8px',
  '--c-tag-padding-m': props.closable ? '0 18px 0 10px' : '0 10px',
  '--c-tag-padding-l': props.closable ? '0 20px 0 12px' : '0 12px',
}
</script>

<template>
  <Transition name="tag">
    <div
      v-if="show"
      :class="className"
      @click="events.c_click"
      @mouseover="events.c_mouseover"
      :style="otherStyle"
    >
      <!-- <div class="c-tag__border"></div> -->
      <slot>标签</slot>
      <span class="c-tag__close" v-if="closable" @click="events.c_close">
        <CIcon :size="12" :color="closeColor" :style="{ cursor: 'pointer' }">
          <Close></Close>
        </CIcon>
      </span>
    </div>
  </Transition>
</template>

<style>
.tag-enter-active,
.tag-leave-active {
  /* transition: all 1s ease; */
  transition: opacity 0.2s ease;
}

.tag-enter-from,
.tag-leave-to {
  opacity: 0;
  /* transform: scale(1, 0); */
}
</style>
