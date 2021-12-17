<script lang="ts">
export default {
  name: 'CButton',
};
</script>
<script setup lang="ts">
const props = defineProps({
  text: String,
  onClick: Function,
});
const handleClick = () => {
  console.log('clicked!', props.text);
  if (props.onClick) props.onClick();
};
</script>

<template>
  <Component @click="handleClick"><slot>按钮</slot></Component>
</template>
