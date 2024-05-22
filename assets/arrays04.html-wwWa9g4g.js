import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,a as e}from"./app-CakjcGtq.js";const t={},p=e(`<h1 id="滑动窗口" tabindex="-1"><a class="header-anchor" href="#滑动窗口"><span>滑动窗口</span></a></h1><h2 id="相关题目推荐" tabindex="-1"><a class="header-anchor" href="#相关题目推荐"><span>相关题目推荐</span></a></h2><ul><li><a href="https://leetcode.cn/problems/minimum-size-subarray-sum/" target="_blank" rel="noopener noreferrer">209. 长度最小的子数组</a></li><li><a href="https://leetcode.cn/problems/fruit-into-baskets/" target="_blank" rel="noopener noreferrer">904. 水果成篮</a></li><li><a href="https://leetcode.cn/problems/minimum-window-substring/" target="_blank" rel="noopener noreferrer">76. 最小覆盖子串</a></li></ul><h2 id="写法" tabindex="-1"><a class="header-anchor" href="#写法"><span>写法</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>

    <span class="token comment">// 滑动窗口</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">minSubArrayLen</span><span class="token punctuation">(</span><span class="token keyword">int</span> s<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> right <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> right<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sum <span class="token operator">+=</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>sum <span class="token operator">&gt;=</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                result <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> right <span class="token operator">-</span> left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                sum <span class="token operator">-=</span> nums<span class="token punctuation">[</span>left<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> result <span class="token operator">==</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[p];function r(l,c){return a(),s("div",null,o)}const m=n(t,[["render",r],["__file","arrays04.html.vue"]]),d=JSON.parse('{"path":"/ComputerBasics/Algorithm/01Arrays/arrays04.html","title":"滑动窗口","lang":"zh-CN","frontmatter":{"order":4,"date":"2023-06-09T00:00:00.000Z","category":["算法","数组"],"description":"滑动窗口 相关题目推荐 209. 长度最小的子数组 904. 水果成篮 76. 最小覆盖子串 写法","head":[["meta",{"property":"og:url","content":"https://tech.dongcp.top/ComputerBasics/Algorithm/01Arrays/arrays04.html"}],["meta",{"property":"og:site_name","content":"Simeis 147"}],["meta",{"property":"og:title","content":"滑动窗口"}],["meta",{"property":"og:description","content":"滑动窗口 相关题目推荐 209. 长度最小的子数组 904. 水果成篮 76. 最小覆盖子串 写法"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-09T11:42:14.000Z"}],["meta",{"property":"article:author","content":"Dongcp"}],["meta",{"property":"article:published_time","content":"2023-06-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-09T11:42:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"滑动窗口\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-09T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-09T11:42:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dongcp\\",\\"url\\":\\"https://github.com/simeis147\\"}]}"]]},"headers":[{"level":2,"title":"相关题目推荐","slug":"相关题目推荐","link":"#相关题目推荐","children":[]},{"level":2,"title":"写法","slug":"写法","link":"#写法","children":[]}],"git":{"createdTime":1686303133000,"updatedTime":1686310934000,"contributors":[{"name":"simeis147","email":"cpdong7@gmail.com","commits":1}]},"readingTime":{"minutes":0.36,"words":108},"filePathRelative":"ComputerBasics/Algorithm/01Arrays/arrays04.md","localizedDate":"2023年6月9日","excerpt":"\\n<h2>相关题目推荐</h2>\\n<ul>\\n<li><a href=\\"https://leetcode.cn/problems/minimum-size-subarray-sum/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">209. 长度最小的子数组</a></li>\\n<li><a href=\\"https://leetcode.cn/problems/fruit-into-baskets/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">904. 水果成篮</a></li>\\n<li><a href=\\"https://leetcode.cn/problems/minimum-window-substring/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">76. 最小覆盖子串</a></li>\\n</ul>","autoDesc":true}');export{m as comp,d as data};
