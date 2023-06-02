const e=JSON.parse('{"key":"v-424a2548","path":"/BackEnd/Spring/spring02.html","title":"Spring IOC DI 注解开发","lang":"zh-CN","frontmatter":{"order":2,"date":"2023-04-17T00:00:00.000Z","category":["Spring","Ioc","DI"],"description":"Spring IOC DI 注解开发 掌握 IOC/DI 配置管理第三方bean 掌握 IOC/DI 的注解开发 掌握 IOC/DI 注解管理第三方bean 完成Spring与Mybatis及Junit的整合开发 1 IOC/DI 配置管理第三方bean 1.1 案例：数据源对象管理 通过数据源Druid(德鲁伊)和C3P0来配置学习","head":[["meta",{"property":"og:url","content":"https://github.com/simeis147/BackEnd/Spring/spring02.html"}],["meta",{"property":"og:site_name","content":"Simeis 147"}],["meta",{"property":"og:title","content":"Spring IOC DI 注解开发"}],["meta",{"property":"og:description","content":"Spring IOC DI 注解开发 掌握 IOC/DI 配置管理第三方bean 掌握 IOC/DI 的注解开发 掌握 IOC/DI 注解管理第三方bean 完成Spring与Mybatis及Junit的整合开发 1 IOC/DI 配置管理第三方bean 1.1 案例：数据源对象管理 通过数据源Druid(德鲁伊)和C3P0来配置学习"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://github.com/simeis147/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-02T21:39:04.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Spring IOC DI 注解开发"}],["meta",{"property":"article:author","content":"Dongcp"}],["meta",{"property":"article:published_time","content":"2023-04-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-02T21:39:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring IOC DI 注解开发\\",\\"image\\":[\\"https://github.com/simeis147/\\"],\\"datePublished\\":\\"2023-04-17T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-02T21:39:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dongcp\\",\\"url\\":\\"https://github.com/simeis147\\"}]}"]]},"headers":[{"level":2,"title":"1 IOC/DI 配置管理第三方bean","slug":"_1-ioc-di-配置管理第三方bean","link":"#_1-ioc-di-配置管理第三方bean","children":[{"level":3,"title":"1.1 案例：数据源对象管理","slug":"_1-1-案例-数据源对象管理","link":"#_1-1-案例-数据源对象管理","children":[]},{"level":3,"title":"1.2 加载properties文件","slug":"_1-2-加载properties文件","link":"#_1-2-加载properties文件","children":[]}]},{"level":2,"title":"2 核心容器","slug":"_2-核心容器","link":"#_2-核心容器","children":[{"level":3,"title":"2.1 环境准备","slug":"_2-1-环境准备","link":"#_2-1-环境准备","children":[]},{"level":3,"title":"2.2 容器","slug":"_2-2-容器","link":"#_2-2-容器","children":[]},{"level":3,"title":"2.2 核心容器总结","slug":"_2-2-核心容器总结","link":"#_2-2-核心容器总结","children":[]}]},{"level":2,"title":"3 IOC/DI注解开发","slug":"_3-ioc-di注解开发","link":"#_3-ioc-di注解开发","children":[{"level":3,"title":"3.1 环境准备","slug":"_3-1-环境准备","link":"#_3-1-环境准备","children":[]},{"level":3,"title":"3.2 注解开发定义bean","slug":"_3-2-注解开发定义bean","link":"#_3-2-注解开发定义bean","children":[]},{"level":3,"title":"3.3 纯注解开发模式","slug":"_3-3-纯注解开发模式","link":"#_3-3-纯注解开发模式","children":[]},{"level":3,"title":"3.4 注解开发bean作用范围与生命周期管理","slug":"_3-4-注解开发bean作用范围与生命周期管理","link":"#_3-4-注解开发bean作用范围与生命周期管理","children":[]},{"level":3,"title":"3.5 注解开发依赖注入","slug":"_3-5-注解开发依赖注入","link":"#_3-5-注解开发依赖注入","children":[]}]},{"level":2,"title":"4 IOC/DI注解开发管理第三方bean","slug":"_4-ioc-di注解开发管理第三方bean","link":"#_4-ioc-di注解开发管理第三方bean","children":[{"level":3,"title":"4.1 环境准备","slug":"_4-1-环境准备","link":"#_4-1-环境准备","children":[]},{"level":3,"title":"4.2 注解开发管理第三方bean","slug":"_4-2-注解开发管理第三方bean","link":"#_4-2-注解开发管理第三方bean","children":[]},{"level":3,"title":"4.3 引入外部配置类","slug":"_4-3-引入外部配置类","link":"#_4-3-引入外部配置类","children":[]},{"level":3,"title":"4.4 注解开发实现为第三方bean注入资源","slug":"_4-4-注解开发实现为第三方bean注入资源","link":"#_4-4-注解开发实现为第三方bean注入资源","children":[]}]},{"level":2,"title":"5 注解开发总结","slug":"_5-注解开发总结","link":"#_5-注解开发总结","children":[]},{"level":2,"title":"6 Spring整合","slug":"_6-spring整合","link":"#_6-spring整合","children":[{"level":3,"title":"6.1 Spring整合Mybatis思路分析","slug":"_6-1-spring整合mybatis思路分析","link":"#_6-1-spring整合mybatis思路分析","children":[]},{"level":3,"title":"6.2 Spring整合Mybatis","slug":"_6-2-spring整合mybatis","link":"#_6-2-spring整合mybatis","children":[]},{"level":3,"title":"6.3 Spring整合Junit","slug":"_6-3-spring整合junit","link":"#_6-3-spring整合junit","children":[]}]}],"git":{"createdTime":1681521912000,"updatedTime":1685741944000,"contributors":[{"name":"simeis147","email":"cpdong7@gmail.com","commits":11}]},"readingTime":{"minutes":34.74,"words":10421},"filePathRelative":"BackEnd/Spring/spring02.md","localizedDate":"2023年4月17日","excerpt":"<h1> Spring IOC DI 注解开发</h1>\\n<blockquote>\\n<ol>\\n<li>掌握 IOC/DI 配置管理第三方bean</li>\\n<li>掌握 IOC/DI 的注解开发</li>\\n<li>掌握 IOC/DI 注解管理第三方bean</li>\\n<li>完成Spring与Mybatis及Junit的整合开发</li>\\n</ol>\\n</blockquote>\\n<h2> 1 IOC/DI 配置管理第三方bean</h2>\\n<h3> 1.1 案例：数据源对象管理</h3>\\n<p>通过数据源<code>Druid(德鲁伊)</code>和<code>C3P0</code>来配置学习</p>","autoDesc":true}');export{e as data};
