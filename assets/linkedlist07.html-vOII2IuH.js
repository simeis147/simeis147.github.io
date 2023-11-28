import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as p,c as o,d as n,e as s,f as c,a as l}from"./app-7rEjMx56.js";const i={},u=n("h1",{id:"链表相交",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#链表相交","aria-hidden":"true"},"#"),s(" 链表相交")],-1),r=n("h2",{id:"相关题目推荐",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目推荐","aria-hidden":"true"},"#"),s(" 相关题目推荐")],-1),d={href:"https://leetcode.cn/problems/intersection-of-two-linked-lists-lcci/",target:"_blank",rel:"noopener noreferrer"},k=l(`<h2 id="写法" tabindex="-1"><a class="header-anchor" href="#写法" aria-hidden="true">#</a> 写法</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function v(m,b){const a=t("ExternalLinkIcon");return p(),o("div",null,[u,r,n("p",null,[n("a",d,[s("面试题 02.07. 链表相交"),c(a)])]),k])}const B=e(i,[["render",v],["__file","linkedlist07.html.vue"]]);export{B as default};
