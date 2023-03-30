import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Combo UI',
  description: "Congb19's Vue3 Components Library",
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/assets/test.svg',
      },
    ],
  ],
  themeConfig: {
    logo: '../assets/test.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guides', link: '/guides/intro' },
      { text: 'Components', link: '/components/button' },
      { text: 'Others', link: '/others/about' },
    ],

    sidebar: [
      {
        text: 'Guides 开始',
        items: [
          { text: 'Intro 介绍', link: '/guides/intro' },
          { text: 'Install 安装', link: '/guides/install' },
          { text: 'Theme 主题', link: '/guides/theme' },
        ],
      },
      {
        text: 'Components 组件',
        items: [
          { text: 'Button 按钮', link: '/components/button' },
          { text: 'Checkbox 勾选框', link: '/components/checkbox' },
          { text: 'Icon 图标', link: '/components/icon' },
          { text: 'Input 输入框', link: '/components/input' },
          { text: 'Message 消息', link: '/components/message' },
          { text: 'Select 选择器', link: '/components/select' },
          { text: 'Switch 开关', link: '/components/switch' },
          { text: 'Tag 标签', link: '/components/tag' },
        ],
      },
      {
        text: 'Others 其他',
        items: [{ text: 'About 关于', link: '/others/about' }],
      },
      { text: 'markdown-examples', link: '/markdown-examples' },
      { text: 'Runtime API Examples', link: '/api-examples' },
      { text: 'Congb19 测试区', link: '/test' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/congb19/combo-ui' },
    ],
  },
})
