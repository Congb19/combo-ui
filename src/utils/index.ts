export const c_log = (type: 'log' | 'warn' | 'error', msg: string) => {
  const res = '[Combo UI] ' + msg
  switch (type) {
    case 'log':
      console.log(res)
      break
    case 'warn':
      console.warn(res)
      break
    case 'error':
      console.error(res)
      break
  }
}
