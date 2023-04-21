<template>
  <div class="c-loading">
    <div class="c-loading__icon">
      <CIcon :color="iconColor" :size="80">
        <Snow></Snow>
      </CIcon>
    </div>
    <span class="c-loading__text">{{ text }}{{ dots }}</span>
  </div>
</template>
<script setup lang="ts">
import { CIcon } from '../'
import { onMounted, onUnmounted, ref, watch } from 'vue-demi'
import { ReloadSharp, Snow } from '@vicons/ionicons5'
import './index.css'
interface Props {
  iconColor?: string
  text?: string
}
const props = withDefaults(defineProps<Props>(), {
  iconColor: 'var(--c-color-primary-1)',
  text: 'Loading',
})

const show = ref(false)
const dots = ref('.')

onMounted(() => {
  console.log('loading mounted')
  show.value = true
  setInterval(() => {
    dots.value = dots.value + '.'
    if (dots.value.length > 3) dots.value = ''
  }, 500)
})
onUnmounted(() => {
  console.log('loading unmounted')
  show.value = false
})
</script>
