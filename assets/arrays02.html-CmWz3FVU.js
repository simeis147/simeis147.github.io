import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,a as e}from"./app-BZhYnKGs.js";const t={},p=e(`<h1 id="二分法" tabindex="-1"><a class="header-anchor" href="#二分法"><span>二分法</span></a></h1><p>O(logn)</p><h2 id="相关题目推荐" tabindex="-1"><a class="header-anchor" href="#相关题目推荐"><span>相关题目推荐</span></a></h2><ul><li><a href="https://leetcode.cn/problems/binary-search/" target="_blank" rel="noopener noreferrer">704. 二分查找</a></li><li><a href="https://leetcode.cn/problems/search-insert-position/" target="_blank" rel="noopener noreferrer">35. 搜索插入位置</a></li><li><a href="https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/" target="_blank" rel="noopener noreferrer">34. 在排序数组中查找元素的第一个和最后一个位置</a></li><li><a href="https://leetcode.cn/problems/sqrtx/" target="_blank" rel="noopener noreferrer">69. x 的平方根</a></li><li><a href="https://leetcode.cn/problems/valid-perfect-square/" target="_blank" rel="noopener noreferrer">367. 有效的完全平方数</a></li></ul><h2 id="写法" tabindex="-1"><a class="header-anchor" href="#写法"><span>写法</span></a></h2><p><a href="https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/solution/tu-jie-er-fen-zui-qing-xi-yi-dong-de-jia-ddvc/" target="_blank" rel="noopener noreferrer">Y总二分法</a></p><h3 id="代码模板1" tabindex="-1"><a class="header-anchor" href="#代码模板1"><span>代码模板1</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">int</span> <span class="token function">bsearch_1</span><span class="token punctuation">(</span><span class="token keyword">int</span> l<span class="token punctuation">,</span> <span class="token keyword">int</span> r<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;</span> r<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">int</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span>l <span class="token operator">+</span> r<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">check</span><span class="token punctuation">(</span>mid<span class="token punctuation">)</span><span class="token punctuation">)</span> r <span class="token operator">=</span> mid<span class="token punctuation">;</span>
        <span class="token keyword">else</span> l <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> l<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码模板2" tabindex="-1"><a class="header-anchor" href="#代码模板2"><span>代码模板2</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">int</span> <span class="token function">bsearch_2</span><span class="token punctuation">(</span><span class="token keyword">int</span> l<span class="token punctuation">,</span> <span class="token keyword">int</span> r<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;</span> r<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">int</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span> l <span class="token operator">+</span> r <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">)</span> <span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">check</span><span class="token punctuation">(</span>mid<span class="token punctuation">)</span><span class="token punctuation">)</span> l <span class="token operator">=</span> mid<span class="token punctuation">;</span>
        <span class="token keyword">else</span> r <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> l<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="版本一-左闭右闭区间" tabindex="-1"><a class="header-anchor" href="#版本一-左闭右闭区间"><span>(版本一) 左闭右闭区间</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">search</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 避免当 target 小于nums[0] nums[nums.length - 1]时多次循环运算</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">||</span> target <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> mid <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span>
                <span class="token keyword">return</span> mid<span class="token punctuation">;</span>
            <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span>
                left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span>
                right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="版本二-左闭右开区间" tabindex="-1"><a class="header-anchor" href="#版本二-左闭右开区间"><span>(版本二) 左闭右开区间</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">search</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> mid <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span>
                <span class="token keyword">return</span> mid<span class="token punctuation">;</span>
            <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span>
                left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span>
                right <span class="token operator">=</span> mid<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),o=[p];function l(c,i){return a(),s("div",null,o)}const k=n(t,[["render",l],["__file","arrays02.html.vue"]]),d=JSON.parse('{"path":"/ComputerBasics/Algorithm/01Arrays/arrays02.html","title":"二分法","lang":"zh-CN","frontmatter":{"order":2,"date":"2023-06-08T00:00:00.000Z","category":["算法","数组"],"description":"二分法 O(logn) 相关题目推荐 704. 二分查找 35. 搜索插入位置 34. 在排序数组中查找元素的第一个和最后一个位置 69. x 的平方根 367. 有效的完全平方数 写法 Y总二分法 代码模板1 代码模板2 (版本一) 左闭右闭区间 (版本二) 左闭右开区间","head":[["meta",{"property":"og:url","content":"https://tech.dongcp.top/ComputerBasics/Algorithm/01Arrays/arrays02.html"}],["meta",{"property":"og:site_name","content":"Simeis 147"}],["meta",{"property":"og:title","content":"二分法"}],["meta",{"property":"og:description","content":"二分法 O(logn) 相关题目推荐 704. 二分查找 35. 搜索插入位置 34. 在排序数组中查找元素的第一个和最后一个位置 69. x 的平方根 367. 有效的完全平方数 写法 Y总二分法 代码模板1 代码模板2 (版本一) 左闭右闭区间 (版本二) 左闭右开区间"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-09T11:42:14.000Z"}],["meta",{"property":"article:author","content":"Dongcp"}],["meta",{"property":"article:published_time","content":"2023-06-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-09T11:42:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"二分法\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-08T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-09T11:42:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dongcp\\",\\"url\\":\\"https://github.com/simeis147\\"}]}"]]},"headers":[{"level":2,"title":"相关题目推荐","slug":"相关题目推荐","link":"#相关题目推荐","children":[]},{"level":2,"title":"写法","slug":"写法","link":"#写法","children":[{"level":3,"title":"代码模板1","slug":"代码模板1","link":"#代码模板1","children":[]},{"level":3,"title":"代码模板2","slug":"代码模板2","link":"#代码模板2","children":[]},{"level":3,"title":"(版本一) 左闭右闭区间","slug":"版本一-左闭右闭区间","link":"#版本一-左闭右闭区间","children":[]},{"level":3,"title":"(版本二) 左闭右开区间","slug":"版本二-左闭右开区间","link":"#版本二-左闭右开区间","children":[]}]}],"git":{"createdTime":1686218786000,"updatedTime":1686310934000,"contributors":[{"name":"simeis147","email":"cpdong7@gmail.com","commits":1}]},"readingTime":{"minutes":1.1,"words":330},"filePathRelative":"ComputerBasics/Algorithm/01Arrays/arrays02.md","localizedDate":"2023年6月8日","excerpt":"\\n<p>O(logn)</p>\\n<h2>相关题目推荐</h2>\\n<ul>\\n<li><a href=\\"https://leetcode.cn/problems/binary-search/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">704. 二分查找</a></li>\\n<li><a href=\\"https://leetcode.cn/problems/search-insert-position/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">35. 搜索插入位置</a></li>\\n<li><a href=\\"https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">34. 在排序数组中查找元素的第一个和最后一个位置</a></li>\\n<li><a href=\\"https://leetcode.cn/problems/sqrtx/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">69. x 的平方根</a></li>\\n<li><a href=\\"https://leetcode.cn/problems/valid-perfect-square/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">367. 有效的完全平方数</a></li>\\n</ul>","autoDesc":true}');export{k as comp,d as data};