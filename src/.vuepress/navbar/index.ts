import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  
  { 
      text: '工具',
      link: '/Tools/',
      icon: "tool",
      children: [
        {
          text: '文档',
          children: [
            {text: 'Markdown',icon:"markdown", link: '/Tools/Markdown/'},
          ]
        },
        {
          text: '工具',
          children: [
            { text: "Git", icon: 'git', link: "/Tools/Git/" },
          ]
        }
      ]
  },
  { 
    text: '计算机基础',
    link: '/ComputerBasics/',
    children: [
      {
        text: '计算机网络',
        children: [
          { text: "计算机网络", icon: 'change', link: "/ComputerBasics/ComputerNetwork/" },
        ]
      },
      {
        text: '算法',
        children: [
          { text: '算法', icon: 'strong', link: "/ComputerBasics/Algorithm" },
        ],
      }
    ]
  },
  { 
    text: '数据库',
    link: '/Database/',
    children: [
      {
        text: '数据库基础和原理',
        children: [
          {text: '数据库原理', icon: 'database', link: '/Database/Basic/Principle/'},
          {text: 'SQL语言', icon: 'sql', link: '/Database/Basic/Language/'},
        ]
      },
      {
        text: 'SQL 数据库',
        children: [
          { text: "Mysql详解", icon: 'mysql',link: "/Database/SQL/" },
        ]
      },
      {
        text: 'NoSQL 数据库',
        children: [
          { text: "Redis详解", icon: 'redis', link: "/Database/NoSQL/" },
        ]
      }
    ]
  },
  
  { 
      text: '后端相关',
      link: '/BackEnd/',
      children: [
          {
              text: '框架',
              children: [
                  { text: "MyBatisPlus", link: "/BackEnd/MyBatisPlus/"},
                  { text: "MyBatis", link: "/BackEnd/MyBatis/"},
                  { text: "SpringBoot", link: "/BackEnd/SpringBoot/"},
                  { text: "SpringMVC", link: "/BackEnd/SpringMVC/"},
                  { text: "Spring", link: "/BackEnd/Spring/"},
              ]
          },
          {
              text: '理论知识',
              children: [
                  { text: "JavaWeb", link: "/BackEnd/JavaWeb/" },
                  { text: "JavaSE", link: "/BackEnd/JavaSE/"}
              ]
          }
          
      ]
  },

  { 
      text: '前端相关',
      link: '/FrontEnd/',
      children: [
          {
              text: '框架',
              children: [
                  { text: "Vue",icon: "vue", link: "/FrontEnd/Vue/" },
              ]
          },
          {
              text: '理论知识',
              children: [
                  { text: "JavaScript", icon: "javascript", link: "/FrontEnd/JavaScript/" },
                  { text: "CSS", icon: "css",link: "/FrontEnd/CSS/"},
                  { text: "HTML",icon: "html", link: "/FrontEnd/HTML/"},
              ]
          }
      ]
  },

  { text: 'Project', icon: 'code', link: '/project/' },

  // { 
  //   text: 'Others',
  //   link: '/Others/',
  //   children: [
  //     {
  //       text: '外设',
  //       children: [
  //         { text: "键盘", icon: 'keyborad',link: "/Others/Keyborad/" },
  //       ]
  //     },
  //     {
  //       text: '生活',
  //       children: [
  //         { text: "电影", icon: 'Flim',link: "/Others/Flim/" },
  //       ]
  //     },
  //   ],
  // },
  
  // {
  //   text: 'Others',
  //   children: [
  //     {
  //       text: 'Star',
  //       icon: 'like',
  //       link: '/star/',
  //     },
  //     {
  //       text: 'Category',
  //       icon: 'categoryselected',
  //       link: '/category/',
  //     },
  //     {
  //       text: 'Tag',
  //       icon: 'tag',
  //       link: '/tag/',
  //     },
  //     {
  //       text: 'Timeline',
  //       // icon: 'time',
  //       icon: 'flow',
  //       link: '/timeline/',
  //     },
  //   ],
  // },
  
]);
