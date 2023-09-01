import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as t,c as o,d as n,e as s,f as c,b as l}from"./app-9eef3340.js";const i={},u=n("h1",{id:"移除链表元素",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#移除链表元素","aria-hidden":"true"},"#"),s(" 移除链表元素")],-1),r=n("h2",{id:"相关题目推荐",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目推荐","aria-hidden":"true"},"#"),s(" 相关题目推荐")],-1),d={href:"https://leetcode.cn/problems/remove-linked-list-elements/",target:"_blank",rel:"noopener noreferrer"},k=l(`<h2 id="写法" tabindex="-1"><a class="header-anchor" href="#写法" aria-hidden="true">#</a> 写法</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 添加虚节点方式
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * <span class="token keyword">@param</span> <span class="token parameter">head</span>
 * <span class="token keyword">@param</span> <span class="token parameter">val</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">removeElements</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> head<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 因为删除可能涉及到头节点，所以设置dummy节点，统一操作</span>
    <span class="token class-name">ListNode</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> pre <span class="token operator">=</span> dummy<span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> cur <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val <span class="token operator">==</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            pre<span class="token punctuation">.</span>next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * 不添加虚拟节点方式
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * <span class="token keyword">@param</span> <span class="token parameter">head</span>
 * <span class="token keyword">@param</span> <span class="token parameter">val</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">removeElements</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>head <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> head<span class="token punctuation">.</span>val <span class="token operator">==</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 已经为null，提前退出</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> head<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 已确定当前head.val != val</span>
    <span class="token class-name">ListNode</span> pre <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> cur <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val <span class="token operator">==</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            pre<span class="token punctuation">.</span>next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * 不添加虚拟节点and pre Node方式
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * <span class="token keyword">@param</span> <span class="token parameter">head</span>
 * <span class="token keyword">@param</span> <span class="token parameter">val</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">removeElements</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>head<span class="token operator">!=</span><span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> head<span class="token punctuation">.</span>val<span class="token operator">==</span>val<span class="token punctuation">)</span><span class="token punctuation">{</span>
        head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">ListNode</span> curr <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>curr<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>curr<span class="token punctuation">.</span>next<span class="token operator">!=</span><span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> curr<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val <span class="token operator">==</span> val<span class="token punctuation">)</span><span class="token punctuation">{</span>
            curr<span class="token punctuation">.</span>next <span class="token operator">=</span> curr<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        curr <span class="token operator">=</span> curr<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function v(m,b){const a=p("ExternalLinkIcon");return t(),o("div",null,[u,r,n("p",null,[n("a",d,[s("203.移除链表元素"),c(a)])]),k])}const y=e(i,[["render",v],["__file","linkedlist02.html.vue"]]);export{y as default};
