import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as p,c as o,b as n,d as c,e,a as u}from"./app-Cp480nHu.js";const l={},i=n("h1",{id:"逆波兰表达式求值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#逆波兰表达式求值"},[n("span",null,"逆波兰表达式求值")])],-1),k={href:"https://leetcode.cn/problems/evaluate-reverse-polish-notation/",target:"_blank",rel:"noopener noreferrer"},r=u(`<h2 id="写法" tabindex="-1"><a class="header-anchor" href="#写法"><span>写法</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">evalRPN</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> tokens<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Deque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> s <span class="token operator">:</span> tokens<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;+&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>        <span class="token comment">// leetcode 内置jdk的问题，不能使用==判断字符串是否相等</span>
                stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// 注意 - 和/ 需要特殊处理</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">-</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> temp1 <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">int</span> temp2 <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>temp2 <span class="token operator">/</span> temp1<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function d(m,f){const s=t("ExternalLinkIcon");return p(),o("div",null,[i,n("p",null,[n("a",k,[c("150. 逆波兰表达式求值"),e(s)])]),r])}const g=a(l,[["render",d],["__file","stacksAndQueues05.html.vue"]]),y=JSON.parse('{"path":"/ComputerBasics/Algorithm/06StacksAndQueues/stacksAndQueues05.html","title":"逆波兰表达式求值","lang":"zh-CN","frontmatter":{"order":5,"date":"2024-03-05T00:00:00.000Z","category":["算法","栈与队列"],"description":"逆波兰表达式求值 150. 逆波兰表达式求值 写法","head":[["meta",{"property":"og:url","content":"https://tech.dongcp.top/ComputerBasics/Algorithm/06StacksAndQueues/stacksAndQueues05.html"}],["meta",{"property":"og:site_name","content":"Simeis 147"}],["meta",{"property":"og:title","content":"逆波兰表达式求值"}],["meta",{"property":"og:description","content":"逆波兰表达式求值 150. 逆波兰表达式求值 写法"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-05T00:13:04.000Z"}],["meta",{"property":"article:author","content":"Dongcp"}],["meta",{"property":"article:published_time","content":"2024-03-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-05T00:13:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"逆波兰表达式求值\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-05T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-05T00:13:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dongcp\\",\\"url\\":\\"https://github.com/simeis147\\"}]}"]]},"headers":[{"level":2,"title":"写法","slug":"写法","link":"#写法","children":[]}],"git":{"createdTime":1709597584000,"updatedTime":1709597584000,"contributors":[{"name":"simeis147","email":"cpdong7@gmail.com","commits":1}]},"readingTime":{"minutes":0.42,"words":127},"filePathRelative":"ComputerBasics/Algorithm/06StacksAndQueues/stacksAndQueues05.md","localizedDate":"2024年3月5日","excerpt":"\\n<p><a href=\\"https://leetcode.cn/problems/evaluate-reverse-polish-notation/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">150. 逆波兰表达式求值</a></p>\\n<h2>写法</h2>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Solution</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">int</span> <span class=\\"token function\\">evalRPN</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> tokens<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\">Deque</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Integer</span><span class=\\"token punctuation\\">&gt;</span></span> stack <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">LinkedList</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span> s <span class=\\"token operator\\">:</span> tokens<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"+\\"</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">equals</span><span class=\\"token punctuation\\">(</span>s<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>        <span class=\\"token comment\\">// leetcode 内置jdk的问题，不能使用==判断字符串是否相等</span>\\n                stack<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span>stack<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">pop</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">+</span> stack<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">pop</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>      <span class=\\"token comment\\">// 注意 - 和/ 需要特殊处理</span>\\n            <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"-\\"</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">equals</span><span class=\\"token punctuation\\">(</span>s<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                stack<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">-</span>stack<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">pop</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">+</span> stack<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">pop</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"*\\"</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">equals</span><span class=\\"token punctuation\\">(</span>s<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                stack<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span>stack<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">pop</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">*</span> stack<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">pop</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"/\\"</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">equals</span><span class=\\"token punctuation\\">(</span>s<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                <span class=\\"token keyword\\">int</span> temp1 <span class=\\"token operator\\">=</span> stack<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">pop</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n                <span class=\\"token keyword\\">int</span> temp2 <span class=\\"token operator\\">=</span> stack<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">pop</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n                stack<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span>temp2 <span class=\\"token operator\\">/</span> temp1<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token punctuation\\">{</span>\\n                stack<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">Integer</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">valueOf</span><span class=\\"token punctuation\\">(</span>s<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token keyword\\">return</span> stack<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">pop</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>","autoDesc":true}');export{g as comp,y as data};
