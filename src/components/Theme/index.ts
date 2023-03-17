import { onMounted, ref, watch, Ref } from 'vue-demi'
import '../../styles/colors.css'
import '../../styles/colors-dark.css'

let isSystemDark: boolean = false
let currentTheme: Ref<string> = ref('light')
let systemTheme: Ref<string> = ref('light')
let global: HTMLElement
let themeProvider: HTMLElement

// make sure to use in or after beforeMounted
export const useTheme = () => {
  // init
  isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  currentTheme.value = isSystemDark ? 'dark' : 'light'
  systemTheme.value = isSystemDark ? 'dark' : 'light'
  global = document.getElementsByTagName('html')[0]
  themeProvider = document.createElement('style')

  themeProvider.id = 'c-theme-provider'
  document.head.appendChild(themeProvider)

  // watch system theme change
  var themeChanger = window.matchMedia('(prefers-color-scheme: dark)')
  themeChanger.addEventListener('change', (event) => {
    if (currentTheme.value == 'custom') return
    if (event.matches) {
      changeTheme('dark')
      systemTheme.value = 'dark'
    } else {
      changeTheme('light')
      systemTheme.value = 'light'
    }
  })

  // watch other theme change(手动赋予html class="dark" 等操作)
  const isDark = () => {
    return global.className.indexOf('dark') > -1
  }
  const getDocsTheme = () => {
    return localStorage.getItem('vitepress-theme-appearance')
  }
  const setDocsTheme = (theme: string) => {
    localStorage.setItem('vitepress-theme-appearance', theme)
  }
  const isAuto = () => {
    return getDocsTheme() == 'auto'
  }
  const observer = new MutationObserver((mutationsList, observer) => {
    for (let mutation of mutationsList) {
      // console.log('attr change', mutation)
      if (isDark() && currentTheme.value == 'light') changeTheme('dark')
      else if (!isDark() && currentTheme.value == 'dark') changeTheme('light')
    }
  })
  const config = {
    attributes: true,
    childList: false,
    subTree: false,
  }
  observer.observe(global, config)

  const changeTheme = (theme: 'light' | 'dark' | string) => {
    let darkIndex = global.className.indexOf('dark')
    if (theme == 'light') {
      currentTheme.value = theme
      setDocsTheme('light')
      if (darkIndex > -1) {
        global.className =
          global.className.substring(0, darkIndex) +
          global.className.substring(darkIndex + 4)
      }
    } else if (theme == 'dark') {
      currentTheme.value = theme
      setDocsTheme('dark')
      if (darkIndex < 0) {
        global.className += ' dark'
      }
    } else {
      currentTheme.value = 'custom'
      themeProvider.innerHTML = theme
    }
  }

  // init theme with system
  // unless exist dark
  if (isAuto()) changeTheme(systemTheme.value)
  else changeTheme(getDocsTheme() || 'light')
  // 清除localstorage里的缓存后，首次进入文档，vitepress可能会存一个auto值
  // 这时调用changethem的过程中将其覆盖掉成了具体的light或dark
  // 相当于接管了文档站的主题控制

  return {
    currentTheme,
    systemTheme,
    changeTheme,
  }
}
