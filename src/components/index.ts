import Block from './Block'
import Button from './Button'
import Checkbox from './Checkbox'
import Dropdown from './Dropdown'
import Icon from './Icon'
import Input from './Input'
import Select from './Select'
import Switch from './Switch'
import Tag from './Tag'

import MessageProvider from './MessageProvider'
import { useMsg } from './Message'
import ThemeProvider from './ThemeProvider'
import { useTheme } from './Theme'

// 页面内直接 import
export const CBlock = Block
export const CButton = Button
export const CCheckbox = Checkbox
export const CDropdown = Dropdown
export const CIcon = Icon
export const CInput = Input
export const CSelect = Select
export const CSwitch = Switch
export const CTag = Tag
export const CMessageProvider = MessageProvider
export const CThemeProvider = ThemeProvider

// create([C.Button, C.Tag])
export {
  Block,
  Button,
  Checkbox,
  Dropdown,
  Icon,
  Input,
  Select,
  Switch,
  Tag,
  MessageProvider,
  ThemeProvider,
  useMsg,
  useTheme,
}

// create(C.All)
export const All = [
  Block,
  Button,
  Checkbox,
  Dropdown,
  Icon,
  Input,
  Select,
  Switch,
  Tag,
  MessageProvider,
  ThemeProvider,
]
