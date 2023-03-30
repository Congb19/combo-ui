<script setup>
import { CIcon } from '../../src'
import {
  AmericanFootballSharp,
  FootballSharp,
  LogoNpm,
} from '@vicons/ionicons5'
</script>
<template>
  基础使用
  <br />
  <CIcon size="20"><AmericanFootballSharp /></CIcon>&nbsp;
  <CIcon size="20"><FootballSharp /></CIcon>&nbsp;
  <CIcon size="20"><LogoNpm /></CIcon>&nbsp;
  <CIcon size="20"> 😂 </CIcon>
  <br />
  尺寸、颜色、背景色、圆角
  <br />
  <CIcon size="20" color="blue"><AmericanFootballSharp /></CIcon>&nbsp;
  <CIcon size="35" background-color="yellow"><FootballSharp /></CIcon>&nbsp;
  <CIcon size="50" color="white" background-color="red" border-radius="20"
    ><LogoNpm /></CIcon
  >&nbsp;
  <br />
  自定义svg
  <br />
  <CIcon size="30" background-color="orange" color="white">
    <img src="../public/assets/test.svg" /> </CIcon
  >&nbsp;
</template>
