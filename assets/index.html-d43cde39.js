import{_ as r,W as a,X as n,Y as s,a0 as e,a2 as t,$ as c,Z as i,C as p}from"./framework-f482b5e1.js";const g="/assets/image-20221202202305118-5eb89da1.png",d="/assets/image-20221202204013113-ae1f7e14.png",l="/assets/image-20221202204536647-a332d9ee.png",_="/assets/image-20221202205103486-1805f538.png",f="/assets/image-20221202205318778-43a2b7b0.png",b={},h=e("h1",{id:"springboot",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#springboot","aria-hidden":"true"},"#"),t(" SpringBoot")],-1),m=i('<h2 id="_1-起步依赖" tabindex="-1"><a class="header-anchor" href="#_1-起步依赖" aria-hidden="true">#</a> 1 起步依赖</h2><figure><img src="'+g+'" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在SpringBoot项目中，起步依赖有一个共同的特征：都是以<code>spring-boot-starter-</code>作为开头</p><div class="hint-container tip"><p class="hint-container-title">起步依赖特殊之处</p><p>spring-boot-starter-web：包含了web应用开发所需要的常见依赖</p><p>spring-boot-starter-test：包含了单元测试所需要的常见依赖</p></div><p><code>spring-boot-starter-web</code> 内部把关于Web开发所有的依赖都已经导入并且<strong>指定了版本</strong>，只需引入 <code>spring-boot-starter-web</code> 依赖就可以实现Web开发的需要的功能</p><figure><img src="'+d+'" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure>',6),u={href:"https://docs.spring.io/spring-boot/docs/2.7.2/reference/htmlsingle/#using.build-systems.starters",target:"_blank",rel:"noopener noreferrer"},x=i('<figure><img src="'+l+'" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>每一个起步依赖，都用于开发一个特定的功能。</p><blockquote><p>举例：<br> 开发中需要使用redis数据库时，只需要在SpringBoot项目中，引入：spring-boot-starter-redis ，即可导入redis开发所需要的依赖</p></blockquote><h2 id="_2-springboot父工程" tabindex="-1"><a class="header-anchor" href="#_2-springboot父工程" aria-hidden="true">#</a> 2 SpringBoot父工程</h2><p>SpringBoot通过maven引入的依赖，是没有指定具体的依赖版本号的。</p><figure><img src="'+_+'" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>为什么没有指定&lt;version&gt;版本号，可以正常使用呢？</p><ul><li>因为每一个SpringBoot工程，都有一个父工程。依赖的版本号在父工程中统一管理。</li></ul><figure><img src="'+f+'" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure>',9);function B(S,k){const o=p("ExternalLinkIcon");return a(),n("div",null,[h,s(" more "),m,e("p",null,[e("a",u,[t("Spring官方"),c(o)]),t("提供了很多现成的starter(起步依赖)，开发相关应用时，只需要引入对应的starter即可。")]),x])}const y=r(b,[["render",B],["__file","index.html.vue"]]);export{y as default};
