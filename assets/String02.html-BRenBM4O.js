import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,a as t}from"./app-BZhYnKGs.js";const p={},o=t(`<h1 id="反转字符串ii" tabindex="-1"><a class="header-anchor" href="#反转字符串ii"><span>反转字符串II</span></a></h1><p><a href="https://leetcode.cn/problems/reverse-string-ii/" target="_blank" rel="noopener noreferrer">541. 反转字符串II</a></p><h2 id="写法" tabindex="-1"><a class="header-anchor" href="#写法"><span>写法</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//解法一</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">reverseStr</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">StringBuffer</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> length <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;</span> length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 找到k处和2k处</span>
            <span class="token class-name">StringBuffer</span> temp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 与length进行判断，如果大于length了，那就将其置为length</span>
            <span class="token keyword">int</span> firstK <span class="token operator">=</span> <span class="token punctuation">(</span>start <span class="token operator">+</span> k <span class="token operator">&gt;</span> length<span class="token punctuation">)</span> <span class="token operator">?</span> length <span class="token operator">:</span> start <span class="token operator">+</span> k<span class="token punctuation">;</span>
            <span class="token keyword">int</span> secondK <span class="token operator">=</span> <span class="token punctuation">(</span>start <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> k<span class="token punctuation">)</span> <span class="token operator">&gt;</span> length<span class="token punctuation">)</span> <span class="token operator">?</span> length <span class="token operator">:</span> start <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//无论start所处位置，至少会反转一次</span>
            temp<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> firstK<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            res<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>temp<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 如果firstK到secondK之间有元素，这些元素直接放入res里即可。</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>firstK <span class="token operator">&lt;</span> secondK<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//此时剩余长度一定大于k。</span>
                res<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>firstK<span class="token punctuation">,</span> secondK<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            start <span class="token operator">+=</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//解法二（似乎更容易理解点）</span>
<span class="token comment">//题目的意思其实概括为 每隔2k个反转前k个，尾数不够k个时候全部反转</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">reverseStr</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ch <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> ch<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">2</span> <span class="token operator">*</span> k<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">int</span> start <span class="token operator">=</span> i<span class="token punctuation">;</span>
            <span class="token comment">//这里是判断尾数够不够k个来取决end指针的位置</span>
            <span class="token keyword">int</span> end <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>ch<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> start <span class="token operator">+</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//用异或运算反转 </span>
            <span class="token keyword">while</span><span class="token punctuation">(</span>start <span class="token operator">&lt;</span> end<span class="token punctuation">)</span><span class="token punctuation">{</span>
                ch<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">^=</span> ch<span class="token punctuation">[</span>end<span class="token punctuation">]</span><span class="token punctuation">;</span>
                ch<span class="token punctuation">[</span>end<span class="token punctuation">]</span> <span class="token operator">^=</span> ch<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">;</span>
                ch<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">^=</span> ch<span class="token punctuation">[</span>end<span class="token punctuation">]</span><span class="token punctuation">;</span>
                start<span class="token operator">++</span><span class="token punctuation">;</span>
                end<span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// 解法二还可以用temp来交换数值，会的人更多些</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">reverseStr</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ch <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> ch<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i <span class="token operator">+=</span> <span class="token number">2</span> <span class="token operator">*</span> k<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">int</span> start <span class="token operator">=</span> i<span class="token punctuation">;</span>
            <span class="token comment">// 判断尾数够不够k个来取决end指针的位置</span>
            <span class="token keyword">int</span> end <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>ch<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span>start <span class="token operator">+</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span><span class="token punctuation">(</span>start <span class="token operator">&lt;</span> end<span class="token punctuation">)</span><span class="token punctuation">{</span>
                
                <span class="token keyword">char</span> temp <span class="token operator">=</span> ch<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">;</span>
                ch<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">=</span> ch<span class="token punctuation">[</span>end<span class="token punctuation">]</span><span class="token punctuation">;</span>
                ch<span class="token punctuation">[</span>end<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>

                start<span class="token operator">++</span><span class="token punctuation">;</span>
                end<span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),e=[o];function c(l,u){return a(),s("div",null,e)}const r=n(p,[["render",c],["__file","String02.html.vue"]]),d=JSON.parse('{"path":"/ComputerBasics/Algorithm/04String/String02.html","title":"反转字符串II","lang":"zh-CN","frontmatter":{"order":2,"date":"2024-03-02T00:00:00.000Z","category":["算法","字符串"],"description":"反转字符串II 541. 反转字符串II 写法","head":[["meta",{"property":"og:url","content":"https://tech.dongcp.top/ComputerBasics/Algorithm/04String/String02.html"}],["meta",{"property":"og:site_name","content":"Simeis 147"}],["meta",{"property":"og:title","content":"反转字符串II"}],["meta",{"property":"og:description","content":"反转字符串II 541. 反转字符串II 写法"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-05T00:13:04.000Z"}],["meta",{"property":"article:author","content":"Dongcp"}],["meta",{"property":"article:published_time","content":"2024-03-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-05T00:13:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"反转字符串II\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-02T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-05T00:13:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dongcp\\",\\"url\\":\\"https://github.com/simeis147\\"}]}"]]},"headers":[{"level":2,"title":"写法","slug":"写法","link":"#写法","children":[]}],"git":{"createdTime":1709532584000,"updatedTime":1709597584000,"contributors":[{"name":"simeis147","email":"cpdong7@gmail.com","commits":2}]},"readingTime":{"minutes":1.31,"words":394},"filePathRelative":"ComputerBasics/Algorithm/04String/String02.md","localizedDate":"2024年3月2日","excerpt":"\\n<p><a href=\\"https://leetcode.cn/problems/reverse-string-ii/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">541. 反转字符串II</a></p>\\n<h2>写法</h2>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token comment\\">//解法一</span>\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Solution</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">String</span> <span class=\\"token function\\">reverseStr</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span> s<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">int</span> k<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\">StringBuffer</span> res <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">StringBuffer</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">int</span> length <span class=\\"token operator\\">=</span> s<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">length</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">int</span> start <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span>start <span class=\\"token operator\\">&lt;</span> length<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token comment\\">// 找到k处和2k处</span>\\n            <span class=\\"token class-name\\">StringBuffer</span> temp <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">StringBuffer</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token comment\\">// 与length进行判断，如果大于length了，那就将其置为length</span>\\n            <span class=\\"token keyword\\">int</span> firstK <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span>start <span class=\\"token operator\\">+</span> k <span class=\\"token operator\\">&gt;</span> length<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">?</span> length <span class=\\"token operator\\">:</span> start <span class=\\"token operator\\">+</span> k<span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token keyword\\">int</span> secondK <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span>start <span class=\\"token operator\\">+</span> <span class=\\"token punctuation\\">(</span><span class=\\"token number\\">2</span> <span class=\\"token operator\\">*</span> k<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">&gt;</span> length<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">?</span> length <span class=\\"token operator\\">:</span> start <span class=\\"token operator\\">+</span> <span class=\\"token punctuation\\">(</span><span class=\\"token number\\">2</span> <span class=\\"token operator\\">*</span> k<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n            <span class=\\"token comment\\">//无论start所处位置，至少会反转一次</span>\\n            temp<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">append</span><span class=\\"token punctuation\\">(</span>s<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">substring</span><span class=\\"token punctuation\\">(</span>start<span class=\\"token punctuation\\">,</span> firstK<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            res<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">append</span><span class=\\"token punctuation\\">(</span>temp<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">reverse</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n            <span class=\\"token comment\\">// 如果firstK到secondK之间有元素，这些元素直接放入res里即可。</span>\\n            <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>firstK <span class=\\"token operator\\">&lt;</span> secondK<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token comment\\">//此时剩余长度一定大于k。</span>\\n                res<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">append</span><span class=\\"token punctuation\\">(</span>s<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">substring</span><span class=\\"token punctuation\\">(</span>firstK<span class=\\"token punctuation\\">,</span> secondK<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token punctuation\\">}</span>\\n            start <span class=\\"token operator\\">+=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token number\\">2</span> <span class=\\"token operator\\">*</span> k<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token keyword\\">return</span> res<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">toString</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">//解法二（似乎更容易理解点）</span>\\n<span class=\\"token comment\\">//题目的意思其实概括为 每隔2k个反转前k个，尾数不够k个时候全部反转</span>\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Solution</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">String</span> <span class=\\"token function\\">reverseStr</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span> s<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">int</span> k<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">char</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> ch <span class=\\"token operator\\">=</span> s<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">toCharArray</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">for</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> ch<span class=\\"token punctuation\\">.</span>length<span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">+=</span> <span class=\\"token number\\">2</span> <span class=\\"token operator\\">*</span> k<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">int</span> start <span class=\\"token operator\\">=</span> i<span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token comment\\">//这里是判断尾数够不够k个来取决end指针的位置</span>\\n            <span class=\\"token keyword\\">int</span> end <span class=\\"token operator\\">=</span> <span class=\\"token class-name\\">Math</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">min</span><span class=\\"token punctuation\\">(</span>ch<span class=\\"token punctuation\\">.</span>length <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> start <span class=\\"token operator\\">+</span> k <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token comment\\">//用异或运算反转 </span>\\n            <span class=\\"token keyword\\">while</span><span class=\\"token punctuation\\">(</span>start <span class=\\"token operator\\">&lt;</span> end<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n                ch<span class=\\"token punctuation\\">[</span>start<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">^=</span> ch<span class=\\"token punctuation\\">[</span>end<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n                ch<span class=\\"token punctuation\\">[</span>end<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">^=</span> ch<span class=\\"token punctuation\\">[</span>start<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n                ch<span class=\\"token punctuation\\">[</span>start<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">^=</span> ch<span class=\\"token punctuation\\">[</span>end<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n                start<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">;</span>\\n                end<span class=\\"token operator\\">--</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">(</span>ch<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n\\n<span class=\\"token comment\\">// 解法二还可以用temp来交换数值，会的人更多些</span>\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Solution</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">String</span> <span class=\\"token function\\">reverseStr</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span> s<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">int</span> k<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">char</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> ch <span class=\\"token operator\\">=</span> s<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">toCharArray</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">for</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>i <span class=\\"token operator\\">&lt;</span> ch<span class=\\"token punctuation\\">.</span>length<span class=\\"token punctuation\\">;</span>i <span class=\\"token operator\\">+=</span> <span class=\\"token number\\">2</span> <span class=\\"token operator\\">*</span> k<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">int</span> start <span class=\\"token operator\\">=</span> i<span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token comment\\">// 判断尾数够不够k个来取决end指针的位置</span>\\n            <span class=\\"token keyword\\">int</span> end <span class=\\"token operator\\">=</span> <span class=\\"token class-name\\">Math</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">min</span><span class=\\"token punctuation\\">(</span>ch<span class=\\"token punctuation\\">.</span>length <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span>start <span class=\\"token operator\\">+</span> k <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token keyword\\">while</span><span class=\\"token punctuation\\">(</span>start <span class=\\"token operator\\">&lt;</span> end<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n                \\n                <span class=\\"token keyword\\">char</span> temp <span class=\\"token operator\\">=</span> ch<span class=\\"token punctuation\\">[</span>start<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n                ch<span class=\\"token punctuation\\">[</span>start<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> ch<span class=\\"token punctuation\\">[</span>end<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n                ch<span class=\\"token punctuation\\">[</span>end<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> temp<span class=\\"token punctuation\\">;</span>\\n\\n                start<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">;</span>\\n                end<span class=\\"token operator\\">--</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">(</span>ch<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>","autoDesc":true}');export{r as comp,d as data};