import { defineConfig } from 'vitepress'

const navigations = [
  { text: '首页', link: '/' },
  { text: '前端', link: '/前端' },
  { text: '后端', link: '/后端' },
  { text: '运维', link: '/运维' },
  { text: '工具', link: '/工具' },
]

export default defineConfig({
  lang: 'zh-CN',
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
  description:
    '个人博客 & 站点导航 & Java & TS & SpringBoot & Vue & Electron & Nuxt',
  head: [['link', { rel: 'icon', href: '/XCLHove.jpg' }]],
  themeConfig: {
    search: {
      provider: 'local',
    },

    nav: navigations,

    sidebar: [
      {
        text: '首页',
        items: navigations,
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xclhove' },
      { icon: 'github', link: 'https://github.xclhove.top/xclhove' },
    ],
  },
})
