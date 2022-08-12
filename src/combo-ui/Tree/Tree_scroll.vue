<script lang="ts">
export default {
  name: 'CTree',
};
</script>
<script setup lang="ts">
import { PropType, ref, reactive, onMounted, computed } from 'vue';
import TreeNode from './TreeNode.vue';

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
// 数据处理
// ------------------------------------------------------------------------------
// 按渲染顺序构造成list
let index = 0;
const resolveData = (
  data: TreeNode[],
  depth: number,
  parentId: string
): any[] => {
  const res: TreeNode[] = [];
  data.forEach((item: TreeNode) => {
    const node = {
      id: item.id,
      name: item.name,
      index,
      depth,
      parentId,
      selected: false,
    };
    index++;
    res.push(node);
    if (item.children && item.children.length > 0) {
      res.push(...resolveData(item.children, depth + 1, item.id));
    }
  });
  return res;
};
const listData = resolveData(props.data, 1, '');
console.log(listData);

// 区域渲染
// ------------------------------------------------------------------------------
let startOffset = ref(0);
let start = ref(0),
  end = ref(40);
const nodesRefs = ref([]);
const treeRef = ref();
const listHeight = computed(() => 30 * listData.length);
const visibleCount = computed(() => Math.ceil(props.height / 30));
const getTransform = computed(
  () => `translate3d(0, ${startOffset.value}px, 0)`
);
const visibleData = computed(() =>
  listData.slice(
    start.value,
    Math.min(end.value + 10, listData.length)
  )
);
const scrollEvent = () => {
  let scrollTop = treeRef.value.scrollTop;

  let viewStart = Math.floor(scrollTop / 30);
  let viewEnd = start.value + visibleCount.value;
  start.value = viewStart;
  end.value = viewEnd;

  // 同步滚动
  startOffset.value = scrollTop - (scrollTop % 30);
};
onMounted(() => {
  console.log(treeRef.value.scrollTop);
});

// console.log(props.data, props.selectedNode);
</script>

<template>
  <div class="c-tree" :style="style" ref="treeRef" @scroll="scrollEvent">
    <div
      class="c-tree__list-phantom"
      :style="{ height: listHeight + 'px' }"
    ></div>
    <div class="c-tree__list" :style="{ transform: getTransform }">
      <div
        v-for="node in visibleData"
        ref="nodesRefs"
        :id="'id_' + node.index!"
      >
        <TreeNode :node="node"></TreeNode>
      </div>
    </div>
  </div>
</template>

<style scoped>
.c-tree {
  overflow: scroll;
  position: relative;
}
.c-tree__list {
  position: absolute;
  top: 0;
}
.c-tree::-webkit-scrollbar {
  /* width: 0px; */
}
</style>
