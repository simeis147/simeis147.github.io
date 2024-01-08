const e=JSON.parse('{"key":"v-41576532","path":"/BackEnd/SpringCloud/springcloud05.html","title":"Docker","lang":"zh-CN","frontmatter":{"order":5,"date":"2023-06-22T00:00:00.000Z","category":["SpringCloud","Docker"],"description":"Docker 1.初识Docker 1.1.什么是Docker 微服务虽然具备各种各样的优势，但服务的拆分通用给部署带来了很大的麻烦。 分布式系统中，依赖的组件非常多，不同组件之间部署时往往会产生一些冲突。 在数百上千台服务中重复部署，环境不一定一致，会遇到各种问题 1.1.1.应用部署的环境问题 大型项目组件较多，运行环境也较为复杂，部署时会碰到一些问题： 依赖关系复杂，容易出现兼容性问题 开发、测试、生产环境有差异","head":[["meta",{"property":"og:url","content":"https://tech.dongcp.top/BackEnd/SpringCloud/springcloud05.html"}],["meta",{"property":"og:site_name","content":"Simeis 147"}],["meta",{"property":"og:title","content":"Docker"}],["meta",{"property":"og:description","content":"Docker 1.初识Docker 1.1.什么是Docker 微服务虽然具备各种各样的优势，但服务的拆分通用给部署带来了很大的麻烦。 分布式系统中，依赖的组件非常多，不同组件之间部署时往往会产生一些冲突。 在数百上千台服务中重复部署，环境不一定一致，会遇到各种问题 1.1.1.应用部署的环境问题 大型项目组件较多，运行环境也较为复杂，部署时会碰到一些问题： 依赖关系复杂，容易出现兼容性问题 开发、测试、生产环境有差异"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-26T02:28:53.000Z"}],["meta",{"property":"article:author","content":"Dongcp"}],["meta",{"property":"article:published_time","content":"2023-06-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-26T02:28:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-22T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-26T02:28:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dongcp\\",\\"url\\":\\"https://github.com/simeis147\\"}]}"]]},"headers":[{"level":2,"title":"1.初识Docker","slug":"_1-初识docker","link":"#_1-初识docker","children":[{"level":3,"title":"1.1.什么是Docker","slug":"_1-1-什么是docker","link":"#_1-1-什么是docker","children":[]},{"level":3,"title":"1.2.Docker和虚拟机的区别","slug":"_1-2-docker和虚拟机的区别","link":"#_1-2-docker和虚拟机的区别","children":[]},{"level":3,"title":"1.3.Docker架构","slug":"_1-3-docker架构","link":"#_1-3-docker架构","children":[]},{"level":3,"title":"1.4.安装Docker","slug":"_1-4-安装docker","link":"#_1-4-安装docker","children":[]}]},{"level":2,"title":"2.Docker的基本操作","slug":"_2-docker的基本操作","link":"#_2-docker的基本操作","children":[{"level":3,"title":"2.1.镜像操作","slug":"_2-1-镜像操作","link":"#_2-1-镜像操作","children":[]},{"level":3,"title":"2.2.容器操作","slug":"_2-2-容器操作","link":"#_2-2-容器操作","children":[]},{"level":3,"title":"2.3.数据卷（容器数据管理）","slug":"_2-3-数据卷-容器数据管理","link":"#_2-3-数据卷-容器数据管理","children":[]}]},{"level":2,"title":"3.Dockerfile自定义镜像","slug":"_3-dockerfile自定义镜像","link":"#_3-dockerfile自定义镜像","children":[{"level":3,"title":"3.1.镜像结构","slug":"_3-1-镜像结构","link":"#_3-1-镜像结构","children":[]},{"level":3,"title":"3.2.Dockerfile语法","slug":"_3-2-dockerfile语法","link":"#_3-2-dockerfile语法","children":[]},{"level":3,"title":"3.3.构建Java项目","slug":"_3-3-构建java项目","link":"#_3-3-构建java项目","children":[]},{"level":3,"title":"3.4.小结","slug":"_3-4-小结","link":"#_3-4-小结","children":[]}]},{"level":2,"title":"4.Docker-Compose","slug":"_4-docker-compose","link":"#_4-docker-compose","children":[{"level":3,"title":"4.1.初识DockerCompose","slug":"_4-1-初识dockercompose","link":"#_4-1-初识dockercompose","children":[]},{"level":3,"title":"4.2.安装DockerCompose","slug":"_4-2-安装dockercompose","link":"#_4-2-安装dockercompose","children":[]},{"level":3,"title":"4.3.部署微服务集群","slug":"_4-3-部署微服务集群","link":"#_4-3-部署微服务集群","children":[]}]},{"level":2,"title":"5.Docker镜像仓库","slug":"_5-docker镜像仓库","link":"#_5-docker镜像仓库","children":[{"level":3,"title":"5.1.搭建私有镜像仓库","slug":"_5-1-搭建私有镜像仓库","link":"#_5-1-搭建私有镜像仓库","children":[]},{"level":3,"title":"5.2.推送、拉取镜像","slug":"_5-2-推送、拉取镜像","link":"#_5-2-推送、拉取镜像","children":[]}]}],"git":{"createdTime":1687345922000,"updatedTime":1687746533000,"contributors":[{"name":"Dongcp","email":"cpdong7@gmail.com","commits":2}]},"readingTime":{"minutes":22.39,"words":6716},"filePathRelative":"BackEnd/SpringCloud/springcloud05.md","localizedDate":"2023年6月22日","excerpt":"<h1> Docker</h1>\\n<h2> 1.初识Docker</h2>\\n<h3> 1.1.什么是Docker</h3>\\n<p>微服务虽然具备各种各样的优势，但服务的拆分通用给部署带来了很大的麻烦。</p>\\n<ul>\\n<li>分布式系统中，依赖的组件非常多，不同组件之间部署时往往会产生一些冲突。</li>\\n<li>在数百上千台服务中重复部署，环境不一定一致，会遇到各种问题</li>\\n</ul>\\n<h4> 1.1.1.应用部署的环境问题</h4>\\n<p>大型项目组件较多，运行环境也较为复杂，部署时会碰到一些问题：</p>\\n<ul>\\n<li>\\n<p>依赖关系复杂，容易出现兼容性问题</p>\\n</li>\\n<li>\\n<p>开发、测试、生产环境有差异</p>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};
