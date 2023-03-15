import { ref, watch } from 'vue-demi'
import colors from '../../styles/colors.css'
import colorsDark from '../../styles/colors-dark.css'

// theme system
const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
const currentTheme = ref(isDark ? 'dark' : 'light')
const themeProvider = document.createElement('style')
themeProvider.id = 'c-theme-provider'
document.head.appendChild(themeProvider)

export const useTheme = () => {
  return {
    currentTheme,
    changeTheme(theme: 'light' | 'dark' | string) {
      if (theme == 'light') {
        themeProvider.innerHTML = colors
        currentTheme.value = theme
      } else if (theme == 'dark') {
        themeProvider.innerHTML = colorsDark
        currentTheme.value = theme
      } else {
        themeProvider.innerHTML = theme
        currentTheme.value = 'custom'
      }
    },
  }
}

// init theme
const theme = useTheme()
theme.changeTheme(currentTheme.value)

// watch theme change
var themeChanger = window.matchMedia('(prefers-color-scheme: dark)')
themeChanger.addEventListener('change', (event) => {
  if (currentTheme.value == 'custom') return
  if (event.matches) {
    theme.changeTheme('dark')
  } else {
    theme.changeTheme('light')
  }
})

// docs theme change
var html = document.getElementsByTagName('html')[0]
console.log(html)
html.addEventListener('DOMAttributeNameChanged', (event) => {
  console.log(event, html.className)
})
