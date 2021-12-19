<script lang="ts">
export default {
  name: 'CTag',
};
</script>
<script setup lang="ts">
import { PropType } from 'vue';
const props = defineProps({
  // appearance
  size: {
    type: String as PropType<'small' | 'regular' | 'large'>,
    default: 'regular',
  },
  color: {
    type: String,
    default: '#666',
  },
  round: {
    type: Boolean,
    default: true,
  },

  // action
});
const className = `c-tag c-tag--regular`;
</script>

<template>
  <Component :class="className">
    <slot>标签</slot>
  </Component>
</template>
