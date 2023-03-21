<script setup>
import { CButton } from '../../src'
const clicktest = () => alert('clicked')
</script>
<template>
  <CButton clean>Button1</CButton>&nbsp;
  <CButton clean type="success">Button1</CButton>&nbsp;
  <CButton clean type="warning">Button1</CButton>&nbsp;
  <CButton clean type="error">Button1</CButton>&nbsp;
  <div></div>
  <br />
  <CButton>Button1</CButton>&nbsp;
  <CButton type="success">Button1</CButton>&nbsp;
  <CButton type="warning">Button1</CButton>&nbsp;
  <CButton type="error">Button1</CButton>&nbsp;
  <div></div>
  <br />
  <CButton clean type="success" size="s">Button1</CButton>&nbsp;
  <CButton clean type="warning" size="m">Button1</CButton>&nbsp;
  <CButton clean type="error" size="l">Button1</CButton>&nbsp;
  <div></div>
  <br />
  <CButton type="success" @c_click="clicktest">Click!</CButton>&nbsp;
</template>
