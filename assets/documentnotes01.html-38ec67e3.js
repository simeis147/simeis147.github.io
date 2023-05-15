const e=JSON.parse(`{"key":"v-88622db2","path":"/Tools/Git/02DocumentNotes/documentnotes01.html","title":"1. Git基础与命令","lang":"zh-CN","frontmatter":{"order":1,"date":"2023-05-15T00:00:00.000Z","category":["Git"],"description":"1. Git基础与命令 官方文档（中文）：https://git-scm.com/book/zh/v2 本文档是根据官方文档来编写的，以官方文档为准。 Git基础 全局配置 git config --global user.name 'your name' git config --global user.email 'xxx@xx.com'","head":[["meta",{"property":"og:url","content":"https://github.com/simeis147/Tools/Git/02DocumentNotes/documentnotes01.html"}],["meta",{"property":"og:site_name","content":"Simeis 147"}],["meta",{"property":"og:title","content":"1. Git基础与命令"}],["meta",{"property":"og:description","content":"1. Git基础与命令 官方文档（中文）：https://git-scm.com/book/zh/v2 本文档是根据官方文档来编写的，以官方文档为准。 Git基础 全局配置 git config --global user.name 'your name' git config --global user.email 'xxx@xx.com'"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-15T07:25:53.000Z"}],["meta",{"property":"article:author","content":"Dongcp"}],["meta",{"property":"article:published_time","content":"2023-05-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-15T07:25:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1. Git基础与命令\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-15T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-15T07:25:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dongcp\\",\\"url\\":\\"https://github.com/simeis147\\"}]}"]]},"headers":[{"level":2,"title":"Git基础","slug":"git基础","link":"#git基础","children":[{"level":3,"title":"全局配置","slug":"全局配置","link":"#全局配置","children":[]},{"level":3,"title":"检查配置信息","slug":"检查配置信息","link":"#检查配置信息","children":[]},{"level":3,"title":"获取帮助","slug":"获取帮助","link":"#获取帮助","children":[]},{"level":3,"title":"初始化仓库","slug":"初始化仓库","link":"#初始化仓库","children":[]},{"level":3,"title":"克隆远程仓库","slug":"克隆远程仓库","link":"#克隆远程仓库","children":[]},{"level":3,"title":"检查文件状态","slug":"检查文件状态","link":"#检查文件状态","children":[]},{"level":3,"title":"加入暂存区 (跟踪文件)","slug":"加入暂存区-跟踪文件","link":"#加入暂存区-跟踪文件","children":[]},{"level":3,"title":"忽略文件","slug":"忽略文件","link":"#忽略文件","children":[]},{"level":3,"title":"查看修改的具体内容","slug":"查看修改的具体内容","link":"#查看修改的具体内容","children":[]},{"level":3,"title":"提交更新","slug":"提交更新","link":"#提交更新","children":[]},{"level":3,"title":"跳过使用暂存区域","slug":"跳过使用暂存区域","link":"#跳过使用暂存区域","children":[]}]},{"level":2,"title":"Git 基础 - 查看提交历史","slug":"git-基础-查看提交历史","link":"#git-基础-查看提交历史","children":[]},{"level":2,"title":"Git 基础 - 撤消操作","slug":"git-基础-撤消操作","link":"#git-基础-撤消操作","children":[]},{"level":2,"title":"Git 基础 - 远程仓库的使用","slug":"git-基础-远程仓库的使用","link":"#git-基础-远程仓库的使用","children":[{"level":3,"title":"查看远程仓库","slug":"查看远程仓库","link":"#查看远程仓库","children":[]},{"level":3,"title":"添加远程仓库","slug":"添加远程仓库","link":"#添加远程仓库","children":[]},{"level":3,"title":"从远程仓库中抓取与拉取","slug":"从远程仓库中抓取与拉取","link":"#从远程仓库中抓取与拉取","children":[]},{"level":3,"title":"推送到远程仓库","slug":"推送到远程仓库","link":"#推送到远程仓库","children":[]},{"level":3,"title":"查看某个远程仓库","slug":"查看某个远程仓库","link":"#查看某个远程仓库","children":[]},{"level":3,"title":"远程仓库的重命名与移除","slug":"远程仓库的重命名与移除","link":"#远程仓库的重命名与移除","children":[]}]},{"level":2,"title":"Git 基础 - 打标签","slug":"git-基础-打标签","link":"#git-基础-打标签","children":[{"level":3,"title":"列出标签","slug":"列出标签","link":"#列出标签","children":[]},{"level":3,"title":"创建标签","slug":"创建标签","link":"#创建标签","children":[]},{"level":3,"title":"附注标签","slug":"附注标签","link":"#附注标签","children":[]},{"level":3,"title":"轻量标签","slug":"轻量标签","link":"#轻量标签","children":[]},{"level":3,"title":"后期打标签","slug":"后期打标签","link":"#后期打标签","children":[]},{"level":3,"title":"共享标签","slug":"共享标签","link":"#共享标签","children":[]},{"level":3,"title":"删除标签","slug":"删除标签","link":"#删除标签","children":[]},{"level":3,"title":"检出标签","slug":"检出标签","link":"#检出标签","children":[]}]},{"level":2,"title":"Git 命令别名","slug":"git-命令别名","link":"#git-命令别名","children":[]}],"git":{"createdTime":1684135553000,"updatedTime":1684135553000,"contributors":[{"name":"simeis147","email":"cpdong7@gmail.com","commits":1}]},"readingTime":{"minutes":12.86,"words":3859},"filePathRelative":"Tools/Git/02DocumentNotes/documentnotes01.md","localizedDate":"2023年5月15日","excerpt":"<h1> 1. Git基础与命令</h1>\\n<p>官方文档（中文）：<a href=\\"https://git-scm.com/book/zh/v2\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://git-scm.com/book/zh/v2</a></p>\\n<blockquote>\\n<p>本文档是根据官方文档来编写的，以官方文档为准。</p>\\n</blockquote>\\n<h2> Git基础</h2>\\n<h3> 全局配置</h3>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">git</span> config <span class=\\"token parameter variable\\">--global</span> user.name <span class=\\"token string\\">'your name'</span>\\n<span class=\\"token function\\">git</span> config <span class=\\"token parameter variable\\">--global</span> user.email <span class=\\"token string\\">'xxx@xx.com'</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
