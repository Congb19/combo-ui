import { ref, watch } from 'vue-demi'
import '../../styles/colors.css'
import '../../styles/colors-dark.css'

// theme
const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
const currentTheme = ref(isSystemDark ? 'dark' : 'light')
const systemTheme = ref(isSystemDark ? 'dark' : 'light')
const themeProvider = document.createElement('style')
themeProvider.id = 'c-theme-provider'
document.head.appendChild(themeProvider)

const global = document.getElementsByTagName('html')[0]

export const useTheme = () => {
  return {
    currentTheme,
    systemTheme,
    changeTheme(theme: 'light' | 'dark' | string) {
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
    },
  }
}

// init theme with system
const theme = useTheme()
theme.changeTheme(systemTheme.value)

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
    if (isDark() && currentTheme.value == 'light') theme.changeTheme('dark')
    else if (!isDark() && currentTheme.value == 'dark')
      theme.changeTheme('light')
  }
})
const config = {
  attributes: true,
  childList: false,
  subTree: false,
}
observer.observe(global, config)
