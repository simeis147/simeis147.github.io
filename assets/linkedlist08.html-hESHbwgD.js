import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,a as t}from"./app-CakjcGtq.js";const e={},p=t(`<h1 id="环形链表ii" tabindex="-1"><a class="header-anchor" href="#环形链表ii"><span>环形链表II</span></a></h1><h2 id="相关题目推荐" tabindex="-1"><a class="header-anchor" href="#相关题目推荐"><span>相关题目推荐</span></a></h2><p><a href="https://leetcode.cn/problems/linked-list-cycle-ii/" target="_blank" rel="noopener noreferrer">142.环形链表II</a></p><h2 id="写法" tabindex="-1"><a class="header-anchor" href="#写法"><span>写法</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">detectCycle</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>slow <span class="token operator">==</span> fast<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 有环</span>
                <span class="token class-name">ListNode</span> index1 <span class="token operator">=</span> fast<span class="token punctuation">;</span>
                <span class="token class-name">ListNode</span> index2 <span class="token operator">=</span> head<span class="token punctuation">;</span>
                <span class="token comment">// 两个指针，从头结点和相遇结点，各走一步，直到相遇，相遇点即为环入口</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span>index1 <span class="token operator">!=</span> index2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    index1 <span class="token operator">=</span> index1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                    index2 <span class="token operator">=</span> index2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">return</span> index1<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[p];function c(l,i){return a(),s("div",null,o)}const d=n(e,[["render",c],["__file","linkedlist08.html.vue"]]),k=JSON.parse('{"path":"/ComputerBasics/Algorithm/02LinkedList/linkedlist08.html","title":"环形链表II","lang":"zh-CN","frontmatter":{"order":8,"date":"2023-06-15T00:00:00.000Z","category":["算法","链表"],"description":"环形链表II 相关题目推荐 142.环形链表II 写法","head":[["meta",{"property":"og:url","content":"https://tech.dongcp.top/ComputerBasics/Algorithm/02LinkedList/linkedlist08.html"}],["meta",{"property":"og:site_name","content":"Simeis 147"}],["meta",{"property":"og:title","content":"环形链表II"}],["meta",{"property":"og:description","content":"环形链表II 相关题目推荐 142.环形链表II 写法"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-14T08:46:26.000Z"}],["meta",{"property":"article:author","content":"Dongcp"}],["meta",{"property":"article:published_time","content":"2023-06-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-14T08:46:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"环形链表II\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-15T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-14T08:46:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dongcp\\",\\"url\\":\\"https://github.com/simeis147\\"}]}"]]},"headers":[{"level":2,"title":"相关题目推荐","slug":"相关题目推荐","link":"#相关题目推荐","children":[]},{"level":2,"title":"写法","slug":"写法","link":"#写法","children":[]}],"git":{"createdTime":1686732386000,"updatedTime":1686732386000,"contributors":[{"name":"simeis147","email":"cpdong7@gmail.com","commits":1}]},"readingTime":{"minutes":0.37,"words":112},"filePathRelative":"ComputerBasics/Algorithm/02LinkedList/linkedlist08.md","localizedDate":"2023年6月15日","excerpt":"\\n<h2>相关题目推荐</h2>\\n<p><a href=\\"https://leetcode.cn/problems/linked-list-cycle-ii/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">142.环形链表II</a></p>\\n<h2>写法</h2>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Solution</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">ListNode</span> <span class=\\"token function\\">detectCycle</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">ListNode</span> head<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\">ListNode</span> slow <span class=\\"token operator\\">=</span> head<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token class-name\\">ListNode</span> fast <span class=\\"token operator\\">=</span> head<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span>fast <span class=\\"token operator\\">!=</span> <span class=\\"token keyword\\">null</span> <span class=\\"token operator\\">&amp;&amp;</span> fast<span class=\\"token punctuation\\">.</span>next <span class=\\"token operator\\">!=</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            slow <span class=\\"token operator\\">=</span> slow<span class=\\"token punctuation\\">.</span>next<span class=\\"token punctuation\\">;</span>\\n            fast <span class=\\"token operator\\">=</span> fast<span class=\\"token punctuation\\">.</span>next<span class=\\"token punctuation\\">.</span>next<span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>slow <span class=\\"token operator\\">==</span> fast<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span><span class=\\"token comment\\">// 有环</span>\\n                <span class=\\"token class-name\\">ListNode</span> index1 <span class=\\"token operator\\">=</span> fast<span class=\\"token punctuation\\">;</span>\\n                <span class=\\"token class-name\\">ListNode</span> index2 <span class=\\"token operator\\">=</span> head<span class=\\"token punctuation\\">;</span>\\n                <span class=\\"token comment\\">// 两个指针，从头结点和相遇结点，各走一步，直到相遇，相遇点即为环入口</span>\\n                <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span>index1 <span class=\\"token operator\\">!=</span> index2<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                    index1 <span class=\\"token operator\\">=</span> index1<span class=\\"token punctuation\\">.</span>next<span class=\\"token punctuation\\">;</span>\\n                    index2 <span class=\\"token operator\\">=</span> index2<span class=\\"token punctuation\\">.</span>next<span class=\\"token punctuation\\">;</span>\\n                <span class=\\"token punctuation\\">}</span>\\n                <span class=\\"token keyword\\">return</span> index1<span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>","autoDesc":true}');export{d as comp,k as data};
