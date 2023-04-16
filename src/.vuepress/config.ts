import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/",
  port: 7070,
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Simeis 147",
      description: "Simeis 147's Blog",
    },
    // "/en/": {
    //   lang: "en-US",
    //   title: "Simeis 147",
    //   description: "Simeis 147's Blog",
    // },
  },

  theme,

  plugins: [
    // 本地搜索，删除上方 docsearchPlugin 区块后生效
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
    }),
   
  ],


  // Enable it with pwa
  // shouldPrefetch: false,
});
