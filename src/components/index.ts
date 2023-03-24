import Button from './Button'
import Checkbox from './Checkbox'
import Tag from './Tag'
import Input from './Input'
import Switch from './Switch'
import MessageProvider from './MessageProvider'
import ThemeProvider from './ThemeProvider'
import { useMsg } from './Message'
import { useTheme } from './Theme'

// 页面内直接 import
export const CButton = Button
export const CCheckbox = Checkbox
export const CTag = Tag
export const CInput = Input
export const CSwitch = Switch
export const CMessageProvider = MessageProvider
export const CThemeProvider = ThemeProvider

// create([C.Button, C.Tag])
export {
  Button,
  Checkbox,
  Tag,
  Input,
  Switch,
  MessageProvider,
  ThemeProvider,
  useMsg,
  useTheme,
}

// create(C.All)
export const All = [
  Button,
  Checkbox,
  Tag,
  Input,
  Switch,
  MessageProvider,
  ThemeProvider,
]
