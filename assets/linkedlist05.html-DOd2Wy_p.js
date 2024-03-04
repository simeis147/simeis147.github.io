import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as t,c as p,b as n,d as o,e as c,a as l}from"./app-C07fY5vf.js";const i={},u=n("h1",{id:"两两交换链表中的节点",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#两两交换链表中的节点"},[n("span",null,"两两交换链表中的节点")])],-1),r=n("h2",{id:"相关题目推荐",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目推荐"},[n("span",null,"相关题目推荐")])],-1),d={href:"https://leetcode.cn/problems/swap-nodes-in-pairs/",target:"_blank",rel:"noopener noreferrer"},k=l(`<h2 id="写法" tabindex="-1"><a class="header-anchor" href="#写法"><span>写法</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 递归版本</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">swapPairs</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// base case 退出提交</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> head<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> head<span class="token punctuation">;</span>
        <span class="token comment">// 获取当前节点的下一个节点</span>
        <span class="token class-name">ListNode</span> next <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token comment">// 进行递归</span>
        <span class="token class-name">ListNode</span> newNode <span class="token operator">=</span> <span class="token function">swapPairs</span><span class="token punctuation">(</span>next<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 这里进行交换</span>
        next<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
        head<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>

        <span class="token keyword">return</span> next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">swapPairs</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> dumyhead <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 设置一个虚拟头结点</span>
        dumyhead<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span> <span class="token comment">// 将虚拟头结点指向head，这样方面后面做删除操作</span>
        <span class="token class-name">ListNode</span> cur <span class="token operator">=</span> dumyhead<span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> temp<span class="token punctuation">;</span> <span class="token comment">// 临时节点，保存两个节点后面的节点</span>
        <span class="token class-name">ListNode</span> firstnode<span class="token punctuation">;</span> <span class="token comment">// 临时节点，保存两个节点之中的第一个节点</span>
        <span class="token class-name">ListNode</span> secondnode<span class="token punctuation">;</span> <span class="token comment">// 临时节点，保存两个节点之中的第二个节点</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            temp <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            firstnode <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            secondnode <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            cur<span class="token punctuation">.</span>next <span class="token operator">=</span> secondnode<span class="token punctuation">;</span>       <span class="token comment">// 步骤一</span>
            secondnode<span class="token punctuation">.</span>next <span class="token operator">=</span> firstnode<span class="token punctuation">;</span> <span class="token comment">// 步骤二</span>
            firstnode<span class="token punctuation">.</span>next <span class="token operator">=</span> temp<span class="token punctuation">;</span>      <span class="token comment">// 步骤三</span>
            cur <span class="token operator">=</span> firstnode<span class="token punctuation">;</span> <span class="token comment">// cur移动，准备下一轮交换</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> dumyhead<span class="token punctuation">.</span>next<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function m(v,h){const s=e("ExternalLinkIcon");return t(),p("div",null,[u,r,n("p",null,[n("a",d,[o("24. 两两交换链表中的节点"),c(s)])]),k])}const y=a(i,[["render",m],["__file","linkedlist05.html.vue"]]),g=JSON.parse('{"path":"/ComputerBasics/Algorithm/02LinkedList/linkedlist05.html","title":"两两交换链表中的节点","lang":"zh-CN","frontmatter":{"order":5,"date":"2023-06-14T00:00:00.000Z","category":["算法","链表"],"description":"两两交换链表中的节点 相关题目推荐 24. 两两交换链表中的节点 写法","head":[["meta",{"property":"og:url","content":"https://tech.dongcp.top/ComputerBasics/Algorithm/02LinkedList/linkedlist05.html"}],["meta",{"property":"og:site_name","content":"Simeis 147"}],["meta",{"property":"og:title","content":"两两交换链表中的节点"}],["meta",{"property":"og:description","content":"两两交换链表中的节点 相关题目推荐 24. 两两交换链表中的节点 写法"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-14T08:37:00.000Z"}],["meta",{"property":"article:author","content":"Dongcp"}],["meta",{"property":"article:published_time","content":"2023-06-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-14T08:37:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"两两交换链表中的节点\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-14T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-14T08:37:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dongcp\\",\\"url\\":\\"https://github.com/simeis147\\"}]}"]]},"headers":[{"level":2,"title":"相关题目推荐","slug":"相关题目推荐","link":"#相关题目推荐","children":[]},{"level":2,"title":"写法","slug":"写法","link":"#写法","children":[]}],"git":{"createdTime":1686726771000,"updatedTime":1686731820000,"contributors":[{"name":"simeis147","email":"cpdong7@gmail.com","commits":2}]},"readingTime":{"minutes":0.88,"words":263},"filePathRelative":"ComputerBasics/Algorithm/02LinkedList/linkedlist05.md","localizedDate":"2023年6月14日","excerpt":"\\n<h2>相关题目推荐</h2>\\n<p><a href=\\"https://leetcode.cn/problems/swap-nodes-in-pairs/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">24. 两两交换链表中的节点</a></p>\\n<h2>写法</h2>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token comment\\">// 递归版本</span>\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Solution</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">ListNode</span> <span class=\\"token function\\">swapPairs</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">ListNode</span> head<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token comment\\">// base case 退出提交</span>\\n        <span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>head <span class=\\"token operator\\">==</span> <span class=\\"token keyword\\">null</span> <span class=\\"token operator\\">||</span> head<span class=\\"token punctuation\\">.</span>next <span class=\\"token operator\\">==</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">return</span> head<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token comment\\">// 获取当前节点的下一个节点</span>\\n        <span class=\\"token class-name\\">ListNode</span> next <span class=\\"token operator\\">=</span> head<span class=\\"token punctuation\\">.</span>next<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token comment\\">// 进行递归</span>\\n        <span class=\\"token class-name\\">ListNode</span> newNode <span class=\\"token operator\\">=</span> <span class=\\"token function\\">swapPairs</span><span class=\\"token punctuation\\">(</span>next<span class=\\"token punctuation\\">.</span>next<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token comment\\">// 这里进行交换</span>\\n        next<span class=\\"token punctuation\\">.</span>next <span class=\\"token operator\\">=</span> head<span class=\\"token punctuation\\">;</span>\\n        head<span class=\\"token punctuation\\">.</span>next <span class=\\"token operator\\">=</span> newNode<span class=\\"token punctuation\\">;</span>\\n\\n        <span class=\\"token keyword\\">return</span> next<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span> \\n</code></pre></div>","autoDesc":true}');export{y as comp,g as data};