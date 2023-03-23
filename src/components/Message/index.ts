import { Component, createApp } from 'vue-demi'
import cMessageVue from './Message.vue'
import { cMessageOptions, cMessageTypes } from './types'

const activeMessages = new Set()
let counter = 1

class MsgCreator {
  // private msgs: Msg[] = []
  error(options: string | cMessageOptions, duration?: number) {
    let t = new Msg()
    t.create(options, 'error', duration)
  }
}

class Msg {
  private component: Component = cMessageVue
  private instance: any
  private id: string = ''
  private div: any = null
  private props: any = null

  create(options: any, type: cMessageTypes, duration?: number) {
    // create id
    this.id = `c-message-${counter}`
    activeMessages.add(this.id)
    counter++

    // resolve options
    let props = {
      msg: '',
      duration: 5000,
      type,
      position: 'mid',
    }
    if (typeof options == 'string') props.msg = options
    else props = { ...props, ...options, msg: options.msg ? options.msg : '' }
    if (duration) props.duration = duration
    console.log('props ok', props)
    this.props = props

    // mount
    let container = document.createElement('div')
    this.div = document
      .getElementById('c-message-provider')!
      .appendChild(container)
    let t = 'top'
    if (props.position) {
      if (props.position == 'mid') t = 'top'
      else t = props.position
    }
    document.getElementById('c-message-provider')!.style = `align-items: ${
      t == 'top' ? 'center' : t == 'right' ? 'flex-end' : 'flex-start'
    }`
    this.div.className = 'c-message-container'
    this.instance = createApp(this.component, {
      ...props,
      destroy: () => this.destroy.call(this),
    })
    this.instance.mount(this.div)
    console.log('create ok', this.instance)
  }
  destroy() {
    if (activeMessages.has(this.id)) {
      console.log('to destroy', this.instance)
      this.div.className = 'c-message-container-hide'
      setTimeout(() => {
        this.instance.unmount()
        document.getElementById('c-message-provider')?.removeChild(this.div)
        activeMessages.delete(this.id)
        console.log('destroy ok', this.instance)
        console.log('remain msgs: ', activeMessages)
      }, 400)
    }
  }
}

export const useMsg = () => {
  return new MsgCreator()
}
