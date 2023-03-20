<script setup>
import { CInput } from '../../src'
import InputExample from './input-example.vue'
const value = ref('test')
</script>

<template>
  <div>
    <CInput v-model="value"></CInput>
    <div>{{ value }}</div>
  </div>
</template>
