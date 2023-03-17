import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Combo UI',
  description: "Congb19's Vue3 Components Library",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/guides/intro' },
      { text: 'Components', link: '/components/button' },
    ],

    sidebar: [
      {
        text: 'Get Started 开始',
        items: [
          { text: 'Intro 介绍', link: '/guides/intro' },
          { text: 'Install 安装', link: '/guides/install' },
          { text: 'Theme 主题', link: '/guides/theme' },
        ],
      },
      {
        text: 'Components 组件',
        items: [{ text: 'Button 按钮', link: '/components/button' }],
      },
      { text: 'markdown-examples', link: '/markdown-examples' },
      { text: 'Runtime API Examples', link: '/api-examples' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/congb19/combo-ui' },
    ],
  },
})
