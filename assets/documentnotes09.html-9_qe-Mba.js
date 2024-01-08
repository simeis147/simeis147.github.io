const n=JSON.parse('{"key":"v-6d14a3c2","path":"/Tools/Git/02DocumentNotes/documentnotes09.html","title":"9. Git工具-交互式暂存","lang":"zh-CN","frontmatter":{"order":9,"date":"2023-05-15T00:00:00.000Z","category":["Git"],"description":"9. Git工具-交互式暂存 本节中的几个交互式 Git 命令可以帮助你将文件的特定部分组合成提交。 当你在修改了大量文件后，希望这些改动能拆分为若干提交而不是混杂在一起成为一个提交时，这几个工具会非常有用。 通过这种方式，可以确保提交是逻辑上独立的变更集，同时也会使其他开发者在与你工作时很容易地审核。 如果运行 git add 时使用 -i 或者 --interactive 选项，Git 将会进入一个交互式终端模式，显示类似下面的东西： $ git add -i staged unstaged path 1: unchanged +0/-1 TODO 2: unchanged +1/-1 index.html 3: unchanged +5/-1 lib/simplegit.rb *** Commands *** 1: [s]tatus 2: [u]pdate 3: [r]evert 4: [a]dd untracked 5: [p]atch 6: [d]iff 7: [q]uit 8: [h]elp What now&gt;","head":[["meta",{"property":"og:url","content":"https://tech.dongcp.top/Tools/Git/02DocumentNotes/documentnotes09.html"}],["meta",{"property":"og:site_name","content":"Simeis 147"}],["meta",{"property":"og:title","content":"9. Git工具-交互式暂存"}],["meta",{"property":"og:description","content":"9. Git工具-交互式暂存 本节中的几个交互式 Git 命令可以帮助你将文件的特定部分组合成提交。 当你在修改了大量文件后，希望这些改动能拆分为若干提交而不是混杂在一起成为一个提交时，这几个工具会非常有用。 通过这种方式，可以确保提交是逻辑上独立的变更集，同时也会使其他开发者在与你工作时很容易地审核。 如果运行 git add 时使用 -i 或者 --interactive 选项，Git 将会进入一个交互式终端模式，显示类似下面的东西： $ git add -i staged unstaged path 1: unchanged +0/-1 TODO 2: unchanged +1/-1 index.html 3: unchanged +5/-1 lib/simplegit.rb *** Commands *** 1: [s]tatus 2: [u]pdate 3: [r]evert 4: [a]dd untracked 5: [p]atch 6: [d]iff 7: [q]uit 8: [h]elp What now&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-15T07:25:53.000Z"}],["meta",{"property":"article:author","content":"Dongcp"}],["meta",{"property":"article:published_time","content":"2023-05-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-15T07:25:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"9. Git工具-交互式暂存\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-15T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-15T07:25:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dongcp\\",\\"url\\":\\"https://github.com/simeis147\\"}]}"]]},"headers":[{"level":2,"title":"暂存与取消暂存文件","slug":"暂存与取消暂存文件","link":"#暂存与取消暂存文件","children":[]},{"level":2,"title":"暂存补丁","slug":"暂存补丁","link":"#暂存补丁","children":[]}],"git":{"createdTime":1684135553000,"updatedTime":1684135553000,"contributors":[{"name":"simeis147","email":"cpdong7@gmail.com","commits":1}]},"readingTime":{"minutes":5.15,"words":1545},"filePathRelative":"Tools/Git/02DocumentNotes/documentnotes09.md","localizedDate":"2023年5月15日","excerpt":"<h1> 9. Git工具-交互式暂存</h1>\\n<p>本节中的几个交互式 Git 命令可以帮助你将文件的特定部分组合成提交。 当你在修改了大量文件后，希望这些改动能拆分为若干提交而不是混杂在一起成为一个提交时，这几个工具会非常有用。 通过这种方式，可以确保提交是逻辑上独立的变更集，同时也会使其他开发者在与你工作时很容易地审核。 如果运行 <code>git add</code> 时使用 <code>-i</code> 或者 <code>--interactive</code> 选项，Git 将会进入一个交互式终端模式，显示类似下面的东西：</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code>$ <span class=\\"token function\\">git</span> <span class=\\"token function\\">add</span> <span class=\\"token parameter variable\\">-i</span>\\n           staged     unstaged path\\n  <span class=\\"token number\\">1</span>:    unchanged        +0/-1 TODO\\n  <span class=\\"token number\\">2</span>:    unchanged        +1/-1 index.html\\n  <span class=\\"token number\\">3</span>:    unchanged        +5/-1 lib/simplegit.rb\\n\\n*** Commands ***\\n  <span class=\\"token number\\">1</span>: <span class=\\"token punctuation\\">[</span>s<span class=\\"token punctuation\\">]</span>tatus     <span class=\\"token number\\">2</span>: <span class=\\"token punctuation\\">[</span>u<span class=\\"token punctuation\\">]</span>pdate      <span class=\\"token number\\">3</span>: <span class=\\"token punctuation\\">[</span>r<span class=\\"token punctuation\\">]</span>evert     <span class=\\"token number\\">4</span>: <span class=\\"token punctuation\\">[</span>a<span class=\\"token punctuation\\">]</span>dd untracked\\n  <span class=\\"token number\\">5</span>: <span class=\\"token punctuation\\">[</span>p<span class=\\"token punctuation\\">]</span>atch      <span class=\\"token number\\">6</span>: <span class=\\"token punctuation\\">[</span>d<span class=\\"token punctuation\\">]</span>iff        <span class=\\"token number\\">7</span>: <span class=\\"token punctuation\\">[</span>q<span class=\\"token punctuation\\">]</span>uit       <span class=\\"token number\\">8</span>: <span class=\\"token punctuation\\">[</span>h<span class=\\"token punctuation\\">]</span>elp\\nWhat now<span class=\\"token operator\\">&gt;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
