<template>
  <!-- <CButton>TestBtn0 样式</CButton>
  <CButton @c_click="clicktest">TestBtn1 事件</CButton>
  <CButton size="m" type="r">按钮</CButton>
  <CButton size="l" type="g" round="100">TestBtn1asdasd</CButton>
  <div></div>
  <CTag size="s" round type="error">TestTag0 样式</CTag>
  <CTag size="m">TestTag1</CTag>
  <CTag
    size="l"
    closable
    round
    type="warning"
    @c_mouseover="mouseovertest"
    @c_click="clicktest"
    @c_close="closetest"
    >测试标签2 事件</CTag
  >
  <CTag size="xl" round>测试标签3</CTag>
  <CTag />
  <CTabBar /> -->
  <div class="test">
    <CTree
      :height="600"
      :data="treeData"
      :selectedNode="selectedNode"
      @c_expand="expandTest"
    />
  </div>
</template>
<script setup lang="ts">
// const clicktest = () => {
//   console.log('click');
// };
// const mouseovertest = () => {
//   console.log('mouseover');
// };
// const closetest = () => {
//   console.log('close');
// };

interface TreeNode {
  id: string;
  name: string;
  children?: TreeNode[] | null;
}
let treeData: TreeNode[] = [];
let selectedNode: TreeNode[] = [];
const expandTest = (node: TreeNode) => {
  console.log('expand', node);
};
for (let i = 0; i < 10; i++) {
  let node: TreeNode = {
    id: i + 1 + '',
    name: '节点' + (i + 1),
    children: [],
  };
  for (let j = 0; j < 20; j++) {
    let node1: TreeNode = {
      id: i + 1 + '-' + (j + 1),
      name: '节点' + (i + 1) + '-' + (j + 1),
      children: [],
    };
    for (let k = 0; k < 30; k++) {
      let node2: TreeNode = {
        id: i + 1 + '-' + (j + 1) + '-' + (k + 1),
        name: '节点' + (i + 1) + '-' + (j + 1) + '-' + (k + 1),
        // children: null,
      };
      node1.children!.push(node2);
    }
    node.children!.push(node1);
  }
  treeData.push(node);
}
</script>
<style>
.test {
  /* width: 500px;
  height: 500px; */
  background-color: rgb(167, 251, 223);
  overflow: hidden;
}
</style>
