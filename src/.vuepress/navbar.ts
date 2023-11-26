import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  
  { 
      text: '工具',
      link: '🔧 Tools',
      children: [
        {
          text: '文档',
          children: [
            {text: 'Markdown', link: '/Tools/MarkDown/'},
            {text: '资源整合', link: '/Tools/Resource/'},
          ]
        },
        {
          text: '工具',
          children: [
            { text: "Git",  link: "/Tools/Git/" },
            { text: 'Bug memoir', link: 'https://simeis147.github.io/bug-memoir/' },
          ]
        }
      ]
  },
  { 
    text: '计算机基础',
    link: '💻 CSBasics',
    children: [
      {
        text: '408',
        children: [
          { text: "计算机基础",  link: "/ComputerBasics/ComputerNetwork/" },
        ]
      },
      {
        text: '算法',
        children: [
          { text: '算法',  link: "/ComputerBasics/Algorithm/" },
        ],
      }
    ]
  },
  { 
    text: '数据库',
    link: '🧾 Database',
    children: [
      {
        text: '数据库基础和原理',
        children: [
          {text: '数据库原理',  link: '/Database/Basic/Principle/'},
          {text: 'SQL语言',  link: '/Database/Basic/Language/'},
        ]
      },
      {
        text: 'SQL 数据库',
        children: [
          { text: "Mysql详解", link: "/Database/SQL/" },
        ]
      },
      {
        text: 'NoSQL 数据库',
        children: [
          { text: "Redis详解",  link: "/Database/NoSQL/" },
        ]
      }
    ]
  },
  
  { 
      text: '后端相关',
      link: '🛫 BackEnd',
      children: [
          {
              text: '框架',
              children: [
                  { text: "MyBatisPlus",  link: "/BackEnd/MybatisPlus/"},
                  { text: "MyBatis", link: "/BackEnd/MyBatis/"},
                  { text: "SpringCloud", link: "/BackEnd/SpringCloud/"},
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
      link: '🛫 FrontEnd',
      children: [
          {
              text: '框架',
              children: [
                  { text: "Vue", link: "/FrontEnd/Vue/" },
              ]
          },
          {
              text: '理论知识',
              children: [
                  { text: "JavaScript",  link: "/FrontEnd/JavaScript/" },
                  { text: "CSS", link: "/FrontEnd/CSS/"},
                  { text: "HTML", link: "/FrontEnd/HTML/"},
              ]
          }
      ]
  },

  { text: '📝 Project', link: '/project/' },
  
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
