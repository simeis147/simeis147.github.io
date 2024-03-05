import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as p,c as e,b as n,d as o,e as c,a as l}from"./app-Cp480nHu.js";const u={},i=n("h1",{id:"有效的括号",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#有效的括号"},[n("span",null,"有效的括号")])],-1),k={href:"https://leetcode.cn/problems/valid-parentheses/",target:"_blank",rel:"noopener noreferrer"},r=l(`<h2 id="写法" tabindex="-1"><a class="header-anchor" href="#写法"><span>写法</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isValid</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Deque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Character</span><span class="token punctuation">&gt;</span></span> deque <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">char</span> ch<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ch <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//碰到左括号，就把相应的右括号入栈</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>ch <span class="token operator">==</span> <span class="token char">&#39;(&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                deque<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token char">&#39;)&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>ch <span class="token operator">==</span> <span class="token char">&#39;{&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                deque<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token char">&#39;}&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>ch <span class="token operator">==</span> <span class="token char">&#39;[&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                deque<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token char">&#39;]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>deque<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> deque<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> ch<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span><span class="token comment">//如果是右括号判断是否和栈顶元素匹配</span>
                deque<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//最后判断栈中元素是否匹配</span>
        <span class="token keyword">return</span> deque<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function d(m,h){const s=t("ExternalLinkIcon");return p(),e("div",null,[i,n("p",null,[n("a",k,[o("20. 有效的括号"),c(s)])]),r])}const f=a(u,[["render",d],["__file","stacksAndQueues03.html.vue"]]),g=JSON.parse(`{"path":"/ComputerBasics/Algorithm/06StacksAndQueues/stacksAndQueues03.html","title":"有效的括号","lang":"zh-CN","frontmatter":{"order":3,"date":"2024-03-05T00:00:00.000Z","category":["算法","栈与队列"],"description":"有效的括号 20. 有效的括号 写法","head":[["meta",{"property":"og:url","content":"https://tech.dongcp.top/ComputerBasics/Algorithm/06StacksAndQueues/stacksAndQueues03.html"}],["meta",{"property":"og:site_name","content":"Simeis 147"}],["meta",{"property":"og:title","content":"有效的括号"}],["meta",{"property":"og:description","content":"有效的括号 20. 有效的括号 写法"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-05T00:13:04.000Z"}],["meta",{"property":"article:author","content":"Dongcp"}],["meta",{"property":"article:published_time","content":"2024-03-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-05T00:13:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"有效的括号\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-05T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-05T00:13:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dongcp\\",\\"url\\":\\"https://github.com/simeis147\\"}]}"]]},"headers":[{"level":2,"title":"写法","slug":"写法","link":"#写法","children":[]}],"git":{"createdTime":1709597584000,"updatedTime":1709597584000,"contributors":[{"name":"simeis147","email":"cpdong7@gmail.com","commits":1}]},"readingTime":{"minutes":0.41,"words":123},"filePathRelative":"ComputerBasics/Algorithm/06StacksAndQueues/stacksAndQueues03.md","localizedDate":"2024年3月5日","excerpt":"\\n<p><a href=\\"https://leetcode.cn/problems/valid-parentheses/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">20. 有效的括号</a></p>\\n<h2>写法</h2>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Solution</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">boolean</span> <span class=\\"token function\\">isValid</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span> s<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\">Deque</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Character</span><span class=\\"token punctuation\\">&gt;</span></span> deque <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">LinkedList</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">char</span> ch<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> s<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">length</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            ch <span class=\\"token operator\\">=</span> s<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">charAt</span><span class=\\"token punctuation\\">(</span>i<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token comment\\">//碰到左括号，就把相应的右括号入栈</span>\\n            <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>ch <span class=\\"token operator\\">==</span> <span class=\\"token char\\">'('</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                deque<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span><span class=\\"token char\\">')'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token punctuation\\">}</span><span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>ch <span class=\\"token operator\\">==</span> <span class=\\"token char\\">'{'</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                deque<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span><span class=\\"token char\\">'}'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token punctuation\\">}</span><span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>ch <span class=\\"token operator\\">==</span> <span class=\\"token char\\">'['</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                deque<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span><span class=\\"token char\\">']'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>deque<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">isEmpty</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">||</span> deque<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">peek</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">!=</span> ch<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                <span class=\\"token keyword\\">return</span> <span class=\\"token boolean\\">false</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token punctuation\\">}</span><span class=\\"token keyword\\">else</span> <span class=\\"token punctuation\\">{</span><span class=\\"token comment\\">//如果是右括号判断是否和栈顶元素匹配</span>\\n                deque<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">pop</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token comment\\">//最后判断栈中元素是否匹配</span>\\n        <span class=\\"token keyword\\">return</span> deque<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">isEmpty</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>","autoDesc":true}`);export{f as comp,g as data};
