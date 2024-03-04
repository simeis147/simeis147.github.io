import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as p,c as o,b as n,d as e,e as c,a as u}from"./app-Bf9DzD39.js";const l={},i=n("h1",{id:"四数之和",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#四数之和"},[n("span",null,"四数之和")])],-1),k={href:"https://leetcode.cn/problems/4sum/",target:"_blank",rel:"noopener noreferrer"},r=u(`<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">fourSum</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>
       
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              
            <span class="token comment">// nums[i] &gt; target 直接返回, 剪枝操作</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> result<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    <span class="token comment">// 对nums[i]去重</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;</span> i <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// 对nums[j]去重</span>
                    <span class="token keyword">continue</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token keyword">int</span> left <span class="token operator">=</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token keyword">int</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&gt;</span> left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// nums[k] + nums[i] + nums[left] + nums[right] &gt; target int会溢出</span>
                    <span class="token keyword">long</span> sum <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        right<span class="token operator">--</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        left<span class="token operator">++</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                        result<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token comment">// 对nums[left]和nums[right]去重</span>
                        <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&gt;</span> left <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>right <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> right<span class="token operator">--</span><span class="token punctuation">;</span>
                        <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&gt;</span> left <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> left<span class="token operator">++</span><span class="token punctuation">;</span>

                        left<span class="token operator">++</span><span class="token punctuation">;</span>
                        right<span class="token operator">--</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function m(d,g){const s=t("ExternalLinkIcon");return p(),o("div",null,[i,n("p",null,[n("a",k,[e("第18题. 四数之和"),c(s)])]),r])}const h=a(l,[["render",m],["__file","doublePointer10.html.vue"]]),y=JSON.parse('{"path":"/ComputerBasics/Algorithm/05DoublePointer/doublePointer10.html","title":"四数之和","lang":"zh-CN","frontmatter":{"order":10,"date":"2024-03-04T00:00:00.000Z","category":["算法","双指针"],"description":"四数之和 第18题. 四数之和","head":[["meta",{"property":"og:url","content":"https://tech.dongcp.top/ComputerBasics/Algorithm/05DoublePointer/doublePointer10.html"}],["meta",{"property":"og:site_name","content":"Simeis 147"}],["meta",{"property":"og:title","content":"四数之和"}],["meta",{"property":"og:description","content":"四数之和 第18题. 四数之和"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-04T06:09:44.000Z"}],["meta",{"property":"article:author","content":"Dongcp"}],["meta",{"property":"article:published_time","content":"2024-03-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-04T06:09:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"四数之和\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-04T06:09:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dongcp\\",\\"url\\":\\"https://github.com/simeis147\\"}]}"]]},"headers":[],"git":{"createdTime":1709532584000,"updatedTime":1709532584000,"contributors":[{"name":"simeis147","email":"cpdong7@gmail.com","commits":1}]},"readingTime":{"minutes":0.67,"words":200},"filePathRelative":"ComputerBasics/Algorithm/05DoublePointer/doublePointer10.md","localizedDate":"2024年3月4日","excerpt":"\\n<p><a href=\\"https://leetcode.cn/problems/4sum/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">第18题. 四数之和</a></p>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Solution</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">List</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">List</span><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Integer</span><span class=\\"token punctuation\\">&gt;</span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token function\\">fourSum</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> nums<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">int</span> target<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\">List</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">List</span><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Integer</span><span class=\\"token punctuation\\">&gt;</span><span class=\\"token punctuation\\">&gt;</span></span> result <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">ArrayList</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token class-name\\">Arrays</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">sort</span><span class=\\"token punctuation\\">(</span>nums<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n       \\n        <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> nums<span class=\\"token punctuation\\">.</span>length<span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n              \\n            <span class=\\"token comment\\">// nums[i] &gt; target 直接返回, 剪枝操作</span>\\n            <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>nums<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">&gt;</span> <span class=\\"token number\\">0</span> <span class=\\"token operator\\">&amp;&amp;</span> nums<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">&gt;</span> target<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                <span class=\\"token keyword\\">return</span> result<span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token punctuation\\">}</span>\\n\\n            <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>i <span class=\\"token operator\\">&gt;</span> <span class=\\"token number\\">0</span> <span class=\\"token operator\\">&amp;&amp;</span> nums<span class=\\"token punctuation\\">[</span>i <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">==</span> nums<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>    <span class=\\"token comment\\">// 对nums[i]去重</span>\\n                <span class=\\"token keyword\\">continue</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token punctuation\\">}</span>\\n            \\n            <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> j <span class=\\"token operator\\">=</span> i <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span> j <span class=\\"token operator\\">&lt;</span> nums<span class=\\"token punctuation\\">.</span>length<span class=\\"token punctuation\\">;</span> j<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\n                <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>j <span class=\\"token operator\\">&gt;</span> i <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span> <span class=\\"token operator\\">&amp;&amp;</span> nums<span class=\\"token punctuation\\">[</span>j <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">==</span> nums<span class=\\"token punctuation\\">[</span>j<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>  <span class=\\"token comment\\">// 对nums[j]去重</span>\\n                    <span class=\\"token keyword\\">continue</span><span class=\\"token punctuation\\">;</span>\\n                <span class=\\"token punctuation\\">}</span>\\n\\n                <span class=\\"token keyword\\">int</span> left <span class=\\"token operator\\">=</span> j <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n                <span class=\\"token keyword\\">int</span> right <span class=\\"token operator\\">=</span> nums<span class=\\"token punctuation\\">.</span>length <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n                <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span>right <span class=\\"token operator\\">&gt;</span> left<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                <span class=\\"token comment\\">// nums[k] + nums[i] + nums[left] + nums[right] &gt; target int会溢出</span>\\n                    <span class=\\"token keyword\\">long</span> sum <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">long</span><span class=\\"token punctuation\\">)</span> nums<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">+</span> nums<span class=\\"token punctuation\\">[</span>j<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">+</span> nums<span class=\\"token punctuation\\">[</span>left<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">+</span> nums<span class=\\"token punctuation\\">[</span>right<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n                    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>sum <span class=\\"token operator\\">&gt;</span> target<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                        right<span class=\\"token operator\\">--</span><span class=\\"token punctuation\\">;</span>\\n                    <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>sum <span class=\\"token operator\\">&lt;</span> target<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                        left<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">;</span>\\n                    <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token punctuation\\">{</span>\\n                        result<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">Arrays</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">asList</span><span class=\\"token punctuation\\">(</span>nums<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> nums<span class=\\"token punctuation\\">[</span>j<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> nums<span class=\\"token punctuation\\">[</span>left<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> nums<span class=\\"token punctuation\\">[</span>right<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n                        <span class=\\"token comment\\">// 对nums[left]和nums[right]去重</span>\\n                        <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span>right <span class=\\"token operator\\">&gt;</span> left <span class=\\"token operator\\">&amp;&amp;</span> nums<span class=\\"token punctuation\\">[</span>right<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">==</span> nums<span class=\\"token punctuation\\">[</span>right <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span> right<span class=\\"token operator\\">--</span><span class=\\"token punctuation\\">;</span>\\n                        <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span>right <span class=\\"token operator\\">&gt;</span> left <span class=\\"token operator\\">&amp;&amp;</span> nums<span class=\\"token punctuation\\">[</span>left<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">==</span> nums<span class=\\"token punctuation\\">[</span>left <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span> left<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">;</span>\\n\\n                        left<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">;</span>\\n                        right<span class=\\"token operator\\">--</span><span class=\\"token punctuation\\">;</span>\\n                    <span class=\\"token punctuation\\">}</span>\\n                <span class=\\"token punctuation\\">}</span>\\n            <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token keyword\\">return</span> result<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>","autoDesc":true}');export{h as comp,y as data};
