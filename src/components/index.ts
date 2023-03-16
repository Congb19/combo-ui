import Button from './Button'
import Tag from './Tag'
import MessageProvider from './MessageProvider'
import ThemeProvider from './ThemeProvider'
import { useMsg } from './Message'
import { useTheme } from './Theme'

// 页面内直接 import
export const CTag = Tag
export const CButton = Button
export const CMessageProvider = MessageProvider
export const CThemeProvider = ThemeProvider

// create([C.Button, C.Tag])
export { Button, Tag, MessageProvider, ThemeProvider, useMsg, useTheme }

// create(C.All)
export const All = [Button, Tag, MessageProvider, ThemeProvider]
