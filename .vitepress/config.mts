import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "zhizhi  ",
  description: "zhizhi的博客",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '面经', link: '/study/百度-interview-1' },
      // { text: '生活', link: '/markdown-examples' }
      {
        text: '生活',
        items: [{
          text: "荒海拾贝",
          link:"life"
        }, {
          
          text: "虚室生白",
          link:"life"

          }, {
          text: "灯火阑珊",
            link:"life"
        }]
      }
    ],
    search: {
      provider:"local"
  
    },
    sidebar: {
      'study': [
        {
          text: '面经',
          items: [
            { text: "百度前端实习一面", link: "study/百度-interview-1" },
            {text:"美团前端二面",link:"study/美团前端二面"},
            {text:"美团前端实习一面",link:"study/美团-intervew-1"},        
            { text: "云智前端实习一面", link: "study/云智-interview-1" },
            {text:"云智前端实习二面",link:"study/云智-interview-2"},
            { text: "腾讯QQ前端实习一面", link: "study/腾讯QQ-interview" },
            {text:"网易前端实习一面",link:"study/网易-interview"},
            {text: '腾讯实习一面4.17', link: 'study/4.17-tencent-interview' },
            { text: '360前端实习一面4.17', link: 'study/4.17-360-interview' },
            
          ]
        },
      ],
      'life': [
        { text: '四月', link: 'life/life' },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  ignoreDeadLinks: true
})
