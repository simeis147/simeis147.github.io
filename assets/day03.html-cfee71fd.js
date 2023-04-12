const e=JSON.parse('{"key":"v-6364fda4","path":"/project/reggietakeout/projectbasic/day03.html","title":"瑞吉外卖基础-Day03","lang":"zh-CN","frontmatter":{"order":3,"date":"2023-04-11T00:00:00.000Z","category":["瑞吉外卖"],"description":"瑞吉外卖基础-Day03 1. 公共字段自动填充 1.1 问题分析 前面我们已经完成了后台系统的员工管理功能的开发，在新增员工时需要设置创建时间、创建人、修改时间、修改人等字段，在编辑员工时需要设置修改时间、修改人等字段。这些字段属于公共字段，也就是也就是在我们的系统中很多表中都会有这些字段，如下： 而针对于这些字段，我们的赋值方式为： A. 在新增数据时, 将createTime、updateTime 设置为当前时间, createUser、updateUser设置为当前登录用户ID。","head":[["meta",{"property":"og:url","content":"https://github.com/simeis147/project/reggietakeout/projectbasic/day03.html"}],["meta",{"property":"og:site_name","content":"Simeis 147"}],["meta",{"property":"og:title","content":"瑞吉外卖基础-Day03"}],["meta",{"property":"og:description","content":"瑞吉外卖基础-Day03 1. 公共字段自动填充 1.1 问题分析 前面我们已经完成了后台系统的员工管理功能的开发，在新增员工时需要设置创建时间、创建人、修改时间、修改人等字段，在编辑员工时需要设置修改时间、修改人等字段。这些字段属于公共字段，也就是也就是在我们的系统中很多表中都会有这些字段，如下： 而针对于这些字段，我们的赋值方式为： A. 在新增数据时, 将createTime、updateTime 设置为当前时间, createUser、updateUser设置为当前登录用户ID。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://github.com/simeis147/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-12T15:50:37.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"瑞吉外卖基础-Day03"}],["meta",{"property":"article:author","content":"Dongcp"}],["meta",{"property":"article:published_time","content":"2023-04-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-12T15:50:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"瑞吉外卖基础-Day03\\",\\"image\\":[\\"https://github.com/simeis147/\\"],\\"datePublished\\":\\"2023-04-11T00:00:00.000Z\\",\\"dateModified\\":\\"2023-04-12T15:50:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dongcp\\",\\"url\\":\\"https://github.com/simeis147\\"}]}"]]},"headers":[{"level":2,"title":"1. 公共字段自动填充","slug":"_1-公共字段自动填充","link":"#_1-公共字段自动填充","children":[{"level":3,"title":"1.1 问题分析","slug":"_1-1-问题分析","link":"#_1-1-问题分析","children":[]},{"level":3,"title":"1.2 基本功能实现","slug":"_1-2-基本功能实现","link":"#_1-2-基本功能实现","children":[]},{"level":3,"title":"1.3 功能完善","slug":"_1-3-功能完善","link":"#_1-3-功能完善","children":[]}]},{"level":2,"title":"2. 新增分类","slug":"_2-新增分类","link":"#_2-新增分类","children":[{"level":3,"title":"2.1 需求分析","slug":"_2-1-需求分析","link":"#_2-1-需求分析","children":[]},{"level":3,"title":"2.2 数据模型","slug":"_2-2-数据模型","link":"#_2-2-数据模型","children":[]},{"level":3,"title":"2.3 前端页面分析","slug":"_2-3-前端页面分析","link":"#_2-3-前端页面分析","children":[]},{"level":3,"title":"2.4 代码实现","slug":"_2-4-代码实现","link":"#_2-4-代码实现","children":[]},{"level":3,"title":"2.5 功能测试","slug":"_2-5-功能测试","link":"#_2-5-功能测试","children":[]}]},{"level":2,"title":"3. 分类信息分页查询","slug":"_3-分类信息分页查询","link":"#_3-分类信息分页查询","children":[{"level":3,"title":"3.1 需求分析","slug":"_3-1-需求分析","link":"#_3-1-需求分析","children":[]},{"level":3,"title":"3.2 前端页面分析","slug":"_3-2-前端页面分析","link":"#_3-2-前端页面分析","children":[]},{"level":3,"title":"3.3 代码实现","slug":"_3-3-代码实现","link":"#_3-3-代码实现","children":[]},{"level":3,"title":"3.4 功能测试","slug":"_3-4-功能测试","link":"#_3-4-功能测试","children":[]}]},{"level":2,"title":"4. 删除分类","slug":"_4-删除分类","link":"#_4-删除分类","children":[{"level":3,"title":"4.1 需求分析","slug":"_4-1-需求分析","link":"#_4-1-需求分析","children":[]},{"level":3,"title":"4.2 前端页面分析","slug":"_4-2-前端页面分析","link":"#_4-2-前端页面分析","children":[]},{"level":3,"title":"4.3 代码实现","slug":"_4-3-代码实现","link":"#_4-3-代码实现","children":[]},{"level":3,"title":"4.4 功能测试","slug":"_4-4-功能测试","link":"#_4-4-功能测试","children":[]},{"level":3,"title":"4.5 功能完善","slug":"_4-5-功能完善","link":"#_4-5-功能完善","children":[]}]},{"level":2,"title":"5. 修改分类","slug":"_5-修改分类","link":"#_5-修改分类","children":[{"level":3,"title":"5.1 需求分析","slug":"_5-1-需求分析","link":"#_5-1-需求分析","children":[]},{"level":3,"title":"5.2 前端页面分析","slug":"_5-2-前端页面分析","link":"#_5-2-前端页面分析","children":[]},{"level":3,"title":"5.3 代码实现","slug":"_5-3-代码实现","link":"#_5-3-代码实现","children":[]},{"level":3,"title":"5.4 功能测试","slug":"_5-4-功能测试","link":"#_5-4-功能测试","children":[]}]}],"git":{"createdTime":1681268086000,"updatedTime":1681314637000,"contributors":[{"name":"simeis147","email":"cpdong7@gmail.com","commits":2}]},"readingTime":{"minutes":19.14,"words":5743},"filePathRelative":"project/reggietakeout/projectbasic/day03.md","localizedDate":"2023年4月11日","excerpt":"<h1> 瑞吉外卖基础-Day03</h1>\\n<h2> 1. 公共字段自动填充</h2>\\n<h3> 1.1 问题分析</h3>\\n<p>前面我们已经完成了后台系统的员工管理功能的开发，在新增员工时需要设置创建时间、创建人、修改时间、修改人等字段，在编辑员工时需要设置修改时间、修改人等字段。这些字段属于公共字段，也就是也就是在我们的系统中很多表中都会有这些字段，如下：</p>\\n<figure><figcaption> </figcaption></figure>\\n<p>而针对于这些字段，我们的赋值方式为：</p>\\n<p>A. 在新增数据时, 将createTime、updateTime 设置为当前时间, createUser、updateUser设置为当前登录用户ID。</p>","autoDesc":true}');export{e as data};
