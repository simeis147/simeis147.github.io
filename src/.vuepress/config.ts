import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
// import {
//   canvasPlugin,
//   CanvasPluginType,
// } from "./plugins/vuepress-plugin-canvas";
// import { gradientCoverPlugin } from "./plugins/vuepress-plugin-gradient-cover";


export default defineUserConfig({
  base: "/",
  port: 7070,
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Simeis 147",
      description: "Simeis 147's Blog",
    },
  },

  theme,

  plugins: [
    // 本地搜索，删除上方 docsearchPlugin 区块后生效
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
    }),
     // 背景插件
    // canvasPlugin({
    //   type: CanvasPluginType.Figure,
    //   ribbonOption: {
    //     zIndex: 0.1,
    //     alpha: 0.1,
    //     size: 90,
    //   },
    // }),
    // // 遮罩插件
    // gradientCoverPlugin({}),
  ],


  // Enable it with pwa
  // shouldPrefetch: false,
});
