import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { componentsPlugin } from "vuepress-plugin-components";

export default defineUserConfig({
  base: "/",
  port: 7070,

  lang: "zh-CN",
  title: "Simeis 147",
  description: "Simeis 147's Blog",

  theme,

  plugins: [
    componentsPlugin({
      // 插件选项
      components: [
        "SiteInfo",
        "VPCard",
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
