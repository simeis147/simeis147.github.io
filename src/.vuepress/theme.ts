import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://github.com/simeis147",
  author: {
    name: "Dongcp",
    url: "https://github.com/simeis147",
  },
 
  pageInfo: ['Author', 'Date', 'Original',  'Word', 'ReadingTime', 'PageView', 'Category', 'Tag'],

  iconAssets: [
    "//at.alicdn.com/t/c/font_4010207_lnf1z756n8m.css",
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
    avatar: "assets/theme/logo.png", //博客头像
    roundAvatar: true, //圆形
    medias: {
      Gmail: "mailto:cpdong@gmail.com",
      Email: "mailto:24726259408@qq.com",
      GitHub: "https://github.com/simeis147",
      Gitee: "https://gitee.com/dong-chengpeng",
      // Gitlab: "https://gitlab.cn/",
    },
  },

  locales: {
    "/": {
      navbar: zhNavbar,
      sidebar: zhSidebar,
      footer: "Powered by <a href=\"https://v2.vuepress.vuejs.org/zh/\" target=\"_blank\"> VuePress </a> | Theme <a href=\"https://theme-hope.vuejs.press/zh/\" target=\"_blank\"> Hope </a>",
      displayFooter: true,
      copyright: 'Copyright © 2023 - present  <center><script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>本站总访问量<span id="busuanzi_value_site_pv"></span>次👀 | 本站访客数<span id="busuanzi_value_site_uv"></span>人次👦</center>&nbsp&nbsp <img align="right" src="http://views.whatilearened.today/views/github/simeis/views.svg"/>',
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  // displayFooter: true,
  // copyright: 'Copyright © 2023 - present ',

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
    comment: {
      provider: "Waline",
      serverURL: "https://test-commit-six.vercel.app/", 
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
      card:true,
    },

  },
});
