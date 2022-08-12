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
let start = ref(0),
  end = ref(100);
let listData_render = reactive(listData.slice(start.value, end.value));
// let listData_render = computed(() =>
//   listData.slice(start.value, end.value + 1)
// );
console.log(listData);

// 区域渲染
// ------------------------------------------------------------------------------
const nodesRefs = ref([]);
const treeRef = ref();
onMounted(() => {
  console.log(treeRef.value);
  const callback = (changes: any) => {
    for (let i = 0; i < changes.length; i++) {
      const change = changes[i];
      console.log(
        'change!',
        change.target,
        change.isIntersecting,
        change.target.outerText
      );
      // 如果end变成true了说明滚到底了，需要更新start和end
      if (
        change.isIntersecting &&
        change.target.id == 'id_' + (end.value - 1)
      ) {
        console.log('got bottom!');
        listData_render.push(...listData.slice(end.value, end.value + 10));
        console.log('push over', listData_render);
        start.value += 10;
        end.value += 10;
        if (start.value !== 0) listData_render.splice(0, 10);
        console.log('splice over', listData_render);
      }
      // 如果start变成true了说明滚到顶了，需要更新start和end
      if (
        change.isIntersecting &&
        change.target.id == 'id_' + start.value &&
        start.value !== 0
      ) {
        console.log('got top!');
        start.value -= 10;
        end.value -= 10;
        listData_render.unshift(
          ...listData.slice(start.value, start.value + 10)
        );
        listData_render.splice(100, 10);
      }
      console.log(start.value, end.value);
      // console.log(
      //   listData_render[0].index,
      //   listData_render[99].index
      // );
    }
  };
  const observer = new IntersectionObserver(callback);

  nodesRefs.value.forEach((item) => {
    observer.observe(item);
  });
  // observer.observe(target);
});

// console.log(props.data, props.selectedNode);
</script>

<template>
  <div class="c-tree" :style="style" ref="treeRef">
    <div
      v-for="node in listData_render"
      ref="nodesRefs"
      :id="'id_' + node.index!"
    >
      <TreeNode :node="node"></TreeNode>
    </div>
  </div>
</template>

<style scoped>
.c-tree {
  overflow: scroll;
}
.c-tree::-webkit-scrollbar {
  /* width: 0px; */
}
</style>
