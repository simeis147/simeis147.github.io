import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as p,c as e,b as n,d as o,e as c,a as l}from"./app-C07fY5vf.js";const i={},u=n("h1",{id:"赎金信",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#赎金信"},[n("span",null,"赎金信")])],-1),r={href:"https://leetcode.cn/problems/ransom-note/description/",target:"_blank",rel:"noopener noreferrer"},k=l(`<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function d(m,v){const s=t("ExternalLinkIcon");return p(),e("div",null,[u,n("p",null,[n("a",r,[o("383. 赎金信"),c(s)])]),k])}const y=a(i,[["render",d],["__file","hashtable07.html.vue"]]),g=JSON.parse(`{"path":"/ComputerBasics/Algorithm/03HashTable/hashtable07.html","title":"赎金信","lang":"zh-CN","frontmatter":{"order":7,"date":"2024-03-01T00:00:00.000Z","category":["算法","哈希表"],"description":"赎金信 383. 赎金信","head":[["meta",{"property":"og:url","content":"https://tech.dongcp.top/ComputerBasics/Algorithm/03HashTable/hashtable07.html"}],["meta",{"property":"og:site_name","content":"Simeis 147"}],["meta",{"property":"og:title","content":"赎金信"}],["meta",{"property":"og:description","content":"赎金信 383. 赎金信"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-01T05:56:21.000Z"}],["meta",{"property":"article:author","content":"Dongcp"}],["meta",{"property":"article:published_time","content":"2024-03-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-01T05:56:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"赎金信\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-01T05:56:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dongcp\\",\\"url\\":\\"https://github.com/simeis147\\"}]}"]]},"headers":[],"git":{"createdTime":1709272581000,"updatedTime":1709272581000,"contributors":[{"name":"simeis147","email":"cpdong7@gmail.com","commits":1}]},"readingTime":{"minutes":0.37,"words":111},"filePathRelative":"ComputerBasics/Algorithm/03HashTable/hashtable07.md","localizedDate":"2024年3月1日","excerpt":"\\n<p><a href=\\"https://leetcode.cn/problems/ransom-note/description/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">383. 赎金信</a></p>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Solution</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">boolean</span> <span class=\\"token function\\">canConstruct</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span> ransomNote<span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">String</span> magazine<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token comment\\">// shortcut</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>ransomNote<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">length</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">&gt;</span> magazine<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">length</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">return</span> <span class=\\"token boolean\\">false</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token comment\\">// 定义一个哈希映射数组</span>\\n        <span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> record <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">26</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n\\n        <span class=\\"token comment\\">// 遍历</span>\\n        <span class=\\"token keyword\\">for</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">char</span> c <span class=\\"token operator\\">:</span> magazine<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">toCharArray</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n            record<span class=\\"token punctuation\\">[</span>c <span class=\\"token operator\\">-</span> <span class=\\"token char\\">'a'</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">+=</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n\\n        <span class=\\"token keyword\\">for</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">char</span> c <span class=\\"token operator\\">:</span> ransomNote<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">toCharArray</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n            record<span class=\\"token punctuation\\">[</span>c <span class=\\"token operator\\">-</span> <span class=\\"token char\\">'a'</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">-=</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        \\n        <span class=\\"token comment\\">// 如果数组中存在负数，说明ransomNote字符串总存在magazine中没有的字符</span>\\n        <span class=\\"token keyword\\">for</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i <span class=\\"token operator\\">:</span> record<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>i <span class=\\"token operator\\">&lt;</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n                <span class=\\"token keyword\\">return</span> <span class=\\"token boolean\\">false</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token punctuation\\">}</span>\\n\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>","autoDesc":true}`);export{y as comp,g as data};