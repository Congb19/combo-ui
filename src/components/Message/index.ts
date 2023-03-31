import { Component, computed, createApp, Ref, ref } from 'vue-demi'
import cMessageVue from './Message.vue'
import { cMessageOptions, cMessageTypes } from './types'

const activeMessages = new Map()
const activeMessagesLeft = new Map()
const activeMessagesRight = new Map()
let counter = 1

class MsgCreator {
  info(options: string | cMessageOptions, duration?: number) {
    let t = new Msg()
    t.create(options, 'info', duration)
  }
  error(options: string | cMessageOptions, duration?: number) {
    let t = new Msg()
    t.create(options, 'error', duration)
  }
  success(options: string | cMessageOptions, duration?: number) {
    let t = new Msg()
    t.create(options, 'success', duration)
  }
  warning(options: string | cMessageOptions, duration?: number) {
    let t = new Msg()
    t.create(options, 'warning', duration)
  }
}

class Msg {
  private component: Component = cMessageVue
  private instance: any
  private id: number = 0
  private div: any = null
  private props: any = null
  private top: Ref<number> = ref(68)

  private containerStyle: any

  create(options: any, type: cMessageTypes, duration?: number) {
    // create id
    this.id = counter
    counter++

    // resolve options
    let props: any = {
      type,
      position: 'mid',
    }
    if (typeof options == 'string') props.msg = options
    else props = { ...props, ...options, msg: options.msg ? options.msg : '' }
    if (duration) props.duration = duration
    // console.log('props ok', props)
    this.props = props

    // calc position
    let container = document.createElement('div')
    this.div = document
      .getElementById('c-message-provider')!
      .appendChild(container)
    this.div.className = 'c-message-container'
    let map =
      props.position == 'mid'
        ? activeMessages
        : props.position == 'left'
        ? activeMessagesLeft
        : activeMessagesRight
    map.set(this.id, this)
    let position =
      props.position == 'mid'
        ? `left: 50%; transform: translateX(-50%);`
        : props.position == 'left'
        ? 'left: 0px'
        : 'right: 0px'
    this.containerStyle = computed(() => {
      let top = 0
      map.forEach((item, key) => {
        if (key < this.id) top += item.top.value
      })
      return position + '; top: ' + top + 'px'
    })
    this.recalcTop()

    // mount
    this.instance = createApp(this.component, {
      ...props,
      destroy: () => this.destroy.call(this),
    })
    this.instance.mount(this.div)
  }
  destroy() {
    let map =
      this.props.position == 'mid'
        ? activeMessages
        : this.props.position == 'left'
        ? activeMessagesLeft
        : activeMessagesRight
    if (map.has(this.id)) {
      // recalc position
      this.div.className = 'c-message-container c-message-container-hide'
      let topCalc = setInterval(() => {
        if (this.top.value <= 0) clearInterval(topCalc)
        this.recalcTop()
        map.forEach((item, key) => {
          if (key > this.id) item.recalcTop()
        })
        this.top.value -= 2
      }, 6)

      // real destroy
      setTimeout(() => {
        this.instance.unmount()
        document.getElementById('c-message-provider')?.removeChild(this.div)
        map.delete(this.id)
      }, 400)
    }
  }

  recalcTop() {
    this.div.style = this.containerStyle.value
  }
}

export const useMsg = () => {
  return new MsgCreator()
}
