<script setup>
import { CButton } from '../../src'
const clicktest = () => alert('clicked')
</script>
<template>
  type、clean
  <br />
  <CButton clean>Button1</CButton>&nbsp;
  <CButton clean type="primary">Button1</CButton>&nbsp;
  <CButton clean type="success">Button1</CButton>&nbsp;
  <CButton clean type="warning" round>Button1</CButton>&nbsp;
  <CButton clean type="error" round>Button1</CButton>&nbsp;
  <div></div>
  <br />
  <CButton>Button1</CButton>&nbsp;
  <CButton type="primary" round>Button1</CButton>&nbsp;
  <CButton type="success" round>Button1</CButton>&nbsp;
  <CButton type="warning">Button1</CButton>&nbsp;
  <CButton type="error">Button1</CButton>&nbsp;
  <div></div>
  <br />
  size
  <br />
  <CButton clean type="success" size="s">Button1</CButton>&nbsp;
  <CButton clean type="warning" size="m">Button1</CButton>&nbsp;
  <CButton clean type="error" size="l">Button1</CButton>&nbsp;
  <CButton clean type="success" size="s" round>Button1</CButton>&nbsp;
  <CButton clean type="warning" size="m" round>Button1</CButton>&nbsp;
  <CButton clean type="error" size="l" round>Button1</CButton>&nbsp;
  <div></div>
  <br />
  event
  <br />
  <CButton @c_click="clicktest">Click!</CButton>&nbsp;
  <div></div>
  <br />
  disabled
  <br />
  <CButton disabled>Button1</CButton>&nbsp;
  <CButton type="primary" disabled>Button1</CButton>&nbsp;
  <CButton type="success" disabled>Button1</CButton>&nbsp;
  <CButton type="warning" disabled>Button1</CButton>&nbsp;
  <CButton type="error" disabled>Button1</CButton>&nbsp;
</template>
