<script setup>
import { ref } from 'vue-demi'
import { CInput } from '../../src'
const value = ref('test')
const focustest = () => console.log('focus!!')
const blurtest = () => console.log('blur!!')
const changetest = (val) => console.log('change!!', val)
</script>
<template>
  <div>
    value：<span>{{ value }}</span>
    <div></div>
    默认
    <br />
    <CInput v-model:value="value" />&nbsp;
    <CInput placeholder="placeholder" />&nbsp;
    <CInput value="disabled" disabled />
    <div></div>
    textarea、password
    <br />
    <CInput v-model:value="value" type="textarea" />&nbsp;
    <CInput v-model:value="value" type="password" />
    <div></div>
    尺寸
    <br />
    <CInput v-model:value="value" size="s" />&nbsp;
    <CInput v-model:value="value" size="m" />&nbsp;
    <CInput v-model:value="value" size="l" />
    <div></div>
    事件
    <br />
    <CInput
      v-model:value="value"
      @c_blur="blurtest"
      @c_focus="focustest"
      @c_change="changetest"
    />&nbsp;
  </div>
</template>
