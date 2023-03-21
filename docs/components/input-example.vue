<script setup>
import { ref } from 'vue-demi'
import { CInput } from '../../src'
const value = ref('test')
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
  </div>
</template>
