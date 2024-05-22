import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite'
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  port: 7070,

  //头部引入
  head: [
    ["link", { rel: "stylesheet",  href: "https://cdn.staticfile.org/lxgw-wenkai-screen-webfont/1.6.0/lxgwwenkaiscreen.css", media: "print", onload:"this.media='all'"}]
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
