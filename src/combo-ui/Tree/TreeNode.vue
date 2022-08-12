<script lang="ts" setup>
import { PropType, ref, reactive, onMounted } from 'vue';
interface TreeNode {
  id: string;
  name: string;
  children?: TreeNode[] | null;
}
const props = defineProps({
  node: {
    type: Object as PropType<TreeNode | null>,
    default: null,
  },
});
</script>
<template>
  <div v-if="node" class="c-tree__node">
    <span>展开</span>
    <input type="checkbox" />{{ node }}
  </div>
</template>
<style>
.c-tree__node{
  display: inline-block;
  height: 30px;
}
</style>
