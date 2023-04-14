<script setup>
import { CLoadingProvider, useLoading, CButton } from '../../src'
const { CLoading, CLoadingStatus } = useLoading()
const loading = () => {
  CLoading.start()
  setTimeout(() => {
    CLoading.stop()
  }, 4000)
}
</script>
<template>
  <CLoadingProvider>
    {{ CLoadingStatus }}&nbsp;
    <CButton type="primary" @c_click="loading">start</CButton>&nbsp;
  </CLoadingProvider>
</template>
