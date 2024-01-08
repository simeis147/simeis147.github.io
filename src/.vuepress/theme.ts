import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://tech.dongcp.top",
   
  author: {
    name: "Dongcp",
    url: "https://github.com/simeis147",
  },
  
  pageInfo: ['Author', 'Date', 'Original', 'Word', 'ReadingTime', 'PageView', 'Category', 'Tag'],

  iconAssets: [
    "//at.alicdn.com/t/c/font_4010207_lnf1z756n8m.css",
  ],
  iconPrefix: "iconfont icon-",

  // logo: "/ ", //导航栏logo
  // logoDark: "/ ", //黑夜模式导航栏logo
  // hotReload: true,  // 开发模式下是否启动热更新，显示所有更改并重新渲染
  docsDir: "docs",  // 文档存放路径

  repo: "simeis147", //github图标链接
  // print: false //打印按钮
  // pure: true, //纯净模式！

  darkmode : "toggle", //在深色模式和浅色模式之间切换 

  // fullscreen: true,

  // 页面元数据：贡献者，最后修改时间，编辑链接
  contributors: true,
  lastUpdated: true,
  editLink: false,

  breadcrumb: true, //路径导航
  breadcrumbIcon : true, //路径导航图标

  // navbar
  navbar,

  // sidebar
  sidebar,

  blog: {
    description: "Master's degree in reading",
    intro: "/intro.html",
    avatar: "assets/theme/logo.png", //博客头像
    roundAvatar: true, //圆形
    medias: {
      Gmail: "mailto:cpdong@gmail.com",
      Email: "mailto:24726259408@qq.com",
      GitHub: "https://github.com/simeis147",
      Gitee: "https://gitee.com/dong-chengpeng",
    },
  },

  locales: {
    "/": {
      footer: "Powered by <a href=\"https://v2.vuepress.vuejs.org/zh/\" target=\"_blank\"> VuePress </a> | Theme <a href=\"https://theme-hope.vuejs.press/zh/\" target=\"_blank\"> Hope </a>",
      displayFooter: true,
      copyright: 'Copyright © 2023 - present  <center><script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script><span id="busuanzi_container_site_pv" style=\'display:none\'>本站总访问量 <span id="busuanzi_value_site_pv"></span> 次 </span> <span id="busuanzi_container_site_uv" style=\'display:none\'> | 本站访客数 <span id="busuanzi_value_site_uv"></span> 人次 <span id="busuanzi_container_page_pv" style=\'display:none\'> | 本文总阅读量 <span id="busuanzi_value_page_pv"></span> 次</center>',
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Language", "Repo", "Outlook", "Search"],
  },

  plugins: {
    blog: true,

    // install @waline/client before enabling it
    // WARNING: This is a test server for demo only.
    // You should create and use your own comment service in production.
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      tasklist: true,
      // install chart.js before enabling it
      // chart: true,

      codetabs: true,

      // insert component easily
      component: true,
     
      demo: true,

      // install echarts before enabling it
      // echarts: true,

      figure: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      imgLazyload: true,
      imgSize: true,
      include: true,

      // install katex before enabling it
      // katex: true,

      // install mathjax-full before enabling it
      // mathjax: true,

      mark: true,

      // install mermaid before enabling it
      // mermaid: true,

      playground: {
        presets: ["ts", "vue"],
      },

      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,

      // install @vue/repl before enabling it
      // vuePlayground: true,
    },

  },

});
