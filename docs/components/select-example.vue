<script setup>
import { ref } from 'vue-demi'
import { CSelect } from '../../src'
const value = ref(2)
const options = ref([
  { value: 1, label: 'testlabel 标签 1' },
  { value: 2, label: 'testlabel 标签 2' },
  { value: 3, label: 'testlabel 标签 3' },
  { value: 4, label: 'testlabel 标签 4' },
])
const value2 = ref(5)
const optionsDisabled = ref([
  { value: 5, label: 'testlabel 标签 5' },
  { value: 6, label: 'testlabel 标签 6', disabled: true },
])
const select = (val) => console.log('select!!!', val)
</script>

<template>
  <div>
    value：<span>{{ value }}</span>
    <div></div>
    默认
    <br />
    <CSelect v-model:value="value" :options="options" />
    <div></div>
    disabled、选项disabled
    <br />
    <CSelect v-model:value="value2" :options="optionsDisabled" disabled />
    <CSelect v-model:value="value2" :options="optionsDisabled" />
    <br />
    <div></div>
    placement
    <br />
    <CSelect v-model:value="value" :options="options" placement="bottom" />
    <CSelect
      v-model:value="value"
      :options="options"
      placement="bottom-start"
    />
    <CSelect v-model:value="value" :options="options" placement="bottom-end" />
    <br />
    <CSelect v-model:value="value" :options="options" placement="top" />
    <CSelect v-model:value="value" :options="options" placement="top-start" />
    <CSelect v-model:value="value" :options="options" placement="top-end" />
    <br />
    <CSelect v-model:value="value" :options="options" placement="right" />
    <CSelect v-model:value="value" :options="options" placement="right-start" />
    <CSelect v-model:value="value" :options="options" placement="right-end" />
    <br />
    <CSelect v-model:value="value" :options="options" placement="left" />
    <CSelect v-model:value="value" :options="options" placement="left-start" />
    <CSelect v-model:value="value" :options="options" placement="left-end" />
    <div></div>
    maxHeight
    <br />
    <CSelect v-model:value="value" :options="options" :max-height="80" />
    <div></div>
    事件
    <br />
    <CSelect v-model:value="value" :options="options" @c_select="select" />
  </div>
</template>
