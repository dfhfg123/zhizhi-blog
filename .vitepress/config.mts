import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "zhizhi  ",
  description: "zhizhi的博客",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "面经", link: "/study" },
      // { text: '生活', link: '/markdown-examples' }
      {
        text: "生活",
        items: [
          //   {
          //   text: "关于我",
          //   link:"aboutMe"
          // },
          {
            text: "荒海拾贝",
            link: "life",
          },
          {
            text: "虚室生白",
            link: "life",
          },
          {
            text: "灯火阑珊",
            link: "life",
          },
        ],
      },
    ],
    search: {
      provider: "local",
    },
    sidebar: {
      study: [
        {
          text: "面经",
          items: [
            { text: "MetaApp笔试", link: "study/MetaApp笔试" },
            { text: "滴滴二面", link: "study/滴滴二面" },
            { text: "百度前端实习一面", link: "study/百度-interview-1" },
            { text: "美团前端二面", link: "study/美团前端二面" },
            { text: "美团前端实习一面", link: "study/美团-intervew-1" },
            { text: "快手一面", link: "study/快手一面" },
            { text: "云智前端实习一面", link: "study/云智-interview-1" },
            { text: "云智前端实习二面", link: "study/云智-interview-2" },
            { text: "腾讯QQ前端实习一面", link: "study/腾讯QQ-interview" },
            { text: "网易前端实习一面", link: "study/网易-interview" },
            { text: "腾讯实习一面4.17", link: "study/4.17-tencent-interview" },
            { text: "360前端实习一面4.17", link: "study/4.17-360-interview" },
          ],
        },
      ],
      life: [
        { text: "5.13", link: "/life/5.13" },
        { text: "5.7", link: "/life/5.1" },
        { text: "4.30", link: "/life/four-two" },

        { text: "4.29", link: "/life/four" },
      ],
      knowLedge: [
        {
          text: "单元测试",
          items: [
            { text: "前言", link: "knowLedge/单元测试/单元测试" },
            { text: "单元测试1", link: "knowLedge/单元测试/单元测试1" },
            { text: "单元测试2", link: "knowLedge/单元测试/单元测试2" },
            { text: "单元测试3", link: "knowLedge/单元测试/单元测试3" },
          ],
        },
        {
          text: "常见面试题",
          items: [
            { text: "面试题1", link: "knowLedge/常见面试题/面试题1" },
            { text: "面试题2", link: "knowLedge/常见面试题/面试题2" },
            { text: "面试题3", link: "knowLedge/常见面试题/面试题3" },
          ],
        },
      ],
    },

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: "github", link: "https://gitee.com/lcz160637" },
    ],
  },
  ignoreDeadLinks: true,
});
