<template>
  <div class="c-loadingbar" :style="otherStyle"></div>
</template>
<script setup lang="ts">
import { CIcon } from '../'
import { Ref, computed, onMounted, onUnmounted, ref, watch } from 'vue-demi'
import { ReloadSharp, Snow } from '@vicons/ionicons5'
import './index.css'
import { C } from '../..'
interface Props {
  status: Ref<number>
  color: Ref<string>
}
const props = withDefaults(defineProps<Props>(), {})

const otherStyle = computed(() => {
  return {
    width: `${props.status.value}vw`,
    backgroundColor: `${props.color.value}`,
  }
})

onMounted(() => {
  console.log('loadingbar mounted')
})
onUnmounted(() => {
  console.log('loadingbar unmounted')
})
</script>
