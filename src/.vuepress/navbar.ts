import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  
  { 
      text: '⚙️ 便捷工具',
      // link: '🔧 Tools',
      children: [
        {
          text: '文档',
          children: [
            {text: 'Markdown', icon: '/assets/icon/markdown.svg', link: '/Tools/MarkDown/'},
            {text: 'Resource', icon: '/assets/icon/resources.svg',link: '/Tools/Resource/'},
          ]
        },
        {
          text: '工具',
          children: [
            { text: "Git", icon: '/assets/icon/git.svg', link: "/Tools/Git/" },
            { text: 'Bug memoir', icon: '/assets/icon/bug.svg',link: 'https://simeis147.github.io/bug-memoir/' },
          ]
        }
      ]
  },
  { 
    text: '💻 基础知识',
    // link: '💻 CSBasics',
    children: [
      {
        text: '408',
        children: [
          { text: "计算机网络",  icon: '/assets/icon/network.svg', link: "/ComputerBasics/ComputerNetwork/" },
        ]
      },
      {
        text: '算法',
        children: [
          { text: '算法',  icon: '/assets/icon/algorithms.svg', link: "/ComputerBasics/Algorithm/" },
        ],
      }
    ]
  },
  { 
    text: '📑 数据存储',
    // link: '🧾 Database',
    children: [
      {
        text: '数据库基础和原理',
        children: [
          {text: '数据库原理',  icon: '/assets/icon/database.svg', link: '/Database/Basic/Principle/'},
          {text: 'SQL语言',   icon: '/assets/icon/sql.svg', link: '/Database/Basic/Language/'},
        ]
      },
      {
        text: 'SQL 数据库',
        children: [
          { text: "Mysql详解",  icon: '/assets/icon/mysql.svg',link: "/Database/SQL/" },
        ]
      },
      {
        text: 'NoSQL 数据库',
        children: [
          { text: "Redis详解",  icon: '/assets/icon/redis.svg', link: "/Database/NoSQL/" },
        ]
      }
    ]
  },
  
  { 
      text: '🔬 后端相关',
      // link: '🏗 BackEnd',
      children: [
          {
              text: '框架',
              children: [
                  { text: "MyBatisPlus", icon: '/assets/icon/mybatisplus.svg', link: "/BackEnd/MybatisPlus/"},
                  { text: "MyBatis", icon: '/assets/icon/mybatis.svg', link: "/BackEnd/MyBatis/"},
                  { text: "SpringCloud", icon: '/assets/icon/springcloud.svg',link: "/BackEnd/SpringCloud/"},
                  { text: "SpringBoot", icon: '/assets/icon/springboot.svg', link: "/BackEnd/SpringBoot/"},
                  { text: "SpringMVC", icon: '/assets/icon/springMVC.svg', link: "/BackEnd/SpringMVC/"},
                  { text: "Spring", icon: '/assets/icon/spring.svg',link: "/BackEnd/Spring/"},
              ]
          },
          {
              text: '理论知识',
              children: [
                  { text: "JavaWeb", icon: '/assets/icon/javaweb.svg',link: "/BackEnd/JavaWeb/" },
                  { text: "JavaSE", icon: '/assets/icon/java.svg',link: "/BackEnd/JavaSE/"}
              ]
          }
          
      ]
  },

  { 
      text: '🔭 前端相关',
      // link: '🏛 FrontEnd',
      children: [
          {
              text: '框架',
              children: [
                  { text: "Vue", icon: '/assets/icon/vue.svg',link: "/FrontEnd/Vue/" },
              ]
          },
          {
              text: '理论知识',
              children: [
                  { text: "JavaScript", icon: '/assets/icon/javascript.svg', link: "/FrontEnd/JavaScript/" },
                  { text: "CSS", icon: '/assets/icon/css.svg',link: "/FrontEnd/CSS/"},
                  { text: "HTML",icon: '/assets/icon/html.svg', link: "/FrontEnd/HTML/"},
              ]
          }
      ]
  },

  { text: '📝 项目资源', link: '/project/' },
  
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
