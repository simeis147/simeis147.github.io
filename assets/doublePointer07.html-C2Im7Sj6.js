import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as e,c as p,b as n,d as o,e as c,a as l}from"./app-C07fY5vf.js";const u={},i=n("h1",{id:"链表相交",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#链表相交"},[n("span",null,"链表相交")])],-1),r={href:"https://leetcode.cn/problems/intersection-of-two-linked-lists-lcci/",target:"_blank",rel:"noopener noreferrer"},k=l(`<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">getIntersectionNode</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> headA<span class="token punctuation">,</span> <span class="token class-name">ListNode</span> headB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> curA <span class="token operator">=</span> headA<span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> curB <span class="token operator">=</span> headB<span class="token punctuation">;</span>
        <span class="token keyword">int</span> lenA <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> lenB <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>curA <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 求链表A的长度</span>
            lenA<span class="token operator">++</span><span class="token punctuation">;</span>
            curA <span class="token operator">=</span> curA<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>curB <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 求链表B的长度</span>
            lenB<span class="token operator">++</span><span class="token punctuation">;</span>
            curB <span class="token operator">=</span> curB<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        curA <span class="token operator">=</span> headA<span class="token punctuation">;</span>
        curB <span class="token operator">=</span> headB<span class="token punctuation">;</span>
        <span class="token comment">// 让curA为最长链表的头，lenA为其长度</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>lenB <span class="token operator">&gt;</span> lenA<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//1. swap (lenA, lenB);</span>
            <span class="token keyword">int</span> tmpLen <span class="token operator">=</span> lenA<span class="token punctuation">;</span>
            lenA <span class="token operator">=</span> lenB<span class="token punctuation">;</span>
            lenB <span class="token operator">=</span> tmpLen<span class="token punctuation">;</span>
            <span class="token comment">//2. swap (curA, curB);</span>
            <span class="token class-name">ListNode</span> tmpNode <span class="token operator">=</span> curA<span class="token punctuation">;</span>
            curA <span class="token operator">=</span> curB<span class="token punctuation">;</span>
            curB <span class="token operator">=</span> tmpNode<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 求长度差</span>
        <span class="token keyword">int</span> gap <span class="token operator">=</span> lenA <span class="token operator">-</span> lenB<span class="token punctuation">;</span>
        <span class="token comment">// 让curA和curB在同一起点上（末尾位置对齐）</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>gap<span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            curA <span class="token operator">=</span> curA<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 遍历curA 和 curB，遇到相同则直接返回</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>curA <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>curA <span class="token operator">==</span> curB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> curA<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            curA <span class="token operator">=</span> curA<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            curB <span class="token operator">=</span> curB<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function d(m,v){const s=t("ExternalLinkIcon");return e(),p("div",null,[i,n("p",null,[n("a",r,[o("面试题 02.07. 链表相交"),c(s)])]),k])}const h=a(u,[["render",d],["__file","doublePointer07.html.vue"]]),B=JSON.parse('{"path":"/ComputerBasics/Algorithm/05DoublePointer/doublePointer07.html","title":"链表相交","lang":"zh-CN","frontmatter":{"order":7,"date":"2024-03-04T00:00:00.000Z","category":["算法","双指针"],"description":"链表相交 面试题 02.07. 链表相交","head":[["meta",{"property":"og:url","content":"https://tech.dongcp.top/ComputerBasics/Algorithm/05DoublePointer/doublePointer07.html"}],["meta",{"property":"og:site_name","content":"Simeis 147"}],["meta",{"property":"og:title","content":"链表相交"}],["meta",{"property":"og:description","content":"链表相交 面试题 02.07. 链表相交"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-04T06:09:44.000Z"}],["meta",{"property":"article:author","content":"Dongcp"}],["meta",{"property":"article:published_time","content":"2024-03-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-04T06:09:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"链表相交\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-04T06:09:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dongcp\\",\\"url\\":\\"https://github.com/simeis147\\"}]}"]]},"headers":[],"git":{"createdTime":1709532584000,"updatedTime":1709532584000,"contributors":[{"name":"simeis147","email":"cpdong7@gmail.com","commits":1}]},"readingTime":{"minutes":0.62,"words":185},"filePathRelative":"ComputerBasics/Algorithm/05DoublePointer/doublePointer07.md","localizedDate":"2024年3月4日","excerpt":"\\n<p><a href=\\"https://leetcode.cn/problems/intersection-of-two-linked-lists-lcci/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">面试题 02.07. 链表相交</a></p>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Solution</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">ListNode</span> <span class=\\"token function\\">getIntersectionNode</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">ListNode</span> headA<span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">ListNode</span> headB<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\">ListNode</span> curA <span class=\\"token operator\\">=</span> headA<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token class-name\\">ListNode</span> curB <span class=\\"token operator\\">=</span> headB<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">int</span> lenA <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> lenB <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span>curA <span class=\\"token operator\\">!=</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token comment\\">// 求链表A的长度</span>\\n            lenA<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">;</span>\\n            curA <span class=\\"token operator\\">=</span> curA<span class=\\"token punctuation\\">.</span>next<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span>curB <span class=\\"token operator\\">!=</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token comment\\">// 求链表B的长度</span>\\n            lenB<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">;</span>\\n            curB <span class=\\"token operator\\">=</span> curB<span class=\\"token punctuation\\">.</span>next<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        curA <span class=\\"token operator\\">=</span> headA<span class=\\"token punctuation\\">;</span>\\n        curB <span class=\\"token operator\\">=</span> headB<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token comment\\">// 让curA为最长链表的头，lenA为其长度</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>lenB <span class=\\"token operator\\">&gt;</span> lenA<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token comment\\">//1. swap (lenA, lenB);</span>\\n            <span class=\\"token keyword\\">int</span> tmpLen <span class=\\"token operator\\">=</span> lenA<span class=\\"token punctuation\\">;</span>\\n            lenA <span class=\\"token operator\\">=</span> lenB<span class=\\"token punctuation\\">;</span>\\n            lenB <span class=\\"token operator\\">=</span> tmpLen<span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token comment\\">//2. swap (curA, curB);</span>\\n            <span class=\\"token class-name\\">ListNode</span> tmpNode <span class=\\"token operator\\">=</span> curA<span class=\\"token punctuation\\">;</span>\\n            curA <span class=\\"token operator\\">=</span> curB<span class=\\"token punctuation\\">;</span>\\n            curB <span class=\\"token operator\\">=</span> tmpNode<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token comment\\">// 求长度差</span>\\n        <span class=\\"token keyword\\">int</span> gap <span class=\\"token operator\\">=</span> lenA <span class=\\"token operator\\">-</span> lenB<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token comment\\">// 让curA和curB在同一起点上（末尾位置对齐）</span>\\n        <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span>gap<span class=\\"token operator\\">--</span> <span class=\\"token operator\\">&gt;</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            curA <span class=\\"token operator\\">=</span> curA<span class=\\"token punctuation\\">.</span>next<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token comment\\">// 遍历curA 和 curB，遇到相同则直接返回</span>\\n        <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span>curA <span class=\\"token operator\\">!=</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>curA <span class=\\"token operator\\">==</span> curB<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                <span class=\\"token keyword\\">return</span> curA<span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token punctuation\\">}</span>\\n            curA <span class=\\"token operator\\">=</span> curA<span class=\\"token punctuation\\">.</span>next<span class=\\"token punctuation\\">;</span>\\n            curB <span class=\\"token operator\\">=</span> curB<span class=\\"token punctuation\\">.</span>next<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>","autoDesc":true}');export{h as comp,B as data};