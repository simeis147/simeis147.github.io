import{_ as i,X as a,Y as s,Z as r,a1 as e,a3 as l,$ as n}from"./framework-adf91b4c.js";const t="/assets/1669143781533-8123a022.png",d="/assets/1669294586147-ead1b175.png",c="/assets/1669302973198-00574480.png",u="/assets/20230402105557-c34fee38.png",o={},h=e("h1",{id:"vue-cli脚手架",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vue-cli脚手架","aria-hidden":"true"},"#"),l(" Vue-cli脚手架")],-1),g=n('<h2 id="前后台分离开发介绍" tabindex="-1"><a class="header-anchor" href="#前后台分离开发介绍" aria-hidden="true">#</a> 前后台分离开发介绍</h2><figure><img src="'+t+`" alt="1669143781533" tabindex="0" loading="lazy"><figcaption>1669143781533</figcaption></figure><ol><li>需求分析：首先我们需要阅读需求文档，分析需求，理解需求。</li><li>接口定义：查询接口文档中关于需求的接口的定义，包括地址，参数，响应数据类型等等</li><li>前后台并行开发：各自按照接口文档进行开发，实现需求</li><li>测试：前后台开发完了，各自按照接口文档进行测试</li><li>前后端联调测试：前端工程请求后端工程，测试功能</li></ol><h2 id="前端工程化介绍" tabindex="-1"><a class="header-anchor" href="#前端工程化介绍" aria-hidden="true">#</a> 前端工程化介绍</h2><ul><li>模块化：将js和css等，做成一个个可复用模块</li><li>组件化：将UI组件，css样式，js行为封装成一个个的组件，便于管理</li><li>规范化：提供一套标准的规范的目录接口和编码规范，所有开发人员遵循这套规范</li><li>自动化：项目的构建，测试，部署全部都是自动完成</li></ul><h2 id="前端工程化入门" tabindex="-1"><a class="header-anchor" href="#前端工程化入门" aria-hidden="true">#</a> 前端工程化入门</h2><h3 id="_1-环境准备" tabindex="-1"><a class="header-anchor" href="#_1-环境准备" aria-hidden="true">#</a> 1 环境准备</h3><p>前端工程化是通过vue官方提供的脚手架 <code>Vue-cli</code> 来完成的，用于快速的生成一个Vue的项目模板。</p><div class="hint-container note"><p class="hint-container-title">Vue-cli主要提供了如下功能</p><p>统一的目录结构<br> 本地调试<br> 热部署<br> 单元测试<br> 集成打包上线</p></div><h3 id="_2-vue项目简介" tabindex="-1"><a class="header-anchor" href="#_2-vue项目简介" aria-hidden="true">#</a> 2 Vue项目简介</h3><p>Vue-cli提供了如下俩种方式创建vue项目:</p><ul><li>命令行：</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>vue create vue-project01
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>图形化界面：</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>vue ui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+d+'" alt="1669294586147" tabindex="0" loading="lazy"><figcaption>1669294586147</figcaption></figure><h3 id="_3-vue项目目录结构介绍" tabindex="-1"><a class="header-anchor" href="#_3-vue项目目录结构介绍" aria-hidden="true">#</a> 3 vue项目目录结构介绍</h3><figure><img src="'+c+'" alt="1669302973198" tabindex="0" loading="lazy"><figcaption>1669302973198</figcaption></figure><p>平时开发代码就是在<strong>src目录</strong>下</p><h3 id="_4-vue项目开发流程" tabindex="-1"><a class="header-anchor" href="#_4-vue项目开发流程" aria-hidden="true">#</a> 4 Vue项目开发流程</h3><ul><li>template: 模板部分，主要是HTML代码，用来展示页面主体结构的</li><li>script: js代码区域，主要是通过js代码来控制模板的数据来源和行为的</li><li>style: css样式部分，主要通过css样式控制模板的页面效果</li></ul><figure><img src="'+u+'" alt="1669313699186" width="500" tabindex="0" loading="lazy"><figcaption>1669313699186</figcaption></figure>',22);function v(p,f){return a(),s("div",null,[h,r(" more "),g])}const m=i(o,[["render",v],["__file","vue04.html.vue"]]);export{m as default};