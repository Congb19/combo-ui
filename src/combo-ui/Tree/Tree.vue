<script lang="ts">
export default {
  name: 'CTree',
};
</script>
<script setup lang="ts">
import { PropType, ref, reactive } from 'vue';

interface TreeNode {
  id: string;
  name: string;
  children: TreeNode[] | null;
}

// props & events
// ------------------------------------------------------------------------------
const props = defineProps({
  data: {
    type: Array as PropType<TreeNode[]>,
    default: [],
  },
  selectedNode: {
    type: Array as PropType<TreeNode[]>,
    default: [],
  },
});
const emit = defineEmits(['c_expand']);
const events = {
  c_expand: (node: TreeNode) => {
    emit('c_expand', node);
  },
};

console.log(props.data, props.selectedNode);
</script>

<template>
  <div class="c-tree">tree</div>
  <div v-for="node in data">
    <span v-if="node.children" @click="() => events.c_expand(node)">展开</span>
    <input type="checkbox" />{{ node.name }}
    <div v-if="node.children" v-for="node1 in node.children">
      <span v-if="node1.children" @click="() => events.c_expand(node1)"
        >展开</span
      >
      <input type="checkbox" />{{ node1.name }}
      <div v-if="node1.children" v-for="node2 in node1.children">
        <span v-if="node2.children" @click="() => events.c_expand(node2)"
          >展开</span
        >
        <input type="checkbox" />{{ node2.name }}
      </div>
    </div>
  </div>
</template>
