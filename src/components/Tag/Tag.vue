<script lang="ts">
export default {
  name: 'CTag',
}
</script>
<script setup lang="ts">
import { computed, PropType, ref } from 'vue-demi'
import './index.css'
const emit = defineEmits(['c_click', 'c_mouseover', 'c_close'])
const props = defineProps({
  size: {
    type: String as PropType<'s' | 'm' | 'l'>,
    default: 'm',
  },
  color: {
    type: String,
    default: '#aa0000',
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
    console.log('close')
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
</script>

<template>
  <div
    v-if="show"
    :class="className"
    @click="events.c_click"
    @mouseover="events.c_mouseover"
  >
    <!-- <div class="c-tag__border"></div> -->
    <slot>标签</slot>
    <span class="c-tag__close" v-if="closable" @click="events.c_close"> ×</span>
  </div>
</template>

<style scoped></style>
