import{_ as n,W as a,X as r,Y as e,a0 as i,a2 as p,Z as t}from"./framework-f482b5e1.js";const l="/assets/image-20210729171850181-879a2a40.png",s="/assets/1629714811435-7e617fd8.png",o="/assets/image-20210729171926576-15a84686.png",g="/assets/image-20210729172153796-b3fd0bc3.png",c="/assets/1629720945720-49538fc5.png",d="/assets/1629722300996-941aa5df.png",u={},h=i("h1",{id:"spring",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#spring","aria-hidden":"true"},"#"),p(" Spring")],-1),f=t('<h2 id="简化开发" tabindex="-1"><a class="header-anchor" href="#简化开发" aria-hidden="true">#</a> 简化开发</h2><p>Spring框架中提供了两个大的核心技术，分别是: IOC、AOP（事务处理）</p><div class="hint-container tip"><p class="hint-container-title">IOC AOP</p><ol><li><p>Spring的简化操作都是基于这两块内容</p></li><li><p>事务处理属于Spring中AOP的具体应用，可以简化项目中的事务管理</p></li></ol></div><h2 id="框架整合" tabindex="-1"><a class="header-anchor" href="#框架整合" aria-hidden="true">#</a> 框架整合</h2><p>Spring在框架整合这块已经做到了极致，它可以整合市面上几乎所有主流框架，比如:</p><ul><li><strong>MyBatis</strong></li><li>MyBatis-plus</li><li>Struts</li><li>Struts2</li><li>Hibernate</li><li>……</li></ul><div class="hint-container info"><p class="hint-container-title">综上所述，对于Spring的学习，主要学习四块内容:</p><p>(1) IOC</p><p>(2) 整合Mybatis(IOC的具体应用)</p><p>(3) AOP</p><p>(4) 声明式事务(AOP的具体应用)</p></div><h2 id="spring家族" tabindex="-1"><a class="header-anchor" href="#spring家族" aria-hidden="true">#</a> Spring家族</h2><p>Spring开发生态圈提供了若干个项目，每个项目用于完成特定的功能，可以根据需要自行选择，把这些个项目组合起来</p><figure><img src="'+l+'" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>常用框架:</strong></p><figure><img src="'+s+'" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><p>Spring Framework: Spring框架，是Spring中最早最核心的技术，也是所有其他技术的基础</p></li><li><p>SpringBoot: Spring是来简化开发，而SpringBoot是来帮助Spring在简化的基础上快速开发</p></li><li><p>SpringCloud: 用来做分布式微服务架构的相关开发</p></li></ul><blockquote><p>除了上面的这三个技术外，还有很多其他的技术，也比较流行，如SpringData、SpringSecurity等</p></blockquote><h3 id="spring发展史" tabindex="-1"><a class="header-anchor" href="#spring发展史" aria-hidden="true">#</a> Spring发展史</h3><figure><img src="'+o+'" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>IBM(IT公司-国际商业机器公司)在1997年提出了EJB思想，早期的JAVAEE开发大都基于该思想的。</p><p>Rod Johnson(Java和J2EE开发领域的专家)在2002年出版的<code>Expert One-on-One J2EE Design and Development</code>，书中有阐述在开发中使用EJB该如何做。</p><p>Rod Johnson在2004年出版的<code>Expert One-on-One J2EE Development without EJB</code>，书中提出了比EJB思想更高效的实现方案，并且在同年将方案进行了具体的落地实现，这个实现就是Spring1.0。</p><p>随着时间推移，版本不断更新维护</p><ul><li>Spring1.0是纯配置文件开发</li><li>Spring2.0为了简化开发引入了注解开发，此时为配置文件加注解的开发方式</li><li>Spring3.0已经可以进行纯注解开发，使开发效率大幅提升</li><li>Spring4.0根据JDK的版本升级对个别API进行了调整</li><li>Spring5.0已经全面支持JDK8</li></ul><h3 id="spring系统架构" tabindex="-1"><a class="header-anchor" href="#spring系统架构" aria-hidden="true">#</a> Spring系统架构</h3><ul><li><p>Spring Framework是Spring生态圈中最基础的项目，是其他项目的根基。</p></li><li><p>Spring Framework的发展也经历了很多版本的变更，每个版本都有相应的调整</p><figure><img src="'+g+'" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+c+'" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>(1) 核心层</p><ul><li>Core Container: 核心容器，这个模块是Spring最核心的模块，其他的都需要依赖该模块</li></ul><p>(2) AOP层</p><ul><li>AOP:面向切面编程，它依赖核心层容器，目的是<strong>在不改变原有代码的前提下对其进行功能增强</strong></li><li>Aspects:AOP是思想，Aspects是对AOP思想的具体实现</li></ul><p>(3 )数据层</p><ul><li>Data Access: 数据访问，Spring全家桶中有对数据访问的具体实现技术</li><li>Data Integration: 数据集成，Spring支持整合其他的数据层解决方案，比如Mybatis</li><li>Transactions: 事务，Spring中事务管理是Spring AOP的一个具体实现</li></ul><p>(4) Web层</p><ul><li>SpringMVC框架</li></ul><p>(5) Test层</p><ul><li>Spring主要整合了Junit来完成单元测试和集成测试</li></ul></li></ul><p><strong>学习路线图</strong>：</p><figure><img src="'+d+'" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure>',25);function S(m,_){return a(),r("div",null,[h,e(" more "),f])}const x=n(u,[["render",S],["__file","index.html.vue"]]);export{x as default};
