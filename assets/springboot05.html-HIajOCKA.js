const n=JSON.parse('{"key":"v-4fc78399","path":"/BackEnd/SpringBoot/springboot05.html","title":"SpringBoot案例-登录认证","lang":"zh-CN","frontmatter":{"order":5,"date":"2023-04-08T00:00:00.000Z","category":["SpringBoot案例","Cookie","Session","令牌技术"],"description":"SpringBoot案例-登录认证 1. 登录功能 1.1 需求 输入用户名及密码，点击 \\"登录\\" 按钮就要请求服务器，服务端判断用户输入的用户名或者密码是否正确。如果正确，则返回成功结果，前端跳转至系统首页面。 1.2 接口文档 参照接口文档来开发登录功能 基本信息 请求路径：/login 请求方式：POST 接口描述：该接口用于员工登录Tlias智能学习辅助系统，登录完毕后，系统下发JWT令牌。 请求参数 参数格式：application/json 参数说明： 名称 类型 是否必须 备注 username string 必须 用户名 password string 必须 密码 请求数据样例： { \\"username\\": \\"jinyong\\", \\"password\\": \\"123456\\" } 响应数据 参数格式：application/json 参数说明： 名称 类型 是否必须 默认值 备注 其他信息 code number 必须 响应码, 1 成功 ; 0 失败 msg string 非必须 提示信息 data string 必须 返回的数据 , jwt令牌 响应数据样例： { \\"code\\": 1, \\"msg\\": \\"success\\", \\"data\\": \\"eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoi6YeR5bq4IiwiaWQiOjEsInVzZXJuYW1lIjoiamlueW9uZyIsImV4cCI6MTY2MjIwNzA0OH0.KkUc_CXJZJ8Dd063eImx4H9Ojfrr6XMJ-yVzaWCVZCo\\" }","head":[["meta",{"property":"og:url","content":"https://tech.dongcp.top/BackEnd/SpringBoot/springboot05.html"}],["meta",{"property":"og:site_name","content":"Simeis 147"}],["meta",{"property":"og:title","content":"SpringBoot案例-登录认证"}],["meta",{"property":"og:description","content":"SpringBoot案例-登录认证 1. 登录功能 1.1 需求 输入用户名及密码，点击 \\"登录\\" 按钮就要请求服务器，服务端判断用户输入的用户名或者密码是否正确。如果正确，则返回成功结果，前端跳转至系统首页面。 1.2 接口文档 参照接口文档来开发登录功能 基本信息 请求路径：/login 请求方式：POST 接口描述：该接口用于员工登录Tlias智能学习辅助系统，登录完毕后，系统下发JWT令牌。 请求参数 参数格式：application/json 参数说明： 名称 类型 是否必须 备注 username string 必须 用户名 password string 必须 密码 请求数据样例： { \\"username\\": \\"jinyong\\", \\"password\\": \\"123456\\" } 响应数据 参数格式：application/json 参数说明： 名称 类型 是否必须 默认值 备注 其他信息 code number 必须 响应码, 1 成功 ; 0 失败 msg string 非必须 提示信息 data string 必须 返回的数据 , jwt令牌 响应数据样例： { \\"code\\": 1, \\"msg\\": \\"success\\", \\"data\\": \\"eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoi6YeR5bq4IiwiaWQiOjEsInVzZXJuYW1lIjoiamlueW9uZyIsImV4cCI6MTY2MjIwNzA0OH0.KkUc_CXJZJ8Dd063eImx4H9Ojfrr6XMJ-yVzaWCVZCo\\" }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://tech.dongcp.top/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-13T15:31:03.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"SpringBoot案例-登录认证"}],["meta",{"property":"article:author","content":"Dongcp"}],["meta",{"property":"article:published_time","content":"2023-04-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-13T15:31:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot案例-登录认证\\",\\"image\\":[\\"https://tech.dongcp.top/\\"],\\"datePublished\\":\\"2023-04-08T00:00:00.000Z\\",\\"dateModified\\":\\"2023-04-13T15:31:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dongcp\\",\\"url\\":\\"https://github.com/simeis147\\"}]}"]]},"headers":[{"level":2,"title":"1. 登录功能","slug":"_1-登录功能","link":"#_1-登录功能","children":[{"level":3,"title":"1.1 需求","slug":"_1-1-需求","link":"#_1-1-需求","children":[]},{"level":3,"title":"1.2 接口文档","slug":"_1-2-接口文档","link":"#_1-2-接口文档","children":[]},{"level":3,"title":"1.3 思路分析","slug":"_1-3-思路分析","link":"#_1-3-思路分析","children":[]},{"level":3,"title":"1.4 功能开发","slug":"_1-4-功能开发","link":"#_1-4-功能开发","children":[]},{"level":3,"title":"1.5 测试","slug":"_1-5-测试","link":"#_1-5-测试","children":[]}]},{"level":2,"title":"2. 登录校验","slug":"_2-登录校验","link":"#_2-登录校验","children":[{"level":3,"title":"2.1 问题分析","slug":"_2-1-问题分析","link":"#_2-1-问题分析","children":[]},{"level":3,"title":"2.2 会话技术","slug":"_2-2-会话技术","link":"#_2-2-会话技术","children":[]},{"level":3,"title":"2.3 JWT令牌","slug":"_2-3-jwt令牌","link":"#_2-3-jwt令牌","children":[]},{"level":3,"title":"2.4 过滤器Filter","slug":"_2-4-过滤器filter","link":"#_2-4-过滤器filter","children":[]},{"level":3,"title":"2.5 拦截器Interceptor","slug":"_2-5-拦截器interceptor","link":"#_2-5-拦截器interceptor","children":[]}]},{"level":2,"title":"3. 异常处理","slug":"_3-异常处理","link":"#_3-异常处理","children":[{"level":3,"title":"3.1 当前问题","slug":"_3-1-当前问题","link":"#_3-1-当前问题","children":[]},{"level":3,"title":"3.2 解决方案","slug":"_3-2-解决方案","link":"#_3-2-解决方案","children":[]},{"level":3,"title":"3.3 全局异常处理器","slug":"_3-3-全局异常处理器","link":"#_3-3-全局异常处理器","children":[]}]}],"git":{"createdTime":1681268086000,"updatedTime":1681399863000,"contributors":[{"name":"simeis147","email":"cpdong7@gmail.com","commits":2}]},"readingTime":{"minutes":42.54,"words":12762},"filePathRelative":"BackEnd/SpringBoot/springboot05.md","localizedDate":"2023年4月8日","excerpt":"<h1> SpringBoot案例-登录认证</h1>\\n<h2> 1. 登录功能</h2>\\n<h3> 1.1 需求</h3>\\n<figure><figcaption> </figcaption></figure>\\n<p>输入用户名及密码，点击 \\"登录\\" 按钮就要请求服务器，服务端判断用户输入的用户名或者密码是否正确。如果正确，则返回成功结果，前端跳转至系统首页面。</p>\\n<h3> 1.2 接口文档</h3>\\n<p>参照接口文档来开发登录功能</p>\\n<ul>\\n<li>\\n<p>基本信息</p>\\n<div class=\\"language-markdown line-numbers-mode\\" data-ext=\\"md\\"><pre class=\\"language-markdown\\"><code>请求路径：/login\\n\\n请求方式：POST\\n\\n接口描述：该接口用于员工登录Tlias智能学习辅助系统，登录完毕后，系统下发JWT令牌。 \\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>请求参数</p>\\n<p>参数格式：application/json</p>\\n<p>参数说明：</p>\\n<table>\\n<thead>\\n<tr>\\n<th>名称</th>\\n<th>类型</th>\\n<th>是否必须</th>\\n<th>备注</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>username</td>\\n<td>string</td>\\n<td>必须</td>\\n<td>用户名</td>\\n</tr>\\n<tr>\\n<td>password</td>\\n<td>string</td>\\n<td>必须</td>\\n<td>密码</td>\\n</tr>\\n</tbody>\\n</table>\\n<p>请求数据样例：</p>\\n<div class=\\"language-json line-numbers-mode\\" data-ext=\\"json\\"><pre class=\\"language-json\\"><code><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token property\\">\\"username\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"jinyong\\"</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token property\\">\\"password\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"123456\\"</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>响应数据</p>\\n<p>参数格式：application/json</p>\\n<p>参数说明：</p>\\n<table>\\n<thead>\\n<tr>\\n<th>名称</th>\\n<th>类型</th>\\n<th>是否必须</th>\\n<th>默认值</th>\\n<th>备注</th>\\n<th>其他信息</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>code</td>\\n<td>number</td>\\n<td>必须</td>\\n<td></td>\\n<td>响应码, 1 成功 ; 0  失败</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>msg</td>\\n<td>string</td>\\n<td>非必须</td>\\n<td></td>\\n<td>提示信息</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>data</td>\\n<td>string</td>\\n<td>必须</td>\\n<td></td>\\n<td>返回的数据 , jwt令牌</td>\\n<td></td>\\n</tr>\\n</tbody>\\n</table>\\n<p>响应数据样例：</p>\\n<div class=\\"language-json line-numbers-mode\\" data-ext=\\"json\\"><pre class=\\"language-json\\"><code><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token property\\">\\"code\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token property\\">\\"msg\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"success\\"</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token property\\">\\"data\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoi6YeR5bq4IiwiaWQiOjEsInVzZXJuYW1lIjoiamlueW9uZyIsImV4cCI6MTY2MjIwNzA0OH0.KkUc_CXJZJ8Dd063eImx4H9Ojfrr6XMJ-yVzaWCVZCo\\"</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ul>","autoDesc":true}');export{n as data};
