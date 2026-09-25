import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Deswatts 帮助",
  description: "Deswatts 帮助",
  head: [['link', { rel: 'icon', href: 'https://raw.githubusercontent.com/Deswatts/DeswattsDocs/refs/heads/main/docs/assets/head.png' }]],
  lang: 'zh',
  base: '/DeswattsDocs',
  cleanUrls: true,

  themeConfig: {
    logo: 'https://raw.githubusercontent.com/Deswatts/DeswattsDocs/refs/heads/main/docs/assets/head.png',
    nav: [
      { text: '首页', link: '/' },
      { text: 'Apsat帮助', link: '/Apsat'},
    ],

    sidebar: [
      {
        text: 'Apsat',
        items: [
          { text: '目录', link: '/Apsat'},
          { text: '介绍', link: '/Apsat/description'},
          { text: '安装', link: '/Apsat/installation', items:[
              { text: 'GitHub Release', link: '/Apsat/installation/release' },
              { text: '手动构建', link: '/Apsat/installation/build' }
            ] 
          },
          { text: '使用', link: '/Apsat/usage' },
          { text: '常见问题', link: '/Apsat/faq' }
        ]
      }
    ],

    search: { provider: 'local' },
    darkMode: true,
  }
})