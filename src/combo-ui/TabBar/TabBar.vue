<script lang="ts">
export default {
  name: 'CTabBar',
};
</script>
<script setup lang="ts">
const props = defineProps({
  onClick: Function,
});
const className = ``;
const handleClick = () => {
  if (props.onClick) props.onClick();
};
</script>

<template>
  <component :class="className" @click="handleClick">
    123
  </component>
</template>

<style lang="scss">

</style>
