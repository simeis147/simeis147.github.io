const n=JSON.parse('{"key":"v-4e12aafa","path":"/BackEnd/SpringBoot/springboot04.html","title":"SpringBoot案例 ⅟","lang":"zh-CN","frontmatter":{"order":4,"date":"2023-04-08T00:00:00.000Z","category":["SpringBoot案例","文件存储","阿里云OSS"],"description":"SpringBoot案例 ⅟ 关于员工管理的功能，还有两个需求: 新增员工 修改员工 在\\"新增员工\\"中，需要添加头像，而头像需要用到\\"文件上传\\"技术。 1. 新增员工 1.1 需求 1.2 接口文档 基本信息 请求路径：/emps 请求方式：POST 接口描述：该接口用于添加员工的信息 请求参数 参数格式：application/json 参数说明： 名称 类型 是否必须 备注 username string 必须 用户名 name string 必须 姓名 gender number 必须 性别, 说明: 1 男, 2 女 image string 非必须 图像 deptId number 非必须 部门id entrydate string 非必须 入职日期 job number 非必须 职位, 说明: 1 班主任,2 讲师, 3 学工主管, 4 教研主管, 5 咨询师 请求数据样例： { \\"image\\": \\"https://web-framework.oss-cn-hangzhou.aliyuncs.com/2022-09-03-07-37-38222.jpg\\", \\"username\\": \\"linpingzhi\\", \\"name\\": \\"林平之\\", \\"gender\\": 1, \\"job\\": 1, \\"entrydate\\": \\"2022-09-18\\", \\"deptId\\": 1 } 响应数据 参数格式：application/json 参数说明： 参数名 类型 是否必须 备注 code number 必须 响应码，1 代表成功，0 代表失败 msg string 非必须 提示信息 data object 非必须 返回的数据 响应数据样例： { \\"code\\":1, \\"msg\\":\\"success\\", \\"data\\":null }","head":[["meta",{"property":"og:url","content":"https://tech.dongcp.top/BackEnd/SpringBoot/springboot04.html"}],["meta",{"property":"og:site_name","content":"Simeis 147"}],["meta",{"property":"og:title","content":"SpringBoot案例 ⅟"}],["meta",{"property":"og:description","content":"SpringBoot案例 ⅟ 关于员工管理的功能，还有两个需求: 新增员工 修改员工 在\\"新增员工\\"中，需要添加头像，而头像需要用到\\"文件上传\\"技术。 1. 新增员工 1.1 需求 1.2 接口文档 基本信息 请求路径：/emps 请求方式：POST 接口描述：该接口用于添加员工的信息 请求参数 参数格式：application/json 参数说明： 名称 类型 是否必须 备注 username string 必须 用户名 name string 必须 姓名 gender number 必须 性别, 说明: 1 男, 2 女 image string 非必须 图像 deptId number 非必须 部门id entrydate string 非必须 入职日期 job number 非必须 职位, 说明: 1 班主任,2 讲师, 3 学工主管, 4 教研主管, 5 咨询师 请求数据样例： { \\"image\\": \\"https://web-framework.oss-cn-hangzhou.aliyuncs.com/2022-09-03-07-37-38222.jpg\\", \\"username\\": \\"linpingzhi\\", \\"name\\": \\"林平之\\", \\"gender\\": 1, \\"job\\": 1, \\"entrydate\\": \\"2022-09-18\\", \\"deptId\\": 1 } 响应数据 参数格式：application/json 参数说明： 参数名 类型 是否必须 备注 code number 必须 响应码，1 代表成功，0 代表失败 msg string 非必须 提示信息 data object 非必须 返回的数据 响应数据样例： { \\"code\\":1, \\"msg\\":\\"success\\", \\"data\\":null }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://tech.dongcp.top/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-27T05:21:50.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"SpringBoot案例 ⅟"}],["meta",{"property":"article:author","content":"Dongcp"}],["meta",{"property":"article:published_time","content":"2023-04-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-27T05:21:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot案例 ⅟\\",\\"image\\":[\\"https://tech.dongcp.top/\\"],\\"datePublished\\":\\"2023-04-08T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-27T05:21:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dongcp\\",\\"url\\":\\"https://github.com/simeis147\\"}]}"]]},"headers":[{"level":2,"title":"1. 新增员工","slug":"_1-新增员工","link":"#_1-新增员工","children":[{"level":3,"title":"1.1 需求","slug":"_1-1-需求","link":"#_1-1-需求","children":[]},{"level":3,"title":"1.2 接口文档","slug":"_1-2-接口文档","link":"#_1-2-接口文档","children":[]},{"level":3,"title":"1.3 思路分析","slug":"_1-3-思路分析","link":"#_1-3-思路分析","children":[]},{"level":3,"title":"1.4 功能开发","slug":"_1-4-功能开发","link":"#_1-4-功能开发","children":[]},{"level":3,"title":"1.5 功能测试","slug":"_1-5-功能测试","link":"#_1-5-功能测试","children":[]},{"level":3,"title":"1.6 前后端联调","slug":"_1-6-前后端联调","link":"#_1-6-前后端联调","children":[]}]},{"level":2,"title":"2. 文件上传","slug":"_2-文件上传","link":"#_2-文件上传","children":[{"level":3,"title":"2.1 简介","slug":"_2-1-简介","link":"#_2-1-简介","children":[]},{"level":3,"title":"2.2 本地存储","slug":"_2-2-本地存储","link":"#_2-2-本地存储","children":[]},{"level":3,"title":"2.3 阿里云OSS","slug":"_2-3-阿里云oss","link":"#_2-3-阿里云oss","children":[]}]},{"level":2,"title":"3. 修改员工","slug":"_3-修改员工","link":"#_3-修改员工","children":[{"level":3,"title":"3.1 查询回显","slug":"_3-1-查询回显","link":"#_3-1-查询回显","children":[]},{"level":3,"title":"3.2 修改员工","slug":"_3-2-修改员工","link":"#_3-2-修改员工","children":[]}]},{"level":2,"title":"4. 配置文件","slug":"_4-配置文件","link":"#_4-配置文件","children":[{"level":3,"title":"4.1 参数配置化","slug":"_4-1-参数配置化","link":"#_4-1-参数配置化","children":[]},{"level":3,"title":"4.2 yml配置文件","slug":"_4-2-yml配置文件","link":"#_4-2-yml配置文件","children":[]},{"level":3,"title":"4.3 @ConfigurationProperties","slug":"_4-3-configurationproperties","link":"#_4-3-configurationproperties","children":[]}]}],"git":{"createdTime":1681268086000,"updatedTime":1701062510000,"contributors":[{"name":"simeis147","email":"cpdong7@gmail.com","commits":6}]},"readingTime":{"minutes":24.22,"words":7266},"filePathRelative":"BackEnd/SpringBoot/springboot04.md","localizedDate":"2023年4月8日","excerpt":"<h1> SpringBoot案例 ⅟</h1>\\n<p>关于员工管理的功能，还有两个需求:</p>\\n<ul>\\n<li>新增员工</li>\\n<li>修改员工</li>\\n</ul>\\n<figure><figcaption> </figcaption></figure>\\n<p>在\\"新增员工\\"中，需要添加头像，而头像需要用到\\"文件上传\\"技术。</p>\\n<h2> 1. 新增员工</h2>\\n<h3> 1.1 需求</h3>\\n<figure><figcaption> </figcaption></figure>\\n<h3> 1.2 接口文档</h3>\\n<ul>\\n<li>\\n<p>基本信息</p>\\n<div class=\\"language-markdown line-numbers-mode\\" data-ext=\\"md\\"><pre class=\\"language-markdown\\"><code>请求路径：/emps\\n\\n请求方式：POST\\n\\n接口描述：该接口用于添加员工的信息\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>请求参数</p>\\n<p>参数格式：application/json</p>\\n<p>参数说明：</p>\\n<table>\\n<thead>\\n<tr>\\n<th>名称</th>\\n<th>类型</th>\\n<th>是否必须</th>\\n<th>备注</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>username</td>\\n<td>string</td>\\n<td>必须</td>\\n<td>用户名</td>\\n</tr>\\n<tr>\\n<td>name</td>\\n<td>string</td>\\n<td>必须</td>\\n<td>姓名</td>\\n</tr>\\n<tr>\\n<td>gender</td>\\n<td>number</td>\\n<td>必须</td>\\n<td>性别, 说明: 1 男, 2 女</td>\\n</tr>\\n<tr>\\n<td>image</td>\\n<td>string</td>\\n<td>非必须</td>\\n<td>图像</td>\\n</tr>\\n<tr>\\n<td>deptId</td>\\n<td>number</td>\\n<td>非必须</td>\\n<td>部门id</td>\\n</tr>\\n<tr>\\n<td>entrydate</td>\\n<td>string</td>\\n<td>非必须</td>\\n<td>入职日期</td>\\n</tr>\\n<tr>\\n<td>job</td>\\n<td>number</td>\\n<td>非必须</td>\\n<td>职位, 说明: 1 班主任,2 讲师, 3 学工主管, 4 教研主管, 5 咨询师</td>\\n</tr>\\n</tbody>\\n</table>\\n<p>请求数据样例：</p>\\n<div class=\\"language-json line-numbers-mode\\" data-ext=\\"json\\"><pre class=\\"language-json\\"><code><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token property\\">\\"image\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"https://web-framework.oss-cn-hangzhou.aliyuncs.com/2022-09-03-07-37-38222.jpg\\"</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token property\\">\\"username\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"linpingzhi\\"</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token property\\">\\"name\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"林平之\\"</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token property\\">\\"gender\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token property\\">\\"job\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token property\\">\\"entrydate\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"2022-09-18\\"</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token property\\">\\"deptId\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">1</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>响应数据</p>\\n<p>参数格式：application/json</p>\\n<p>参数说明：</p>\\n<table>\\n<thead>\\n<tr>\\n<th>参数名</th>\\n<th>类型</th>\\n<th>是否必须</th>\\n<th>备注</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>code</td>\\n<td>number</td>\\n<td>必须</td>\\n<td>响应码，1 代表成功，0 代表失败</td>\\n</tr>\\n<tr>\\n<td>msg</td>\\n<td>string</td>\\n<td>非必须</td>\\n<td>提示信息</td>\\n</tr>\\n<tr>\\n<td>data</td>\\n<td>object</td>\\n<td>非必须</td>\\n<td>返回的数据</td>\\n</tr>\\n</tbody>\\n</table>\\n<p>响应数据样例：</p>\\n<div class=\\"language-json line-numbers-mode\\" data-ext=\\"json\\"><pre class=\\"language-json\\"><code><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token property\\">\\"code\\"</span><span class=\\"token operator\\">:</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token property\\">\\"msg\\"</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">\\"success\\"</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token property\\">\\"data\\"</span><span class=\\"token operator\\">:</span><span class=\\"token null keyword\\">null</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ul>","autoDesc":true}');export{n as data};
