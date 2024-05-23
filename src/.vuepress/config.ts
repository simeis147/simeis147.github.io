import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite'
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  port: 7070,

  //头部引入
  head: [
    ["link", 
    { rel: "stylesheet",  
      href:"https://cdnjs.cloudflare.com/ajax/libs/lxgw-wenkai-screen-webfont/1.7.0/style.css", 
      integrity:"sha512-A2sVEqmNCGCac7ji4czWLqCVSn28L0U5lSobS173H+gk+QTV6rH0EH0QEnYk5mz3KPRDmEr+GKM1hfdfLrsFpg==", 
      crossorigin:"anonymous", 
      referrerpolicy:"no-referrer" 
    }],
    
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
