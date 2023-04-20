<template>
  <div class="c-loading">
    <div class="c-loading__icon">
      <CIcon :color="iconColor" :size="80">
        <Snow></Snow>
      </CIcon>
    </div>
    <span class="c-loading__text">{{ text }}...</span>
  </div>
</template>
<script setup lang="ts">
import { CIcon } from '../'
import { onMounted, onUnmounted, ref, watch } from 'vue-demi'
import { ReloadSharp, Snow } from '@vicons/ionicons5'
import './index.css'
interface Props {
  status?: boolean
  iconColor?: string
  text?: string
}
const props = withDefaults(defineProps<Props>(), {
  status: false,
  iconColor: 'var(--c-color-primary-1)',
  text: 'Loading...',
})

const show = ref(false)

onMounted(() => {
  console.log('loading mounted')
  show.value = true
})
onUnmounted(() => {
  console.log('loading unmounted')
  show.value = false
})
</script>
