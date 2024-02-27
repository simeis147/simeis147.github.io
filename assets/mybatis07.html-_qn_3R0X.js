const t=JSON.parse('{"key":"v-4397514f","path":"/BackEnd/MyBatis/mybatis07.html","title":"Mybatis动态SQL","lang":"zh-CN","frontmatter":{"order":7,"date":"2023-04-07T00:00:00.000Z","category":["MyBatis"],"description":"Mybatis动态SQL 1 什么是动态SQL 在页面原型中，列表上方的条件是动态的，是可以不传递的，也可以只传递其中的1个或者2个或者全部 而在刚才编写的SQL语句中，如果页面只传递了参数姓名 name 字段，其他两个字段 性别 和 入职时间 没有传递，那么这两个参数的值就是null 此时，执行的SQL语句为：","head":[["meta",{"property":"og:url","content":"https://tech.dongcp.top/BackEnd/MyBatis/mybatis07.html"}],["meta",{"property":"og:site_name","content":"Simeis 147"}],["meta",{"property":"og:title","content":"Mybatis动态SQL"}],["meta",{"property":"og:description","content":"Mybatis动态SQL 1 什么是动态SQL 在页面原型中，列表上方的条件是动态的，是可以不传递的，也可以只传递其中的1个或者2个或者全部 而在刚才编写的SQL语句中，如果页面只传递了参数姓名 name 字段，其他两个字段 性别 和 入职时间 没有传递，那么这两个参数的值就是null 此时，执行的SQL语句为："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://tech.dongcp.top/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-08T06:26:34.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Mybatis动态SQL"}],["meta",{"property":"article:author","content":"Dongcp"}],["meta",{"property":"article:published_time","content":"2023-04-07T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-08T06:26:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mybatis动态SQL\\",\\"image\\":[\\"https://tech.dongcp.top/\\"],\\"datePublished\\":\\"2023-04-07T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-08T06:26:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dongcp\\",\\"url\\":\\"https://github.com/simeis147\\"}]}"]]},"headers":[{"level":2,"title":"1 什么是动态SQL","slug":"_1-什么是动态sql","link":"#_1-什么是动态sql","children":[]},{"level":2,"title":"2 动态SQL-if","slug":"_2-动态sql-if","link":"#_2-动态sql-if","children":[{"level":3,"title":"2.1 条件查询","slug":"_2-1-条件查询","link":"#_2-1-条件查询","children":[]},{"level":3,"title":"2.2 更新员工","slug":"_2-2-更新员工","link":"#_2-2-更新员工","children":[]}]},{"level":2,"title":"3 动态SQL-foreach","slug":"_3-动态sql-foreach","link":"#_3-动态sql-foreach","children":[]},{"level":2,"title":"4 动态SQL-sql & include","slug":"_4-动态sql-sql-include","link":"#_4-动态sql-sql-include","children":[]}],"git":{"createdTime":1681268086000,"updatedTime":1694154394000,"contributors":[{"name":"simeis147","email":"cpdong7@gmail.com","commits":3}]},"readingTime":{"minutes":5.81,"words":1742},"filePathRelative":"BackEnd/MyBatis/mybatis07.md","localizedDate":"2023年4月7日","excerpt":"<h1> Mybatis动态SQL</h1>\\n<h2> 1 什么是动态SQL</h2>\\n<p>在页面原型中，列表上方的条件是动态的，是可以不传递的，也可以只传递其中的1个或者2个或者全部</p>\\n<figure><figcaption> </figcaption></figure>\\n<figure><figcaption> </figcaption></figure>\\n<p>而在刚才编写的SQL语句中，如果页面只传递了参数姓名 name 字段，其他两个字段 性别 和 入职时间 没有传递，那么这两个参数的值就是null</p>\\n<p>此时，执行的SQL语句为：</p>\\n<figure><figcaption> </figcaption></figure>","autoDesc":true}');export{t as data};