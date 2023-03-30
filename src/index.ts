import { App } from 'vue-demi'

// global vars
import './styles/index.css'

// composables
export { useTheme } from './components' // include color vars
export { useMsg } from './components'

// all components
export * as C from './components/'
export * from './components/'

// global register
const registerComponent = (app: App, name: string, component: any) => {
  const registered = app.component(name)
  if (!registered) app.component(name, component)
}
export const create = (components?: any[]) => {
  const install = (app: App) => {
    if (components?.length && components.length > 0)
      components.forEach((component) => {
        const { name } = component
        if (import.meta.env.DEV)
          console.log('component registered globally, ', name)
        registerComponent(app, name, component)
      })
  }
  return {
    install,
  }
}
