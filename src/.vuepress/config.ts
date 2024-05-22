import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite'
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  port: 7070,

  //头部引入
  head: [
    ["link", { rel: "stylesheet", href: "https://cdn.staticfile.net/lxgw-wenkai-webfont/1.7.0/style.css" }],
    ["script", { type: "text/javascript", src: "/assets/js/51la.js" }]
  ],

  lang: "zh-CN",
  title: "Simeis 147",
  description: "Simeis 147's Blog",

  theme,

  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),

  plugins: [
   
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
