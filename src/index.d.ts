/// <reference types="vue/macros-global" />

declare function create(components: any): Function

declare module '*.vue' {
  import { DefineComponent } from 'vue-demi'
  const component: DefineComponent<{}, {}, any>
  export default component
}
