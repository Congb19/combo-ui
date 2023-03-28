<script setup>
import { CSwitch } from '../../src'
import { ref } from 'vue-demi'
import { FootballOutline } from '@vicons/ionicons5'
const switchvalue = ref(true)
</script>
<template>
  <br />
  {{ switchvalue }}
  <br />
  默认
  <br />
  <CSwitch v-model:value="switchvalue"></CSwitch>&nbsp;
  <CSwitch v-model:value="switchvalue" disabled></CSwitch>&nbsp;
  <!-- <br />
  颜色
  <br />
  <CSwitch v-model:value="switchvalue" color="red"></CSwitch>&nbsp;
  <CSwitch v-model:value="switchvalue" color="green"></CSwitch>&nbsp; -->
  <br />
  尺寸
  <br />
  <CSwitch v-model:value="switchvalue" size="s"></CSwitch>&nbsp;
  <CSwitch v-model:value="switchvalue" size="m"></CSwitch>&nbsp;
  <CSwitch v-model:value="switchvalue" size="l"></CSwitch>&nbsp;
  <br />
  自定义图标
  <br />
  <CSwitch v-model:value="switchvalue" :icon="FootballOutline"></CSwitch>&nbsp;
  <CSwitch v-model:value="switchvalue" size="l" icon="☀️"></CSwitch>
</template>
