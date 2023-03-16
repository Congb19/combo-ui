import { onMounted, ref, watch, Ref } from 'vue-demi'
import '../../styles/colors.css'
import '../../styles/colors-dark.css'

let isSystemDark: boolean = false
let currentTheme: Ref<string> = ref('light')
let systemTheme: Ref<string> = ref('light')
let theme: any = null
let global: HTMLElement
let themeProvider: HTMLElement

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
      theme.changeTheme('dark')
      systemTheme.value = 'dark'
    } else {
      theme.changeTheme('light')
      systemTheme.value = 'light'
    }
  })

  // watch other theme change(手动赋予html class="dark" 等操作)
  const isDark = () => {
    return global.className.indexOf('dark') > -1
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
      if (darkIndex > -1)
        global.className =
          global.className.substring(0, darkIndex) +
          global.className.substring(darkIndex + 4)
    } else if (theme == 'dark') {
      currentTheme.value = theme
      if (darkIndex < 0) global.className += ' dark'
    } else {
      currentTheme.value = 'custom'
      themeProvider.innerHTML = theme
    }
  }

  // change theme with system
  changeTheme(systemTheme.value)

  return {
    currentTheme,
    systemTheme,
    changeTheme,
  }
}
