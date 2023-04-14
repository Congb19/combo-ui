import { Component, computed, createApp, Ref, ref } from 'vue-demi'
import CLoading from './Loading.vue'

let loadingInstance: any = null
let loadingBarInstance: any = null

class Loading {
  private component: Component = CLoading
  private instance: any = null
  private container: any = document.getElementById('c-loading-provider')
  status: Ref<boolean> = ref(false)
  create() {
    this.container = document.getElementById('c-loading-provider')
    this.instance = createApp(this.component)
  }
  start() {
    if (!this.instance) {
      this.create()
    }
    this.instance.mount(this.container)
    this.status.value = true
  }
  stop() {
    if (this.instance) {
      this.instance.unmount()
    }
    this.instance = null
    this.status.value = false
  }
}
class LoadingBar {}

export const useLoading = () => {
  if (!loadingInstance) {
    loadingInstance = new Loading()
  }
  if (!loadingBarInstance) {
    loadingBarInstance = new LoadingBar()
  }
  return {
    CLoading: loadingInstance,
    CLoadingStatus: loadingInstance.status,
    CLoadingBar: loadingBarInstance,
    CLoadingBarStatus: loadingBarInstance.status,
  }
}
