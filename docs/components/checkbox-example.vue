<script setup>
import { CCheckbox } from '../../src'
import { ref } from 'vue-demi'
import { AmericanFootballSharp } from '@vicons/ionicons5'
const checkboxvalue = ref(true)
const change = (value) => {
  alert('changed', value)
}
</script>
<template>
  <br />
  <br />
  {{ checkboxvalue }}
  <br />
  默认
  <br />
  <CCheckbox v-model:value="checkboxvalue"></CCheckbox>&nbsp;
  <CCheckbox v-model:value="checkboxvalue" disabled></CCheckbox>&nbsp;
  <!-- <br />
  颜色
  <br />
  <CCheckbox v-model:value="checkboxvalue" color="red"></CCheckbox>&nbsp;
  <CCheckbox v-model:value="checkboxvalue" color="green"></CCheckbox>&nbsp; -->
  <br />
  尺寸
  <br />
  <CCheckbox v-model:value="checkboxvalue" size="s"></CCheckbox>&nbsp;
  <CCheckbox v-model:value="checkboxvalue" size="m"></CCheckbox>&nbsp;
  <CCheckbox v-model:value="checkboxvalue" size="l"></CCheckbox>&nbsp;
  <br />
  自定义图标
  <br />
  <CCheckbox
    v-model:value="checkboxvalue"
    size="l"
    :icon="AmericanFootballSharp"
  ></CCheckbox
  >&nbsp;
  <CCheckbox v-model:value="checkboxvalue" size="l" icon="🏡"></CCheckbox>
  <br />
  事件
  <br />
  <CCheckbox v-model:value="checkboxvalue" @c_change="change"></CCheckbox>&nbsp;
</template>
