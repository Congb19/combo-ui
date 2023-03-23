export interface cMessageOptions {
  duration?: number
  msg?: string
  position?: string
  closable?: boolean
}
export type cMessageTypes = 'info' | 'error' | 'warning' | 'success'
