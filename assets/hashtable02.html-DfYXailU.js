import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,a as n}from"./app-n7-iX-IR.js";const t={},l=n(`<h1 id="有效的字母异位词" tabindex="-1"><a class="header-anchor" href="#有效的字母异位词"><span>有效的字母异位词</span></a></h1><p><a href="https://leetcode.cn/problems/valid-anagram/description/" target="_blank" rel="noopener noreferrer">242.有效的字母异位词</a></p><h2 id="相关题目推荐" tabindex="-1"><a class="header-anchor" href="#相关题目推荐"><span>相关题目推荐</span></a></h2><p><a href="https://leetcode.cn/problems/ransom-note/description/" target="_blank" rel="noopener noreferrer">383.赎金信</a><br><a href="https://leetcode.cn/problems/group-anagrams/description/" target="_blank" rel="noopener noreferrer">49. 字母异位词分组</a><br><a href="https://leetcode.cn/problems/find-all-anagrams-in-a-string/description/" target="_blank" rel="noopener noreferrer">438.找到字符串中所有字母异位词</a></p><h2 id="写法" tabindex="-1"><a class="header-anchor" href="#写法"><span>写法</span></a></h2><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> * 242. 有效的字母异位词 字典解法</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> * 时间复杂度O(m+n) 空间复杂度O(1)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Solution</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> boolean</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> isAnagram</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> s</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> t</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">record</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">26</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> s</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(); i</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            record[</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">s</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">charAt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(i) </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">            // 并不需要记住字符a的ASCII，只要求出一个相对数值就可以了</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> t</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(); i</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            record[</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">t</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">charAt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(i) </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> count</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> record) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (count </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) { </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">                // record数组如果有的元素不为零0，说明字符串s和t 一定是谁多了字符或者谁少了字符。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">                return</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        // record数组所有元素都为零0，说明字符串s和t是字母异位词</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),e=[l];function h(k,p){return a(),s("div",null,e)}const c=i(t,[["render",h],["__file","hashtable02.html.vue"]]),g=JSON.parse('{"path":"/ComputerBasics/Algorithm/03HashTable/hashtable02.html","title":"有效的字母异位词","lang":"zh-CN","frontmatter":{"order":2,"date":"2024-03-01T00:00:00.000Z","category":["算法","哈希表"],"description":"有效的字母异位词 242.有效的字母异位词 相关题目推荐 383.赎金信 49. 字母异位词分组 438.找到字符串中所有字母异位词 写法","head":[["meta",{"property":"og:url","content":"https://tech.dongcp.top/ComputerBasics/Algorithm/03HashTable/hashtable02.html"}],["meta",{"property":"og:site_name","content":"Simeis 147"}],["meta",{"property":"og:title","content":"有效的字母异位词"}],["meta",{"property":"og:description","content":"有效的字母异位词 242.有效的字母异位词 相关题目推荐 383.赎金信 49. 字母异位词分组 438.找到字符串中所有字母异位词 写法"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-05T00:13:04.000Z"}],["meta",{"property":"article:published_time","content":"2024-03-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-05T00:13:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"有效的字母异位词\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-05T00:13:04.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"相关题目推荐","slug":"相关题目推荐","link":"#相关题目推荐","children":[]},{"level":2,"title":"写法","slug":"写法","link":"#写法","children":[]}],"git":{"createdTime":1709260669000,"updatedTime":1709597584000,"contributors":[{"name":"simeis147","email":"cpdong7@gmail.com","commits":2}]},"readingTime":{"minutes":0.82,"words":246},"filePathRelative":"ComputerBasics/Algorithm/03HashTable/hashtable02.md","localizedDate":"2024年3月1日","excerpt":"","autoDesc":true}');export{c as comp,g as data};
