import { Component, computed, createApp, Ref, ref } from 'vue-demi'
import CLoading from './Loading.vue'
import CLoadingBar from './LoadingBar.vue'

let loadingInstance: any = null
let loadingBarInstance: any = null

class Loading {
  private component: Component = CLoading
  private instance: any = null
  private container: any = document.getElementById('c-loading-provider')
  private options: any
  status: Ref<boolean> = ref(false)
  constructor(options: any) {
    this.options = options
  }
  create() {
    this.container = document.getElementById('c-loading-provider')
    this.instance = createApp(this.component, this.options)
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
class LoadingBar {
  private component: Component = CLoadingBar
  private instance: any = null
  private container: any = document.getElementById('c-loading-provider')
  private options: any
  private finished: boolean = false
  private color: Ref<string> = ref('var(--c-color-primary-1)')
  timer: any
  status: Ref<number> = ref(0)
  constructor(options: any) {
    this.options = options
  }
  create() {
    this.container = document.getElementById('c-loading-provider')
    this.instance = createApp(this.component, {
      ...this.options,
      status: this.status,
      color: this.color,
    })
  }
  start() {
    this.unmount()
    if (!this.instance) {
      this.create()
    }
    this.instance.mount(this.container)
    this.status.value = 0

    this.timer = setInterval(() => {
      if (this.status.value >= 80) {
      } else this.status.value++
    }, 10)
  }
  stop() {
    this.gogo(100)
  }
  error() {
    if (!this.instance) {
      this.start()
    }
    this.color.value = 'var(--c-color-error-1)'
    this.stop()
  }
  finish() {
    if (!this.instance) {
      this.start()
    }
    this.color.value = 'var(--c-color-success-1)'
    this.stop()
  }
  unmount() {
    clearInterval(this.timer)
    if (this.instance) {
      this.instance.unmount()
    }
    this.instance = null
    this.status.value = 0
    this.color.value = 'var(--c-color-primary-1)'
  }
  // 加速到指定百分比
  gogo(percent: number) {
    if (percent > this.status.value) {
      let t = setInterval(() => {
        if (this.status.value == 100) {
          this.unmount()
          this.status.value = 0
          clearInterval(t)
        }
        if (percent > this.status.value) this.status.value++
        else clearInterval(t)
      }, 1)
    } else if (percent < this.status.value) {
      let t = setInterval(() => {
        if (this.status.value == 100) {
          this.unmount()
          this.status.value = 0
          clearInterval(t)
        }
        if (percent < this.status.value) this.status.value--
        else clearInterval(t)
      }, 1)
    }
  }
  // 暴露给用户的 前往指定百分比
  goto(percent: number) {
    if (!this.instance) this.start()
    clearInterval(this.timer)
    if (percent < 0 || percent > 100) return
    if (percent !== this.status.value) {
      this.gogo(percent)
    }
  }
}

export const useLoading = (options?: any) => {
  if (!loadingInstance) {
    loadingInstance = new Loading(options)
  }
  if (!loadingBarInstance) {
    loadingBarInstance = new LoadingBar(options)
  }
  return {
    CLoading: loadingInstance,
    CLoadingStatus: loadingInstance.status,
    CLoadingBar: loadingBarInstance,
    CLoadingBarStatus: loadingBarInstance.status,
  }
}
