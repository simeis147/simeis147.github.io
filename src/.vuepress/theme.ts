import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://github.com/simeis147",
  author: {
    name: "Dongcp",
    url: "https://github.com/simeis147",
    
  },
 
  iconAssets: [
    "iconfont", 
    "//at.alicdn.com/t/c/font_4010207_zfris1seurl.css",
  ],
  iconPrefix: "iconfont icon-",

  // logo: "/simeis147.png", //导航栏logo
  // logoDark: "/lxh_71.gif", //黑夜模式导航栏logo
  // hotReload: true,  // 开发模式下是否启动热更新，显示所有更改并重新渲染
  docsDir: "docs",  // 文档存放路径

  repo: "simeis147", //github图标链接
  // print: false //打印按钮
  // pure: true, //纯净模式！

  darkmode : "toggle", //在深色模式和浅色模式之间切换 
  themeColor: {
    red: "#f26d6d",
    blue: "#2196f3",
    orange: "#fb9b5f",
    green: "#7f8c8d",
  },
  // fullscreen: true,

  // 页面元数据：贡献者，最后修改时间，编辑链接
  contributors: true,
  lastUpdated: true,
  editLink: false,

  breadcrumb: true, //路径导航
  breadcrumbIcon : true, //路径导航图标

  blog: {
    description: "Master's degree in reading",
    intro: "/intro.html",
    avatar: "/logo.png", //博客头像
    roundAvatar: true, //圆形
    medias: {
      Gmail: "https://mail.google.com/mail/u/0/#inbox",
      Email: "https://mail.qq.com/cgi-bin/frame_html?sid=eSmHvgbjcenD00Ak&r=9db842c66dcc4a7215849b6518253232&lang=zh",
      GitHub: "https://github.com/simeis147",
      Gitee: "https://gitee.com/dong-chengpeng",
      Gitlab: "https://gitlab.cn/",
    },
  },

  locales: {
    "/": {
      navbar: zhNavbar,
      sidebar: zhSidebar,
      // footer: "Theme by <a href=\"https://theme-hope.vuejs.press/zh/\" target=\"_blank\">VuePress Theme Hope</a>",
      displayFooter: true,

      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  displayFooter: true,
  copyright: 'Copyright © 2023 - present ',

  // encrypt: {
  //   global: true, //全局加密
  //   admin: ["1234"], //密码
  //   config: {
  //     // 这会加密整个 guide 目录，并且两个密码都是可用的
  //     "/guide/": ["1234", "5678"],
  //     // 这只会加密 config/page.html
  //     "/config/page.html": "1234",
  //   },
  // },

  plugins: {
    blog: true,
    // comment: {
    //   // @ts-expect-error: You should generate and use your own comment service
    //   provider: "Giscus",
    // },
    comment: {
      provider: "Waline",
      serverURL: "https://test-commit-six.vercel.app/", // your server url
    },

    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
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
      vuePlayground: true,
    },

  },
});
