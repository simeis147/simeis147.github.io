import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,a as t}from"./app-CakjcGtq.js";const p={},e=t(`<h1 id="赎金信" tabindex="-1"><a class="header-anchor" href="#赎金信"><span>赎金信</span></a></h1><p><a href="https://leetcode.cn/problems/ransom-note/description/" target="_blank" rel="noopener noreferrer">383. 赎金信</a></p><h2 id="写法" tabindex="-1"><a class="header-anchor" href="#写法"><span>写法</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">canConstruct</span><span class="token punctuation">(</span><span class="token class-name">String</span> ransomNote<span class="token punctuation">,</span> <span class="token class-name">String</span> magazine<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// shortcut</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>ransomNote<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> magazine<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 定义一个哈希映射数组</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> record <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">26</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token comment">// 遍历</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">char</span> c <span class="token operator">:</span> magazine<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            record<span class="token punctuation">[</span>c <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">char</span> c <span class="token operator">:</span> ransomNote<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            record<span class="token punctuation">[</span>c <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">]</span> <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token comment">// 如果数组中存在负数，说明ransomNote字符串总存在magazine中没有的字符</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">:</span> record<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[e];function c(l,i){return a(),s("div",null,o)}const k=n(p,[["render",c],["__file","hashtable07.html.vue"]]),d=JSON.parse(`{"path":"/ComputerBasics/Algorithm/03HashTable/hashtable07.html","title":"赎金信","lang":"zh-CN","frontmatter":{"order":7,"date":"2024-03-01T00:00:00.000Z","category":["算法","哈希表"],"description":"赎金信 383. 赎金信 写法","head":[["meta",{"property":"og:url","content":"https://tech.dongcp.top/ComputerBasics/Algorithm/03HashTable/hashtable07.html"}],["meta",{"property":"og:site_name","content":"Simeis 147"}],["meta",{"property":"og:title","content":"赎金信"}],["meta",{"property":"og:description","content":"赎金信 383. 赎金信 写法"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-05T00:13:04.000Z"}],["meta",{"property":"article:author","content":"Dongcp"}],["meta",{"property":"article:published_time","content":"2024-03-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-05T00:13:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"赎金信\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-05T00:13:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dongcp\\",\\"url\\":\\"https://github.com/simeis147\\"}]}"]]},"headers":[{"level":2,"title":"写法","slug":"写法","link":"#写法","children":[]}],"git":{"createdTime":1709272581000,"updatedTime":1709597584000,"contributors":[{"name":"simeis147","email":"cpdong7@gmail.com","commits":2}]},"readingTime":{"minutes":0.38,"words":113},"filePathRelative":"ComputerBasics/Algorithm/03HashTable/hashtable07.md","localizedDate":"2024年3月1日","excerpt":"\\n<p><a href=\\"https://leetcode.cn/problems/ransom-note/description/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">383. 赎金信</a></p>\\n<h2>写法</h2>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Solution</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">boolean</span> <span class=\\"token function\\">canConstruct</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span> ransomNote<span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">String</span> magazine<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token comment\\">// shortcut</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>ransomNote<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">length</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">&gt;</span> magazine<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">length</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">return</span> <span class=\\"token boolean\\">false</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token comment\\">// 定义一个哈希映射数组</span>\\n        <span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> record <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">26</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n\\n        <span class=\\"token comment\\">// 遍历</span>\\n        <span class=\\"token keyword\\">for</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">char</span> c <span class=\\"token operator\\">:</span> magazine<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">toCharArray</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n            record<span class=\\"token punctuation\\">[</span>c <span class=\\"token operator\\">-</span> <span class=\\"token char\\">'a'</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">+=</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n\\n        <span class=\\"token keyword\\">for</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">char</span> c <span class=\\"token operator\\">:</span> ransomNote<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">toCharArray</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n            record<span class=\\"token punctuation\\">[</span>c <span class=\\"token operator\\">-</span> <span class=\\"token char\\">'a'</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">-=</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        \\n        <span class=\\"token comment\\">// 如果数组中存在负数，说明ransomNote字符串总存在magazine中没有的字符</span>\\n        <span class=\\"token keyword\\">for</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i <span class=\\"token operator\\">:</span> record<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>i <span class=\\"token operator\\">&lt;</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n                <span class=\\"token keyword\\">return</span> <span class=\\"token boolean\\">false</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token punctuation\\">}</span>\\n\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>","autoDesc":true}`);export{k as comp,d as data};
