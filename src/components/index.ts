import Button from './Button'
import Tag from './Tag'
import MessageProvider from './MessageProvider'
import { useMsg } from './Message'

// 页面内直接 import
export const CTag = Tag
export const CButton = Button
export const CMessageProvider = MessageProvider

// create([C.Button, C.Tag])
export { Button, Tag, MessageProvider, useMsg }

// create(C.All)
export const All = [Button, Tag, MessageProvider]
