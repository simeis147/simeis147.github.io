import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as i,a as n}from"./app-n7-iX-IR.js";const a="/assets/1669389052906-CDMQ_38d.png",o="/assets/1669389147027-C9k6KqfM.png",r="/assets/1669389642057-Bla16lH6.png",s="/assets/1669389950696-DVYLn8u-.png",p="/assets/1669390029156-BwBhGgOj.png",l="/assets/1669390177896-RDwbwuSL.png",c="/assets/1669390312206-DGeQ95Ex.png",g={},d=n('<h1 id="打包部署" tabindex="-1"><a class="header-anchor" href="#打包部署"><span>打包部署</span></a></h1><p>如何发布呢？主要分为2步：</p><ol><li>前端工程打包</li><li>通过nginx服务器发布前端工程</li></ol><h2 id="前端工程打包" tabindex="-1"><a class="header-anchor" href="#前端工程打包"><span>前端工程打包</span></a></h2><figure><img src="'+a+'" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>然后会在工程目录下生成一个dist目录，用于存放需要发布的前端资源</p><figure><img src="'+o+'" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="部署前端工程" tabindex="-1"><a class="header-anchor" href="#部署前端工程"><span>部署前端工程</span></a></h2><h3 id="nginx介绍" tabindex="-1"><a class="header-anchor" href="#nginx介绍"><span>nginx介绍</span></a></h3><p>Nginx是一款轻量级的Web服务器/反向代理服务器及电子邮件（IMAP/POP3）代理服务器。<br> 其特点是占有内存少，并发能力强，在各大型互联网公司都有非常广泛的使用。</p><p>nginx的解压目录以及目录结构说明：</p><figure><img src="'+r+'" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>很明显，如果要发布，直接将资源放入到html目录中。</strong></p><h3 id="部署" tabindex="-1"><a class="header-anchor" href="#部署"><span>部署</span></a></h3><p>将之前打包的前端工程dist目录下得内容拷贝到nginx的html目录下</p><figure><img src="'+s+'" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>nginx.exe文件来启动nginx</p><figure><img src="'+p+'" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>nginx服务器的端口号是80，</p><figure><img src="'+l+'" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>PS: 如果80端口被占用，可以通过<strong>conf/nginx.conf</strong>配置文件来修改端口号</p><figure><img src="'+c+'" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure>',22),m=[d];function h(f,u){return i(),t("div",null,m)}const y=e(g,[["render",h],["__file","vue07.html.vue"]]),b=JSON.parse('{"path":"/FrontEnd/Vue/vue07.html","title":"打包部署","lang":"zh-CN","frontmatter":{"order":7,"date":"2023-03-10T00:00:00.000Z","category":["Vue"],"head":[["meta",{"property":"og:url","content":"https://tech.dongcp.top/FrontEnd/Vue/vue07.html"}],["meta",{"property":"og:site_name","content":"Simeis 147"}],["meta",{"property":"og:title","content":"打包部署"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-13T09:14:43.000Z"}],["meta",{"property":"article:published_time","content":"2023-03-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-13T09:14:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"打包部署\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-10T00:00:00.000Z\\",\\"dateModified\\":\\"2023-04-13T09:14:43.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"前端工程打包","slug":"前端工程打包","link":"#前端工程打包","children":[]},{"level":2,"title":"部署前端工程","slug":"部署前端工程","link":"#部署前端工程","children":[{"level":3,"title":"nginx介绍","slug":"nginx介绍","link":"#nginx介绍","children":[]},{"level":3,"title":"部署","slug":"部署","link":"#部署","children":[]}]}],"git":{"createdTime":1681268086000,"updatedTime":1681377283000,"contributors":[{"name":"simeis147","email":"cpdong7@gmail.com","commits":2}]},"readingTime":{"minutes":0.87,"words":261},"filePathRelative":"FrontEnd/Vue/vue07.md","localizedDate":"2023年3月10日","excerpt":"\\n"}');export{y as comp,b as data};