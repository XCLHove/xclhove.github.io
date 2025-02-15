import { defineConfig } from 'vitepress'

const navigations = [
  { text: '首页', link: '/' },
  { text: '个人项目', link: '/个人项目' },
  { text: '前端', link: '/前端' },
  { text: '后端', link: '/后端' },
  { text: '运维', link: '/运维' },
  { text: '工具', link: '/工具' },
  { text: '编码', link: '/编码' },
  { text: '笔记', link: '/笔记' },
]

export default defineConfig({
  lang: 'zh',
  srcDir: './src',
  outDir: './dist',
  cacheDir: './cache',
  vite: {
    server: {
      port: 8000,
      host: '0.0.0.0',
    },
  },
  title: 'XCLHove的神秘空间',
  description: '个人博客 & 站点导航',
  head: [['link', { rel: 'icon', href: '/XCLHove.jpg' }]],
  themeConfig: {
    search: {
      provider: 'local',
    },
    nav: navigations,
    sidebar: [
      {
        text: '全局导航',
        items: navigations,
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xclhove' },
      {
        icon: {
          svg: '<img src="/icon/gitee.svg" alt="gitee.svg" height="20" width="20" />',
        },
        link: 'https://gitee.com/XCLHove',
      },
      {
        icon: {
          svg: '<img src="/icon/bilibili.svg" alt="bilibili.svg" height="20" width="20" />',
        },
        link: 'https://space.bilibili.com/388148652',
      },
    ],
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    footer: {
      copyright:
        '<a href="https://github.xclhove.top/XCLHove/xclhove.github.io/blob/master/LICENSE" target="_blank">Copyright © 2024-present XCLHove</a>',
    },
    darkModeSwitchLabel: '深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    outline: {
      label: '页面导航',
    },
  },
  ignoreDeadLinks: true
})
