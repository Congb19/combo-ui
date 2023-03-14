import Button from './Button'
import Tag from './Tag'

// 页面内直接 import
export const CTag = Tag
export const CButton = Button

// create([C.Button, C.Tag])
export { Button, Tag }

// create(C.All)
export const All = [Button, Tag]
