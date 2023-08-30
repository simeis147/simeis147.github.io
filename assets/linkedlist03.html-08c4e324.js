import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as t,c as o,d as n,e as s,f as c,b as i}from"./app-5f94daf7.js";const l={},u=n("h1",{id:"设计链表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#设计链表","aria-hidden":"true"},"#"),s(" 设计链表")],-1),d=n("h2",{id:"相关题目推荐",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目推荐","aria-hidden":"true"},"#"),s(" 相关题目推荐")],-1),k={href:"https://leetcode.cn/problems/design-linked-list/",target:"_blank",rel:"noopener noreferrer"},r=i(`<h2 id="写法" tabindex="-1"><a class="header-anchor" href="#写法" aria-hidden="true">#</a> 写法</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//单链表</span>
<span class="token keyword">class</span> <span class="token class-name">ListNode</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> val<span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> next<span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>val<span class="token operator">=</span>val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">MyLinkedList</span> <span class="token punctuation">{</span>
    <span class="token comment">//size存储链表元素的个数</span>
    <span class="token keyword">int</span> size<span class="token punctuation">;</span>
    <span class="token comment">//虚拟头结点</span>
    <span class="token class-name">ListNode</span> head<span class="token punctuation">;</span>

    <span class="token comment">//初始化链表</span>
    <span class="token keyword">public</span> <span class="token class-name">MyLinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//获取第index个节点的数值，注意index是从0开始的，第0个节点就是头结点</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//如果index非法，返回-1</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">&gt;=</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">ListNode</span> currentNode <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token comment">//包含一个虚拟头节点，所以查找第 index+1 个节点</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> index<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> currentNode<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//在链表最前面插入一个节点，等价于在第0个元素前添加</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addAtHead</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">addAtIndex</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//在链表的最后插入一个节点，等价于在(末尾+1)个元素前添加</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addAtTail</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">addAtIndex</span><span class="token punctuation">(</span>size<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 在第 index 个节点之前插入一个新节点，例如index为0，那么新插入的节点为链表的新头节点。</span>
    <span class="token comment">// 如果 index 等于链表的长度，则说明是新插入的节点为链表的尾结点</span>
    <span class="token comment">// 如果 index 大于链表的长度，则返回空</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addAtIndex</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        size<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token comment">//找到要插入节点的前驱</span>
        <span class="token class-name">ListNode</span> pred <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> index<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            pred <span class="token operator">=</span> pred<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">ListNode</span> toAdd <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        toAdd<span class="token punctuation">.</span>next <span class="token operator">=</span> pred<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        pred<span class="token punctuation">.</span>next <span class="token operator">=</span> toAdd<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//删除第index个节点</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deleteAtIndex</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">&gt;=</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        size<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">ListNode</span> pred <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> index <span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            pred <span class="token operator">=</span> pred<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        pred<span class="token punctuation">.</span>next <span class="token operator">=</span> pred<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//双链表</span>
<span class="token keyword">class</span> <span class="token class-name">ListNode</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> val<span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> next<span class="token punctuation">,</span>prev<span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">class</span> <span class="token class-name">MyLinkedList</span> <span class="token punctuation">{</span>  

    <span class="token comment">//记录链表中元素的数量</span>
    <span class="token keyword">int</span> size<span class="token punctuation">;</span>
    <span class="token comment">//记录链表的虚拟头结点和尾结点</span>
    <span class="token class-name">ListNode</span> head<span class="token punctuation">,</span>tail<span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token class-name">MyLinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//初始化操作</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//这一步非常关键，否则在加入头结点的操作中会出现null.next的错误！！！</span>
        head<span class="token punctuation">.</span>next<span class="token operator">=</span>tail<span class="token punctuation">;</span>
        tail<span class="token punctuation">.</span>prev<span class="token operator">=</span>head<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//判断index是否有效</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>index<span class="token operator">&lt;</span><span class="token number">0</span> <span class="token operator">||</span> index<span class="token operator">&gt;=</span>size<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">ListNode</span> cur <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
        <span class="token comment">//判断是哪一边遍历时间更短</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">&gt;=</span> size <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//tail开始</span>
            cur <span class="token operator">=</span> tail<span class="token punctuation">;</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span> size<span class="token operator">-</span>index<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>prev<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span> index<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span> 
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> cur<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addAtHead</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//等价于在第0个元素前添加</span>
        <span class="token function">addAtIndex</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addAtTail</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//等价于在最后一个元素(null)前添加</span>
        <span class="token function">addAtIndex</span><span class="token punctuation">(</span>size<span class="token punctuation">,</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addAtIndex</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//index大于链表长度</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>index<span class="token operator">&gt;</span>size<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//index小于0</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>index<span class="token operator">&lt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        size<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token comment">//找到前驱</span>
        <span class="token class-name">ListNode</span> pre <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>index<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            pre <span class="token operator">=</span> pre<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//新建结点</span>
        <span class="token class-name">ListNode</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        pre<span class="token punctuation">.</span>next<span class="token punctuation">.</span>prev <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
        newNode<span class="token punctuation">.</span>prev <span class="token operator">=</span> pre<span class="token punctuation">;</span>
        pre<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
        
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deleteAtIndex</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//判断索引是否有效</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>index<span class="token operator">&lt;</span><span class="token number">0</span> <span class="token operator">||</span> index<span class="token operator">&gt;=</span>size<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//删除操作</span>
        size<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> pre <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>index<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            pre <span class="token operator">=</span> pre<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        pre<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">.</span>prev <span class="token operator">=</span> pre<span class="token punctuation">;</span>
        pre<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Your MyLinkedList object will be instantiated and called as such:
 * MyLinkedList obj = new MyLinkedList();
 * int param_1 = obj.get(index);
 * obj.addAtHead(val);
 * obj.addAtTail(val);
 * obj.addAtIndex(index,val);
 * obj.deleteAtIndex(index);
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function v(m,b){const a=e("ExternalLinkIcon");return t(),o("div",null,[u,d,n("p",null,[n("a",k,[s("707.设计链表"),c(a)])]),r])}const x=p(l,[["render",v],["__file","linkedlist03.html.vue"]]);export{x as default};
