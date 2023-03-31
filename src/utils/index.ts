export const c_log = (type: 'log' | 'warn' | 'error', msg: string) => {
  const res = '[Combo UI] ' + msg
  console[type](res)
}
