<script setup>
import { CLoadingProvider, useLoading, CButton } from '../../src'
const { CLoading, CLoadingStatus, CLoadingBar, CLoadingBarStatus } = useLoading(
  { text: '加载中' }
)
const loading = () => {
  CLoading.start()
  setTimeout(() => {
    CLoading.stop()
  }, 2000)
}
const loadingbar = () => {
  CLoadingBar.start()
  setTimeout(() => {
    CLoadingBar.finish()
  }, 2000)
}
</script>
<template>
  <CLoadingProvider>
    {{ CLoadingStatus }}&nbsp;
    <CButton type="primary" @c_click="loading">Loading</CButton>&nbsp;
    <div></div>
    <br />
    <CButton type="primary" @c_click="() => CLoading.start()"
      >Loading start</CButton
    >&nbsp;
    <CButton type="primary" @c_click="() => CLoading.stop()"
      >Loading stop</CButton
    >&nbsp;
    <div></div>
    <br />
    {{ CLoadingBarStatus }}&nbsp;
    <CButton type="primary" @c_click="loadingbar">Loadingbar</CButton>&nbsp;
    <div></div>
    <br />
    <CButton type="primary" @c_click="() => CLoadingBar.start()"
      >LoadingBar start</CButton
    >&nbsp;
    <CButton type="primary" @c_click="() => CLoadingBar.stop()"
      >LoadingBar stop</CButton
    >&nbsp;
    <div></div>
    <br />
    <CButton type="success" @c_click="() => CLoadingBar.finish()"
      >LoadingBar finish</CButton
    >&nbsp;
    <CButton type="error" @c_click="() => CLoadingBar.error()"
      >LoadingBar error</CButton
    >&nbsp;
    <CButton type="primary" @c_click="() => CLoadingBar.goto(40)"
      >LoadingBar goto 40</CButton
    >&nbsp;
    <CButton type="primary" @c_click="() => CLoadingBar.goto(70)"
      >LoadingBar goto 70</CButton
    >&nbsp;
  </CLoadingProvider>
</template>
