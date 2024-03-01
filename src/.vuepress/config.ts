import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite'
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { componentsPlugin } from "vuepress-plugin-components";
import { commentPlugin } from "vuepress-plugin-comment2";
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';

export default defineUserConfig({
  base: "/",
  port: 7070,

  //头部引入
  head: [["script", { type: "text/javascript", src: "/assets/js/51la.js" }]],

  lang: "zh-CN",
  title: "Simeis 147",
  description: "Simeis 147's Blog",

  theme,

  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),

  plugins: [
    commentPlugin({
      provider: "Giscus", // Artalk | Giscus | Waline | Twikoo
      repo: "simeis147/BlogGiscus",
      repoId: "R_kgDOKyHOLw",
      category: "Announcements",
      categoryId: "DIC_kwDOKyHOL84CbRA3",
    }),
    googleAnalyticsPlugin({
      // 配置项
      id: 'G-28BK3X8X3R',
      debug: true,
    }),
    componentsPlugin({
      // 插件选项
      components: [
        "SiteInfo",
        "VPCard",
        "FontIcon",
        "Badge",
      ],
    }),
    // 本地搜索，删除上方 docsearchPlugin 区块后生效
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
