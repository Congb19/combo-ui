<script lang="ts">
export default {
  name: 'CTree',
};
</script>
<script setup lang="ts">
import { PropType, ref, reactive, onMounted } from 'vue';

interface TreeNode {
  id: string;
  name: string;
  children?: TreeNode[] | null;
}

// props & events
// ------------------------------------------------------------------------------
const props = defineProps({
  height: {
    type: Number,
    default: 500,
  },
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
const style = {
  height: props.height + 'px',
};

// 区域渲染
// const refsLevel1 = ref([]);
// onMounted(() => {
//   console.log(refsLevel1.value[0]);
//   const target = refsLevel1.value[0];
//   const callback = (changes: any) => {
//     for (const change of changes) {
//       console.log('change!', change);
//     }
//   };
//   const observer = new IntersectionObserver(callback);
//   observer.observe(target);
// });

// console.log(props.data, props.selectedNode);
// console.log(refsLevel1.value);
</script>

<template>
  <div class="c-tree" :style="style">
    <div v-for="node in data" ref="refsLevel1">
      <span v-if="node.children" @click="() => events.c_expand(node)"
        >展开</span
      >
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
  </div>
</template>

<style scoped>
.c-tree {
  overflow: scroll;
}
.c-tree::-webkit-scrollbar {
  width: 0px;
}
</style>
