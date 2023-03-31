<script lang="ts">
export default { name: 'CDropdown' }
</script>
<script lang="ts" setup>
import { createPopper } from '@popperjs/core'
import { computed, onMounted, ref, watch } from 'vue-demi'
import './index.css'

interface Props {
  show: boolean
  parent: any
  placement?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top-start'
    | 'bottom-start'
    | 'left-start'
    | 'right-start'
    | 'top-end'
    | 'bottom-end'
    | 'left-end'
    | 'right-end'
  maxHeight?: number
}
const props = withDefaults(defineProps<Props>(), {
  placement: 'bottom-start',
})

const dropdown = ref()
let popperInstance: any

watch(
  () => props.show,
  (val) => {
    // console.log('show update', val)
    popperInstance?.update()
  }
)

onMounted(() => {
  setTimeout(() => {
    console.log('testtttt', { dom: props.parent }, dropdown.value)
    popperInstance = createPopper(props.parent, dropdown.value, {
      placement: props.placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
    })
    // console.log('popper init', popperInstance)
  }, 50)
})
const otherStyleBody = computed(() => {
  return {
    maxHeight: props.maxHeight ? props.maxHeight + 'px' : '9999px',
    overflow: 'scroll',
  }
})
</script>
<template>
  <Transition name="dropdown">
    <div ref="dropdown" class="c-dropdown" v-show="props.show">
      <!-- <div class="c-dropdown__arrow" data-popper-arrow></div> -->
      <div class="c-dropdown__body" :style="otherStyleBody">
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>
<script></script>
<style>
.dropdown-enter-active,
.dropdown-leave-active {
  /* transition: all 1s ease; */
  transition: opacity 0.2s ease, height 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  /* transform: scale(1, 0); */
}
</style>
